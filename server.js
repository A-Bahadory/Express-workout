const express = require("express");
const app = express();
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  console.log("here");
  res.render("index", { text: "Hello world" });
});

const userRouter = require("./routes/users");
//in order to link up the suers routes in the sever.js we use app.use()
app.use("/users", userRouter);

app.listen(3000);
