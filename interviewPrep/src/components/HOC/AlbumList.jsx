import React from 'react';
import WithFetch from './WithFetch';

const AlbumList = (props) => {
  const { movies } = props;

  return (
    <div style={{ backgroundColor: 'blue', marginTop: '40px' }}>
      {movies.map((movie) => (
        <li key={movie.id}>{movie.title}</li>
      ))}
    </div>
  );
};

export default WithFetch(AlbumList);
