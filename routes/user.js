import express from "express";
import { meQuery, getUsers, addUser } from "../controllers/user";

const router = express.Router();

router.get("/", getUsers);
router.get("/me", meQuery);
router.post("/new", addUser);

module.exports = router;
