"use client";
import React from "react";
import Header from "../components/Header";
import Account from "../layouts/AccountTypeLayout";
import FooterLayout from "../layouts/FooterLayout";
import UGJobsLogo from "../assets/images/UGJobsLogo.png";
import AccountTypeLogo from "../assets/images/type.png";

export default function SignupPage() {
  return (
    <>
      <div className="flex justify-center">
          <a href="/">
            <img alt="UGJobs" className="UgLogoMain" src={UGJobsLogo} />
          </a>
        </div>
        <div className="loginform">
        <img alt="UGJobs" className="loginlogo" src={AccountTypeLogo} />
              <Header
                heading="Choose your account type"
                paragraph="Already have an account? "
                linkName="Login"
                linkUrl="/login"
              />
              <Account />
            </div>
      <FooterLayout />
    </>
  );
}
