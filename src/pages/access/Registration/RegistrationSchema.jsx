import * as Yup from "yup";

export const registrationSchema = Yup.object({
  email: Yup.string().email().required("Email é obrigatório"),
  first: Yup.string().min(2).max(20).required("Primeiro nome é obrigatório"),
  last: Yup.string().min(2).max(20).required("Sobrenome é obrigatório"),
  password: Yup.string().min(6).required("Por favor, defina uma senha"),
  repassword: Yup.string()
    .required("Confirmação de senha é obrigatório")
    .oneOf([Yup.ref("password"), null], "Senha não coincide"),
});
