"use client";
import React from "react";
import HeaderLayout from "../layouts/HeaderLayout";
import FooterLayout from "../layouts/FooterLayout";
import JobSeekerProfileImage from "../assets/images/jobseeker-user.png";
import { Card, Dropdown } from "flowbite-react";

export default function JobSeekerProfilePage() {
  return (
    <>
      <div className="main">
        <HeaderLayout />
        <div className="jobs-listing">
          <div class="bg-white pt-12 pr-0 pb-12 pl-0 mt-0 mr-auto mb-0 ml-auto sm:py-16 lg:py-20">
            <div class="max-w-lg mx-auto my-10 bg-white rounded-lg shadow-md p-8">
              <a href="/jobseeker/resume">
                <img
                  class="w-32 h-32 rounded-full mx-auto"
                  src="https://picsum.photos/200"
                  alt="Profile picture"
                />
              </a>
              <h2 class="text-center text-2xl font-semibold mt-3">John Doe</h2>
              <p class="text-center text-gray-600 mt-1">BS Computer Science</p>
              <p class="text-center text-gray-600 mt-1">
                University of the Philippines Visayas
              </p>
              <div class="flex justify-center mt-5">
                <a href="#" class="text-blue-500 hover:text-blue-700 mx-3">
                  Facebook
                </a>
                <a href="#" class="text-blue-500 hover:text-blue-700 mx-3">
                  Twitter
                </a>
                <a href="#" class="text-blue-500 hover:text-blue-700 mx-3">
                  LinkedIn
                </a>
                <a href="#" class="text-blue-500 hover:text-blue-700 mx-3">
                  GitHub
                </a>
              </div>
              <div class="mt-5">
                <h3 class="text-xl font-semibold">Bio</h3>
                <p class="text-gray-600 mt-2">
                  John is a 3rd year college student. He's into web development
                  and mobile applications. He is skilled in JavaScript and
                  Reactjs.
                </p>
              </div>
            </div>
          </div>
        </div>

        <FooterLayout />
      </div>
    </>
  );
}
