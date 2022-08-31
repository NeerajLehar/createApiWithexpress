const express = require("express");
const {
  getUsers,
  getUser,
  createUser,
  deleteUser,
  updateUser,
} = require("../controllers/user");
const router = express.Router();

// without parameter routes
router.route("/").post(createUser).get(getUsers);
// with parameter routes
router.route("/:id").get(getUser).delete(deleteUser);

module.exports = router;
