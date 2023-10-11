'use client';

import React from "react";
import HeaderLayout from "../layouts/HeaderLayout";
import FooterLayout from "../layouts/FooterLayout";

export default function JobsPage({  }) {

    return (
        <div className='main'>
            <HeaderLayout /> 
            <div className='jobs-listing'>
                <div class=" pt-12 pr-0 pb-12 pl-0 mt-0 mr-auto mb-0 ml-auto sm:py-16 lg:py-20">
                    <div class="pt-0 pr-4 pb-0 pl-4 mt-0 mr-auto mb-0 ml-auto max-w-7xl sm:px-6 lg:px-8">
                        <div class="pt-0 pr-4 pb-0 pl-4 mt-0 mr-auto mb-0 ml-auto max-w-4xl sm:px-6 lg:px-8">
                        <div class="pt-0 pr-4 pb-0 pl-4 mt-0 mr-auto mb-0 ml-auto sm:flex sm:items-center sm:justify-between">
                            <div>
                            <p class="text-2xl font-bold text-gray-900">Job lists</p>
                            <p class="text-xl mt-1 mr-0 mb-0 ml-0 font-semi-bold text-gray-500">Find a job..</p>
                            </div>
                            <div class="mt-4 mr-0 mb-0 ml-0 sm:mt-0">
                            <p class="sr-only">Search Job</p>
                            <div class="relative">
                                <div class="flex items-center pt-0 pr-0 pb-0 pl-3 absolute inset-y-0 left-0 pointer-events-none">
                                <p>
                                    <svg class="w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24"
                                        stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M21
                                        21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
                                </p>
                                </div>
                                <input placeholder="Search Job " type="search" class="border block pt-2 pr-0 pb-2 pl-10 w-full py-2
                                    border-gray-300 rounded-lg focus:ring-blue-600 focus:border-blue-600 sm:text-2xl"/>
                            </div>
                            </div>
                        </div>
                        <div class="shadow-xl mt-8 mr-0 mb-0 ml-0 pt-4 pr-10 pb-4 pl-10 flow-root rounded-lg sm:py-2">
                            <div class="pt--10 pr-0 pb-10 pl-0">
                            <div class="pt-5 pr-0 pb-0 pl-0 mt-5 mr-0 mb-0 ml-0">
                                <div class="sm:flex sm:items-center sm:justify-between sm:space-x-5">
                                <div class="companyborder flex items-center flex-1 min-w-0">
                                    <img
                                        src="https://d34u8crftukxnk.cloudfront.net/slackpress/prod/sites/6/SlackLogo_CompanyNews_SecondaryAubergine_Hero.jpg?d=500x500&amp;f=fill" class="flex-shrink-0 object-cover rounded-full btn- w-10 h-10"/>
                                    <div class="mt-0 mr-0 mb-0 ml-4 flex-1 min-w-0">
                                    <p class="text-lg font-bold text-gray-800 truncate">Service Desk Support I for a Technology Solutions Account</p>
                                    <p class="text-gray-600 text-md">Concentrix Philippines</p>
                                    <p class="text-gray-400 text-sm">National Capital Reg | 29-Jun-23, Salary Range P30,000-P40,000</p>
                                    </div>
                                
                                <div class="mt-4 mr-0 mb-0 ml-0 pt-0 pr-0 pb-0 pl-14 flex items-center sm:space-x-6 sm:pl-0 sm:mt-0">
                                    <a href="" class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 shadow rounded-lg">Apply</a>
                                </div>
                                </div>
                                </div>
                            </div>
                            <div class="pt-5 pr-0 pb-0 pl-0 mt-5 mr-0 mb-0 ml-0">
                                <div class="sm:flex sm:items-center sm:justify-between sm:space-x-5">
                                <div class="companyborder flex items-center flex-1 min-w-0">
                                    <img src="https://www.growthmarketingpro.com/wp-content/uploads/2019/10/basecamp-logo.png"
                                        class="flex-shrink-0 object-cover rounded-full btn- w-10 h-10"/>
                                    <div class="mt-0 mr-0 mb-0 ml-4 flex-1 min-w-0">
                                    <p class="text-lg font-bold text-gray-800 truncate">Senior Software Engineer</p>
                                    <p class="text-gray-600 text-md">Basecamp</p>
                                    <p class="text-gray-600 text-md">Concentrix Philippines</p>
                                    <p class="text-gray-400 text-sm">National Capital Reg | 29-Jun-23, Salary Range P15,000-P20,000</p>
                                    </div>
                                <div class="mt-4 mr-0 mb-0 ml-0 pt-0 pr-0 pb-0 pl-14 flex items-center sm:space-x-6 sm:pl-0 sm:justify-end
                                    sm:mt-0">
                                    <a href="" class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 shadow rounded-lg">Apply</a>
                                </div>
                                </div>
                                </div>
                            </div>
                            <div class="pt-5 pr-0 pb-0 pl-0 mt-5 mr-0 mb-0 ml-0">
                                <div class="companyborder sm:flex sm:items-center sm:justify-between sm:space-x-5">
                                <div class="flex items-center flex-1 min-w-0">
                                    <img src="https://djmag.com/sites/default/files/article/image/Spotify.png" class="flex-shrink-0
                                        object-cover rounded-full btn- w-10 h-10"/>
                                    <div class="mt-0 mr-0 mb-0 ml-4 flex-1 min-w-0">
                                    <p class="text-lg font-bold text-gray-800 truncate">Frontend Developer</p>
                                    <p class="text-gray-600 text-md">Spotify</p>
                                    <p class="text-gray-600 text-md">Spotify Philippines</p>
                                    <p class="text-gray-400 text-sm">National Capital Reg | 29-Jun-23, Salary Range P60,000-P65,000</p>
                                    
                                    </div>
                                </div>
                                <div class="mt-4 mr-0 mb-0 ml-0 pt-0 pr-0 pb-0 pl-14 flex items-center sm:space-x-6 sm:pl-0 sm:justify-end
                                    sm:mt-0">
                                     <a href="" class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 shadow rounded-lg">Apply</a>
                                </div>
                                </div>
                            </div>
                            <div class="pt-5 pr-0 pb-0 pl-0 mt-5 mr-0 mb-0 ml-0">
                                <div class="companyborder sm:flex sm:items-center sm:justify-between sm:space-x-5">
                                <div class="flex items-center flex-1 min-w-0">
                                    <img src="https://miro.medium.com/max/512/1*n81Kr3UGUVsF0LLRgRQrJw.jpeg" class="flex-shrink-0
                                        object-cover rounded-full btn- w-10 h-10"/>
                                    <div class="mt-0 mr-0 mb-0 ml-4 flex-1 min-w-0">
                                    <p class="text-lg font-bold text-gray-800 truncate">Lead Software Engineer</p>
                                    <p class="text-gray-600 text-md">Figma</p>
                                    <p class="text-gray-600 text-md">Figma Philippines</p>
                                    <p class="text-gray-400 text-sm">National Capital Reg | 29-Jun-23, Salary Range P15,000-P20,000</p>
                        
                                    </div>
                                </div>
                                <div class="mt-4 mr-0 mb-0 ml-0 pt-0 pr-0 pb-0 pl-14 flex items-center sm:space-x-6 sm:pl-0 sm:justify-end
                                    sm:mt-0">
                                     <a href="" class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 shadow rounded-lg">Apply</a>
                                </div>
                                </div>
                            </div>
                            <div class="pt-5 pr-0 pb-0 pl-0 mt-5 mr-0 mb-0 ml-0">
                                <div class="companyborder sm:flex sm:items-center sm:justify-between sm:space-x-5">
                                <div class="flex items-center flex-1 min-w-0">
                                    <img src="https://i.pinimg.com/originals/96/02/08/9602083f42463bb813399310d72233c5.png"
                                        class="flex-shrink-0 object-cover rounded-full btn- w-10 h-10"/>
                                    <div class="mt-0 mr-0 mb-0 ml-4 flex-1 min-w-0">
                                    <p class="text-lg font-bold text-gray-800 truncate">Software Engineeer</p>
                                    <p class="text-gray-600 text-md">Pinterest</p>
                                    <p class="text-gray-600 text-md">Pinterest Philippines</p>
                                    <p class="text-gray-400 text-sm">National Capital Reg | 29-Jun-23, Salary Range P70,000-P75,000</p>
                                    </div>
                                </div>
                                <div class="mt-4 mr-0 mb-0 ml-0 pt-0 pr-0 pb-0 pl-14 flex items-center sm:space-x-6 sm:pl-0 sm:justify-end
                                    sm:mt-0">
                                     <a href="" class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 shadow rounded-lg">Apply</a>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <FooterLayout />
        </div>
  )
}

