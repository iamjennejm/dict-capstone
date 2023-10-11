import React from "react";
import { Link } from "react-router-dom";
import buttonImage1 from "../assets/images/jobseeker-user.png";
import buttonImage2 from "../assets/images/employer-user.png";

const ImageButton = ({ image, to, buttonText }) => {
  const buttonStyle = {
    background: `url(${image}) no-repeat center center`,
    backgroundSize: "cover",
    width: "75px",
    height: "75px",
    border: "2px solid",
    borderRadius: "5px",
    cursor: "pointer",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  };


  return (
    <Link to={to} style={{ textDecoration: "none" }}>
      <div style={buttonStyle}>
        <span style={textStyle}>{buttonText}</span>
      </div>
    </Link>
  );
};

const App = () => {
  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const buttonContainerStyle = {
    margin: "20px",
  };

  return (
    <div style={containerStyle}>
      <div
        className="AccountBorder"
        style={buttonContainerStyle}
      >
        <a href="/signupjobseeker">
          <img
            className=" AccountBorder2 rounded-lg image-with-hover shadow-2xl"
            src={buttonImage1}
            alt="image description"
          />
        </a>
        <div className="mt-2 text-center text-xl">Job Seeker</div>
      </div>
      <div
        className="AccountBorder"
        style={buttonContainerStyle}
      >
        <a href="/signupemployer">
          <img
            className="AccountBorder2 rounded-lg image-with-hover shadow-2xl"
            src={buttonImage2}
            alt="image description"
          />
        </a>
        <div className="mt-2 text-center text-xl">Employer</div>
      </div>
      
    </div>
  );
};

export default App;
