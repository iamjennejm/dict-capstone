"use client";
import HeaderLayout from "../layouts/HeaderLayout";
import FooterLayout from "../layouts/FooterLayout";
import AboutUsLayout from "../layouts/AboutUsLayout";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import React from "react";
import ContactUsForm from "../layouts/ContactUsLayout";

export default function AboutUsPage() {
  return (
    <>
      <HeaderLayout />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          minHeight: "100vh",
        }}
      >
        <AboutUsLayout />
        <h1 style={{ textAlign: "Left" }}>About Us</h1>
        <div class="center-container">
          <div class="center-content">
            <Carousel
              showArrows={true}
              infiniteLoop={true}
              showThumbs={false}
              showStatus={false}
              autoPlay={true}
              interval={10000}
              transitionTime={500}
              stopOnHover={false}
            >
              <div style={carouselItemStyle}>
                <p2 style={carouselText}>
                  Our Story UG Jobs was born from the visionary minds of a group
                  of DICT (Department of Information and Communications
                  Technology) scholars, whose passion for revolutionizing the
                  job search experience led us to embark on this incredible
                  journey.We recognized the challenges that undergraduate job
                  seekers face in navigating the complex landscape of employment
                  opportunities, and we were determined to bridge the gap
                  between potential candidates and their dream jobs. Welcome to
                  UG Jobs, a platform meticulously crafted by the dedicated
                  minds of DICT scholars.
                  <p2>
                    At UG Jobs, we are not just another job search website; we
                    are the culmination of expertise, innovation, and a profound
                    commitment to enhancing your career journey. At UG Jobs,we
                    are more than a job search website; we are your partners in
                    navigating the ever-changing landscape of employment. Join
                    us on this transformative journey and let's build your
                    career together. Your dream job is just a click away. UG
                    Jobs - Where Opportunities Await Your Discovery.
                  </p2>
                </p2>
              </div>
              <div style={carouselItemStyle}>
                <p style={carouselText}>
                  <h2>Mission</h2>
                  Our mission is to empower job seekers with the tools and
                  resources they need to thrive in today's competitive job
                  market. We believe that finding the right job is not just
                  about matching skills with job descriptions; it's about
                  finding an environment where individuals can grow, contribute,
                  and flourish. UG Jobs is committed to simplifying this process
                  by providing a comprehensive platform that connects talent
                  with meaningful opportunities.
                  <h2>Vision</h2>
                  Our vision extends beyond just being a job search website. We
                  envision UG Jobs as a digital companion that guides job
                  seekers through every phase of their career journey. From
                  discovering new career paths and enhancing skills to preparing
                  for interviews and negotiating job offers, we aim to be the
                  one-stop destination for all things career-related.
                </p>
              </div>
              <div style={carouselItemStyle}>
                <p style={carouselText}>
                  <h2>Why Choose UG Jobs? </h2>
                  <></>
                  <h3>DICT Scholar Expertise:</h3> Our platform is not just
                  built by tech enthusiasts; it's crafted by DICT scholars who
                  possess a deep understanding of digital innovation,
                  communication, and technology. This expertise ensures that UG
                  Jobs remains at the forefront of technological advancements,
                  providing users with a seamless and cutting-edge experience.
                  <h3>User-Centric Design:</h3> We've designed UG Jobs with you
                  in mind. Our user-centric approach means that every feature,
                  every button, and every interaction is thoughtfully designed
                  to enhance your experience and make your job search efficient,
                  effective, and enjoyable.
                  <h3>Comprehensive Job Listings:</h3>We curate an extensive
                  range of job listings from various industries and sectors,
                  ensuring that you have access to a diverse array of
                  opportunities. Whether you're a recent graduate or a seasoned
                  professional, UG Jobs has something for everyone.
                </p>
              </div>
              <div style={carouselItemStyle}>
                <p style={carouselText}>
                  <h3>Career Resources:</h3> Beyond job listings, UG Jobs offers
                  a wealth of career resources, including interview tips, resume
                  building guidance, skill development courses, and industry
                  insights. We believe in equipping you with the knowledge and
                  tools needed to excel in your career. Personalized
                  <h3>Recommendations:</h3> Our intelligent algorithms analyze
                  your profile and preferences to provide personalized job
                  recommendations that align with your skills, experience, and
                  aspirations. Constant Innovation: The world of technology and
                  employment is constantly evolving, and so are we. We're
                  committed to staying up-to-date with the latest trends and
                  incorporating innovative features to ensure that UG Jobs
                  remains a dynamic platform that evolves alongside your career
                  aspirations.
                </p>
              </div>
            </Carousel>
          </div>
        </div>
        <ContactUsForm />
      </div>
      <FooterLayout />
    </>
  );
}

/*edit here carousel styles*/

const carouselItemStyle = {
  background: "#f9f9f9",
  borderRadius: "10px",
  boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
  maxWidth: "700px",
  margin: "0 auto",
};

const carouselText = {
  fontSize: "16px",
  lineHeight: "1.5",
  textAlign: "left",
};
