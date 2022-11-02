const express = require("express");
const app = express();
const router = require("./routers");
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.use("/", router);

const port_app = process.env.PORT || 3000;
app.listen(port_app, () => console.log("Server listening on port " + port_app));
