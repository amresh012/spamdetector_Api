import express from "express";
const router = express.Router();
import {
  NewUserRegistration,
  authticateUser,
  getUserProfile,
  markAsSpam,
  searchbyName,
  searchbyPhonenumber,
} from "../Controller/User.Controller.js";
import protect from "../MiddleWares/authenticate.js";

router.route("/").post(NewUserRegistration);
router.post("/login", authticateUser);
router.route("/profile").get(protect, getUserProfile);
router.route("/contacts/spam").post(protect, markAsSpam);
router.route("/search/name/:name").get(protect, searchbyName);
router.route("/search/phone/:phoneNumber").get(protect, searchbyPhonenumber);

export default router;
