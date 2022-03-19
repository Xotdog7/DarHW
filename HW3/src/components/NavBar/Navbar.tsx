import React from "react";
import { Link, NavLink } from "react-router-dom";
import style from "./Navbar.module.scss";
const Navbar = () => {
  return (
    <div className={style.left}>
      <li>
        <Link className={style.none} to="/actor">Актеры</Link>
      </li>
      <li>
        <Link className={style.none} to="/movie">Фильмы</Link>
      </li>
    </div>
  );
};

export default Navbar;
