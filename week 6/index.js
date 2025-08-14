const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
app.use(express.json());

const JWT_SECRET = "ilovenobody";

const users = [];

// { username: "akshay", password: "1234" },
// { username: "john", password: "5678" }

//middleware
function auth(req, res, next) {
  const token = req.headers.token; //jwt generated token
  const decodedInformation = jwt.verify(token, JWT_SECRET);
  if (decodedInformation.username) {
    req.username=decodedInformation.username;
    next();
  } else {
    res.json({
      message: "token invalid",
    });
  }
}

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/public/index.html");
})

app.post("/signup", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  if (username.length < 5 || password.length < 5) {
    res.json({
      message: "your username or password is too short",
    });
    return;
  }

  users.push({
    username: username,
    password: password,
  });
  res.json({
    message: "You have signed up",
  });
  console.log(users);
});

app.post("/signin", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const user = users.find(
    (u) => u.username == username && u.password == password
  );
  // u represents each element from the users array

  if (user) {
    const token = jwt.sign(
      {
        username: username,
      },
      JWT_SECRET
    );
    res.json({
      token: token,
    });
  } else {
    res.status(403).send({
      message: "invalid username or password",
    });
  }
  console.log(users);
});

app.get("/me", auth, (req, res) => {
  const user = users.find((u) => u.username == req.username);
  res.json({
    username: user.username,
    password: user.password,
  });
});

app.listen(3000);
