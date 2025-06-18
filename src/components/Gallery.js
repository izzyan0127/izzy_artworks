import React from 'react';

function Gallery({ paintings, selectPainting, isLoaded }) {
  const sortedPaintings = [...paintings].sort((a, b) => b.year - a.year);

  return (
    <div className={`${isLoaded ? 'fade-in' : ''}`}>
      <h2 className="section-title">Gallery</h2>
      <div className="gallery-grid">
        {sortedPaintings.map(painting => (
          <div 
            key={painting.id} 
            className="painting-card"
            onClick={() => selectPainting(painting)}
          >
            <img src={painting.image} alt={painting.title} />
            <div className="card-info">
              <h3 className="card-title">{painting.title}</h3>
              <div className="card-year">{painting.year}</div>
              <div className="card-medium">{painting.medium}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;