import React, { useState } from "react";

function ContactUsForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);

    /*para as server connection*/
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div style={{ maxWidth: "400px" }}>
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <label style={{ display: "block", marginBottom: "10px" }}>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              style={{ width: "100%" }}
            />
          </label>
          <label style={{ display: "block", marginBottom: "10px" }}>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              style={{ width: "100%" }}
            />
          </label>
          <label style={{ display: "block", marginBottom: "10px" }}>
            Subject:
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              style={{ width: "100%" }}
            />
          </label>
          <label>
            Message:
            <textarea
              name="message"
              rows="4"
              cols="50"
              value={formData.message}
              onChange={handleChange}
              required
              style={{ width: "100%" }}
            />
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default ContactUsForm;
