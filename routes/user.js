import express from "express";
import {
  meQuery,
  getUsers,
  addUser,
  findUser,
  getMessagesByUser,
} from "../controllers/user";

const router = express.Router();

router.get("/", getUsers);
router.post("/", addUser);
router.post("/me", meQuery);
router.get("/:id", findUser);
router.get("/:id/messages", getMessagesByUser);

module.exports = router;
