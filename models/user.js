import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    minLength: 3,
    maxLength: 12,
    match: [/[A-Za-z0-9]/],
  },
  handle: {
    type: String,
    required: true,
    unique: true,
    minLength: 3,
    maxLength: 12,
    match: [/[A-Za-z0-9]/],
  },
  avatar: {
    type: String,
    required: true,
    default:
      "https://th.bing.com/th/id/OIP.sJhiNQZoqAiaGJusJ_M37wHaHa?pid=ImgDet&rs=1",
  },
});

const User = mongoose.model("User", UserSchema);

export default User;
