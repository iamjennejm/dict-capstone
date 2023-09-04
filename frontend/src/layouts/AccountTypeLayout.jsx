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
    border: "2px solid ",
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
  return (
    <div style={containerStyle}>
      <div style={{ display: "flex", gap: "50px" }}>
        <div style={{ textAlign: "center" }}>
          <ImageButton image={buttonImage1} to="/signupjobseeker" />
          <h4 style={{ margin: "0" }}>Job Seeker</h4>
        </div>

        <div style={{ textAlign: "center" }}>
          <ImageButton image={buttonImage2} to="/signupemployer" />
          <h4 style={{ margin: "0" }}>Employer</h4>
        </div>
      </div>
    </div>
  );
};

export default App;
