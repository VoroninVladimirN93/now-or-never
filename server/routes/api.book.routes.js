


const verifyRefreshToken = require("../middleware/verifyRefreshToken");
const router = require("express").Router();

const {
    createBookController,
    deleteBookBookController,
    getAllBooksController,
    updateBookController,
    findByIdController,
    findAllBooksByNameController,
} = require("../controllers/BookControlles");

router
  .post("/", createBookController)
  .get("/", getAllBooksController)
  .get("/:id", findByIdController)
  .delete("/:id", deleteBookBookController)
  .put("/:id", updateBookController)
  .get("/name/:name", findAllBooksByNameController)

  

module.exports = router;