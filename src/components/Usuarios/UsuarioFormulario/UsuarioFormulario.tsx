import { SharedInput } from "@/components/SharedInput/SharedInput";
import { icons } from "@/lib/icons";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Card, CardContent } from "@/components/ui/card";
import { useStoreUser } from "@/lib/User/hooks/useStoreUser.hook";
import { SharedButton } from "@/components/SharedButton/SharedButton";
import { useNavigate } from "react-router-dom";
import { useUserShow } from "@/lib/User/hooks/useShowUser";
import LoaderHorizontal from "@/components/LoaderHorizontal/LoaderHorizontal";
import { useUpdateUser } from "@/lib/User/hooks/useUpdateUser";
import { toast } from "sonner";

export const UsuarioFormulario = ({
  idUser = null,
}: {
  idUser?: number | string | null;
}) => {
  const UsuarioSchema = Yup.object({
    name: Yup.string().required("El nombre es obligatorio"),

    username: Yup.string().required("El nombre de usuario es obligatorio"),

    password: idUser
      ? Yup.string().min(6, "Mínimo 6 caracteres").notRequired()
      : Yup.string()
          .min(6, "Mínimo 6 caracteres")
          .required("La contraseña es obligatoria"),

    password_confirmation: Yup.string().when("password", {
      is: (val: string | undefined) => !!val && val.length > 0,
      then: (schema) =>
        schema
          .oneOf([Yup.ref("password")], "Las contraseñas no coinciden")
          .required("Confirma la contraseña"),
      otherwise: (schema) => schema.notRequired(),
    }),
  });

  const { storeUser, loading, response } = useStoreUser();
  const { data, isLoading } = useUserShow(idUser);
  const navigate = useNavigate();
  const {
    updateUser,
    loading: loadingUpdateUser,
    response: responseUpdateUser,
  } = useUpdateUser();

  const initialValues = data?.data?.data
    ? {
        ...data.data.data,
        password: "",
        password_confirmation: "",
      }
    : {
        name: "",
        username: "",
        password: "",
        password_confirmation: "",
      };

  const guardar = async (values: any) => {
    if (idUser) {
      await updateUser(values, idUser);
      toast.success("Registro modificado con éxito");
    } else {
      const random = Math.random().toString(36).substring(2, 10);
      let correo = `usuario_${random}@correo.com`;
      let valuesTemp = { ...values, email: correo };
      await storeUser(valuesTemp);
      navigate("/dashboard/usuarios");
    }
  };

  return (
    <>
      <>
        {isLoading ? (
          <>
            <div className="w-full  items-center">
              <p className="font-medium">Cargando usuario ...</p>
              <LoaderHorizontal styles="w-full" />
            </div>
          </>
        ) : (
          <>
            <Card className="bg-secundario relative">
              <CardContent>
                <Formik
                  enableReinitialize
                  initialValues={initialValues}
                  validationSchema={UsuarioSchema}
                  onSubmit={async (values) => {
                    guardar(values);
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
                          error={
                            touched.name && typeof errors.name === "string"
                              ? errors.name
                              : undefined
                          }
                        />
                        <SharedInput
                          label="Nombre de usuario"
                          name="username"
                          placeholder="Nombre de usuario"
                          type="text"
                          onChange={handleChange}
                          value={values.username}
                          onBlur={handleBlur}
                          error={
                            touched.username &&
                            typeof errors.username === "string"
                              ? errors.username
                              : undefined
                          }
                        />
                        <SharedInput
                          label="Contraseña"
                          name="password"
                          placeholder="Contraseña"
                          type="password"
                          onChange={handleChange}
                          value={values.password}
                          onBlur={handleBlur}
                          error={
                            touched.password &&
                            typeof errors.password === "string"
                              ? errors.password
                              : undefined
                          }
                        />
                        <SharedInput
                          label="Confirmar contraseña"
                          name="password_confirmation"
                          placeholder="Confirmar contraseña"
                          type="password"
                          onChange={handleChange}
                          value={values.password_confirmation}
                          onBlur={handleBlur}
                          error={
                            touched.password_confirmation &&
                            typeof errors.password_confirmation === "string"
                              ? errors.password_confirmation
                              : undefined
                          }
                        />
                      </div>
                      <SharedButton
                        type="submit"
                        className="mt-4 ml-auto min-w-[170px]"
                        loading={loading || loadingUpdateUser}
                      >
                        Aceptar {icons.guardar()}
                      </SharedButton>
                    </Form>
                  )}
                </Formik>
              </CardContent>
            </Card>
          </>
        )}
      </>
    </>
  );
};
