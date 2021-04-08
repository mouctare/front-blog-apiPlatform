import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { userLoginAttempt } from "../actions/actions";
import Field from "../components/forms/Field";

const LoginForm = ({ history }) => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  //const authuser = useSelector((state) => state.userAuthReducer);
  // const { error } = authuser;
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  // Gestion des champs
  const handleChange = ({ currentTarget }) => {
    const { value, name } = currentTarget;
    //const value = currentTarget.value;
    //const name = currentTarget.name;

    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await dispatch(userLoginAttempt(credentials));
      setError("");
      //setIsAuthenticated(true);
      toast.success("Vous etes désormais connecté ! ");
      history.push("/posts");
    } catch (error) {
      setError(
        "Aucun compte ne possède cette adresse  email ou alors les informations ne  corespondent pas !"
      );
      toast.error("Une erreur est survenue");
    }
  };

  return (
    <div className="container">
      <h1>Connexion à l'application</h1>

      <form onSubmit={handleSubmit}>
        <Field
          label="Nom d'utilisateur"
          name="username"
          value={credentials.username}
          onChange={handleChange}
          placeholder="Entrez votre nom d'utilisateeur pour vous connecter"
          error={error}
        />

        <Field
          name="password"
          label="Mot de passe"
          value={credentials.password}
          onChange={handleChange}
          type="password"
          error=""
        />

        <button type="submit" className="btn btn-primary btn-big btn-block">
          je me connecte
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
