const router = require("express").Router();
const userRouter = require("./user.route");
const jobRouter = require("./job.route");

router.use("/users", userRouter);
router.use("/job", jobRouter);
module.exports = router;
