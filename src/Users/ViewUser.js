import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

export default function ViewUser() {
  const [user, setUser] = useState({});
  const { id } = useParams();

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8080/user/${id}`);
    setUser(result.data);
  };

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6 offset-md-3 border rounded p-4 mt-4 mb-4 shadow'>
          <h2 className='text-center m-4'>User Details</h2>
          <div className='card'>
            <div className='card-header'>
              Details of user id: <b>{id}</b>
              <ul className="list-group list-group-flush mt-3">
                <li className='list-group-item'><b>Name:</b> {user.name}</li>
                <li className='list-group-item'><b>Username:</b> {user.username}</li>
                <li className='list-group-item'><b>Email:</b> {user.email}</li>
              </ul>
            </div>
          </div>
          <div className='text-center'>
            <Link className='btn btn-primary my-3' to="/">Back to Home</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
