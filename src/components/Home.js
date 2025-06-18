import React from 'react';

function Home({ currentPainting, navigateToRandomPainting, isLoaded }) {
  return (
    <div className={`home-hero ${isLoaded ? 'fade-in' : ''}`}>
      <div className="featured-container">
        <button className="nav-arrow left" onClick={navigateToRandomPainting}>
        </button>
        <div className="featured-painting">
          <img src={currentPainting?.image} alt={currentPainting?.title} />
          <div className="painting-title">{currentPainting?.title}</div>
        </div>
        <button className="nav-arrow right" onClick={navigateToRandomPainting}>
        </button>
      </div>
    </div>
  );
}

export default Home;