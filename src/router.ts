import { Request, Response, Router } from 'express';
import userRouter from "./contoller/user/router";
import { StatusCodes } from './libs/constants';

const router = Router();

router.get("/health-check", (req: Request, res: Response) => {
  res.status(StatusCodes.OK).send("I am OK");
});

router.use("/users", userRouter);

export default router;