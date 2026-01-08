import { SharedButton } from "@/components/SharedButton/SharedButton";
import { SharedInput } from "@/components/SharedInput/SharedInput";
import { useLogin } from "@/lib/Auth/hooks/useLogin";
import { images } from "@/lib/images";
import { Form, Formik } from "formik";
import * as yup from "yup";

export const Login = () => {
  const LoginFormInitialValues = {
    login: "",
    password: "",
  };
  const loginSchema = yup.object({
    login: yup.string().required("El usuario es obligatorio"),
    password: yup.string().required("La contraseña es obligatoria"),
  });

  const { loading, login } = useLogin();

  return (
    <>
      <Formik
        initialValues={LoginFormInitialValues}
        validationSchema={loginSchema}
        onSubmit={(values) => {
          login(values);
        }}
      >
        {({ values, errors, touched, handleChange, handleBlur }) => (
          <Form>
            <div className="w-full h-screen bg-[#FAFBFC] flex flex-col items-center justify-center">
              <div className="w-125 bg-white shadow-lg rounded-md flex flex-col">
                <div className="w-full  flex items-center justify-center mt-10 ">
                  <img src={images.logo} alt="" className="h-25 w-25" />
                </div>

                <div className="px-10 flex-1 flex flex-col pb-12.5 mt-7.5">
                  <div className="w-full text-center">
                    <p className="mb-10 font-medium">
                      Inicie sesión para continuar
                    </p>
                  </div>
                  <div className="flex flex-col gap-3 ">
                    <SharedInput
                      label="Usuario"
                      name="login"
                      value={values.login}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.login ? errors.login : ""}
                      placeholder="Usuario"
                    />
                    <SharedInput
                      label="Contraseña"
                      name="password"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.password ? errors.password : ""}
                      placeholder="Contraseña"
                      type="password"
                    />
                  </div>
                  <div className="mt-5 ">
                    <SharedButton
                      loading={loading}
                      className="w-full"
                      variant={"accion"}
                      type="submit"
                    >
                      Iniciar sesión
                    </SharedButton>
                  </div>
                </div>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};
