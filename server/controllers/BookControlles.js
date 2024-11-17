const BookService = require("../services/book.service");

exports.createBookController = async (req, res) => {
  const { address, name } = req.body;
  try {
    const user = await BookService.createBook({
      address,
      name,
    });
    res.status(201).json({ message: "success", user });
  } catch (error) {
    res.status(500).json({ message: error.message, user: {} });
  }
};

exports.deleteBookBookController = async (req, res) => {
  const { id } = req.params;
  try {
    const countDeleteUserCards = await BookService.deleteBookBook(id);
    if (countDeleteUserCards > 0) {
      res.status(200).json({ message: "success" });
    } else {
      res.status(400).json({ message: "Not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getAllBooksController = async (req, res) => {
  try {
    const users = await BookService.getAllBooks();
    res.status(200).json({ message: "success", users });
  } catch (error) {
    res.status(500).json({ message: error.message, user: [] });
  }
};

exports.updateBookController = async (req, res) => {
  const { id } = req.params;
  try {
    const countUpdate = await BookService.updateBook(req.body, id);
    res.status(200).json({ message: "success", countUpdate });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.findByIdController = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await BookService.findById(id);
    if (!user) {
      return res.status(404).json({ message: "User not found", user: null });
    }
    res.status(200).json({ message: "success", user });
  } catch (error) {
    res.status(500).json({ message: error.message, user: null });
  }
};

exports.findAllBooksByNameController = async (req, res) => {
  try {
    // пример запроса /books/name/:name)
    const { name } = req.params;
    const books = await BookService.findAllBooksByName(name);

    if (!books || books.length === 0) {
      return res.status(404).json({ message: "Books not found", books: [] });
    }

    res.status(200).json({ message: "success", books });
  } catch (error) {
    res.status(500).json({ message: error.message, books: [] });
  }
};
