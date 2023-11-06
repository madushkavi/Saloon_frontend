import React, { useState } from 'react';
import "../styles/EditProfile.css";

const EditProfile = ({ userInfo, handleSave }) => {
  const [updatedInfo, setUpdatedInfo] = useState(userInfo);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedInfo({
      ...updatedInfo,
      [name]: value
    });
  };

  return (
    <div className="edit-profile-container">
      <h2>Edit Profile</h2>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={updatedInfo.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Address:</label>
        <input
          type="text"
          name="address"
          value={updatedInfo.address}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Phone Number:</label>
        <input
          type="text"
          name="phoneNumber"
          value={updatedInfo.phoneNumber}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={updatedInfo.email}
          onChange={handleChange}
        />
      </div>
      <button onClick={() => handleSave(updatedInfo)}>Save</button>
    </div>
  );
};

export default EditProfile;
