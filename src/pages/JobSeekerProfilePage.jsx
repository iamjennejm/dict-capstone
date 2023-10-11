import React from "react";
import HeaderLayout from "../layouts/HeaderLayout";
import FooterLayout from "../layouts/FooterLayout";
export default function JobSeekerProfilePage() {
  return (
    <>
      <div className="main">
        <HeaderLayout />
        <div className="flex flex-col items-center mt-5">
          <div className="jobs-listing text-center">
            <a href="/jobseeker/resume">
              <img
                className="w-32 h-32 rounded-full mx-auto"
                src="https://picsum.photos/200"
                alt="Profile picture"
              />
            </a>
            <h2 className="text-2xl font-semibold mt-3">Edwil Sta.Maria</h2>
            <p className="text-gray-600 mt-1">BS in Information Technology</p>
            <p className="text-gray-600 mt-1">STI College Kalibo</p>

            <div className="flex justify-center mt-5 space-x-3">
              <a href="#" className="text-blue-500 hover:text-blue-700">
                Facebook
              </a>
              <a href="#" className="text-blue-500 hover:text-blue-700">
                Twitter
              </a>
              <a href="#" className="text-blue-500 hover:text-blue-700">
                LinkedIn
              </a>
              <a href="#" className="text-blue-500 hover:text-blue-700">
                GitHub
              </a>
            </div>

            <div className="flex flex-col items-center mt-3">
              <a href="/jobseeker/profile/review">
                <div className="space-y-2">
                  <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow mr-3">
                    Add Review
                  </button>
                  <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                    Send Message
                  </button>
                  <h2 className="Field">Bio</h2>
                </div>
              </a>
              <p className="mt-5">
                Dwil is a 3rd year college student. He's into web development
                and mobile applications. He is skilled in JavaScript and
                Reactjs.
              </p>
            </div>
            <div id="skills-list" className="mt-5">
              <ul className="list">
                <li>
                  <h3 className="Field">Design</h3>
                  <p className="HardSkills">
                    • UI/UX design • Photography • Web design • Graphic design
                    skills • Industrial design • Interior design
                  </p>
                </li>
                <li>
                  <h3 className="Field2">Marketing</h3>
                  <p className="Otherskills">
                    • Advertising • Campaign management • Consumer research •
                    SEO/SEM • Social media outreach • Email outreach
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <FooterLayout />
      </div>
    </>
  );
}
