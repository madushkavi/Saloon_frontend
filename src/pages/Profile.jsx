import React, { useState } from 'react';
import EditProfile from '../components/EditProfile';
import "../styles/Profile.css";

const Profile = () => {
  const [userInfo, setUserInfo] = useState({
    name: 'rivi kavindya',
    address: '123 Main Street',
    phoneNumber: '0716513618',
    email: 'rivi.doe@example.com'
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = (updatedInfo) => {
    setUserInfo(updatedInfo);
    setIsEditing(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({
      ...userInfo,
      [name]: value
    });
  };

  return (
    <div className="profile-container">
      <h2>Profile Information</h2>
      {isEditing ? (
        <div>
          <table>
            <tbody>
              <tr>
                <td><label>Name:</label></td>
                <td>
                  <input 
                    type="text" 
                    name="name" 
                    value={userInfo.name} 
                    onChange={handleChange} 
                  />
                </td>
              </tr>
              <tr>
                <td><label>Address:</label></td>
                <td>
                  <input 
                    type="text" 
                    name="address" 
                    value={userInfo.address} 
                    onChange={handleChange} 
                  />
                </td>
              </tr>
              <tr>
                <td><label>Phone Number:</label></td>
                <td>
                  <input 
                    type="text" 
                    name="phoneNumber" 
                    value={userInfo.phoneNumber} 
                    onChange={handleChange} 
                  />
                </td>
              </tr>
              <tr>
                <td><label>Email:</label></td>
                <td>
                  <input 
                    type="text" 
                    name="email" 
                    value={userInfo.email} 
                    onChange={handleChange} 
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <button onClick={() => handleSave(userInfo)}>Save</button>
        </div>
      ) : (
        <div>
          <table>
            <tbody>
              <tr>
                <td><label>Name:</label></td>
                <td>{userInfo.name}</td>
              </tr>
              <tr>
                <td><label>Address:</label></td>
                <td>{userInfo.address}</td>
              </tr>
              <tr>
                <td><label>Phone Number:</label></td>
                <td>{userInfo.phoneNumber}</td>
              </tr>
              <tr>
                <td><label>Email:</label></td>
                <td>{userInfo.email}</td>
              </tr>
            </tbody>
          </table>
          <button onClick={handleEdit}>Edit Profile</button>
        </div>
      )}
    </div>
  );
};

export default Profile;
