import jwtDecode from "jwt-decode";
import { requests } from "../agent";


function setup(){
    const token = localStorage.getItem("jwtToken");
    // 2. Si le token est encor valide
    if(token) {
      const {exp : expiration}= jwtDecode(token);
      if(expiration * 1000 > new Date().getTime()) {  // Afin détre connecté un moment sans avoir à
        // se reconnecter à chaque rechargement de page
       // axios.defaults.headers["Authorization"] = "Bearer " + token;
       requests.setToken(token);
       } 
      }
    }

    
     
     export default{
       setup,
       
    
    };