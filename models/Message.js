import { model, Schema, models } from "mongoose";

const MessageSchema = new Schema(
  {
    sender: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    recipient: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    property: {
      type: Schema.Types.ObjectId,
      ref: "Property",
      required: true,
    },
    name: {
      type: "String",
      required: [true, "Name is require"],
    },
    email: {
      type: "String",
      required: [true, "Email is require"],
    },
    phone: "String",
    body: "String",
    read: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true, // ✅ Automatically adds createdAt and updatedAt
  }
);

const Message = models.Message || model("Message", MessageSchema);

export default Message;
