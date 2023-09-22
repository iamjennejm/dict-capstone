import React from "react";
import HeaderLayout from "../layouts/HeaderLayout";
import FooterLayout from "../layouts/FooterLayout";
import JobSeekerMyResumeImage from "../assets/images/jobseeker-myresume.png";
import JobSeekerMyApplicationsImage from "../assets/images/jobseeker-myapplications.png";
import JobSeekerAccountSettingsImage from "../assets/images/account-settings.png";
import "../assets/styles/index.css";
import { Card } from "flowbite-react";

export default function JobSeekerDashboardPage() {
  return (
    <>
      <Card>
        <main className="container mx-auto">
          <HeaderLayout />

          <section className="flex justify-center items-center">
            <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16 text-center">
              <h2 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">
                Job Seeker Dashboard
              </h2>

              <div className="grid grid-cols-3 gap-2">
                <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col items-center justify-center">
                  <a href="/jobseeker/resume">
                    <img
                      className="rounded-lg image-with-hover"
                      src={JobSeekerMyResumeImage}
                      alt="image description"
                    />
                  </a>
                  <div className="mt-2">My Resume</div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col items-center justify-center">
                  <a href="/jobseeker/myapplications">
                    <img
                      className="rounded-lg image-with-hover"
                      src={JobSeekerMyApplicationsImage}
                      alt="image description"
                    />
                  </a>
                  <div className="mt-2">My Applications</div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col items-center justify-center">
                  <a href="/">
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
