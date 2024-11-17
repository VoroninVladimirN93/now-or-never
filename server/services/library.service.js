const { Library } = require("../db/models");

class LibraryService {
  static async getAllLibraries() {
    try {
      const library = await Library.findAll({
        order: [["id", "ASC"]],
      });
      return library;
    } catch (error) {
      throw new Error(error.message);
    }
  }
  static async createLibrary({ address , name,}) {
    try {
      const newLibrary = await Library.create({
        address,name,
       

      });
      return newLibrary;
    } catch (error) {
      throw new Error(error.message);
    }
  }
  static async deleteLibrary(id) {
    try {
      const deletedLibrary = await Library.destroy({ where: { id } });
      return deletedLibrary;
    } catch (error) {
      throw new Error(error.message);
    }
  }
  static async updateLibrary({ address , name, }, id) {
    try {
      const updateLibrary = await Library.update(
        { address , name, },
        { where: { id } }
      );
      return updateLibrary;
    } catch (error) {
      throw new Error(error.message);
    }
  }
  static async findByName(name) {
    try {
      const findedLibrary = await Library.findOne({ where: { name } });
      return findedLibrary
    } catch (error) {
      throw new Error(error.message);
    }
  }
  static async findById(id) {
    try {
      console.log(id);
      const findLibrary = await Library.findOne({ where: { id } });
      return findLibrary;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

module.exports = LibraryService;
