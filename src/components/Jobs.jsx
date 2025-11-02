import React, { useState, useEffect } from 'react'
import './jobs.css'
import { useNavigate } from 'react-router-dom'

const JobPostPage = () => {
  const [jobs, setJobs] = useState([])
  const [jobTitle, setJobTitle] = useState('')
  const [jobDescription, setJobDescription] = useState('')
  const [message, setMessage] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    fetch('/api/jobs')
      .then((res) => res.json())
      .then((data) => setJobs(data))
      .catch((err) => console.error('Failed to load jobs:', err))
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!jobTitle || !jobDescription) {
      setMessage('Please fill all fields.')
      return
    }

    const response = await fetch('/api/jobs', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: jobTitle, description: jobDescription }),
    })

    if (response.ok) {
      setMessage('New job added successfully.')
      const newJob = await response.json()
      setJobs([newJob, ...jobs])
      setJobTitle('')
      setJobDescription('')
      setTimeout(() => setMessage(''), 3000)
    } else {
      setMessage('Error adding job.')
    }
  }

  return (
    <div className="jobs-page">
      {/* Hero Header */}
      <div className="jobs-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">Find Your Dream Job</h1>
          <p className="hero-subtitle">Connect with opportunities that match your skills</p>
        </div>
      </div>

      <div className="jobs-main-container">
        {/* Add Job Section */}
        <div className="add-job-card">
          <div className="card-header-section">
            <div className="header-icon-wrapper">
              <svg className="header-icon" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd"/>
              </svg>
            </div>
            <h2 className="section-title">Post a New Job</h2>
          </div>

          <form onSubmit={handleSubmit} className="job-form">
            <div className="form-group">
              <label htmlFor="jobTitle" className="form-label">
                <svg className="label-icon" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd"/>
                </svg>
                Job Title
              </label>
              <input
                id="jobTitle"
                type="text"
                value={jobTitle}
                onChange={(e) => setJobTitle(e.target.value)}
                placeholder="e.g. Cardiologist"
                className="form-input"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="jobDescription" className="form-label">
                <svg className="label-icon" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd"/>
                </svg>
                Job Description
              </label>
              <textarea
                id="jobDescription"
                rows="5"
                value={jobDescription}
                onChange={(e) => setJobDescription(e.target.value)}
                placeholder="Describe the role, responsibilities, and requirements..."
                className="form-textarea"
                required
              />
            </div>

            <button type="submit" className="submit-btn">
              <svg className="btn-icon" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd"/>
              </svg>
              Post Job
            </button>

            {message && (
              <div className={`message ${message.includes('success') ? 'success' : 'error'}`}>
                <svg className="message-icon" fill="currentColor" viewBox="0 0 20 20">
                  {message.includes('success') ? (
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  ) : (
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd"/>
                  )}
                </svg>
                {message}
              </div>
            )}
          </form>
        </div>

        {/* Jobs Listing Section */}
        <div className="jobs-listing-section">
          <div className="listing-header">
            <h2 className="listing-title">Available Opportunities</h2>
            <div className="job-count-badge">
              {jobs.length} {jobs.length === 1 ? 'Job' : 'Jobs'}
            </div>
          </div>

          {jobs.length > 0 ? (
            <div className="jobs-grid">
              {jobs.map((job, index) => (
                <div className="job-card" key={index}>
                  <div className="job-card-header">
                    <div className="company-logo">
                      <svg fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <span className="job-badge">New</span>
                  </div>
                  
                  <div className="job-details">
                    <h3 className="job-title">{job.title}</h3>
                    <p className="job-description">{job.description}</p>
                  </div>

                  <div className="job-meta">
                    <span className="meta-item">
                      <svg className="meta-icon" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                      </svg>
                      Remote
                    </span>
                    <span className="meta-item">
                      <svg className="meta-icon" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/>
                      </svg>
                      Full-time
                    </span>
                  </div>

                  <button className="job-apply-btn">
                    <span>Apply Now</span>
                    <svg className="btn-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <svg className="empty-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              <h3 className="empty-title">No Jobs Available</h3>
              <p className="empty-text">Be the first to post a job opportunity!</p>
            </div>
          )}
        </div>
      </div>

      {/* Navigation Sidebar */}
      <div className="nav-sidebar">
        <button className="nav-btn active" onClick={() => navigate('/')}>
          <svg className="nav-icon" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"/>
          </svg>
        </button>
        <button className="nav-btn" onClick={() => navigate('/jobs')}>
          <svg className="nav-icon" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd"/>
          </svg>
        </button>
        <button className="nav-btn">
          <svg className="nav-icon" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z"/>
          </svg>
        </button>
        <button className="nav-btn">
          <svg className="nav-icon" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"/>
          </svg>
        </button>
        <button className="nav-btn">
          <svg className="nav-icon" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd"/>
          </svg>
        </button>
      </div>
    </div>
  )
}

export default JobPostPage