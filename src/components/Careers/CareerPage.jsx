import React from "react";
import { Link } from "react-router-dom";
import "./CareerPage.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

function CareerPage() {
  const jobListings = [
    {
      id: 1,
      title: "Experienced Welder",
      location: "Anand, Gujarat",
      type: "Full-time",
      department: "Manufacturing",
      requirements: [
        "3+ years of welding experience",
        "Ability to read blueprints",
        "Experience with various metals including steel and aluminum"
      ],
      description: "Looking for an experienced welder for our manufacturing plant in GIDC Vitthal Udyognagar. Must be able to read blueprints and work with various metals.",
      postedDate: "March 21, 2025"
    },
    {
      id: 2,
      title: "Fitter",
      location: "Anand, Gujarat",
      type: "Full-time",
      department: "Industrial",
      requirements: [
        "5+ years of pipe fitting experience",
        "Ability to read isometric drawings",
        "Experience with large diameter pipes",
        "Knowledge of safety regulations"
      ],
      description: "Seeking skilled pipe fitters for our industrial project in Anand. Must have experience with large diameter pipes and ability to work from isometric drawings.",
      postedDate: "March 18, 2025"
    },
    {
      id: 3,
      title: "Turner",
      location: "OnField",
      type: "Full-time",
      department: "Manufacturing",
      requirements: [
        "2 To 6 Year Customer Service Experience In Manufacturing Industry"
      ],
      description: "Looking for a Turner with experience in Manufacturing industry.",
      postedDate: "126 days ago"
    }
  ];

  return (
    <div>
      <Navbar />  
      
      {/* Hero Section */}
      <div className="title-hero-bg">
        <div className="container py-5">
          <div className="page-title text-center py-5">
            <h1 className="white-color">Careers</h1>
          </div>
        </div>
      </div>

      <div className="container mt-4">
        {/* Job Results Count */}
        <div className="job-results-count">
          Showing {jobListings.length} jobs
        </div>

        {/* Job Listings */}
        {jobListings.map(job => (
          <div className="job-posting-card" key={job.id}>
            <div className="job-header">
              <h4>{job.title}</h4>
              <span className="job-category-badge">{job.department}</span>
            </div>

            <div className="job-meta">
              <span><i className="fas fa-map-marker-alt"></i> {job.location}</span>
              <span><i className="fas fa-briefcase"></i> {job.type}</span>
              <span><i className="fas fa-calendar-alt"></i> Posted: {job.postedDate}</span>
            </div>

            <div className="job-requirements">
              <h5>Requirements:</h5>
              <ul>
                {job.requirements.map((req, index) => (
                  <li key={index}>{req}</li>
                ))}
              </ul>
            </div>

            <div className="job-actions">
              <Link 
                to={`/careers/job/${job.id}`} 
                className="btn btn-color"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}

        {/* Career Info Box */}
        <div className="career-info-box">
          <h4>Join Our Team</h4>
          <p>Looking for a rewarding career? We offer competitive salaries, excellent benefits, and opportunities for growth and advancement.</p>
          <p>For any queries regarding our job openings, please contact HR at <strong>hr@krishcrane.com</strong> or call us at <strong>9574879646</strong>.</p>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default CareerPage;