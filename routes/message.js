import express from "express";
import {
  postMessage,
  getMessages,
  getMessageById,
} from "../controllers/message";

const router = express.Router();

router.post("/", postMessage);
router.get("/", getMessages);
router.get("/:id", getMessageById);

module.exports = router;
