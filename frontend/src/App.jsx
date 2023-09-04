import React from "react";
import HeaderLayout from "./layouts/HeaderLayout";
import FooterLayout from "./layouts/FooterLayout";
import HomePageContent from "./components/HomePageContent";

export default function App() {
  return (
    <>
      <div className="page-content">
        <HeaderLayout />
        <HomePageContent />
        <FooterLayout />
      </div>
    </>
  );
}
