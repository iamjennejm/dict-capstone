import React from "react";
import Header from "../components/Header";
import Login from "../components/Login";
import FooterLayout from "../layouts/FooterLayout";
import UGJobsLogo from "../assets/images/UGJobsLogo.png";
import LoginLogo from "../assets/images/login.png";
export default function LoginPage() {
  return (
    <>
      <div className="flex justify-center">
          <a href="/">
            <img alt="UGJobs" className="UgLogoMain" src={UGJobsLogo} />
          </a>
        </div>
        
        <div className="loginform">
        <img alt="UGJobs" className="loginlogo" src={LoginLogo} />
              <Header
                heading="Login to your account"
                paragraph="Don't have an account yet? "
                linkName="Sign up."
                linkUrl="/signup"
              />
              <Login />
            </div>
    <FooterLayout />
    </>
  );
}
