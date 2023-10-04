import express from "express";
import { z } from "zod";
import camelcaseKeys from "camelcase-keys";
import { sql } from "../db.js";

const todosRouter = express.Router();

const TodoSchema = z.object({
  task: z.string(),
  isCompleted: z.boolean(),
});

const insertJobSeeker = todosRouter.post("/register", async (req, res) => {
    const newUser = req.body;
    const parsedResult = TodoSchema.safeParse(newUser);
  
    if (!parsedResult.success) {
      return res.status(400).send(
        parsedResult.error.errors.map((err) => ({
          field: err.path.join("."),
          message: err.message,
        }))
      );
    }
  
    const [createdTodo] =
      await sql `INSERT INTO users (username, email) VALUES (${newUser.username}, ${newUser.email}) RETURNING *`;
  
    // todos.push(newTodo);
    res.status(201).send(camelcaseKeys(createdTodo));


    /* 
    const { email } = req.body;
    const data = await client.query(`SELECT * FROM user_table WHERE email= ${email}`).then((result) => {
        return result
    })
    if (!data) { // OR if data is an array then use "data.length == 0"
        return res.status(401).json({
            success: false,
            message: "Login authentication failed!"
        })
    }*/
  });
  

/*Users table */
const getUsers = todosRouter.get("/users", async (req, res) => {
  const { id } = req.params;
  const [foundTodo] = await sql`SELECT * FROM users;`;

  if (foundTodo) {
    res.status(200).send(foundTodo);
  } else {
    res.status(404).send("users not found");
  }
});

const insertUser = todosRouter.post("/register", async (req, res) => {
  const newUser = req.body;
  const parsedResult = TodoSchema.safeParse(newUser);

  if (!parsedResult.success) {
    return res.status(400).send(
      parsedResult.error.errors.map((err) => ({
        field: err.path.join("."),
        message: err.message,
      }))
    );
  }

  const [createdTodo] =
    await sql `INSERT INTO users (username, email) VALUES (${newUser.username}, ${newUser.email}) RETURNING *`;

  // todos.push(newTodo);
  res.status(201).send(camelcaseKeys(createdTodo));
});

const updateUser = todosRouter.put("/updateUser/:id", async (req, res) => {
  const { id } = req.params;
  const { task, isCompleted } = req.body;

  const [updatedTodo] = await sql`
    UPDATE  users 
    SET     task = ${task}
            , is_completed = ${isCompleted}
            , updated_at = NOW()
    WHERE   id = ${Number(id)}
    RETURNING *
  `;

  if (updatedTodo) {
    res.status(200).send(updatedTodo);
  } else {
    res.status(404).send("todo not found");
  }
});

const deleteUser = todosRouter.delete("/deleteUser/:id", async (req, res) => {
  const { id } = req.params;

  const [deletedTodo] = await sql`DELETE FROM users WHERE id = ${Number(
    id
  )} RETURNING *`;

  if (deletedTodo) {
    res.status(204).send("");
  } else {
    res.status(404).send("todo not found");
  }
});



export default todosRouter;