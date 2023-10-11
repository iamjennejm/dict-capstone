'use client';
import Boy from "../assets/images/boy.png";
import Boy2 from "../assets/images/man3.png";
import Girl from "../assets/images/girlmodel.png";
import Girl2 from "../assets/images/girl2.png";
import Lady from "../assets/images/lady.png";
import Lady2 from "../assets/images/lady2.png";
import Man from "../assets/images/man.png";
import Man2 from "../assets/images/man2.png";
import "../assets/styles/index.css";
import React from "react";
import HeaderLayout from "../layouts/HeaderLayout";
import FooterLayout from "../layouts/FooterLayout";

export default function ProfilesPage({  }) {

  return (
    <>
    <HeaderLayout /> 
    <div className='jobs-listing'>
            <div class="  pr-0 pb-12 pl-0 mr-auto mb-0 ml-auto ">
                <div class="pt-0 pr-4 pb-0 pl-4 mt-0 mr-auto mb-0 ml-auto max-w-7xl sm:px-6 lg:px-8">
                    <div class="pt-0 pr-4 pb-0 pl-4 mt-0 mr-auto mb-0 ml-auto max-w-4xl sm:px-6 lg:px-8">
                    <div class="pt-0 pr-4 pb-0 pl-4 mt-0 mr-auto mb-0 ml-auto sm:flex sm:items-center sm:justify-between">
                        <div>
                        <p class="text-2xl font-bold text-gray-900">Job Seekers</p>
                        <p class="text-xl mt-1 mr-0 mb-0 ml-0 font-semi-bold text-gray-500">Look for an applicant..</p>
                        </div>
                        <div class="mt-4 mr-0 mb-0 ml-0 sm:mt-0">
                        <p class="sr-only">Search Job Seeker</p>
                        <div class="relative">
                            <div class="flex items-center pt-0 pr-0 pb-0 pl-3 absolute inset-y-0 left-0 pointer-events-none">
                            <p>
                                <svg class="w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24"
                                    stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M21
                                    21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
                            </p>
                            </div>
                            <input placeholder="Search Applicant" type="search" class="border block pr-0 pb-2 pl-10 w-full py-2
                                 border-gray-300 rounded-lg focus:ring-blue-600 focus:border-blue-600 sm:text-2xl"/>
                        </div>
                        </div>
                    </div>
                    </div>
                    </div>
                       </div>
                       </div>
    <div>
      <div className="image-containermain">


      <div className="image-container2">
        <div className="image-box">
          <img
            className="rounded-lg size-image opacity-transition"
            src={Boy}
            alt=""
          />
          <div className="description-box">
            <h4>Totoy Brown</h4>
            <p>Web development, Communication skills</p>
          </div>
        </div>
        <div className="image-box">
          <img
            className="rounded-lg size-image opacity-transition"
            src={Girl}
            alt=""
          />
          <div className="description-box">
            <h4>Marie Peng</h4>
            <p>Data Gathering, Storage Management, Quality assurance</p>
          </div>
        </div>
        <div className="image-box">
          <img
            className="rounded-lg size-image opacity-transition"
            src={Lady}
            alt=""
          />
          <div className="description-box">
            <h4>Marie Test</h4>
            <p>Interpreting data, Persuasion, Communication</p>
          </div>
        </div>
        <div className="image-box">
          <img
            className="rounded-lg size-image opacity-transition"
            src={Man}
            alt=""
          />
          <div className="description-box">
            <h4>Angkol Ayaw</h4>
            <p>RN Pediatrics, Good Communication skills</p>
          </div>
        </div>
        <div className="image-box">
          <img
            className="rounded-lg size-image opacity-transition"
            src={Man}
            alt=""
          />
          <div className="description-box">
            <h4>Angkol Ayaw</h4>
            <p>RN Pediatrics, Good Communication skills</p>
          </div>
        </div>
        <div className="image-box">
          <img
            className="rounded-lg size-image opacity-transition"
            src={Man}
            alt=""
          />
          <div className="description-box">
            <h4>Angkol Ayaw</h4>
            <p>RN Pediatrics, Good Communication skills</p>
          </div>
        </div>
        </div>
        



        <div className="image-container2">
        <div className="image-box">
          <img
            className="rounded-lg size-image opacity-transition"
            src={Boy2}
            alt=""
          />
          <div className="description-box">
            <h4>Dudes Geng</h4>
            <p>Fashion Designer, Brand Ambassador, Interpersonal</p>
          </div>
        </div>
        <div className="image-box">
          <img
            className="rounded-lg size-image opacity-transition"
            src={Girl2}
            alt=""
          />
          <div className="description-box">
            <h4>Mama Song</h4>
            <p>Project management, Negotiating, Risk Management</p>
          </div>
        </div>
        <div className="image-box">
          <img
            className="rounded-lg size-image opacity-transition"
            src={Lady2}
            alt=""
          />
          <div className="description-box">
            <h4>Jing Skyrus</h4>
            <p>Singer, Active listening, Good Voice Quality</p>
          </div>
        </div>
        <div className="image-box">
          <img
            className="rounded-lg size-image opacity-transition"
            src={Man2}
            alt=""
          />
          <div className="description-box">
            <h4>Drake Diller</h4>
            <p>Business Manager, Financial Intelligence, Commercial awareness</p>
          </div>
        </div>
        <div className="image-box">
          <img
            className="rounded-lg size-image opacity-transition"
            src={Man2}
            alt=""
          />
          <div className="description-box">
            <h4>Drake Diller</h4>
            <p>Business Manager, Financial Intelligence, Commercial awareness</p>
          </div>
        </div>
        <div className="image-box">
          <img
            className="rounded-lg size-image opacity-transition"
            src={Man2}
            alt=""
          />
          <div className="description-box">
            <h4>Drake Diller</h4>
            <p>Business Manager, Financial Intelligence, Commercial awareness</p>
          </div>
        </div>
      </div>
    </div>
    </div>
        <FooterLayout />
    </>
  )
}

