import connectDB from "@/config/database";
import Property from "@/models/Property";
import mongoose from "mongoose";
import PropertyImageHeader from "@/components/PropertyImageHeader";
import PropertyDetail from "@/components/PropertyDetail";
import PropertyImages from "@/components/PropertyImages";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import { convertToSerializableObject } from "@/utils/convertToObject";
import BookmarkButton from "@/components/BookmarkButton";
import ShareButton from "@/components/ShareButton";
import PropertyContactForm from "@/components/PropertyContactForm";

const RoutePage = async ({ params }) => {
  const { id } = await params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return (
      <h1 className="text-center text-2xl font-bold mt-10">
        Invalid Property ID
      </h1>
    );
  }

  await connectDB();
  const propertyDoc = await Property.findById(id).lean();
  const property = convertToSerializableObject(propertyDoc);

  if (!property) {
    return (
      <h1 className="text-center text-2xl font-bold mt-10">
        Property Not Found
      </h1>
    );
  }

  return (
    <>
      <PropertyImageHeader image={property.images[0]} />
      <section>
        <div className="container m-auto py-6 px-6">
          <Link
            href="/properties"
            className="text-blue-500 hover:text-blue-600 flex items-center"
          >
            <FaArrowLeft className="mr-2" /> Back to Properties
          </Link>
        </div>
      </section>

      <section className="bg-blue-50">
        <div className="container m-auto py-10 px-6">
          <div className="grid grid-cols-1 md:grid-cols-[70%_30%] w-full gap-6">
            <PropertyDetail property={property} />
            <aside className="space-y-4">
              <BookmarkButton property={property} />
              <ShareButton property={property} />
              <PropertyContactForm property={property} />
            </aside>
          </div>
        </div>
      </section>
      <PropertyImages images={property.images} />
    </>
  );
};

export default RoutePage;
