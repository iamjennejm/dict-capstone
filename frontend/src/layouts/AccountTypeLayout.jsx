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

  const textStyle = {
    marginTop: "5px",
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
    margin: "10px",
  };

  return (
    <div style={containerStyle}>
      <div
        className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col items-center justify-center"
        style={buttonContainerStyle}
      >
        <a href="/signupjobseeker">
          <img
            className="rounded-lg image-with-hover"
            src={buttonImage1}
            alt="image description"
          />
        </a>
        <div className="mt-2">Job Seeker</div>
      </div>

      <div
        className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col items-center justify-center"
        style={buttonContainerStyle}
      >
        <a href="/signupemployer">
          <img
            className="rounded-lg image-with-hover"
            src={buttonImage2}
            alt="image description"
          />
        </a>
        <div className="mt-2">Employer</div>
      </div>
    </div>
  );
};

export default App;
