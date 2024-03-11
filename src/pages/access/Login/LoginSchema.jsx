import * as Yup from "yup";

export const loginSchema = Yup.object({
  email: Yup.string().email().required("Email é obrigatório"),
  password: Yup.string().min(6).required("Por favor, defina uma senha")
});
