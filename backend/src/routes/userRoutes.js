const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware/authMiddleware");
const authorizeRoles = require("../middleware/roleMiddleware");

router.get("/customer", verifyToken, authorizeRoles("customer"), (req, res) => {
  res.json({ message: "Welcome customer" });
});

router.get("/provider", verifyToken, authorizeRoles("provider"), (req, res) => {
  res.json({ message: "Welcome provider" });
});

module.exports = router;

