const LibraryService = require("../services/library.service");





exports.createLibraryController = async (req, res) => {
  const { address , name, } = req.body;
  try {
    const user = await LibraryService.createLibrary({
        address , name, 
    });
    res.status(201).json({ message: "success", user });
  } catch (error) {
    res.status(500).json({ message: error.message, user: {} });
  }
};

exports.deleteLibraryController = async (req, res) => {
  const { id } = req.params;
  try {
    const countDeleteUserCards = await LibraryService.deleteLibrary(id);
    if (countDeleteUserCards > 0) {
      res.status(200).json({ message: "success" });
    } else {
      res.status(400).json({ message: "Not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getAllLibrariesController = async (req, res) => {
  try {
    const users = await LibraryService.getAllLibraries();
    res.status(200).json({ message: "success", users });
  } catch (error) {
    res.status(500).json({ message: error.message, user: [] });
  }
};

exports.updateLibraryController = async (req, res) => {
  const { id } = req.params;
  try {
    const countUpdate = await LibraryService.updateLibrary(req.body, id);
    res.status(200).json({ message: "success", countUpdate });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.findByIdController = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await LibraryService.findById(id);
    if (!user) {
      return res.status(404).json({ message: "User not found", user: null });
    }
    res.status(200).json({ message: "success", user });
  } catch (error) {
    res.status(500).json({ message: error.message, user: null });
  }
};
