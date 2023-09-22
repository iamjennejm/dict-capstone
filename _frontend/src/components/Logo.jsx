import React from "react";
import { Link } from "react-router-dom"; // Import Link from React Router if you're using it
import UGJobsLogo from "../assets/images/UGJobsLogo.png";

function Logo() {
  return (
    <Link to="/">
      <img alt="UGJobsLogo" className="mr-3 w-24 sm:h-8" src={UGJobsLogo} />
    </Link>
  );
}

export default Logo;
