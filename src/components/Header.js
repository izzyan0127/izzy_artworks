import React, { useState } from 'react';

function Header({ activeTab, setActiveTab, handleHomeClick, onGalleryYearSelect }) {
  const [galleryDropdownOpen, setGalleryDropdownOpen] = useState(false);

  const handleGalleryClick = () => {
    setGalleryDropdownOpen((open) => !open);
  };

  const handleGalleryYearSelect = (yearRange) => {
    setActiveTab('gallery');
    if (onGalleryYearSelect) {
      onGalleryYearSelect(yearRange);
    }
    setGalleryDropdownOpen(false);
  };

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
            <div className="nav-tab-dropdown-wrapper">
              <button 
                className={`nav-tab ${activeTab === 'gallery' ? 'active' : ''}`}
                onClick={handleGalleryClick}
                aria-haspopup="true"
                aria-expanded={galleryDropdownOpen}
              >
                Gallery
              </button>
              {galleryDropdownOpen && (
                <div className="nav-dropdown">
                  <button className="dropdown-item" onClick={() => handleGalleryYearSelect('2023')}>
                    2023
                  </button>
                  <button className="dropdown-item" onClick={() => handleGalleryYearSelect('2024')}>
                    2024
                  </button>
                  <button className="dropdown-item" onClick={() => handleGalleryYearSelect('2025')}>
                    2025
                  </button>
                </div>
              )}
            </div>
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