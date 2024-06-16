import Admin from "./pages/Admin";
import React from "react";
import ProtectedRoute from "./components/ProtectedRoute";
import { Routes, Route, useLocation } from "react-router-dom";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SecondPro from "./pages/SecondPro";
import CreateFood from "./pages/CreateFood";
import EditFood from "./pages/EditFood";
import DeleteFood from "./pages/DeleteFood";
// import DeleteItem from "./pages/DeleteFood";
import Login from "./pages/Login";
import Register from "./pages/Register";
import SignUp from "./pages/Register";
import AdminNavbar from "./pages/AdminNavbar";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Footer from "./pages/Footer";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Success from "./pages/Success";
import Cancel from "./pages/Cancel";
import Dashboard from "./pages/Dashboard";
import DeleteOrder from "./pages/DeleteOrder";

const App = () => {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <>
      {isAdminRoute ? <AdminNavbar/> : <Navbar/> }  
    <Routes>
       <Route path="/" element={<Home/>} />
       <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/cart" element={<Cart/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/success" element={<Success/>} />
      <Route path="/cancel" element={<Cancel/>} />
      <Route path="/register" element={<SignUp/>} /> 
      <Route
        path="/admin/*"
        element={
          <ProtectedRoute>
            <AdminRoutes/>
          </ProtectedRoute>
        }
      />
    </Routes>
    

    </>
  );
};



const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Admin/>} />
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path="/order/delete/:id" element={<DeleteOrder/>} />
      <Route path="/food/create" element={<CreateFood/>} />
      <Route path="/food/edit/:id" element={<EditFood/>} />
      <Route path="/food/delete/:id" element={<DeleteFood />} />
      <Route  path="/food/create" element={<SecondPro/>} />
    </Routes>
  );
};

export default App;