import React from "react";
import { Link, useNavigate } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import style from "./Nav.module.css";
import logo from "../../assets/logo.png";
  const Nav = ({onSearch,setAccess}) => {
  const navigate = useNavigate() 

  const handleRandomCharacter = () => {
    const randomId = Math.floor(Math.random() * 826) + 1;
    onSearch(randomId.toString());
  };

  const handleLogOut = () => {
    setAccess(false);
    navigate("/")
  }

    return (
      <div className={style.nav}>
        <img src={logo} alt="Logo de Rick and Morty" />
        <SearchBar onSearch={onSearch} />
        <button onClick={handleRandomCharacter}>Personaje Aleatorio</button>
        <button onClick={handleLogOut}>Logout</button>
        <div className={style.menu}>
        <Link to="/about">About</Link>
        <Link to="/home">Home</Link>
        <Link to="/favorites">Favorites</Link> 
        </div>
      </div>
    );
}

export default Nav;
