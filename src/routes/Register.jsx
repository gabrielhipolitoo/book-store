import React, { useState } from "react";
import UseHookValidation from "../hooks/useHookValidation";

const Register = () => {
  const { handleSubmit, onSubmit, errors, register, loading } =
    UseHookValidation();

  return (
    <section className="section-register">
      <div className="section-register-group">
        <h1>Crie sua conta</h1>

        <form
          onSubmit={onSubmit(handleSubmit)}
          className="section-register-form"
          method="post"
        >
          <label htmlFor="name">
            <input
              placeholder={errors.name ? errors.name?.message : "Seu nome"}
              type="text"
              id="name"
              style={errors.name ? { borderBottom: "1px solid red" } : {}}
              {...register("name")}
            />
          </label>
          <label htmlFor="surname">
            <input
              placeholder="Seu sobrenome"
              type="text"
              id="surname"
              style={errors.surname ? { borderBottom: "1px solid red" } : {}}
              {...register("surname")}
            />
          </label>
          <label htmlFor="email">
            <input
              placeholder="Seu email"
              type="text"
              id="email"
              style={errors.email ? { borderBottom: "1px solid red" } : {}}
              {...register("email")}
            />
          </label>
          <label htmlFor="password">
            <input
              placeholder="sua senha"
              type="text"
              id="password"
              style={errors.password ? { borderBottom: "1px solid red" } : {}}
              {...register("password")}
            />
          </label>
          <label htmlFor="confirmpassword">
            <input
              placeholder="Confirme sua senha"
              type="text"
              id="confirmpassword"
              {...register("confirmpassword")}
            />
          </label>
          {loading ? <p>Carregando</p> : ""}
          {errors ? (
            <p id="messageError">{Object.values(errors)[0]?.message}</p>
          ) : (
            ""
          )}
          <button type="submit">Criar conta</button>
        </form>
      </div>{" "}
      {/* section-register-group */}
    </section>
  );
};

export default Register;
