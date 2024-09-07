import React, { useState } from "react";
import Dashboard from "./Dashboard.jsx"; // Import your Dashboard component
import AddProduct from "./AddProduct.jsx"; 
import Filters from "./Filters.jsx"// Import your AddProduct component
import "./AdminPanel.css"; // Import your CSS file for styling

const AdminPanel = () => {
  const [activeComponent, setActiveComponent] = useState("dashboard");

  // Function to handle button click and set active component
  const handleButtonClick = (componentName) => {
    setActiveComponent(componentName);
  };

  return (
    <div className="admin-panel">
      {/* Sidebar for navigation */}
      <div className="sidebar">
        <button
          className={`sidebar-button ${
            activeComponent === "dashboard" ? "active" : ""
          }`}
          onClick={() => handleButtonClick("dashboard")}
        >
          Dashboard
        </button>
        <button
          className={`sidebar-button ${
            activeComponent === "addProduct" ? "active" : ""
          }`}
          onClick={() => handleButtonClick("addProduct")}
        >
          Add Product
        </button>
                <button
          className={`sidebar-button ${
            activeComponent === "filters" ? "active" : ""
          }`}
          onClick={() => handleButtonClick("filters")}
        >
          Filters
        </button>
      </div>
      
      {/* Content area for displaying the selected component */}
      
        {activeComponent === "dashboard" && <Dashboard />}
        {activeComponent === "addProduct" && <AddProduct />}
          {activeComponent === "filters" && <Filters />}
      
    </div>
  );
};

export default AdminPanel;
