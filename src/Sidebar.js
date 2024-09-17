import React from 'react';


const Sidebar = ({ activeSection, onScrollToSection }) => {
  return (
    <div className="sidebar">
      <h1 style={{ color: 'white' }} className="sidebar-header">LEARNSat</h1>
      <ul className="sidebar-list">
        <li
          className={`sidebar-item ${activeSection === 'intro' ? 'active' : ''}`}
          onClick={() => onScrollToSection('intro')}
        >
          Welcome
        </li>
        <li
          className={`sidebar-item ${activeSection === 'details' ? 'active' : ''}`}
          onClick={() => onScrollToSection('details')}
        >
          Overview
        </li>
        <li
          className={`sidebar-item ${activeSection === 'features' ? 'active' : ''}`}
          onClick={() => onScrollToSection('features')}
        >
          Key Features
        </li>
        <li
          className={`sidebar-item ${activeSection === 'contact' ? 'active' : ''}`}
          onClick={() => onScrollToSection('contact')}
        >
          Contact Us
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
