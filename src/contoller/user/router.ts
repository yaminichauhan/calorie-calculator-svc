import { Router } from "express";
import UserController from "./UserController";

const router = Router();

router.route("/").post(UserController.create);

router.route("/").get(UserController.list);

router.route("/").put(UserController.update);


export default router;