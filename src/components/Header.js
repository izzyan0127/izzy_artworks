import React from 'react';

function Header({ activeTab, setActiveTab, handleHomeClick }) {
  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <h1 className="artist-name">ISABELLA Y. AN</h1>
          <div className="nav-tabs">
            <button 
              className={`nav-tab ${activeTab === 'home' ? 'active' : ''}`}
              onClick={handleHomeClick}
            >
              Home
            </button>
            <button 
              className={`nav-tab ${activeTab === 'gallery' ? 'active' : ''}`}
              onClick={() => setActiveTab('gallery')}
            >
              Gallery
            </button>
            <button 
              className={`nav-tab ${activeTab === 'about' ? 'active' : ''}`}
              onClick={() => setActiveTab('about')}
            >
              About
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;