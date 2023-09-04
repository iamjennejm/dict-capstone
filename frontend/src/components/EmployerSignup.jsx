import { useState } from "react";
import { EmployersignupFields } from "./EmployerSignupFormFields";
import FormAction from "./FormAction";
import Input from "./Input";

const fields = EmployersignupFields;
let fieldsState = {};

fields.forEach((field) => (fieldsState[field.id] = ""));

export default function Signup() {
  const [signupState, setSignupState] = useState(fieldsState);

  const handleChange = (e) =>
    setSignupState({ ...signupState, [e.target.id]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(signupState);
  };

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
