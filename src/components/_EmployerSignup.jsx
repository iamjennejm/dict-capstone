import { useState } from "react";
import { EmployerSignupFields } from "./EmployerSignupFormFields";
import FormAction from "./FormAction";
import Input from "./Input";

const fields = EmployerSignupFields;
let fieldsState = {};


fields.forEach((field) => (fieldsState[field.id] = ""));

export default function EmployerSignup() {
  const [signupState, setSignupState] = useState(fieldsState);
  /*const [username, setUsername] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [companyPhone, setCompanyPhone] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [companyAddress, setCompanyAddress] = useState("");*/
  
  const signUp = () => {
    fetch("http://localhost:8081/api/register", {
        method: "POST",
        body: JSON.stringify({
            email,
            password,
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
   }; 
  
  const handleChange = (e) => {
    /*e.persist();
    setValues(values => ({ ...values, [e.target.name]: event.target.value }));*/
    setSignupState({ ...signupState, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
     // prevent the form from refreshing the whole page
     e.preventDefault();
     console.log(signupState.email);

    //👇🏻 Triggers the function
    signUp();
  } 


  return {
    handleChange,
    handleSubmit,
    //values,
  }

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
          className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
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
          className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
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
