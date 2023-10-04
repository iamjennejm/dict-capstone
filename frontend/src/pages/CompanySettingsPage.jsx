import React, { useState } from "react";
import FooterLayout from "../layouts/FooterLayout";
import UGJobsLogo from "../assets/images/UGJobsLogo.png";

function CompanySettingsPage() {
  const [userData, setUserData] = useState({
    email: "company@example.com",
    password: "******",
    companyName: "Company Inc",
    companyAddress: "123 Company St",
    phoneNumber: "0917-123-4445",
  });

  const handleUserDataChange = (event) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("User data updated:", userData);
  };

  const handleDeleteAccount = () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete your account? This action cannot be undone."
    );

    if (confirmDelete) {
      // TODO: Implement logic to delete the user's account
      console.log("Account deleted");
    }
  };

  return (
    <>
      <div className="profile-settings">
        <div className="logo-container">
          <img alt="UGJobs" className="w-48 p-4" src={UGJobsLogo} />
        </div>
        <h2>Account Settings</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="companyName">Company Name:</label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              value={userData.companyName}
              onChange={handleUserDataChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email address:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={userData.email}
              onChange={handleUserDataChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={userData.password}
              onChange={handleUserDataChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="companyAddress">Company Address:</label>
            <input
              type="text"
              id="companyAddress"
              name="companyAddress"
              value={userData.companyAddress}
              onChange={handleUserDataChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="phoneNumber">Phone Number:</label>
            <input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              value={userData.phoneNumber}
              onChange={handleUserDataChange}
            />
          </div>
          <button type="submit">Save Changes</button>
          <button
            className="delete-account-button"
            onClick={handleDeleteAccount}
          >
            Delete Account
          </button>
        </form>
      </div>
      <FooterLayout />
    </>
  );
}

export default CompanySettingsPage;
