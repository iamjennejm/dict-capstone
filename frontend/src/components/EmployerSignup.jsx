import { useEffect, useRef, useState } from "react";
import { EmployerSignupFields } from "./EmployerSignupFormFields";
import FormAction from "./FormAction";
import Input from "./Input";

const fields = EmployerSignupFields;
let fieldsState = {};

fields.forEach((field) => (fieldsState[field.id] = ""));

export default function EmployerSignup() {
  const [signupState, setSignupState] = useState(fieldsState);
  
const signUp = () => {
    fetch("http://localhost:8081/api/register", {
        method: "POST",
        body: JSON.stringify({
          user: signupState,
          user_type: "employer"
        }),
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then((res) => res.json)
        .then((data) => {
            console.log(data);
        })
        .catch((err) => console.error(err));
   }; 
  
 const handleChange = (e) =>
    setSignupState({ ...signupState, [e.target.id]: e.target.value });

  const handleSubmit = (e) => {
    // prevent the form from refreshing the whole page
    e.preventDefault();
    //👇🏻 Triggers the function
     signUp();

  } 

  const firstGroupFields = fields.slice(0, Math.ceil(fields.length / 2));
  const secondGroupFields = fields.slice(Math.ceil(fields.length / 2));

  return (
    <form className="signupform" onSubmit={handleSubmit}>
      <div className="flex">
        <div className="boardersignup">
          {firstGroupFields.map((field) => (
            <div key={field.id} className="">
              <label
                htmlFor={field.id}
                className="block text-sm font-medium text-gray-700 text-left"
              >
                {field.labelText}
              </label>
              <Input
                handleChange={handleChange}
                value={signupState[field.id]}
                id={field.id}
                name={field.name}
                type={field.type}
                isRequired={field.isRequired}
                placeholder={field.placeholder}
              />
            </div>
          ))}
        </div>
        <div className="boardersignup2">
          {secondGroupFields.map((field) => (
            <div key={field.id} className="">
              <label
                htmlFor={field.id}
                className="block text-sm font-medium text-gray-700 text-left"
              >
                {field.labelText}
              </label>
              <Input
                handleChange={handleChange}
                value={signupState[field.id]}
                id={field.id}
                name={field.name}
                type={field.type}
                isRequired={field.isRequired}
                placeholder={field.placeholder}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center pt-10">
        <input
          id="Terms-conditions"
          name="Terms-conditions"
          type="checkbox"
          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
        />
        <label
          htmlFor="Terms-conditions"
          className="ml-2 block text-sm text-gray-900"
        >
          I agree to the terms and conditions.
        </label>
      </div>
      <div className="flex items-center pt-5">
        <input
          id="Privacy-policy"
          name="Privacy-policy"
          type="checkbox"
          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
        />
        <label
          htmlFor="Privacy-policy"
          className="ml-2 block text-sm text-gray-900"
        >
          I agree to Privacy Policy.
        </label>
      </div>
      <div className="pt-5">
        <FormAction
          handleSubmit={handleSubmit}
          text="Signup"
          buttonClass=""
        />
      </div>
    </form>
  );
}
