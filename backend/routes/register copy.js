import express from "express";
import { z } from "zod";
import camelcaseKeys from "camelcase-keys";
import { sql } from "../db.js";


const registerRouter = express.Router();

/*const person = z.object({
  name: z.string(),
  age: z.number(),
});
const RegisterSchema = z.object({
  username: z.string(),
  password: z.string(),
  email: z.string()
});*/


/*registerRouter.get("/", async (req, res) => {
  const newTodo = req.body;
  const parsedResult = RegisterSchema.safeParse(newTodo);

  if (!parsedResult.success) {
    return res.status(400).send(
      parsedResult.error.errors.map((err) => ({
        field: err.path.join("."),
        message: err.message,
      }))
    );
  }

  const [createdTodo] =
    await sql `INSERT INTO users (email, password) VALUES (${newTodo.task}, ${newTodo.isCompleted}) RETURNING *`;

  //todos.push(newTodo);
  res.status(201).send(camelcaseKeys(createdTodo));
});

registerRouter.get("/:id", async (req, res) => {
  const { id } = req.params;
  const [foundTodo] = await sql`SELECT * FROM todos WHERE id = ${Number(id)};`;

  if (foundTodo) {
    res.status(200).send(foundTodo);
  } else {
    res.status(404).send("todo not found");
  }
}); */

/*registerRouter.post('/', validInfo, async (req, res) => {
  try {

      // destructure the req.body 
      const { username, email, password } = req.body;

      // check if user exists 
      const user = await sql.query("select * from users where email =$1",
          [email]);
      if (user.rows.length !== 0) { return res.status(401).json("user already exists") }


      // bcrypt password 
      const saltRound = 10;
      const salt = await bcrypt.genSalt(saltRound);

      const bcryptPassword = await bcrypt.hash(password, salt);
      console.log(bcryptPassword);

      // save user 
      const newUser = await sql.query("insert into users (username,email,password) values($1,$2,$3) returning *",
          [username, email, bcryptPassword]);

      // generate jwt token 
      const token = jwtGenerator(newUser.rows[0].user_id);
      res.json({ token })

  } catch (err) {
      console.error(err.message);
      res.status(500).send("server error");
  }
}); */

registerRouter.post("/", async (req, res) => {
  const newRegister = req.body;
  const username = newRegister.signupState["username"];
  const email = newRegister.signupState["email"];
  const password = newRegister.signupState["password"];
/*
  // check if user exists 
  const [checkUserEmail] =
    await sql `SELECT users (email) VALUES (${newRegister.signupState["email"]}) RETURNING *`;
    console.log(checkUserEmail);

    // if user does not exists 
    if (checkUserEmail.rows.length === 0) {
      return res.status(401).json("Password or Email is incorrect");

    } */

  const [createdRegister] =
    await sql `INSERT INTO ugjobs_users (username, email, password) VALUES (${username}, ${email}, ${password}) RETURNING *`;
  
  res.status(201).send(camelcaseKeys(createdRegister));

 
}); 

/*registerRouter.put("/:id", async (req, res) => {
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

registerRouter.delete("/:id", async (req, res) => {
  const { id } = req.params;

  const [deletedTodo] = await sql`DELETE FROM todos WHERE id = ${Number(
    id
  )} RETURNING *`;

  if (deletedTodo) {
    res.status(204).send("");
  } else {
    res.status(404).send("todo not found");
  }
});*/

export default registerRouter; 