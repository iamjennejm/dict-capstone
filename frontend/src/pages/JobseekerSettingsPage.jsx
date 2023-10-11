import React, { useState } from "react";
import FooterLayout from "../layouts/FooterLayout";
import UGJobsLogo from "../assets/images/UGJobsLogo.png";
import {useNavigate} from 'react-router-dom';


function CompanySettingsPage() {
  const [userData, setUserData] = useState({
    email: "Jobseeker@example.com",
    password: "******",
    confirmPassword: "******",
    userName: "Angelina M. Loaf",
    currentAddress: "123 Current St, Address",
    phoneNumber: "0917-123-4445",
  });

  const handleUserDataChange = (event) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("User data updated:", userData);

    if (userData.password !== userData.confirmPassword) {
      alert("Passwords do not match. Please confirm your password.");
      return;
    }
  };


  const handleDeleteAccount = () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete your account? This action cannot be undone."
    );

    if (confirmDelete) {

    /*  Edit to delete the user's account*/
    //TODO:
      console.log("Account deleted");
    }
  };

  const navigate = useNavigate();
	const clickHandler = () => {
		navigate('/jobseeker', {replace: true});
  };

  return (
    <>
      <div className="profile-settings">
        <a href="/">
            <img alt="UGJobs" className="UgLogoMain" src={UGJobsLogo} />
          </a>
        <h2>Account Settings</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="userName">Username:</label>
            <input
              type="text"
              id="userName"
              name="userName"
              value={userData.userName}
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
          <label htmlFor="confirmPassword">Confirm Password:</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={userData.confirmPassword}
              onChange={handleUserDataChange}
              />
              </div>
              
          <div className="form-group">
            <label htmlFor="currentAddress">Current Address:</label>
            <input
              type="text"
              id="currentAddress"
              name="currentAddress"
              value={userData.currentAddress}
              onChange={handleUserDataChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="phoneNumber">Contact Number:</label>
            <input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              value={userData.phoneNumber}
              onChange={handleUserDataChange}
            />
          </div >
          <div className="buttonsettings">
          <button className='back-button'onClick={clickHandler}>Back</button>
          <button className='save-button' type="submit">Save</button>
          <span className="delete-account-link" onClick={handleDeleteAccount}>
             "Delete Account!"
          </span>
          </div>
        </form>
      </div>
      <FooterLayout />
    </>
  );
}

export default CompanySettingsPage;
