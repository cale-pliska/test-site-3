import React, { useState } from 'react';

import '../app/globals.css'; // Import the globals.css file

export default function Home() {
  const [message, setMessage] = useState('');

  const handleClick = async () => {
    const response = await fetch('http://localhost:4000/message');
    const data = await response.text();
    setMessage(data);
  }

  return (
    <div>
      <p>Hello on the frontend!</p>
      <button onClick={handleClick}>Click me</button>
      {message && <p>{message}</p>}
    </div>
  )
}