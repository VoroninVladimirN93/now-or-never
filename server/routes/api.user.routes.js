const verifyRefreshToken = require("../middleware/verifyRefreshToken");
const router = require("express").Router();

const {
  createUserController,
  deleteUserController,
  getAllUserController,
  updateUserController,
  findOneUserController
} = require("../controllers/UserController.js");

router
  .post("/", createUserController)
  .get("/", getAllUserController)
  .get("/:id", findOneUserController)
  .delete("/:id", deleteUserController)
  .put("/:id", updateUserController)

  

module.exports = router;
