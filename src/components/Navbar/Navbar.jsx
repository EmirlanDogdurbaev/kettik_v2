import { useState } from "react";
import { NavLink } from "react-router-dom";
import Booked from "../Booked/Booked";
import Search from "../Search/Search";
import cl from "./Navbar.module.scss";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  const openModalSearch = () => {
    setSearch(true);
  };
  const closeModalSearch = () => {
    setSearch(false);
  };
  console.log(isOpen);
  return (
    <nav className={cl.Navbar}>
      <ul>
        <li>
          {" "}
          <NavLink to="/">Главная</NavLink>{" "}
        </li>
        <li>
          {" "}
          <NavLink to="/about">О нас</NavLink>{" "}
        </li>
        <li>
          <NavLink to="/tours">Туры</NavLink>
        </li>
        <li>
          <button onClick={openModal} className={cl.book}>
            Забронировать
          </button>
          {isOpen && <Booked closeModal={closeModal} />}
        </li>
        <li>
          <button onClick={openModalSearch} className={cl.search}>
            Поиск
          </button>
          {search && <Search closeModal={closeModalSearch} />}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
