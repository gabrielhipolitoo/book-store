import React from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="header-initial">
        <strong id="band">BOOK STORE</strong>
        <div className="header-initial-links">
          <a href="">Biblioteca</a>
          <a href="">Minhas compras</a>
          <a href="">Minhas vendas</a>
          <div className="group-accounts">
            <Link to="/singin" id="singin-account">
              Entrar na conta
            </Link>
          </div>
        </div>{" "}
        {/* header-initial-link */}
      </header>

      <Outlet />
    </>
  );
};

export default Header;
