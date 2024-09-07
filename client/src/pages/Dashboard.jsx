import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css'; // Import your updated CSS file for styling

const Dashboard = () => {
  const [listings, setListings] = useState([]); // State to hold all listings
  const [error, setError] = useState(null); // State to hold error messages

  // Fetch all listings when the component mounts
  useEffect(() => {
    fetchListings();
  }, []);

  // Function to fetch listings from the backend
  const fetchListings = async () => {
    try {
      const response = await fetch('/api/listing/get'); // Adjust URL to match your API endpoint
      if (!response.ok) {
        throw new Error('Failed to fetch listings');
      }
      const data = await response.json();
      setListings(data);
    } catch (err) {
      setError(err.message);
    }
  };

  // Function to delete a listing by ID
  const deleteListing = async (id) => {
    try {
      const response = await fetch(`/api/listing/delete/${id}`, {
        method: 'DELETE',
      }); // Adjust URL to match your API endpoint
      if (!response.ok) {
        throw new Error('Failed to delete listing');
      }
      setListings(listings.filter((listing) => listing._id !== id)); // Remove the deleted listing from state
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="dashboard">
      <h1 className="dashboard-title">Product Dashboard</h1>

      {/* Error Message */}
      {error && <p className="error">{error}</p>}

      {/* Listings Grid */}
      <div className="listings-grid">
        {listings.map((listing) => (
          <div className="listing-card" key={listing._id}>
            <div className="listing-img">
              <img
                src={listing.imageUrls[0]} // Assuming first image is the main image
                alt={listing.name}
                className="object-cover"
              />
            </div>
            <div className="listing-info">
              <h2>{listing.name}</h2>
              <p>Price: ${listing.price}</p>
              <p>Series: {listing.series || 'N/A'}</p>
              <div className="listing-buttons">
                {/* <Link to={`/listing/${listing._id}`} className="view-details-button">
                  View Details
                </Link> */}
                <button
                  className="delete-button"
                  onClick={() => deleteListing(listing._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
