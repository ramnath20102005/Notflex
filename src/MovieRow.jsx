import React from 'react';
import './MovieRow.css';

function MovieRow({ title, posters }) {
  return (
    <section className="row">
      <h2 className="row__title">{title}</h2>
      <div className="row__posters">
        {posters.map((url, idx) => (
          <img key={idx} className="row__poster" src={url} alt="Movie poster" />
        ))}
      </div>
    </section>
  );
}

export default MovieRow; 