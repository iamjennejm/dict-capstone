"use client";
import Header from "../components/Header";
import Signup from "../components/Signup";
import FooterLayout from "../layouts/FooterLayout";
import UGJobsLogo from "../assets/images/UGJobsLogo.png";
import EmployeeLogo from "../assets/images/employeelogo2.png";

export default function jobseekerSignup() {
  return (
    <>
      <div className="">
        {" "}
        <div className="">
          <a href="/">
            <img alt="UGJobs" className="UgLogoMain" src={UGJobsLogo} />
          </a>
        </div>
        <div className="">
        <img alt="UGJobs" className="loginlogo" src={EmployeeLogo} />
            <div className="">
              <Header
                heading="Signup as Job Seeker"
                paragraph="Already have an account? "
                linkName="Login"
                linkUrl="/login"
              />
                </div>
              <Signup />
          </div>
        </div>
      <FooterLayout />
    </>
  );
}
