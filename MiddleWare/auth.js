import jwt from "jsonwebtoken";
import UserDB from "../Models/UserModels.js";

export const verifyToken = async (req, res, next) => {
  try {
    const authHeader = req.headers['authorization'];
    if (!authHeader) {
      return res.status(401).json({ message: "Access denied, no token provided" });
    }

    const tokenParts = authHeader.split(" ");
    if (tokenParts[0] !== "Bearer" || !tokenParts[1]) {
      return res.status(401).json({ message: "Access denied, malformed token" });
    }

    const token = tokenParts[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET || process.env.jwt_secret);
    const user = await UserDB.findById(decoded.userId || decoded.id).select("-password");

    if (!user) {
      return res.status(401).json({ message: "Access denied, invalid token" });
    }

    req.user = user;
    next();
  } catch (error) {
    console.error("Authentication error:", error.message);
    res.status(500).json({ message: "Failed to authenticate user" });
  }
};

  
  
 