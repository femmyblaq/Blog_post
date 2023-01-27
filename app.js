const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "ejs");
let homeContent =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam deleni consectetur adipisicing elit. Quibusdam deleniconsectetur adipisicing elit. Quibusdam deleniconsectetur adipisicing elit. Quibusdam deleniconsectetur adipisicing elit. Quibusdam deleniconsectetur adipisicing elit. Quibusdam deleniconsectetur adipisicing elit. Quibusdam deleni";
let aboutContent =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam deleni consectetur adipisicing elit. Quibusdam deleniconsectetur adipisicing elit. Quibusdam deleniconsectetur adipisicing elit. Quibusdam deleniconsectetur adipisicing elit. Quibusdam deleniconsectetur adipisicing elit. Quibusdam deleniconsectetur adipisicing elit. Quibusdam deleni";

let contactContent =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam deleni consectetur adipisicing elit. Quibusdam deleniconsectetur adipisicing elit. Quibusdam deleniconsectetur adipisicing elit. Quibusdam deleniconsectetur adipisicing elit. Quibusdam deleniconsectetur adipisicing elit. Quibusdam deleniconsectetur adipisicing elit. Quibusdam deleni";

let posts = [];

app.get("/", (req, res) => {
  res.render("home", { homeContent: homeContent, myInputBlogs: posts.title });
});
app.get("/about", (req, res) => {
  res.render("about", { aboutContent: aboutContent });
});
app.get("/contact", (req, res) => {
  res.render("contact", { contactContent: contactContent });
});
app.get("/compose", (req, res) => {
  res.render("compose");
});
app.post("/compose", (req, res) => {
  const blogTitle = req.body.composeTitle;
  const blogPost = req.body.composeText;
  const post = {
    title: blogTitle,
    bodyPost: blogPost,
  };
  posts.push(post);
  res.redirect("/");
});
const port = 3000;
app.listen(port, () => console.log(`Server running at post ${port}`));
