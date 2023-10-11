import React from "react";
import Jes from "../assets/images/Jes.png";
import Jen from "../assets/images/Jen.png";
import Rumyl from "../assets/images/Rumyl.png";
import Dwil from "../assets/images/Dwil.png";
import "../assets/styles/index.css";

export default function FooterLayout() {
  return (
    <div>
      {" "}
      <h1 style={{ textAlign: "center" }}>Our Team</h1>
      <div className="image-container">
        <div className="image-box">
          <img
            className="rounded-lg size-image opacity-transition"
            src={Jes}
            alt=""
          />
          <div className="description-box">
            <h4>JESTONI S. LOSABIA</h4>
            <p>PROJECT ANALYST UX / GRAPHIC DESIGNER DOCUMENTER </p>
          </div>
        </div>
        <div className="image-box">
          <img
            className="rounded-lg size-image opacity-transition"
            src={Jen}
            alt=""
          />
          <div className="description-box">
            <h4>JENNEFER J. MONTELIZA</h4>
            <p>PROJECT MANAGER / RESEARCHER / PROGRAMMER</p>
          </div>
        </div>
        <div className="image-box">
          <img
            className="rounded-lg size-image opacity-transition"
            src={Rumyl}
            alt=""
          />
          <div className="description-box">
            <h4>RUMYL JAMES B. DELA CRUZ</h4>
            <p>UX / GRAPHIC DESIGNER DOCUMENTER / QA TESTER DEVELOPER</p>
          </div>
        </div>
        <div className="image-box">
          <img
            className="rounded-lg size-image opacity-transition"
            src={Dwil}
            alt=""
          />
          <div className="description-box">
            <h4>EDWIL C. STA. MARIA</h4>
            <p>UX / GRAPHIC DESIGNER RESEARCHER / QA TESTER DEVELOPER</p>
          </div>
        </div>
      </div>
    </div>
  );
}
