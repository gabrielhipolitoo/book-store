import React, { useEffect } from "react";
import UseRegex from "./useRegex";

import { useState } from "react";

function UseHookValidation(data, locationData) {
  const { validName, validNameNumber, validEmail,validPassword } = UseRegex();
  const [dataForm, setDataform] = useState({});
  const [errorIndex, setErrorIndex] = useState("border-bottom:1px solid red");
  const [error, setError] = useState([]);

  const errorMessage = {
    name: "O nome precisa ter no minimo 4 caracteres",
    sobrenome: "",
    email: "Email inválido",
  };

  console.log(error);

  const handleForm = (e) => {
    const { name, value } = e.target;
    setDataform((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {
    if (!validName.test(dataForm.name)) {
      setError((prevState) => [prevState, errorMessage["name"]]);
    } 

    else if (!validName.test(dataForm.email)) {
      setError((prevState) => [prevState, errorMessage["email"]]);
    } 

    else {
      setError("");
    }
  }, [dataForm]);

  console.log(dataForm);

  // useEffect(() => {
  //   registerValidation();
  // }, [dataForm]);

  // const registerValidation = () => {

  // };

  // useEffect(() => {
  //   if (!validName.test(dataForm.name?.value)) {
  //     setError((prevState) => ({
  //       ...prevState,
  //       name: errorMessage("name")
  //     }));
  //   }

  //   else {
  //     setError(null);
  //   }
  // }, [dataForm]);

  return {
    handleForm,
    dataForm,
    error,
    errorIndex,
  };
}

export default UseHookValidation;
