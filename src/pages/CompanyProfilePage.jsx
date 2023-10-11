import React from "react";
import HeaderLayout from "../layouts/HeaderLayout";
import FooterLayout from "../layouts/FooterLayout";
import "../assets/styles/index.css";

export default function CompanyProfilePage() {
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
            <h2 className="text-2xl font-semibold mt-3">
              Alien Workshop Skateboars
            </h2>
            <p className="text-gray-600 mt-1">Skatboard Company</p>

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
              <a
                href="https://www.amazon.com/Alien-Workshop-Skateboards/s?k=Alien+Workshop+Skateboards&linkCode=sl2&tag=skateboardbrands-20&linkId=c690186597e0af4db00090544d2fc8e0&language=en_US&ref_=as_li_ss_tl"
                className="text-blue-500 hover:text-blue-700"
              >
                Website
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
                It’s a small but passionate team behind the paranormal-inspired
                skate gear from Alien Workshop. Mike Hill, Chris Carter, and
                Neil Blender created the brand in 1990. Despite a few ownership
                changes and a brief closure, the brand has continued to
                contribute to the growth and character of skate culture. The
                company works out of a former nuclear bunker in Dayton, Ohio,
                designing, overseeing operations, and shipping from that
                location. Choose from a range of quality and authentic products,
                including complete boards plus all the parts for customizing.
                Shop for other merchandise like apparel, candles, stickers,
                pins, and patches. All of this means you can easily show your
                Alien devotion
              </p>
            </div>
            <div id="skills-list" className="mt-5">
              <h3 className="Field">Job Offers</h3>
              <ul className="list">
                <li>• Filmmaker • Brand ambassador • Athletics manager</li>
                <li>• Photography• Event coordinator • Athletic scout</li>
              </ul>
              <h3 className="Field">Salary Range</h3>
              <p>$42,583 - $61,890 per year</p>
            </div>
          </div>
        </div>
        <FooterLayout />
      </div>
    </>
  );
}
