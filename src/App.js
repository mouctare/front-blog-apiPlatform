import React, { useEffect } from "react";
import { BrowserRouter, Switch, Route, withRouter } from "react-router-dom";
import BlogPostContainer from "./components/BlogPostContainer";
import BlogPostListContainer from "./components/BlogPostListContainer";
import Header from "./components/Header";
import LoginForm from "./components/LoginForm";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { userProfileFetch,  userLogout } from "./actions/actions";
import auth from "./services/auth";


 auth.setup();

function App() {

  const HeaderWithRouter = withRouter(Header);

  const authUser = useSelector((state) => state.userAuthReducer);

  console.log( authUser);
  const { isAuthenticated, userId,  userData, userLogout} = authUser;
  
  
  const dispatch = useDispatch();

  useEffect(() => {
  // const userId = localStorage.getItem('userId');
  // console.log("Id", userId);

     if (userId) dispatch(userProfileFetch(userId))
    
 },  [userId, dispatch]);

 
  return (
    <BrowserRouter>
      <div className="grid-container">
        <HeaderWithRouter isAuthenticated={isAuthenticated} userData={userData} logout={userLogout} />
        <main className="main">
          <div className="content">
            <Switch>
              <Route path="/login" component={LoginForm} />
              <Route path="/posts/:id" component={BlogPostContainer} />
              <Route path="/posts" component={BlogPostListContainer} />
            </Switch>
          </div>
        </main>
        <ToastContainer position={toast.POSITION.BOTTOM_LEFT} />
      </div>
    </BrowserRouter>
  );
}

export default App;