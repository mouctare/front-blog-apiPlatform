import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { signout } from "../actions/actions";



const Header = ({ isAuthenticated, userData}) => {
  const dispatch = useDispatch();
  const renderUser = () =>{
    if(null === userData){
      return (   <i className="fas fa-spinner fa-spin" />)
    }

   const handleLogout = () => {
      dispatch(signout());
       toast.info("Vous ete désormais deconnecté 😁");
    }; 

    return (
    <span>
      Hello {userData.name} &nbsp;
       <button className="btn btn-link btn-sm" href="#" onClick={handleLogout}>Logout</button>
    </span>
    )
    
  }
 
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link to="/" className="navbar-brand">
        React Blog
      </Link>

      <span className="navbar-text">
        {isAuthenticated ? (
        renderUser()
        ) : (
          <Link to="/login">Sign-in</Link>
        )}
      </span>
    </nav>
  );
};

export default Header;