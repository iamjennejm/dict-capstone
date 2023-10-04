import express from "express";
import { z } from "zod";
import camelcaseKeys from "camelcase-keys";
import { sql } from "../db.js";

const userRouter = express.Router();

const TodoSchema = z.object({
  task: z.string(),
  isCompleted: z.boolean(),
});

userRouter.get("/:id", async (req, res) => {
  const { id } = req.params;
  const [foundTodo] = await sql`SELECT * FROM users WHERE user_id = ${Number(id)};`;

  if (foundTodo) {
    res.status(200).send(foundTodo);
  } else {
    res.status(404).send("todo not found");
  }
});

userRouter.post("/register", async (req, res) => {
  const newTodo = req.body;
  const parsedResult = TodoSchema.safeParse(newTodo);

  if (!parsedResult.success) {
    return res.status(400).send(
      parsedResult.error.errors.map((err) => ({
        field: err.path.join("."),
        message: err.message,
      }))
    );
  }

  const [createdTodo] =
    await sql `INSERT INTO todos (task, is_completed) VALUES (${newTodo.task}, ${newTodo.isCompleted}) RETURNING *`;

  // todos.push(newTodo);
  res.status(201).send(camelcaseKeys(createdTodo));
});

userRouter.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { task, isCompleted } = req.body;

  const [updatedTodo] = await sql`
    UPDATE  todos 
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

userRouter.delete("/:id", async (req, res) => {
  const { id } = req.params;

  const [deletedTodo] = await sql`DELETE FROM todos WHERE id = ${Number(
    id
  )} RETURNING *`;

  if (deletedTodo) {
    res.status(204).send("");
  } else {
    res.status(404).send("todo not found");
  }
});

export default userRouter;