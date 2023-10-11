"use client";
const company = 1;

export default function HomePageContent({ $company }) {
  return (
    <div className="home-page-content">
      <h1 className="display-3 text-center">Welcome to UG Jobs</h1>
      <p className="lead text-center">
        Find the latest jobs for under graduate students in the Philippines.
      </p>
    </div>
  );
}
