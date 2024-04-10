import React, { useState } from 'react';

const users = ['Jaya', 'John', 'Kavita', 'Lalita', 'Aruna'];

const UsersList = () => {
    return users.map((user) => <h1>{user}</h1>);
  };

const HOC = () => {
  return <div>HOC</div>;
};





export default HOC;
