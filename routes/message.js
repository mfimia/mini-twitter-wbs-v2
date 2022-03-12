import express from "express";
import {
  postMessage,
  getMessages,
  getMessageById,
  findMessagesByKeyword,
  deleteMessageById,
} from "../controllers/message";

const router = express.Router();

router.get("/", getMessages);
router.post("/", postMessage);
router.get("/search/:keyword", findMessagesByKeyword);
router.get("/:id", getMessageById);
router.delete("/:id", deleteMessageById);

module.exports = router;
