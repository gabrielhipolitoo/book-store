import React, { useEffect } from "react";
import UseRegex from "./useRegex";

//hookform
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { object, ref, string } from "yup";

function UseHookValidation() {
  const schema = object({
    name: string().matches(
      /^(?=.*[a-zA-Z])[a-zA-Z]{4,}$/,
      "O nome precisa de no minimo 4 caracteres"
    ),
    surname: string().required("Digte seu sobrenome"),
    email: string().email("email invalido").required("Email é obrigatorio"),
    password: string().required("a senha é obrigatoria"),
    confirmpassword:string().oneOf([ref('password'),null],'As senhas devem coincidir').required('Confirme a sua senha')
  });

  const {
    register,
    handleSubmit: onSubmit,
    watch,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema), mode: "onBlur", defaultValues:async () => fetch('teste.com')});

  const handleSubmit = (data) => {
    console.log(data);
  };

  return { handleSubmit, onSubmit, errors, register };
}

export default UseHookValidation;
