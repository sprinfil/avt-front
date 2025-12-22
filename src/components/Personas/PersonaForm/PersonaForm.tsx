import { SharedInput } from "@/components/SharedInput/SharedInput";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { icons } from "@/lib/icons";
import { FieldArray, Form, Formik } from "formik";
import { usePersonaFormData } from "./usePersonaFormData";

export const PersonaForm = () => {
  const { personaFormInitialValues, PersonaSchema } = usePersonaFormData();

  return (
    <>
      <Formik
        initialValues={personaFormInitialValues}
        validationSchema={PersonaSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ values, errors, touched, handleChange, handleBlur }) => (
          <Form>
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 pb-10">
              <Card className="bg-[#FAFBFC]">
                <CardHeader>
                  <CardTitle>Información personal</CardTitle>
                </CardHeader>

                <CardContent className="flex flex-col gap-2">
                  <SharedInput
                    label="Nombres"
                    name="nombres"
                    value={values.nombres}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.nombres ? errors.nombres : ""}
                    placeholder="Nombres"
                  />

                  <SharedInput
                    label="Apellido paterno"
                    name="apellido_paterno"
                    value={values.apellido_paterno}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={
                      touched.apellido_paterno ? errors.apellido_paterno : ""
                    }
                  />

                  <SharedInput
                    label="Apellido materno"
                    name="apellido_materno"
                    value={values.apellido_materno}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={
                      touched.apellido_materno ? errors.apellido_materno : ""
                    }
                  />

                  <SharedInput
                    label="CURP"
                    name="curp"
                    value={values.curp}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.curp ? errors.curp : ""}
                  />

                  <SharedInput
                    label="RFC"
                    name="rfc"
                    value={values.rfc}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.rfc ? errors.rfc : ""}
                  />
                </CardContent>
              </Card>

              <Card className="bg-[#FAFBFC]">
                <CardHeader>
                  <CardTitle>Domicilio</CardTitle>
                </CardHeader>

                <CardContent className="flex flex-col gap-2">
                  <SharedInput
                    label="Calle"
                    name="calle"
                    value={values.calle}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.calle ? errors.calle : ""}
                  />

                  <SharedInput
                    label="Número exterior"
                    name="numero_exterior"
                    value={values.numero_exterior}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={
                      touched.numero_exterior ? errors.numero_exterior : ""
                    }
                  />

                  <SharedInput
                    label="Colonia"
                    name="colonia"
                    value={values.colonia}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.colonia ? errors.colonia : ""}
                  />

                  <SharedInput
                    label="Código postal"
                    name="codigo_postal"
                    value={values.codigo_postal}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.codigo_postal ? errors.codigo_postal : ""}
                  />
                </CardContent>
              </Card>

              <Card className="bg-[#FAFBFC]">
                <CardHeader>
                  <CardTitle>Contacto</CardTitle>
                </CardHeader>

                <CardContent className="flex flex-col gap-2">
                  <SharedInput
                    label="Celular"
                    name="celular"
                    value={values.celular}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.celular ? errors.celular : ""}
                  />

                  <SharedInput
                    label="Teléfono"
                    name="telefono"
                    value={values.telefono}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.telefono ? errors.telefono : ""}
                  />

                  <SharedInput
                    label="Correo electrónico"
                    name="correo_electronico"
                    value={values.correo_electronico}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={
                      touched.correo_electronico
                        ? errors.correo_electronico
                        : ""
                    }
                  />
                </CardContent>
              </Card>

              <Card className="bg-[#FAFBFC]">
                <CardHeader>
                  <CardTitle>Referencias</CardTitle>
                </CardHeader>

                <CardContent>
                  <FieldArray name="referencias">
                    {({ push, remove }) => (
                      <div className="flex flex-col gap-4">
                        {values.referencias.map((_, index) => (
                          <div
                            key={index}
                            className="border rounded-lg p-4 flex flex-col gap-2"
                          >
                            <SharedInput
                              label="Nombre"
                              name={`referencias[${index}].nombres`}
                              value={values.referencias[index].nombres}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              error={
                                touched.referencias?.[index]?.nombres
                                  ? errors.referencias?.[index]?.nombres
                                  : ""
                              }
                            />

                            <SharedInput
                              label="Celular"
                              name={`referencias[${index}].celular`}
                              value={values.referencias[index].celular}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              error={
                                touched.referencias?.[index]?.celular
                                  ? errors.referencias?.[index]?.celular
                                  : ""
                              }
                            />

                            <SharedInput
                              label="Parentesco"
                              name={`referencias[${index}].parentesco`}
                              value={values.referencias[index].parentesco}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              error={
                                touched.referencias?.[index]?.parentesco
                                  ? errors.referencias?.[index]?.parentesco
                                  : ""
                              }
                            />

                            {values.referencias.length > 1 && (
                              <Button
                                type="button"
                                variant="destructive"
                                className="self-end mt-2"
                                onClick={() => remove(index)}
                              >
                                Eliminar referencia
                              </Button>
                            )}
                          </div>
                        ))}

                        <Button
                          type="button"
                          variant="outline"
                          onClick={() =>
                            push({ nombres: "", celular: "", parentesco: "" })
                          }
                        >
                          + Agregar referencia
                        </Button>
                      </div>
                    )}
                  </FieldArray>
                </CardContent>
              </Card>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};
