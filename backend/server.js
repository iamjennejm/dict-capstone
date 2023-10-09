import express from "express";
import morgan from "morgan";
import cors from "cors";
import userAuthRouter from "./routes/userAuth.js";
import registerRouter from "./routes/register.js";

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


app.use("/api/auth", userAuthRouter);
app.use("/api/register", registerRouter);

app.get("/", (req, res) => {
  res.send("Hello world");
});


app.get('/api/tests/', (req, res) => {
  res.send([
    {id: 1, title: 'test 1'},
    {id: 2, title: 'test 2'},
  ]);
});

app.get('*', (req, res) => {
  res.send('404 Page Not Found');
});



const server = app.listen(8081, function () {
  const host = server.address().address;
  const post = server.address().port;

  console.log(`App is listening at http://${host}:${post}`);
});
