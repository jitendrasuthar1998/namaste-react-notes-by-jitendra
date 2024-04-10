import React from 'react';
import WithFetch from './WithFetch';

const MovieList = (props) => {
  const { movies } = props;
  // console.log("movies are == ", movies);

  return (
    <div>
      <h2>Movie List</h2>

      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default WithFetch(MovieList);
