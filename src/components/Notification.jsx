import React, { useState } from "react";
import "./Notification.css";
import Navbar from "./Navbar";

const Notification = () => {
    const [activeTab, setActiveTab] = useState("all");

    const notifications = {
        all: [
            {
                id: 1,
                type: "suggestion",
                avatar: "S",
                title: "Suggested for you:",
                message: "Check out new job opportunities.",
                time: "14h ago",
                unread: true,
                icon: "briefcase"
            },
            {
                id: 2,
                type: "like",
                avatar: "JD",
                title: "John Doe",
                message: "liked your post.",
                subtext: "2 mutual connections",
                time: "2d ago",
                unread: false,
                icon: "heart"
            },
            {
                id: 3,
                type: "comment",
                avatar: "JS",
                title: "Jane Smith",
                message: "commented on your post.",
                subtext: "2 mutual connections",
                time: "3d ago",
                unread: false,
                icon: "comment"
            },
            {
                id: 4,
                type: "job",
                avatar: "CA",
                title: "Company ABC",
                message: "posted a new job.",
                subtext: "5 applicants already applied",
                time: "4d ago",
                unread: false,
                icon: "briefcase"
            }
        ],
        jobs: [
            {
                id: 1,
                type: "suggestion",
                avatar: "S",
                title: "Suggested for you:",
                message: "Check out new job opportunities.",
                time: "14h ago",
                unread: true,
                icon: "briefcase"
            },
            {
                id: 4,
                type: "job",
                avatar: "CA",
                title: "Company ABC",
                message: "posted a new job.",
                subtext: "5 applicants already applied",
                time: "4d ago",
                unread: false,
                icon: "briefcase"
            }
        ],
        posts: [
            {
                id: 2,
                type: "like",
                avatar: "JD",
                title: "John Doe",
                message: "liked your post.",
                subtext: "2 mutual connections",
                time: "2d ago",
                unread: false,
                icon: "heart"
            },
            {
                id: 3,
                type: "comment",
                avatar: "JS",
                title: "Jane Smith",
                message: "commented on your post.",
                subtext: "2 mutual connections",
                time: "3d ago",
                unread: false,
                icon: "comment"
            }
        ],
        mentions: []
    };

    const getIconSvg = (iconType) => {
        switch(iconType) {
            case "briefcase":
                return (
                    <svg fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd"/>
                    </svg>
                );
            case "heart":
                return (
                    <svg fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"/>
                    </svg>
                );
            case "comment":
                return (
                    <svg fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd"/>
                    </svg>
                );
            default:
                return null;
        }
    };

    const currentNotifications = notifications[activeTab] || [];

    return (
        <div className="notifications-page">
            <Navbar />
            
            <div className="notifications-container">
                {/* Header */}
                <div className="notifications-header">
                    <div className="header-content">
                        <h1 className="page-title">Notifications</h1>
                        <button className="mark-all-btn">
                            <svg className="check-icon" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                            </svg>
                            Mark all as read
                        </button>
                    </div>
                </div>

                {/* Tabs */}
                <div className="tabs-container">
                    <div className="tabs">
                        <button 
                            className={`tab-btn ${activeTab === "all" ? "active" : ""}`} 
                            onClick={() => setActiveTab("all")}
                        >
                            <svg className="tab-icon" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"/>
                            </svg>
                            All
                            {notifications.all.filter(n => n.unread).length > 0 && (
                                <span className="notification-badge">
                                    {notifications.all.filter(n => n.unread).length}
                                </span>
                            )}
                        </button>
                        <button 
                            className={`tab-btn ${activeTab === "jobs" ? "active" : ""}`} 
                            onClick={() => setActiveTab("jobs")}
                        >
                            <svg className="tab-icon" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd"/>
                            </svg>
                            Jobs
                        </button>
                        <button 
                            className={`tab-btn ${activeTab === "posts" ? "active" : ""}`} 
                            onClick={() => setActiveTab("posts")}
                        >
                            <svg className="tab-icon" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z"/>
                            </svg>
                            My posts
                        </button>
                        <button 
                            className={`tab-btn ${activeTab === "mentions" ? "active" : ""}`} 
                            onClick={() => setActiveTab("mentions")}
                        >
                            <svg className="tab-icon" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M14.243 5.757a6 6 0 10-.986 9.284 1 1 0 111.087 1.678A8 8 0 1118 10a3 3 0 01-4.8 2.401A4 4 0 1114 10a1 1 0 102 0c0-1.537-.586-3.07-1.757-4.243zM12 10a2 2 0 10-4 0 2 2 0 004 0z" clipRule="evenodd"/>
                            </svg>
                            Mentions
                        </button>
                    </div>
                </div>

                {/* Notifications List */}
                <div className="notifications-content">
                    {currentNotifications.length > 0 ? (
                        <div className="notification-list">
                            {currentNotifications.map((notification) => (
                                <div 
                                    key={notification.id} 
                                    className={`notification-card ${notification.unread ? 'unread' : ''}`}
                                >
                                    <div className="notification-avatar-wrapper">
                                        <div className="notification-avatar">
                                            {notification.avatar}
                                        </div>
                                        <div className={`notification-type-badge ${notification.type}`}>
                                            {getIconSvg(notification.icon)}
                                        </div>
                                    </div>
                                    
                                    <div className="notification-details">
                                        <div className="notification-text">
                                            <strong className="notification-title">{notification.title}</strong>
                                            <span className="notification-message"> {notification.message}</span>
                                        </div>
                                        {notification.subtext && (
                                            <p className="notification-subtext">{notification.subtext}</p>
                                        )}
                                        <span className="notification-time">{notification.time}</span>
                                    </div>

                                    {notification.unread && (
                                        <div className="unread-indicator"></div>
                                    )}
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="empty-state">
                            <svg className="empty-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/>
                            </svg>
                            <h3 className="empty-title">No notifications yet</h3>
                            <p className="empty-text">When you get notifications, they'll show up here</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Notification;