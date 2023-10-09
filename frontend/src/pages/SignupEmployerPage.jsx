"use client";
import Header from "../components/Header";
import EmployerSignup from "../components/EmployerSignup";
import FooterLayout from "../layouts/FooterLayout";
import UGJobsLogo from "../assets/images/UGJobsLogo.png";

export default function SignupEmployerPage() {
  return (
    <>
      <div className="page-content p-20">
        {" "}
        <div className="flex justify-center">
          <a href="/">
            <img alt="UGJobs" className="w-48 p-4" src={UGJobsLogo} />
          </a>
        </div>
        <div className="block rounded-lg bg-white text-center shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
          <div className="border-b-2 border-neutral-100 px-6 py-3 dark:border-neutral-600 dark:text-neutral-50">
            <div className="p-4">
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
      </div>
      <FooterLayout />
    </>
  );
}
