const verifyRefreshToken = require("../middleware/verifyRefreshToken");
const router = require("express").Router();

const {
    createLibraryController,
    deleteLibraryController,
    getAllLibrariesController,
    updateLibraryController,
    findByIdController,
} = require("../controllers/LibraryController");

router
  .post("/", createLibraryController)
  .get("/", getAllLibrariesController)
  .get("/:id", findByIdController)
  .delete("/:id", deleteLibraryController)
  .put("/:id", updateLibraryController)

  

module.exports = router;