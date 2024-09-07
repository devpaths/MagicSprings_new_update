import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";

import Header from "./Components/Header";
import PrivateRoute from "./Components/PrivateRoute";
import Profile from "./pages/Profile";
import AddProduct from "./pages/AddProduct";
import Search from "./pages/Search";
import ListingDetail from "./pages/ListingDetails";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Dashboard from "./pages/Dashboard";
import AdminPanel from "./pages/AdminPanel";
import OurProduct from "./pages/OurProducts";

function App() {
  const location = useLocation();

  return (
    <>
      {location.pathname === "/" ? <Navbar /> : <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/search" element={<Search />} />
        <Route path="/ourproducts" element={<OurProduct />} />
        <Route path="/listing/:id" element={<ListingDetail />} />
        <Route element={<PrivateRoute />}>
          <Route path="/addproduct" element={<AddProduct />} />
          <Route path="/Dashboard" element={<AdminPanel />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
      <Footer />
      {/* <Footer /> */}
    </>
  );
}

export default App;
