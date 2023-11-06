import React, { useState } from "react";

const SearchBar = ({ onClose, onSearch, customer }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <button onClick={onClose}>Close</button>

      {customer && customer.length > 0 ? (
        <div className="customer-details">
          <h2>Customer Details</h2>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Phone Number</th>
                <th>Email</th>
                <th>Sex</th>
              </tr>
            </thead>
            <tbody>
              {customer.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.phone}</td>
                  <td>{item.email}</td>
                  <td>{item.sex}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p>No customer details found.</p>
      )}
    </div>
  );
};

export default SearchBar;
