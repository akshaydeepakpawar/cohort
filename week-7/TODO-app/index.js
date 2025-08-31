const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const SECRET_JWT = "akshay";
const { UserModel, TodoModel } = require("./db");
const mongoose = require("mongoose");
const {z}=require("zod")
const app = express();
app.use(express.json());
mongoose.connect(
  "mongodb+srv://akshay:yepasshe@cluster0.th96dyz.mongodb.net/todo-akshay-786"
);

app.post("/signup", async (req, res) => {
  const requireBody=z.object({
      email:z.email(),
      name:z.string().min(10).max(100),
      password:z.string()
      .min(8, "Password must be at least 8 characters long").max(30,"maximum 30 characters only")
      .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
      .regex(/[a-z]/, "Password must contain at least one lowercase letter")
      .regex(/[0-9]/, "Password must contain at least one number")
      .regex(/[^A-Za-z0-9]/, "Password must contain at least one special character")
  })
  const parsedDataWithSuccess=requireBody.safeParse(req.body);

  if(!parsedDataWithSuccess.success)
  {
    res.json({
      message: "incorrect format",
      error:parsedDataWithSuccess.error
    })
    return
  }

  const { email, password, name } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 5);
    await UserModel.create({
      email: email,
      password: hashedPassword,
      name: name
    });
    res.json({
      message: "you are logged in",
    });
  } catch (error) {
    res.json({
      message: "user already exists",
    });
  }
});
app.post("/signin", async (req, res) => {
  const { email, password } = req.body;
  const user = await UserModel.findOne({
    email: email
  });
  if (!user) {
    res.status(403).json({
      message: "invalid user please signup first",
    });
  }

  const passwordMatch = await bcrypt.compare(password, user.password);

  if (passwordMatch) {
    const token = jwt.sign({ id: user._id }, SECRET_JWT);
    res.json({
      token: token,
    });
  } else {
    res.status(403).json({
      message: "incorrect credentials",
    });
  }
});

function authMiddleware(req, res, next) {
  // read the token from headers
  const token = req.headers["token"];

  if (!token) {
    return res.status(401).json({ error: "No token provided" });
  }
  try {
    const decoded = jwt.verify(token, SECRET_JWT);
    req.userId = decoded.id;
    next();
  } catch (error) {
    return res.status(401).json({
      error: "Invalid token",
    });
  }
}

app.post("/todo", authMiddleware, async (req, res) => {
  try {
    const { title, done } = req.body;

    await TodoModel.create({
      title,
      done,
      userId: req.userId,
    });

    res.json({ message: "your todo is added" });
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: "something went wrong" });
  }
});
app.get("/todos", authMiddleware, async (req, res) => {
  try {
    const todos = await TodoModel.find({ userId: req.userId });
    res.json({ todos });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "something went wrong" });
  }
});

app.listen(3000, () => {
  console.log("app listening on port 3000");
});
