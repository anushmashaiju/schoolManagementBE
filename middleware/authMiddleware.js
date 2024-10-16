import jwt from "jsonwebtoken";

const verifyToken = (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) return res.status(401).send("Access denied");

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(400).send("Invalid token");
  }
};

const roleMiddleware = (role) => {
  return (req, res, next) => {
    if (req.user.role !== role) {
      return res.status(403).send("Access denied");
    }
    next();
  };
};

const isAdmin = roleMiddleware("admin");
const isStaff = roleMiddleware("staff");
const isLibrarian = roleMiddleware("librarian");

export { verifyToken, isAdmin, isStaff, isLibrarian };
