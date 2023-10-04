import express from "express";
import morgan from "morgan";
import cors from "cors";
import todosRouter from "./routes/todos.js";
import userRouter from "./routes/users.js";
import userAuthRouter from "./routes/userAuth.js";
import registerRouter from "./routes/register.js";
import jwtAuth from "./routes/jwtAuth.js";
import dashboard from "./routes/dashboard.js";

import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(
  cors({
    origin: ["http://localhost:5173"],
  })
);

app.use(morgan("dev"));
app.use(express.json());

app.use("/api/todos/", todosRouter);
app.use("/api/users/", userRouter);
app.use("/auth/users", userAuthRouter);

app.use("/register", registerRouter);

app.get("/", (req, res) => {
  res.send("Hello world");
});

// dashboard 
app.use("/dashboard/", dashboard);

app.get('/api/tests/', (req, res) => {
  res.send([
    {id: 1, title: 'test 1'},
    {id: 2, title: 'test 2'},
  ]);
});

app.get('*', (req, res) => {
  res.send('404 Page Not Found');
});


// register and login router 
app.use('/auth', jwtAuth);


const server = app.listen(8081, function () {
  const host = server.address().address;
  const post = server.address().port;

  console.log(`App is listening at http://${host}:${post}`);
});





/*const todos = [
  {id:1, task:"hello", isCompleted: false},
  {id:2, task:"world", isCompleted: true}
]

app.get("/", (req, res) => {
  res.status(200).send(todos);
});*/

