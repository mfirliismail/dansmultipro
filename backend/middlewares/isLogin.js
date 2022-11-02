const jwt = require("jsonwebtoken");

module.exports = {
  isLogin: async (req, res, next) => {
    try {
      const token = req.headers.authorization;
      const parseToken = token.split(" ")[1];

      jwt.verify(parseToken, "secret_key", (err, data) => {
        if (err) {
          return res.status(401).json({
            status: "failed",
            message: err.message,
          });
        }

        req.user = data;
        next();
      });
    } catch (error) {
      return res.status(401).json({
        status: "failed",
        message: "Failed Authorization",
      });
    }
  },
};
