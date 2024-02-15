const jwt = require("jsonwebtoken");

const authenticationMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
   return res.status(400).send({ msg: "No token provided"});
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { Email, Name } = decoded
    req.user = {Name , Email}
    next();
  } catch (error) {
    res.status(404).send({ msg: "Not authorized to access this route" });
  }
};

module.exports = authenticationMiddleware

