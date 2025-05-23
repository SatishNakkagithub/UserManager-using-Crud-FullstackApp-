import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function EditUser() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [user, setUser] = useState({
    name: "",
    username: "",
    email: ""
  });

  const { name, username, email } = user;

  useEffect(() => {
    loadUser();
  }, []);

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/user/${id}`, user);
    navigate("/");
  };

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8080/user/${id}`);
    setUser(result.data);
  };

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
          <h2 className='text-center m-4'>Edit User</h2>
          <form onSubmit={onSubmit}>
            <div className='mb-3'>
              <label htmlFor='name' className='form-label'>Name</label>
              <input
                type='text'
                className='form-control'
                placeholder='Enter your name'
                name='name'
                value={name}
                onChange={onInputChange}
              />
            </div>
            <div className='mb-3'>
              <label htmlFor='username' className='form-label'>Username</label>
              <input
                type='text'
                className='form-control'
                placeholder='Enter your username'
                name='username'
                value={username}
                onChange={onInputChange}
              />
            </div>
            <div className='mb-3'>
              <label htmlFor='email' className='form-label'>E-mail</label>
              <input
                type='email'
                className='form-control'
                placeholder='Enter your e-mail address'
                name='email'
                value={email}
                onChange={onInputChange}
              />
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-outline-primary">
                Update
              </button>
              <Link className="btn btn-outline-danger mx-2" to="/">
                Cancel
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
