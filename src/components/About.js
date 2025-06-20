import React from 'react';

function About({ isLoaded }) {
  return (
    <div className={`${isLoaded ? 'fade-in' : ''}`}>
      <div className="about-content">
        <h2 className="about-title">About the Artist</h2>
        <p className="about-text">
          Isabelle (Izzy) An is a young artist whose work explores the intersection of nature, 
          emotion, and the human experience. Born in Philadelphia and now a student 
          in Haverford Middle School, her paintings 
          capture fleeting moments of beauty and contemplation through vibrant colors and dynamic compositions.
        </p>
        <p className="about-text">
          Working primarily in watercolor, pencil, and acrylic painting, Izzy's artistic journey began in childhood, 
          sketching the landscapes, shapes, and figures of her encounters. Her formal training at 
          the Miao's Art School shaped her technical foundation.
        </p>
        <p className="about-text">
          Izzy's work has been featured in the school district superintendent's office. 
          Each painting tells a story, inviting the observer to discover their own narrative 
          within the layers of color and form.
        </p>
      </div>
    </div>
  );
}

export default About;