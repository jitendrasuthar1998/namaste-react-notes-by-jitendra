import React, { useState } from 'react';

const usersData = ['Jaya', 'John', 'Kavita', 'Lalita', 'Aruna'];

const UsersList = () => {
  const [text, setText] = useState('');

  const [resultItem, setResultItem] = useState('');
  const [users, setUsers] = useState(usersData);

  const handleSearch = () => {
    const item = users.find((user) => user === text);
    console.log(item);
    setResultItem(item);
  };

  return (
    <>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={() => handleSearch()} className='p-4 border-2 border-black'>Search</button>
      {users.map((user) => (
        <h4 style={{border:resultItem == user ? "1px solid red" : null}}
        >
          {user}
        </h4>
      ))}
    </>
  );
};

export default UsersList;