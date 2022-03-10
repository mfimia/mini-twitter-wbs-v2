import User from "../models/user";

export const meQuery = (req, res) => {
  return console.log("route hit");
};

export const addUser = async (req, res) => {
  try {
    const { username, handle, avatar } = req.body;
    const user = await User.create({ username, handle, avatar });
    console.log(user);
    await res.json(user);
  } catch (error) {
    console.error("add user error");
    res.status(500).send("Error adding user");
  }
};

export const getUsers = async (_, res) => {
  try {
    const users = await User.find({});
    console.log(users);
    await res.json(users);
  } catch (error) {
    console.error("get user error");
    res.status(500).send("Error getting user");
  }
};
