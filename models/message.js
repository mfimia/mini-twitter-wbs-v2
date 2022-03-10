import mongoose from "mongoose";

const MessageSchema = mongoose.Schema(
  {
    text: {
      type: String,
      required: true,
      maxLength: 144,
      minLength: 1,
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

const Message = mongoose.model("Message", MessageSchema);

export default Message;
