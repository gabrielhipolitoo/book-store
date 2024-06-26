const express = require("express");
const router = require("./api/routes/routes");
const chalk = require("chalk");
const cors = require("cors");

const app = express();


app.use(cors());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());
app.use("/api", router);

const port = 3000;

app.listen(port, () => {
  console.log(chalk.blueBright("Servidor ativo", port));
});
