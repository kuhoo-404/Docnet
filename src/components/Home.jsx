import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="profile-page">
      {/* Header with gradient */}
      <div className="profile-header-bg">
        <div className="header-overlay"></div>
        <div className="header-pattern"></div>
      </div>

      {/* Profile Section */}
      <div className="profile-main-container">
        <div className="profile-card">
          {/* Profile Header */}
          <div className="profile-header-section">
            <div className="profile-cover"></div>
            <div className="profile-avatar-wrapper">
              <div className="profile-avatar">
                <span className="avatar-initials">RJ</span>
                <div className="online-indicator"></div>
              </div>
            </div>
          </div>

          {/* Profile Info */}
          <div className="profile-info-section">
            <div className="profile-info-content">
              <div className="profile-text">
                <h1 className="profile-name">Rohan Joshi</h1>
                <p className="profile-title">General Dentist</p>
                <div className="profile-meta">
                  <span className="meta-item">
                    <svg className="icon" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                    </svg>
                    Remote
                  </span>
                  <span className="meta-item">
                    <svg className="icon" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                    </svg>
                    Available for hire
                  </span>
                </div>
              </div>
              <button className="connect-button">Connect</button>
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="content-grid">
          {/* Left Column */}
          <div className="left-column">
            {/* General Information */}
            <div className="card">
              <div className="card-header">
                <div className="card-icon">
                  <svg className="icon-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd"/>
                  </svg>
                </div>
                <h2 className="card-title">About Me</h2>
              </div>
              <p className="card-text">
                "I'm an experienced dentist with a background in General Dentistry, with a passion for providing compassionate, patient-centric care that improves oral health and creates confident, healthy smiles."
              </p>
            </div>

            {/* Experience */}
            <div className="card">
              <div className="card-header">
                <div className="card-icon">
                  <svg className="icon-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd"/>
                    <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"/>
                  </svg>
                </div>
                <h2 className="card-title">Experience</h2>
              </div>
              <div className="experience-timeline">
                <div className="experience-item">
                  <div className="timeline-dot active"></div>
                  <h3 className="experience-title">Assistant Dentist</h3>
                  <p className="experience-company">GMC, Nagpur</p>
                  <p className="experience-duration">Jun 2022 - March 2024 </p>
                </div>
                <div className="experience-item">
                  <div className="timeline-dot"></div>
                  <h3 className="experience-title">Dentist</h3>
                  <p className="experience-company">BJ Hospital, Pune</p>
                  <p className="experience-duration">Jun 2024 - Present • 1 yr 4 mos</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="right-column">
            {/* Posts */}
            <div className="card">
              <div className="card-header">
                <div className="card-icon">
                  <svg className="icon-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z"/>
                    <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z"/>
                  </svg>
                </div>
                <h2 className="card-title">Posts</h2>
              </div>
              <div className="empty-posts">
                <svg className="empty-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <p className="empty-text">No posts yet</p>
                <p className="empty-subtext">Share your thoughts with the community</p>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="card">
              <h3 className="stats-title">Profile Strength</h3>
              <div className="progress-section">
                <div className="progress-header">
                  <span className="progress-label">Completeness</span>
                  <span className="progress-value">75%</span>
                </div>
                <div className="progress-bar">
                  <div className="progress-fill"></div>
                </div>
              </div>
              <div className="checklist">
                <div className="checklist-item completed">
                  <svg className="checklist-icon" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  Profile photo added
                </div>
                <div className="checklist-item completed">
                  <svg className="checklist-icon" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  Experience added
                </div>
                <div className="checklist-item">
                  <svg className="checklist-icon incomplete" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd"/>
                  </svg>
                  Add skills
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="bottom-nav">
        <button className="nav-item active">
          <svg className="nav-icon" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"/>
          </svg>
          <span className="nav-label">Home</span>
        </button>
        <button className="nav-item">
          <svg className="nav-icon" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd"/>
          </svg>
          <span className="nav-label">Work</span>
        </button>
        <button className="nav-item">
          <svg className="nav-icon" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z"/>
          </svg>
          <span className="nav-label">Messages</span>
        </button>
        <button className="nav-item">
          <svg className="nav-icon" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd"/>
          </svg>
          <span className="nav-label">Profile</span>
        </button>
      </div>
    </div>
  );
};

export default Home;