import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Details() {
  const { userId } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get('/user-data.json')
      .then(response => {
        const userData = response.data.find(user => user.id === parseInt(userId));
        setUser(userData);
      })
      .catch(error => {
        console.error('Error fetching user details:', error);
      });
  }, [userId]);

  if (!user) {
    return <div>User not found</div>;
  }

  return (
    <div>

       <h1>User Details</h1>
      <h2>Name: {user.name}</h2>
      <p>Email: {user.phone}</p>

    </div>
  )
}
