import { SharedInput } from "@/components/SharedInput/SharedInput";
import { Button } from "@/components/ui/button";
import { icons } from "@/lib/icons";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import {
  Card,
  CardContent,
} from "@/components/ui/card";

export const UsuarioFormulario = () => {
  const UsuarioSchema = Yup.object({
    name: Yup.string().required("El nombre es obligatorio"),
    username: Yup.string().required("El nombre de usuario es obligatorio"),
    password: Yup.string()
      .min(6, "Mínimo 6 caracteres")
      .required("La contraseña es obligatoria"),

    confirm_password: Yup.string()
      .oneOf([Yup.ref("password")], "Las contraseñas no coinciden")
      .required("Confirma la contraseña"),
  });

  const initialValues = {
    name: "josue diaz",
    username: "josdzz",
    password: "",
    confirm_password: "",
  };

  return (
    <>
      <Card className="bg-secundario">
        <CardContent>
          <Formik
            initialValues={initialValues}
            validationSchema={UsuarioSchema}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            {({ values, errors, touched, handleChange, handleBlur }) => (
              <Form className=" flex flex-col mt-4">
                <div className="flex flex-col gap-2">
                  <SharedInput
                    label="Nombre"
                    name="name"
                    placeholder="Nombre"
                    type="text"
                    onChange={handleChange}
                    value={values.name}
                    onBlur={handleBlur}
                    error={touched.name ? errors.name : ""}
                  />
                  <SharedInput
                    label="Nombre de usuario"
                    name="username"
                    placeholder="Nombre de usuario"
                    type="text"
                    onChange={handleChange}
                    value={values.username}
                    onBlur={handleBlur}
                    error={touched.username ? errors.username : ""}
                  />
                  <SharedInput
                    label="Contraseña"
                    name="password"
                    placeholder="Contraseña"
                    type="password"
                    onChange={handleChange}
                    value={values.password}
                    onBlur={handleBlur}
                    error={touched.password ? errors.password : ""}
                  />
                  <SharedInput
                    label="Confirmar contraseña"
                    name="confirm_password"
                    placeholder="Confirmar contraseña"
                    type="password"
                    onChange={handleChange}
                    value={values.confirm_password}
                    onBlur={handleBlur}
                    error={
                      touched.confirm_password ? errors.confirm_password : ""
                    }
                  />
                </div>
                <Button className="mt-4 ml-auto">
                  Aceptar {icons.guardar()}
                </Button>
              </Form>
            )}
          </Formik>
        </CardContent>
      </Card>
    </>
  );
};
