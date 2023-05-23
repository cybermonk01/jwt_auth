import jwt from "jsonwebtoken";

export const requireSignIn = (req, res, next) => {
  if (req.headers.authorization) {
    const token = req.headers.authorization.split(" ")[1];
    const user = jwt.verify(token, process.env.SECRET_KEY);
    req.user = user;
    console.log(token);
  } else {
    return res.status(400).json({ message: "Authorization required!" });
  }
  // jwt.decode()
  next();
};
