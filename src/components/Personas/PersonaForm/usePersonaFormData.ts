import { useState } from "react";
import * as Yup from "yup";

export const usePersonaFormData = () => {
  const [personaFormInitialValues, setPersonaInitialValues] = useState({
    // Datos personales
    nombres: "",
    apellido_paterno: "",
    apellido_materno: "",
    sexo: "",
    fecha_nacimiento: "",
    edad: "",
    nacionalidad: "Mexicana",
    estado_civil: "",
    curp: "",
    rfc: "",
    ine: "",
    ocupacion_profesion: "",

    // Lugar de nacimiento / catálogo
    estado_catalogo: "",
    municipio_catalogo: "",
    ciudad_catalogo: "",
    pais_catalogo: "México",

    // Domicilio
    calle: "",
    numero_interior: "",
    numero_exterior: "",
    colonia: "",
    codigo_postal: "",
    estado: "",
    municipio: "",
    ciudad: "",
    pais: "México",

    // Contacto
    celular: "",
    telefono: "",
    correo_electronico: "",

    // Referencias
    referencias: [
      {
        nombres: "",
        celular: "",
        parentesco: "",
      },
    ],

    // Archivos relacionados
    archivos: [],
  });

  const PersonaSchema = Yup.object({
    nombres: Yup.string().required("Los nombres son obligatorios"),
    apellido_paterno: Yup.string().required("El apellido paterno es obligatorio"),
    apellido_materno: Yup.string().required("El apellido materno es obligatorio"),
    sexo: Yup.string().required("El sexo es obligatorio"),
    fecha_nacimiento: Yup.date().required("La fecha de nacimiento es obligatoria"),
    edad: Yup.number()
      .typeError("La edad debe ser numérica")
      .min(0, "Edad inválida")
      .required("La edad es obligatoria"),
    nacionalidad: Yup.string().required("La nacionalidad es obligatoria"),
    estado_civil: Yup.string().required("El estado civil es obligatorio"),
    curp: Yup.string()
      .length(18, "La CURP debe tener 18 caracteres")
      .required("La CURP es obligatoria"),
    rfc: Yup.string()
      .min(12, "RFC inválido")
      .max(13, "RFC inválido")
      .required("El RFC es obligatorio"),
    ine: Yup.string().required("El INE es obligatorio"),
    ocupacion_profesion: Yup.string().required(
      "La ocupación o profesión es obligatoria"
    ),

    // Catálogos
    estado_catalogo: Yup.string().required("El estado es obligatorio"),
    municipio_catalogo: Yup.string().required("El municipio es obligatorio"),
    ciudad_catalogo: Yup.string().required("La ciudad o localidad es obligatoria"),
    pais_catalogo: Yup.string().required("El país es obligatorio"),

    // Domicilio
    calle: Yup.string().required("La calle es obligatoria"),
    numero_exterior: Yup.string().required("El número exterior es obligatorio"),
    numero_interior: Yup.string().nullable(),
    colonia: Yup.string().required("La colonia es obligatoria"),
    codigo_postal: Yup.string()
      .length(5, "El código postal debe tener 5 dígitos")
      .required("El código postal es obligatorio"),
    estado: Yup.string().required("El estado es obligatorio"),
    municipio: Yup.string().required("El municipio es obligatorio"),
    ciudad: Yup.string().required("La ciudad es obligatoria"),
    pais: Yup.string().required("El país es obligatorio"),

    // Contacto
    celular: Yup.string()
      .min(10, "El celular debe tener al menos 10 dígitos")
      .required("El celular es obligatorio"),
    telefono: Yup.string().nullable(),
    correo_electronico: Yup.string()
      .email("Correo electrónico inválido")
      .required("El correo electrónico es obligatorio"),

    // Referencias
    referencias: Yup.array()
      .of(
        Yup.object({
          nombres: Yup.string().required("El nombre es obligatorio"),
          celular: Yup.string()
            .min(10, "Celular inválido")
            .required("El celular es obligatorio"),
          parentesco: Yup.string().required("El parentesco es obligatorio"),
        })
      )
      .min(1, "Debe agregar al menos una referencia"),

    // Archivos
    archivos: Yup.array(),
  });


  return { personaFormInitialValues, PersonaSchema }
}

