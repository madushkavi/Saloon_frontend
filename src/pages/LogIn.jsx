import React, { useState } from 'react';
import '../styles/adminmain.css';

export default function LogIn() {
  const [loginFormData, setLoginFormData] = useState({
    username: '',
    password: '',
  });

  const [registrationFormData, setRegistrationFormData] = useState({
    name: '',
    phone: '',
    email: '',
    sex: '',
  });

  const [isRegistering, setIsRegistering] = useState(false);

  const handleInputChange = (event, formType) => {
    const { name, value } = event.target;
    if (formType === 'login') {
      setLoginFormData({
        ...loginFormData,
        [name]: value,
      });
    } else {
      setRegistrationFormData({
        ...registrationFormData,
        [name]: value,
      });
    }
  };

  const handleFormSubmit = (event, formType) => {
    event.preventDefault();
    if (formType === 'login') {
      // Handle login form submission
    } else {
      // Handle registration form submission
    }
  };

  const toggleForm = () => {
    setIsRegistering(!isRegistering);
  };

  return (
    <div className="edit-profile-container">
      <h2>{isRegistering ? 'Register' : 'Login'}</h2>
      <form onSubmit={(e) => handleFormSubmit(e, isRegistering ? 'registration' : 'login')}>
        {isRegistering && (
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={registrationFormData.name}
              onChange={(e) => handleInputChange(e, 'registration')}
              required
            />
          </div>
        )}
        {isRegistering && (
          <div>
            <label htmlFor="phone">Phone</label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={registrationFormData.phone}
              onChange={(e) => handleInputChange(e, 'registration')}
              required
            />
          </div>
        )}
        {isRegistering && (
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={registrationFormData.email}
              onChange={(e) => handleInputChange(e, 'registration')}
              required
            />
          </div>
        )}
        {isRegistering && (
          <div>
            <label htmlFor="sex">Sex</label>
            <select
              id="sex"
              name="sex"
              value={registrationFormData.sex}
              onChange={(e) => handleInputChange(e, 'registration')}
              required
            >
              <option value="">Select Sex</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
        )}
        {!isRegistering && (
          <div>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={loginFormData.username}
              onChange={(e) => handleInputChange(e, 'login')}
              required
            />
          </div>
        )}
        {!isRegistering && (
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={loginFormData.password}
              onChange={(e) => handleInputChange(e, 'login')}
              required
            />
          </div>
        )}
        <div>
          <button type="submit">{isRegistering ? 'Register' : 'Login'}</button>
        </div>
      </form>
      <div>
        <button onClick={toggleForm}>
          {isRegistering ? 'Already have an account? Login' : 'Don\'t have an account? Register'}
        </button>
      </div>
    </div>
  );
}
