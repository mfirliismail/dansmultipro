const {
  getAllUsers,
  createUser,
  updateUser,
  getOneUsers,
  deleteUser,
  validateUser,
} = require("../controllers/usersControllers");
const { isLogin } = require("../middlewares/isLogin");

const router = require("express").Router();

// router.get("/fetch/:page", fetchUsersData);
router.get("/", getAllUsers);
router.post("/create", createUser);
router.put("/update/:id", isLogin, updateUser);
router.get("/details/:id", getOneUsers);
router.delete("/delete/:id", deleteUser);
router.post("/validate", validateUser);

module.exports = router;
