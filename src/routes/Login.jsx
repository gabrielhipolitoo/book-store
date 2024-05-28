import React, { useState } from "react";
import { Link } from "react-router-dom";

const login = () => {
  const [controllerPageAuth, setControllerPageAuth] = useState(null);

  return (
    <section className="section-login">
      <div className="section-login-group">
        <h1>Entre na sua conta</h1>

        <form className="section-login-form" action="">
          <label htmlFor="email">
            <input
              placeholder="Seu email"
              type="text"
              name="email"
              id="email"
            />
          </label>
          <label htmlFor="password">
            <input
              placeholder="sua senha"
              type="text"
              name="password"
              id="password"
            />
          </label>

          <button type="submit">Entrar</button>
          <span>Não tem uma conta?</span>
          <Link to="/singup">Criar conta</Link>
        </form>
      </div>{" "}
      {/* section-login-group */}
    </section>
  );
};

export default login;
