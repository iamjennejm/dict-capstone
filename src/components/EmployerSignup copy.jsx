import { useEffect, useRef, useState } from "react";
import { EmployerSignupFields } from "./EmployerSignupFormFields";
import FormAction from "./FormAction";
import Input from "./Input";

const fields = EmployerSignupFields;
let fieldsState = {};

fields.forEach((field) => (fieldsState[field.id] = ""));

export const loader = async () => {
  const response = await fetch("http://localhost:8081/api/register");
  const signUp = await response.json();
  return { signUp };
};

export default function EmployerSignup() {
  const [signupState, setSignupState] = useState(fieldsState);
  
  useEffect(() => {
    async function init() {
      const data = await loader();
      setSignupState(data.signupState);
    }
    init();
  }, []);

  const taskRef = useRef();
 
  async function handleSubmit() {
    const response = await fetch("http://localhost:8081/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        task: taskRef.current?.value,
        isCompleted: false,
      }),
    });
    const data = await response.json();
    setSignupState((signUp) => signUp.concat(data));

    if (taskRef.current == null) return;
    taskRef.current.value = "";
  }

/*const signUp = () => {
     const response = await fetch("http://localhost:8081/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        task: taskRef.current?.value,
        isCompleted: false,
      }),
    });
    const data = await response.json();
    setSignupState((signUp) => signUp.concat(data));
    
    if (taskRef.current == null) return;
    taskRef.current.value = "";
    /*fetch("http://localhost:8081/api/register", {
        method: "POST",
        body: JSON.stringify({
          signupState
        }),
     
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
        })
        .catch((err) => console.error(err));
   }; */
  
  /*const handleChange = (e) =>
    setSignupState({ ...signupState, [e.target.id]: e.target.value });

  const handleSubmit = (e) => {
    // prevent the form from refreshing the whole page
    e.preventDefault();
    //👇🏻 Triggers the function
    signUp();
  } */

  const firstGroupFields = fields.slice(0, Math.ceil(fields.length / 2));
  const secondGroupFields = fields.slice(Math.ceil(fields.length / 2));

  return (
    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
      <div className="flex">
        <div className="w-1/2 border rounded p-4">
          {firstGroupFields.map((field) => (
            <div key={field.id} className="mb-4">
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
        <div className="w-1/2 border rounded p-4">
          {secondGroupFields.map((field) => (
            <div key={field.id} className="mb-4">
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
      <div className="flex items-center">
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
      <div className="flex items-center">
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
      <div className="flex justify-center items-center h-full">
        <FormAction
          handleSubmit={handleSubmit}
          text="Signup"
          buttonClass="px-3 py-1 text-xs"
        />
      </div>
    </form>
  );
}
