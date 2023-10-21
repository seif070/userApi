import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UserList() {
  const [listOfUsers, setListOfUsers] = useState([]);

useEffect(() => {
const fetchData = async () => {
try {
const response = await axios.get('https://jsonplaceholder.typicode.com/users');
setListOfUsers(response.data);
} catch (error) {
console.error('Error fetching data: ', error);
}
};

fetchData();
}, []);


return (
<div className="user-card-list">
{listOfUsers.map((user) => (
<div key={user.id} className="user-card">
<h2>{user.name}</h2>
<p>Username: {user.username}</p>
<p>Email: {user.email}</p>
<p>Adresse: {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}</p>
<p>Téléphone: {user.phone}</p>
<p>Site web: {user.website}</p>
<p>Entreprise: {user.company.name}</p>
</div>
))}
</div>
);
}

export default UserList;
