import { SharedInput } from "@/components/SharedInput/SharedInput";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { icons } from "@/lib/icons";
import { FieldArray, Form, Formik } from "formik";
import { usePersonaFormData, type Referencia } from "./usePersonaFormData";
import { SharedSelect } from "@/components/SharedSelect/SharedSelect";
import { Input } from "@/components/ui/input";
import { SelectorPais } from "@/components/SelectorPais/SelectorPais";

export const PersonaForm = () => {
  const { personaFormInitialValues, PersonaSchema, calcularEdad } =
    usePersonaFormData();

  return (
    <>
      <Formik
        initialValues={personaFormInitialValues}
        validationSchema={PersonaSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({
          values,
          errors,
          touched,
          setFieldValue,
          handleChange,
          handleBlur,
          setFieldTouched,
        }) => (
          <Form>
            <Button type="submit" className="mb-5">
              Guardar {icons.guardar()}
            </Button>
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
                    placeholder="Apellido paterno"
                    error={
                      touched.apellido_paterno ? errors.apellido_paterno : ""
                    }
                  />

                  <SharedInput
                    label="Apellido materno"
                    name="apellido_materno"
                    value={values.apellido_materno}
                    onChange={handleChange}
                    placeholder="Apellido materno"
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
                    placeholder="CURP"
                  />

                  <SharedInput
                    label="RFC"
                    name="rfc"
                    placeholder="RFC"
                    value={values.rfc}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.rfc ? errors.rfc : ""}
                  />

                  <SharedSelect
                    label="Sexo"
                    value={values.sexo}
                    error={touched.sexo ? errors.sexo : ""}
                    options={[
                      { text: "Masculino", value: "masculino" },
                      { text: "Femenino", value: "femenino" },
                    ]}
                    onChange={(value) => {
                      setFieldValue("sexo", value);
                      setFieldTouched("sexo", true);
                    }}
                  />

                  <SharedInput
                    label="Fecha de nacimiento"
                    name="fecha_nacimiento"
                    type="date"
                    placeholder="Fecha de nacimiento"
                    value={values.fecha_nacimiento}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={
                      touched.fecha_nacimiento ? errors.fecha_nacimiento : ""
                    }
                  />

                  <Input
                    placeholder="edad"
                    value={"Edad: " + calcularEdad(values.fecha_nacimiento)}
                  />

                  <SharedSelect
                    label="Nacionalidad"
                    value={values.nacionalidad}
                    error={touched.nacionalidad ? errors.nacionalidad : ""}
                    options={[
                      { text: "Mexicana", value: "mexicana" },
                      { text: "Estadounidense", value: "estadounidense" },
                    ]}
                    onChange={(value) => {
                      setFieldValue("nacionalidad", value);
                      setFieldTouched("nacionalidad", true);
                    }}
                  />

                  <SharedSelect
                    label="Estado civil"
                    value={values.estado_civil}
                    error={touched.estado_civil ? errors.estado_civil : ""}
                    options={[
                      { text: "Solter@", value: "soltero" },
                      { text: "Casad@", value: "casado" },
                    ]}
                    onChange={(value) => {
                      setFieldValue("estado_civil", value);
                      setFieldTouched("estado_civil", true);
                    }}
                  />
                  <SharedInput
                    label="INE"
                    name="ine"
                    placeholder="INE"
                    value={values.ine}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.ine ? errors.ine : ""}
                  />
                  <SharedInput
                    label="Ocupacion o profesión"
                    name="ocupacion_profesion"
                    placeholder="Ocupación o profesión"
                    value={values.ocupacion_profesion}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={
                      touched.ocupacion_profesion
                        ? errors.ocupacion_profesion
                        : ""
                    }
                  />
                </CardContent>
              </Card>

              <div className="flex flex-col gap-4">
                <Card className="bg-[#FAFBFC]">
                  <CardHeader>
                    <CardTitle>Lugar de nacimiento</CardTitle>
                  </CardHeader>

                  <CardContent className="flex flex-col gap-2">
                    <SelectorPais
                      values={values}
                      errors={errors}
                      setFieldValue={setFieldValue}
                      pais_field={"pais_nacimiento"}
                      estado_field={"estado_nacimiento"}
                      setFieldTouched={setFieldTouched}
                      ciudad_field={"municipio_nacimiento"}
                    />
                    <SharedInput
                      label="Localidad"
                      name="localidad_nacimiento"
                      value={values.localidad_nacimiento}
                      placeholder="Localidad"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={
                        touched.localidad_nacimiento
                          ? errors.localidad_nacimiento
                          : ""
                      }
                    />
                  </CardContent>
                </Card>
                <Card className="bg-[#FAFBFC] flex-1">
                  <CardHeader>
                    <CardTitle>Domicilio</CardTitle>
                  </CardHeader>

                  <CardContent className="flex flex-col gap-2">
                    <SharedInput
                      label="Calle"
                      name="calle"
                      value={values.calle}
                      placeholder="Calle"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.calle ? errors.calle : ""}
                    />

                    <SharedInput
                      label="Número interior"
                      name="numero_interior"
                      placeholder="Número interior"
                      value={values.numero_interior}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={
                        touched.numero_interior ? errors.numero_interior : ""
                      }
                    />

                    <SharedInput
                      label="Número exterior"
                      name="numero_exterior"
                      placeholder="Número exterior"
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
                      placeholder="Colonia"
                      value={values.colonia}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.colonia ? errors.colonia : ""}
                    />

                    <SharedInput
                      label="Código postal"
                      name="codigo_postal"
                      placeholder="Codigo postal"
                      value={values.codigo_postal}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.codigo_postal ? errors.codigo_postal : ""}
                    />
                    <SelectorPais
                      values={values}
                      errors={errors}
                      setFieldValue={setFieldValue}
                      pais_field={"pais_domicilio"}
                      estado_field={"estado_domicilio"}
                      ciudad_field={"municipio_domicilio"}
                      setFieldTouched={setFieldTouched}
                    />
                    <SharedInput
                      label="Localidad"
                      name="localidad_domicilio"
                      value={values.localidad_domicilio}
                      placeholder="Localidad"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={
                        touched.localidad_domicilio
                          ? errors.localidad_domicilio
                          : ""
                      }
                    />
                  </CardContent>
                </Card>
              </div>

              <Card className="bg-[#FAFBFC]">
                <CardHeader>
                  <CardTitle>Contacto</CardTitle>
                </CardHeader>

                <CardContent className="flex flex-col gap-2">
                  <SharedInput
                    label="Celular"
                    name="celular"
                    placeholder="Celular"
                    value={values.celular}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.celular ? errors.celular : ""}
                  />

                  <SharedInput
                    label="Teléfono"
                    name="telefono"
                    placeholder="Teléfono"
                    value={values.telefono}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.telefono ? errors.telefono : ""}
                  />

                  <SharedInput
                    label="Correo electrónico"
                    name="correo_electronico"
                    placeholder="Correo electrónico"
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
                            className=" p-4 flex flex-col gap-2"
                          >
                            <SharedInput
                              label="Nombre"
                              name={`referencias[${index}].nombres`}
                              value={values.referencias[index].nombres}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              error={
                                (touched.referencias?.[index]?.nombres &&
                                  (errors.referencias?.[index] as Referencia)
                                    ?.nombres) ||
                                ""
                              }
                              placeholder="Nombre"
                            />

                            <SharedInput
                              label="Celular"
                              name={`referencias[${index}].celular`}
                              value={values.referencias[index].celular}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              error={
                                (touched.referencias?.[index]?.celular &&
                                  (errors.referencias?.[index] as Referencia)
                                    ?.celular) ||
                                ""
                              }
                              placeholder="Celular"
                            />

                            <SharedInput
                              label="Parentesco"
                              name={`referencias[${index}].parentesco`}
                              value={values.referencias[index].parentesco}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              error={
                                (touched.referencias?.[index]?.parentesco &&
                                  (errors.referencias?.[index] as Referencia)
                                    ?.parentesco) ||
                                ""
                              }
                              placeholder="Parentesco"
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
