import {
  Router,
  Request as ExpressRequest,
  Response as ExpressResponse,
  NextFunction as ExpressNextFunction,
} from "express";

const router = Router();

export const apiRouter = () => {
  router.get(
    "/health-check",
    (req: ExpressRequest, res: ExpressResponse, next: ExpressNextFunction) => {
      res.status(200).json({ status: "OK" });
    }
  );

  return router;
};
