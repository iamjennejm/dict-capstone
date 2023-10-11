"use client";
import Header from "../components/Header";
import EmployerSignup from "../components/EmployerSignup";
import FooterLayout from "../layouts/FooterLayout";
import UGJobsLogo from "../assets/images/UGJobsLogo.png";
import EmployerLogo from "../assets/images/employerlogo2.png";
export default function SignupEmployerPage() {
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
        <img alt="UGJobs" className="loginlogo" src={EmployerLogo} />
            <div className="">
              <Header
                heading="Signup as Employer"
                paragraph="Already have an account? "
                linkName="Login"
                linkUrl="/login"
              />
            </div>
            <EmployerSignup />
          </div>
        </div>
      <FooterLayout />
    </>
  );
}
