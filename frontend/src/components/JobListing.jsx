import { useState } from 'react';

import React from 'react';

const JobListing = ({ jobTitle, company, location, postedDate, description, applyLink }) => {
  return (
    <div className="job-listing">
      <h2>{jobTitle}</h2>
      <p className="company">{company}</p>
      <p className="location">{location}</p>
      <p className="posted-date">Posted: {postedDate}</p>
      <p className="description">{description}</p>
      <a href={applyLink} target="_blank" rel="noopener noreferrer" className="apply-link">Apply Now</a>
    </div>
  );
};

export default JobListing;
