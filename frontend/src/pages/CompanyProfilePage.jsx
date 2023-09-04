import React from "react";
import HeaderLayout from "../layouts/HeaderLayout";
import FooterLayout from "../layouts/FooterLayout";
import Ratings from "../components/StarRating";

export default function JobSeekerProfilePage() {
  return (
    <>
      <div className="main">
        <HeaderLayout />
        <div className="flex justify-center mt-5">
          <div className="jobs-listing">
            <a href="/jobseeker/resume">
              <img
                className="w-32 h-32 rounded-full mx-auto"
                src="https://picsum.photos/200"
                alt="Profile picture"
              />
            </a>
            <h2 className="text-center text-2xl font-semibold mt-3">
              Edwil Sta.Maria
            </h2>
            <p className="text-center text-gray-600 mt-1">
              BS in Information Technology
            </p>
            <p className="text-center text-gray-600 mt-1">STI College Kalibo</p>

            <div className="flex justify-center mt-5">
              <a href="#" className="text-blue-500 hover:text-blue-700 mx-3">
                Facebook
              </a>
              <a href="#" className="text-blue-500 hover:text-blue-700 mx-3">
                Twitter
              </a>
              <a href="#" className="text-blue-500 hover:text-blue-700 mx-3">
                LinkedIn
              </a>
              <a href="#" className="text-blue-500 hover:text-blue-700 mx-3">
                GitHub
              </a>
            </div>
            <div className="mt-5" f>
              <Ratings />
              <h3 className="text-xl font-semibold">Bio</h3>
              <p className="text-gray-600 mt-2">
                John is a 3rd year college student. He's into web development
                and mobile applications. He is skilled in JavaScript and
                Reactjs.
              </p>
            </div>
          </div>
        </div>
        <FooterLayout />
      </div>
    </>
  );
}
