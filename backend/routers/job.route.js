const { getJobList, getDetailJob } = require("../controllers/jobControllers");
const { isLogin } = require("../middlewares/isLogin");

const router = require("express").Router();

// router.get("/fetch/:page", fetchUsersData);
router.get("/list", isLogin, getJobList);
router.get("/detail/:id", isLogin, getDetailJob);

module.exports = router;
