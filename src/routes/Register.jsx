import React, { useState } from "react";
//hooks
import UseHookValidation from "../hooks/useHookValidation";

const Register = () => {
  const { errorIndex, handleForm, dataForm, error } = UseHookValidation();

  return (
    <section className="section-register">
      <div className="section-register-group">
        <h1>Crie sua conta</h1>

        <form className="section-register-form">
          <label htmlFor="name">
            <input
              placeholder="Seu nome"
              type="text"
              name="name"
              id="name"
              onBlur={handleForm}
            />
          </label>
          <label htmlFor="surname">
            <input
              placeholder="Seu sobrenome"
              type="text"
              name="surname"
              id="surname"
              onBlur={handleForm}
            />
          </label>
          <label htmlFor="email">
            <input
              placeholder="Seu email"
              type="text"
              name="email"
              id="email"
              onBlur={handleForm}
            />
          </label>
          <label htmlFor="password">
            <input
              placeholder="sua senha"
              type="text"
              name="password"
              id="password"
              onChange={handleForm}
              value={dataForm?.password || ""}
            />
          </label>
          <label htmlFor="confirmpassword">
            <input
              placeholder="Confirme sua senha"
              type="text"
              name="confirmpassword"
              id="confirmpassword"
              onChange={handleForm}
              value={dataForm?.confirmpassword || ""}
            />
          </label>

          <button type="submit" disabled={error}>
            Criar conta
          </button>
        </form>
      </div>{" "}
      {/* section-register-group */}
    </section>
  );
};

export default Register;
