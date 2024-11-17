const { User } = require("../db/models");
const bcrypt = require("bcrypt");

class UserService {
  static async getAllUsers() {
    try {
      const users = await User.findAll({
        order: [["id", "ASC"]],
      });
      return users;
    } catch (error) {
      throw new Error(error.message);
    }
  }
  static async createUser({ name, email, password }) {
    try {
      const newUser = await User.create({
        name,
        email,
        password: await bcrypt.hash(password, 10),
      });
      return newUser;
    } catch (error) {
      throw new Error(error.message);
    }
  }
  static async deleteUser(id) {
    try {
      const deletedUser = await User.destroy({ where: { id } });
      return deletedUser;
    } catch (error) {
      throw new Error(error.message);
    }
  }
  static async updateUser({ name, email, password }, id) {
    try {
      const updatedUser = await User.update(
        { name, email, password: await bcrypt.hash(password, 10) },
        { where: { id } }
      );
      return updatedUser;
    } catch (error) {
      throw new Error(error.message);
    }
  }
  static async findUser(email) {
    try {
      const findedUser = await User.findOne({ where: { email } });
      return findedUser;
    } catch (error) {
      throw new Error(error.message);
    }
  }
  static async findOneUser(id) {
    try {
      console.log(id);
      const findUser = await User.findOne({ where: { id } });
      return findUser;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

module.exports = UserService;
