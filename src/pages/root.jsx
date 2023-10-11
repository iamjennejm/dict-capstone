import React from "react";
import HeaderLayout from "../layouts/HeaderLayout";
import FooterLayout from "../layouts/FooterLayout";
import HomePageContent from "./HomePageContent";

export default function Root() {
  return (
    <>
      <div className="page-content">
        {/* Header */}
        <HeaderLayout />

        {/* Content */}
        <HomePageContent />

        {/* Footer */}
        <FooterLayout />
      </div>
    </>
  );
}
