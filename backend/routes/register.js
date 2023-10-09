import express from "express";
import { z } from "zod";
import camelcaseKeys from "camelcase-keys";
import { sql } from "../db.js";

const registerRouter = express.Router();

registerRouter.post("/", async (req, res) => {
  const newRegister = req.body;

  //const username = newRegister.user["username"];
  const email = newRegister.user["email"];
  const password = newRegister.user["password"];
  const user_type = newRegister.user_type;

  //const [checkUser] = await sql `SELECT FROM ugjobs_users WHERE email = (${email}) RETURNING *`;

  const [checkUser] = await sql `SELECT * FROM ugjobs_users WHERE email = ${email}`;

  if (checkUser) {
    res.status(404).send("user already exists");
  } else {
    
    const [createdUser] =
    await sql `INSERT INTO ugjobs_users (email, password, type) VALUES (${email}, ${password}, ${user_type}) RETURNING *`;
    res.status(201).send(camelcaseKeys(createdUser));

      if(user_type == "employer"){    
        const employer_name = newRegister.user["employer-name"];
        const contact_number = newRegister.user["contact-number"];
        const company_name = newRegister.user["company-name"];
        const company_location = newRegister.user["company-address"];

        const logo = "";
        const employer_status = "new";

        console.log(employer_name);
        const [registerEmployer] =
          await sql `INSERT INTO job_employers (employer_name, company_name, company_location, logo, contact_number, status) VALUES (${employer_name}, ${company_name}, ${company_location}, ${logo}, ${contact_number}, ${employer_status}) RETURNING *`;
        
          res.status(201).send(camelcaseKeys(registerEmployer));

      }else if(user_type == "jobseeker"){
        const first_name = newRegister.user["first_name"];
        const middle_name = newRegister.user["middle_name"];
        const last_name = newRegister.user["last_name"];
      
        const contact_number = newRegister.user["contact_number"];
        const present_address = newRegister.user["present_address"];
        const permanent_address = newRegister.user["permanent_address"];
      
        const school = newRegister.user["school"];
        const school_address = newRegister.user["school_address"];
        const student_id = newRegister.user["student_id"];
        const photo = newRegister.user["photo"];
      
        const [registerJobSeeker] =
          await sql `INSERT INTO job_seekers (first_name, middle_name, last_name, contact_number, present_address, permanent_address, school, school_address, student_id, photo) VALUES ( ${first_name}, ${middle_name}, ${last_name}, ${contact_number}, ${present_address}, ${permanent_address}, ${school}, ${school_address}, ${student_id}, ${photo}) RETURNING *`;
         res.status(201).send(camelcaseKeys(registerJobSeeker));

      }else {
        res.status(401).send("Admin");
      }
  }
   // return redirect("/login");
}); 

registerRouter.post("/jobseeker", async (req, res) => {
  const newRegister = req.body;
  const username = newRegister.signupState["username"];
  const email = newRegister.signupState["email"];
  const password = newRegister.signupState["password"];

  const [createdRegister] =
    await sql `INSERT INTO ugjobs_users (username, email, password) VALUES (${username}, ${email}, ${password}) RETURNING *`;
  
  res.status(201).send(camelcaseKeys(createdRegister));

 
}); 

registerRouter.post("/employer", async (req, res) => {
  const newRegister = req.body;
  const username = newRegister.signupState["username"];
  const email = newRegister.signupState["email"];
  const password = newRegister.signupState["password"];
  console.log(newRegister);
  res.status(201).send(newRegister);
  /*const [createdUser] =
    await sql `INSERT INTO ugjobs_users (username, email, password, user_type) VALUES (${username}, ${email}, ${password} , 'employer') RETURNING *`;

  const employer_name = newRegister.signupState["employer_name"];
  const company_name = newRegister.signupState["company_name"];
  const company_location = newRegister.signupState["company_address"];

  const logo = "logo";
  const contact_number = newRegister.signupState["contact_number"];
  const employer_status = "new";

  const [registerEmployer] =
    await sql `INSERT INTO job_employers (employer_name, company_name, company_location, logo, contact_number, employer_status) VALUES (${employer_name}, ${company_name}, ${company_location}, ${logo}, ${contact_number}, ${employer_status}) RETURNING *`;
  
    res.status(201).send(camelcaseKeys(registerEmployer));*/

  
}); 



registerRouter.put("/:id", async (req, res) => {
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
});

export default registerRouter; 