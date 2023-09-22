import React from "react";
import HeaderLayout from "../layouts/HeaderLayout";
import FooterLayout from "../layouts/FooterLayout";
import ReviewLayout from "../layouts/ReviewLayout";

export default function JobSeekerReviewPage() {
  return (
    <>
      <HeaderLayout />
      <div className="main flex flex-col items-center justify-center min-h-screen">
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
            <p className="text-gray-700 text-center mt-5 leading-7">
              Have something to say about your job? Share your experience
              concerning your previous and/or current employer. Your name will
              be kept anonymous. All company reviews will be published to help
              others plan their next career move, just as their review may help
              you plan yours.
            </p>
          </div>
        </div>
        <a href="/jobseeker/profile">
          <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow mt-5">
            Back To Profile
          </button>
        </a>
        <ReviewLayout />
      </div>
      <FooterLayout />
    </>
  );
}
