import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Gallery from './components/Gallery';
import About from './components/About';
import { paintings } from './data/paintings';

function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentPainting, setCurrentPainting] = useState(null);
  const [galleryYearRange, setGalleryYearRange] = useState('2025');

  // Function to get random painting
  const getRandomPainting = () => {
    const randomIndex = Math.floor(Math.random() * paintings.length);
    return paintings[randomIndex];
  };

  // Initialize with random painting on load
  useEffect(() => {
    setCurrentPainting(getRandomPainting());
    setIsLoaded(true);
  }, []);

  // Handle navigation arrows
  const navigateToRandomPainting = () => {
    let newPainting;
    do {
      newPainting = getRandomPainting();
    } while (newPainting.id === currentPainting?.id && paintings.length > 1);
    setCurrentPainting(newPainting);
  };

  // Handle painting click from gallery
  const selectPainting = (painting) => {
    setCurrentPainting(painting);
    setActiveTab('home');
  };

  // Reset to random painting when home tab is clicked
  const handleHomeClick = () => {
    if (activeTab !== 'home') {
      setCurrentPainting(getRandomPainting());
    }
    setActiveTab('home');
  };

  // Filter paintings by year range
  const getFilteredPaintings = () => {
    if (galleryYearRange === '2023') {
      return paintings.filter(p => p.year == 2023);
    } else if (galleryYearRange === '2024') {
      return paintings.filter(p => p.year == 2024);
    } else if (galleryYearRange === '2025') {
        return paintings.filter(p => p.year == 2025);
    }
    return paintings;
  };

  return (
    <div className="App">
      <Header 
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        handleHomeClick={handleHomeClick}
        onGalleryYearSelect={setGalleryYearRange}
      />
      
      <main className="main-content">
        <div className="container">
          {activeTab === 'home' && (
            <Home 
              currentPainting={currentPainting}
              navigateToRandomPainting={navigateToRandomPainting}
              isLoaded={isLoaded}
            />
          )}
          {activeTab === 'gallery' && (
            <Gallery 
              paintings={getFilteredPaintings()}
              selectPainting={selectPainting}
              isLoaded={isLoaded}
            />
          )}
          {activeTab === 'about' && (
            <About isLoaded={isLoaded} />
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
