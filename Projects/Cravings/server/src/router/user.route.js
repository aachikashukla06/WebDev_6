import express from "express";
import multer from "multer";
import { EditUserProfile } from "../controller/user.controller.js";
import { AuthProtect } from "../middleware/auth.middleware.js";

const router = express.Router();
const upload = multer( );

router.put("/edit-profile", AuthProtect,upload.single("displayPicture") ,EditUserProfile);

export default router;