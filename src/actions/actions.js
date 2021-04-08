import { requests } from "../agent";
import {
  BLOG_POST_LIST_ADD,
  BLOG_POST_LIST_ERROR,
  BLOG_POST_LIST_RECEIVED,
  BLOG_POST_LIST_REQUEST,
  BLOG_POST_RECEIVED,
  BLOG_POST_REQUEST,
  BLOG_POST_ERROR,
  COMMENT_LIST_REQUEST,
  COMMENT_LIST_ERROR,
  COMMENT_LIST_RECEIVED,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_PROFILE_REQUEST,
  USER_PROFILE_ERROR,
  USER_PROFILE_RECEIVED,
  COMMENT_ADDED,
  USER_SET_ID,
 

} from "./constants";

// Tous Les posts
export const blogPostListRequest = () => ({
  type: BLOG_POST_LIST_REQUEST,
});

export const blogPostListError = (error) => ({
  type: BLOG_POST_LIST_ERROR,
  error,
});

export const blogPostListReceive = (data) => ({
  type: BLOG_POST_LIST_RECEIVED,
  data,
});

export const blogPostListFetch = () => {
  return (dispatch) => {
    dispatch(blogPostListRequest());
    return requests
      .get("/posts")
      .then((response) => dispatch(blogPostListReceive(response)))
      .catch((error) => dispatch(blogPostListError(error)));
  };
};

// Récupérer un seul post en lancant la requete
export const blogPostRequest = () => ({
  type: BLOG_POST_REQUEST,
});

// Je capte l'eventuel erreur
export const blogPostError = (error) => ({
  type: BLOG_POST_ERROR,
  error,
});

// Je reçois les data si tout marche bien
export const blogPostReceived = (data) => ({
  type: BLOG_POST_RECEIVED,
  data,
});

// Ici je lance la fonction
export const blogPostFetch = (id) => {
  return (dispatch) => {
    dispatch(blogPostRequest());
    return requests
      .get(`/posts/${id}`)
      .then((response) => dispatch(blogPostReceived(response)))
      .catch((error) => dispatch(blogPostError(error)));
  };
};

export const blogPostAdd = () => ({
  type: BLOG_POST_LIST_ADD,
  data: {
    id: Math.floor(Math.random() * 100 + 3),
    title: "A newly added blog post",
  },
});

// Récupérer un seul post en lancant la requete
export const commentListRequest = () => ({
  type: COMMENT_LIST_REQUEST,
});

// Je capte l'eventuel erreur
export const commentListError = (error) => ({
  type: COMMENT_LIST_ERROR,
  error,
});

// Je reçois les data si tout marche bien
export const commentListReceived = (data) => ({
  type: COMMENT_LIST_RECEIVED,
  data,
});

// Ici je lance la fonction
export const commentListFetch = (id) => {
  return (dispatch) => {
    dispatch(commentListRequest());
    return requests
      .get(`/posts/${id}/comments`)
      .then((response) => dispatch(commentListReceived(response)))
      .catch((error) => dispatch(commentListError(error)));
  };
};

// Declenché l'ajout d'un commentaire
export const commentAdded = (content) => ({
  type: COMMENT_ADDED,
  content,
});

export const commentAdd = (postId, comment) =>{
  
  return (dispatch) =>{
    // Avec beaucoup de galère
     const { content } = comment ;
    return requests.post('/comments', {
    content,
       post: `/api/posts/${postId}`
    }
    ).then(response => dispatch(commentAdded(response)))
  }
}
// Connection
export const userLoginSuccess = (token, userId) => {
  return {
    type: USER_LOGIN_SUCCESS,
    token,
    userId,
  };
};


export const userLoginAttempt = (credentials) => {
 // console.log(credentials);
  return (dispatch) => {
    return requests
      .post("/login_check", credentials, false)
      .then((response) =>
        dispatch(userLoginSuccess(response.token, response.id)));
  };
};






export const signout = () => (dispatch) => {
  //localStorage.removeItem("jwtToken");
  //localStorage.removeItem("userId");
   dispatch({ type: USER_LOGOUT });
};

export const userSetId = (userId) => {
  return {
    type: USER_SET_ID,
    userId
  }
};
export const userProfileRequest = () => {
  return {
    type: USER_PROFILE_REQUEST
   };
};

export const userProfileError = (userId) => {
  return {
    type: USER_PROFILE_ERROR,
    userId
   };

};

export const userProfileReceived = (userId, userData) => {
  return {
    type: USER_PROFILE_RECEIVED,
    userData,
    userId
   };

};

export const userProfileFetch = (userId, userData) => {
    return (dispatch) => {
      dispatch(userProfileRequest());
      //console.log("Id ACT",userId)
      return requests.get(`/users/${userId}`, true).then(
        response => dispatch(userProfileReceived(userId, response))
      ).catch(() => dispatch(userProfileError(userId)))
    };
    
  };
  



  
  

