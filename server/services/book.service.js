const { Book } = require("../db/models");
const { Op } = require("sequelize");
class BookService {
  static async getAllBooks() {
    try {
      const book = await Book.findAll({
        order: [["id", "ASC"]],
      });
      return book;
    } catch (error) {
      throw new Error(error.message);
    }
  }
  static async createBook({ title, author, year, user_id, library_id }) {
    try {
      const newBook = await Book.create({
        title,
        author,
        year,
        user_id,
        library_id,
      });
      return newBook;
    } catch (error) {
      throw new Error(error.message);
    }
  }
  static async deleteBookBook(id) {
    try {
      const deletedBook = await Book.destroy({ where: { id } });
      return deletedBook;
    } catch (error) {
      throw new Error(error.message);
    }
  }
  static async updateBook({ title, author, year, user_id, library_id }, id) {
    try {
      const updateBook = await Book.update(
        { title, author, year, user_id, library_id },
        { where: { id } }
      );
      return updateBook;
    } catch (error) {
      throw new Error(error.message);
    }
  }
  static async findByName(name) {
    try {
      const findedBook = await Book.findOne({ where: { name } });
      return findedBook;
    } catch (error) {
      throw new Error(error.message);
    }
  }
  static async findById(id) {
    try {
      console.log(id);
      const findBook = await Book.findOne({ where: { id } });
      return findBook;
    } catch (error) {
      throw new Error(error.message);
    }
  }
  static async findAllBooksByName(name) {
    try {
     console.log(typeof(name));
     
      const book = await Book.findAll({
         where: {
            title: {
              [Op.like]: `%${name}%`,  // Ищем по полю title с использованием оператора LIKE
            },
     
        },
      });
      return book;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

module.exports = BookService;
