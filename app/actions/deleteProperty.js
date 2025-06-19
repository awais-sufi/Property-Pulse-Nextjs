"use server";
import connectDB from "@/config/database";
import cloudinary from "@/config/cloudinary";
import Property from "@/models/Property";
import { getSessionUser } from "@/utils/getSessionUser";
import { revalidatePath } from "next/cache";
async function deleteProperty(propertyId) {
  const sessionUser = await getSessionUser();
  if (!sessionUser || !sessionUser.userId) {
    throw new Error("UserID not Found");
  }
  const { userId } = sessionUser;
  const property = await Property.findById(propertyId);

  if (!property) throw new Error("Property Not Found");

  if (property.owner.toString() !== userId) {
    throw new Error("Unauthorized");
  }
  const publicIds = property.images.map((imageUrls) => {
    const parts = imageUrls.split("/");
    return parts.at(-1).split(".").at(0);
  });
  if (publicIds.length > 0) {
    for (let publicId of publicIds) {
      await cloudinary.uploader.destroy("propertyPulse/" + publicId);
    }
  }

  await property.deleteOne();

  revalidatePath("/", "layout");
}

export default deleteProperty;
