import React from 'react';
import './Banner.css';
import featuredVideo from './assets/your-video.mp4';

function Banner() {
  return (
    <header className="banner">
      <video
        className="banner__video"
        src={featuredVideo}
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="banner__contents">
        <h1 className="banner__title">Featured Movie</h1>
        <p className="banner__description">
          This is a short description of the featured movie. Enjoy the best entertainment now!
        </p>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button banner__button--info">More Info</button>
        </div>
      </div>
      <div className="banner--fadeBottom"></div>
    </header>
  );
}

export default Banner; 