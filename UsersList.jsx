import React, { useState } from 'react';

const users = ['Jaya', 'John', 'Kavita', 'Lalita', 'Aruna'];

const UsersList = () => {
  const [text, setText] = useState('');

  const [resultItem, setResultItem] = useState('');
  const [users, setUsers] = useState(users);

  const handleSearch = () => {
    const item = users.find((user) => user === text);
    setResultItem(item);
  };

  return (
    <>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={() => handleSearch()}></button>
      {users.map((user) => (
        <h1
          className={`border p-4 ${resultItem == user ? 'border-red-500' : ''}`}
        >
          {product}
        </h1>
      ))}
    </>
  );
};
