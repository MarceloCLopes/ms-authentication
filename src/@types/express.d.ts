import { User } from "../models/user.model";

declare module "express-server-static-core" {
  interface Request {
    user?: User;
  }
}
