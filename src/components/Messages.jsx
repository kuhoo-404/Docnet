import React, { useState } from "react";
import Navbar from "./Navbar";
import "./Messages.css"; 

const Messages = () => {
  const [selectedChat, setSelectedChat] = useState("Person 1");
  const [searchQuery, setSearchQuery] = useState("");
  const [message, setMessage] = useState("");

  const chats = [
    { id: 1, name: "Person 1", lastMessage: "Hey, how are you?", time: "2m ago", unread: 2, online: true },
    { id: 2, name: "Person 2", lastMessage: "Thanks for your help!", time: "1h ago", unread: 0, online: false },
    { id: 3, name: "Person 3", lastMessage: "See you tomorrow!", time: "3h ago", unread: 1, online: true },
  ];

  const messages = [
    { id: 1, sender: "Person 1", text: "Hey! How are you doing?", time: "10:30 AM", isOwn: false },
    { id: 2, sender: "You", text: "I'm doing great! Thanks for asking.", time: "10:32 AM", isOwn: true },
    { id: 3, sender: "Person 1", text: "That's good to hear!", time: "10:33 AM", isOwn: false },
  ];

  const handleSendMessage = () => {
    if (message.trim()) {
      console.log("Sending message:", message);
      setMessage("");
    }
  };

  return (
    <div className="messages-page">
      <div className="messages-container">
        {/* Sidebar */}
        <div className="sidebar">
          <div className="sidebar-header">
            <h2 className="sidebar-title">Messages</h2>
            <button className="compose-btn" title="New Chat">
              <svg className="compose-icon" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"/>
              </svg>
            </button>
          </div>

          <div className="search-container">
            <svg className="search-icon" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"/>
            </svg>
            <input
              type="text"
              className="search-input"
              placeholder="Search conversations..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="chat-list">
            {chats.map((chat) => (
              <div
                key={chat.id}
                className={`chat-item ${selectedChat === chat.name ? 'active' : ''}`}
                onClick={() => setSelectedChat(chat.name)}
              >
                <div className="chat-avatar">
                  <div className="avatar-circle">
                    {chat.name.charAt(0)}
                  </div>
                  {chat.online && <div className="online-dot"></div>}
                </div>
                <div className="chat-info">
                  <div className="chat-top">
                    <h4 className="chat-name">{chat.name}</h4>
                    <span className="chat-time">{chat.time}</span>
                  </div>
                  <div className="chat-bottom">
                    <p className="last-message">{chat.lastMessage}</p>
                    {chat.unread > 0 && (
                      <span className="unread-badge">{chat.unread}</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button className="new-chat-btn">
            <svg className="btn-icon" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd"/>
            </svg>
            Start New Chat
          </button>
        </div>

        {/* Chat Window */}
        <div className="chat-window">
          <div className="chat-header">
            <div className="header-left">
              <div className="header-avatar">
                <div className="avatar-circle-header">
                  {selectedChat.charAt(0)}
                </div>
                <div className="online-dot-header"></div>
              </div>
              <div className="header-info">
                <h3 className="header-name">{selectedChat}</h3>
                <span className="header-status">Active now</span>
              </div>
            </div>
            <div className="header-actions">
              <button className="action-btn" title="Voice Call">
                <svg className="action-icon" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                </svg>
              </button>
              <button className="action-btn" title="Video Call">
                <svg className="action-icon" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"/>
                </svg>
              </button>
              <button className="action-btn shared-media-btn" title="Shared Media">
                <svg className="action-icon" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd"/>
                </svg>
              </button>
            </div>
          </div>

          <div className="chat-body">
            <div className="date-divider">
              <span>Today</span>
            </div>
            {messages.map((msg) => (
              <div key={msg.id} className={`message ${msg.isOwn ? 'own' : 'other'}`}>
                {!msg.isOwn && (
                  <div className="message-avatar">
                    <div className="avatar-circle-small">
                      {msg.sender.charAt(0)}
                    </div>
                  </div>
                )}
                <div className="message-content">
                  <div className="message-bubble">
                    <p className="message-text">{msg.text}</p>
                  </div>
                  <span className="message-time">{msg.time}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="chat-footer">
            <button className="attach-btn" title="Attach file">
              <svg className="attach-icon" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z" clipRule="evenodd"/>
              </svg>
            </button>
            <div className="input-wrapper">
              <input
                type="text"
                className="message-input"
                placeholder="Type a message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              />
              <button className="emoji-btn" title="Add emoji">
                <svg className="emoji-icon" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z" clipRule="evenodd"/>
                </svg>
              </button>
            </div>
            <button className="send-btn" onClick={handleSendMessage}>
              <svg className="send-icon" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <Navbar />
    </div>
  );
};

export default Messages;