import jwt from "jsonwebtoken";
import { User } from "../models/User";

async function CheckAuth(token) {
  const decodedData = jwt.verify(token, process.env.JWTSEC);

  const user = await User.findById(decodedData.id);

  return user;
}

export default CheckAuth;
