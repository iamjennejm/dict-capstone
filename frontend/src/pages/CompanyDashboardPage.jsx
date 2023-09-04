'use client';
import React from "react";
import HeaderLayout from "../layouts/HeaderLayout";
import FooterLayout from "../layouts/FooterLayout";
import JobSeekerProfileImage from "../assets/images/jobseeker-user.png";
import JobSeekerMyResumeImage from "../assets/images/jobseeker-myresume.png";
import JobSeekerMyApplicationsImage from "../assets/images/jobseeker-myapplications.png";
import JobSeekerAccountSettingsImage from "../assets/images/account-settings.png";

import { Card, Dropdown } from 'flowbite-react';

export default function CompanyDashboardPage() {
    return (
        <>
        <Card>
        <main className="container mx-auto">
            <HeaderLayout /> 

            {/* Content */}
        
            <section class="">

                <div class="py-8 px-4 mx-auto max-w-2xl lg:py-16">
                <h2 class="mb-3 text-xl font-bold text-gray-900 dark:text-white center">Job Seeker Dashboard</h2>
                
               
            <div class="grid grid-cols-3 gap-2">
                <div  class="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"> 
                    <a href="/">
                        <img class="rounded-lg" src={JobSeekerMyResumeImage} alt="image description" />
                    </a>
                </div>
                <div class="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href="/">
                        <img class="rounded-lg" src={JobSeekerMyApplicationsImage} alt="image description" />
                    </a>
                </div>
                <div class="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href="/">
                        <img class="rounded-lg" src={JobSeekerAccountSettingsImage} alt="image description" />
                    </a>
                </div>
            </div>
            <div class="grid grid-cols-3 gap-2">
                 <div>My Resume</div>
                 <div>My Applications</div>
                 <div>Account Settings</div>
            </div>
        </div>
        </section>
    
        
            {/* Footer */}
            <FooterLayout />

        </main>
        </Card>
    </>
    );
  }
  