"use client";
import React, { useState } from "react";
import HeaderLayout from "../layouts/HeaderLayout";
import FooterLayout from "../layouts/FooterLayout";
import JobSeekerProfileImage from "../assets/images/jobseeker-user.png";
import { Card } from "flowbite-react";

export default function JobSeekerResumePage() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  return (
    <>
      <Card>
        <main className="container mx-auto">
          <HeaderLayout />

          <section class="">
            <div class="py-8 px-4 mx-auto max-w-2xl lg:py-16">
              <h2 class="mb-3 text-xl font-bold text-gray-900 dark:text-white">
                My Resume
              </h2>
              <form action="#">
                <div class="grid grid-rows-3 grid-flow-col gap-4">
                  <div class="row-span-3">
                    <div class="w-full">
                      <img
                        alt="Job Seeker User Profile"
                        className="mb-3 squared-full shadow-lg"
                        height="126"
                        src={JobSeekerProfileImage}
                        width="126"
                      />
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                      />
                    </div>
                  </div>

                  <div class="row-span-2 col-span-2">
                    <div class="sm:col-span-4">
                      <label
                        for="full-name"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="full-name"
                        id="full-name"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Enter your full name"
                        required=""
                      />
                    </div>
                    <div class="w-full">
                      <label
                        for="email"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Enter your email"
                        required=""
                      />
                    </div>
                    <div class="w-full">
                      <label
                        for="date-of-birth"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Date of Birth
                      </label>
                      <input
                        type="date"
                        name="date-of-birth"
                        id="date-of-birth"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder=""
                        required=""
                      />
                    </div>
                    <div>
                      <label
                        for="present-address"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Present Address
                      </label>
                      <input
                        type="text"
                        name="present-address"
                        id="item-weight"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder=""
                        required=""
                      />
                    </div>
                    <div class="sm:col-span-2">
                      <label
                        for="school"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        School
                      </label>
                      <input
                        type="text"
                        name="school"
                        id="school"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="School"
                        required=""
                      />
                    </div>
                    <div>
                      <label
                        for="school-address"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        School Address
                      </label>
                      <input
                        type="text"
                        name="school-address"
                        id="school-address"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder=""
                        required=""
                      />
                    </div>
                    <div>
                      <label
                        for="course"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Course
                      </label>
                      <input
                        type="text"
                        name="course"
                        id="course"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder=""
                        required=""
                      />
                    </div>
                    <div class="sm:col-span-3">
                      <label
                        for="awards-and-recognitions"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Awards and Recognitions
                      </label>
                      <textarea
                        id="awards-and-recognitions"
                        rows="8"
                        class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Your description here"
                      ></textarea>
                    </div>
                    <div class="sm:col-span-3">
                      <label
                        for="trainings-and-seminars"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Trainings and Seminars
                      </label>
                      <textarea
                        id="trainings-and-seminars"
                        rows="8"
                        class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Your description here"
                      ></textarea>
                    </div>
                  </div>
                  <div>
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </section>
          <FooterLayout />
        </main>
      </Card>
    </>
  );
}
