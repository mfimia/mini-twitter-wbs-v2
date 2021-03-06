import Message from "../models/message";
import User from "../models/user";

export const postMessage = async (req, res) => {
  try {
    const { text, author } = req.body;

    const user = await User.findById(author);
    if (!user) return res.status(401).send("Not authorized");

    const message = await Message.create({ text, author });

    await res.json(message);
  } catch (error) {
    res.status(500).send("Error posting message");
  }
};

export const getMessages = async (_, res) => {
  try {
    const messages = await Message.find({});

    await res.json(messages);
  } catch (error) {
    res.status(500).send("Error getting messages");
  }
};

export const getMessageById = async (req, res) => {
  try {
    const { id } = req.params;
    const message = await Message.findById(id);

    await res.json(message);
  } catch (error) {
    res.status(500).send("Error getting messages");
  }
};

export const findMessagesByKeyword = async (req, res) => {
  try {
    const { keyword } = req.params;
    const messages = await Message.find({
      text: { $regex: keyword, $options: "$i" },
    });

    await res.json(messages);
  } catch (error) {
    res.status(500).send("Error getting messages");
  }
};

export const deleteMessageById = async (req, res) => {
  try {
    const { id } = req.params;

    const message = await Message.findById(id);
    if (!message) return res.status(404).send("Message not found");

    await Message.findByIdAndDelete(id);

    await res.status(200).send("Message deleted");
  } catch (error) {
    res.status(500).send("Error getting messages");
  }
};
