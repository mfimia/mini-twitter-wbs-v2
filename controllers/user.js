import User from "../models/user";
import Message from "../models/message";

export const meQuery = async (req, res) => {
  try {
    const { handle } = req.body;
    const user = await User.find({ handle });

    if (!user) return res.send("User not found");

    const userId = user[0]._id.toString();
    await res.json({ userId });
  } catch (error) {
    console.error("add user error");
    res.status(500).send("Error getting user");
  }
};

export const addUser = async (req, res) => {
  try {
    const { username, handle, avatar } = req.body;
    const user = await User.create({ username, handle, avatar });

    await res.json(user);
  } catch (error) {
    console.error("add user error");
    res.status(500).send("Error adding user");
  }
};

export const getUsers = async (_, res) => {
  try {
    const users = await User.find({});

    await res.json(users);
  } catch (error) {
    console.error("get user error");
    res.status(500).send("Error getting user");
  }
};

export const getMessagesByUser = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findById(id);
    if (!user) return res.status(404).send("User not found");

    const messages = await Message.find({ author: id });

    await res.json(messages);
  } catch (error) {
    res.status(500).send("Error getting messages");
  }
};

export const findUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);

    if (!user) return res.status(404).send("User not found");

    return res.json(user);
  } catch (error) {
    console.error("get user error");
    res.status(500).send("Error getting user");
  }
};
