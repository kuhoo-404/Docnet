import React from "react";
import Navbar from "./Navbar";
import "./Profile.css";

const Profile = () => {
  // --- UPDATED: Suggested profiles are now other dental professionals ---
  const suggestedProfiles = [
    { name: "Dr. Rohan Gupta", job: "Orthodontist", initials: "RG", connections: 25 },
    { name: "Dr. Ananya Iyer", job: "Pediatric Dentist", initials: "AI", connections: 18 },
    { name: "Dr. Vikram Singh", job: "Oral & Maxillofacial Surgeon", initials: "VS", connections: 32 }
  ];

  // --- UPDATED: Skills are now dental-related ---
  const skills = [
    { name: "Root Canal Treatment", endorsements: 12 },
    { name: "Cosmetic Dentistry", endorsements: 9 },
    { name: "Dental Implants", endorsements: 7 },
    { name: "Oral Surgery", endorsements: 5 }
  ];

  return (
    <div className="profile-page">
      <Navbar />
      
      <div className="profile-wrapper">
        {/* Profile Header Card */}
        <div className="profile-header-card">
          <div className="cover-section">
            <div className="cover-gradient"></div>
          </div>
          
          <div className="profile-main-info">
            <div className="profile-avatar-section">
              <div className="profile-avatar-large">
                {/* --- UPDATED: Initials --- */}
                <span className="avatar-text">PS</span>
                <div className="avatar-status-dot"></div>
              </div>
            </div>
            
            <div className="profile-identity">
              {/* --- UPDATED: Name and Role --- */}
              <h1 className="profile-name-large">Dr. Priya Sharma</h1>
              <p className="profile-role">General & Cosmetic Dentist</p>
              <div className="profile-meta-info">
                <span className="meta-item">
                  <svg className="meta-icon" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                  </svg>
                  {/* --- UPDATED: Location --- */}
                  Pune, India
                </span>
                <span className="meta-item">
                  <svg className="meta-icon" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"/>
                  </svg>
                  {/* --- UPDATED: Connections --- */}
                  450 connections
                </span>
              </div>
              <div className="profile-actions">
                <button className="action-btn primary">
                  <svg className="btn-icon" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"/>
                  </svg>
                  Connect
                </button>
                <button className="action-btn secondary">
                  <svg className="btn-icon" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z"/>
                    <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z"/>
                  </svg>
                  Message
                </button>
                <button className="action-btn icon-only">
                  <svg className="btn-icon" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"/>
                  </svg>
                </button>
              </div>
            </div>

            <div className="profile-stats-inline">
              <div className="stat-item">
                <svg className="stat-icon" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                  <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
                </svg>
                <div>
                  {/* --- UPDATED: Stats --- */}
                  <span className="stat-value">520</span>
                  <span className="stat-label">Profile views</span>
                </div>
              </div>
              <div className="stat-item">
                <svg className="stat-icon" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z"/>
                </svg>
                <div>
                  {/* --- UPDATED: Stats --- */}
                  <span className="stat-value">30</span>
                  <span className="stat-label">Posts</span>
                </div>
              </div>
              <div className="stat-item">
                <svg className="stat-icon" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"/>
                </svg>
                <div>
                  {/* --- UPDATED: Stats --- */}
                  <span className="stat-value">450</span>
                  <span className="stat-label">Connections</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="profile-content-grid">
          {/* Left Column */}
          <div className="content-left">
            {/* About Section */}
            <div className="content-card">
              <div className="card-header">
                <h3 className="card-title">About</h3>
                <button className="edit-btn">
                  <svg className="edit-icon" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"/>
                  </svg>
                </button>
              </div>
              {/* --- UPDATED: About text --- */}
              <p className="card-text">
                I'm an experienced dentist with a background in General and Cosmetic Dentistry, with a passion for providing compassionate, patient-centric care that improves oral health and creates confident, healthy smiles.
              </p>
            </div>

            {/* Skills Section */}
            <div className="content-card">
              <div className="card-header">
                <h3 className="card-title">Skills & Endorsements</h3>
                <button className="edit-btn">
                  <svg className="edit-icon" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"/>
                  </svg>
                </button>
              </div>
              {/* --- This list dynamically updates from the 'skills' array --- */}
              <div className="skills-list">
                {skills.map((skill, index) => (
                  <div className="skill-item" key={index}>
                    <div className="skill-info">
                      <h4 className="skill-name">{skill.name}</h4>
                      <span className="skill-endorsements">
                        {skill.endorsements} endorsements
                      </span>
                    </div>
                    <div className="skill-badge">{skill.endorsements}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience Section */}
            <div className="content-card">
              <div className="card-header">
                <h3 className="card-title">Experience</h3>
                <button className="edit-btn">
                  <svg className="edit-icon" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"/>
                  </svg>
                </button>
              </div>
              {/* --- UPDATED: Experience list --- */}
              <div className="experience-list">
                <div className="experience-item">
                  <div className="experience-icon">
                    <svg fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <div className="experience-details">
                    <h4 className="experience-title">Dental Surgeon</h4>
                    <p className="experience-company">GMC, Nagpur</p>
                    <p className="experience-duration">Jun 2022 - Present • 3 yrs 5 mos</p>
                  </div>
                </div>
                <div className="experience-item">
                  <div className="experience-icon">
                    <svg fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <div className="experience-details">
                    <h4 className="experience-title">Associate Dentist</h4>
                    <p className="experience-company">BJ Hospital, Pune</p>
                    <p className="experience-duration">Jul 2020 - May 2022 • 1 yr 11 mos</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Education Section */}
            <div className="content-card">
              <div className="card-header">
                <h3 className="card-title">Education</h3>
                <button className="edit-btn">
                  <svg className="edit-icon" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"/>
                  </svg>
                </button>
              </div>
              {/* --- UPDATED: Education --- */}
              <div className="education-item">
                <div className="education-icon">
                  <svg fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
                  </svg>
                </div>
                <div className="education-details">
                  <h4 className="education-title">Government Dental College & Hospital, Mumbai</h4>
                  <p className="education-degree">Bachelor of Dental Surgery (BDS)</p>
                  <p className="education-year">2015 - 2020</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="content-right">
            {/* Suggested Profiles */}
            <div className="content-card">
              <div className="card-header">
                <h3 className="card-title-small">More Profiles For You</h3>
                <a href="#" className="view-all-link">View all</a>
              </div>
              {/* --- This list dynamically updates from the 'suggestedProfiles' array --- */}
              <div className="suggestions-list">
                {suggestedProfiles.map((profile, index) => (
                  <div className="suggestion-card" key={index}>
                    <div className="suggestion-avatar">
                      {profile.initials}
                    </div>
                    <div className="suggestion-info">
                      <h4 className="suggestion-name">{profile.name}</h4>
                      <p className="suggestion-job">{profile.job}</p>
                      <p className="suggestion-connections">
                        {profile.connections} mutual connections
                      </p>
                      <button className="link-button">
                        <svg className="link-icon" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"/>
                        </svg>
                        Connect
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;