import React from "react";
import CompanyHeaderLayout from "../layouts/CompanyHeaderLayout";
import FooterLayout from "../layouts/FooterLayout";
import MyjobsImage from "../assets/images/employer-myjobs.png";
import MyApplicantsImage from "../assets/images/employer-myapplicants.png";
import JobSeekerAccountSettingsImage from "../assets/images/account-settings.png";

import { Card } from "flowbite-react";

export default function JobSeekerDashboardPage() {
  return (
    <>
      <Card>
        <main className="container mx-auto">
          <CompanyHeaderLayout />
          <section className="flex justify-center items-center">
            <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16 text-center">
              <h2 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">
                Company Dashboard
              </h2>

              <div className="grid grid-cols-3 gap-2">
                <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col items-center justify-center">
                  <a href="/jobs">
                    <img
                      className="rounded-lg image-with-hover"
                      src={MyjobsImage}
                      alt="image description"
                    />
                  </a>
                  <div className="mt-2">My Jobs</div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col items-center justify-center">
                  <a href="/jobseeker/myapplications">
                    <img
                      className="rounded-lg image-with-hover"
                      src={MyApplicantsImage}
                      alt="image description"
                    />
                  </a>
                  <div className="mt-2">My Applicants</div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col items-center justify-center">
                  <a href="/company/settings">
                    <img
                      className="rounded-lg image-with-hover"
                      src={JobSeekerAccountSettingsImage}
                      alt="image description"
                    />
                  </a>
                  <div className="mt-2">Account Settings</div>
                </div>
              </div>
            </div>
          </section>
          <FooterLayout />
        </main>
      </Card>
    </>
  );
}
