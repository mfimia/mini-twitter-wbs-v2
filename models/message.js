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

// arrow function does not work with "this" keyword
MessageSchema.pre("find", function () {
  // this is an instance of mongoose.Query
  this.populate("author");
});

const Message = mongoose.model("Message", MessageSchema);

export default Message;
