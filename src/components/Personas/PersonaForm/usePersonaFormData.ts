import { useEffect, useState } from "react";
import * as Yup from "yup";

export type Referencia = {
  nombres: string;
  celular: string;
  parentesco: string;
};

export const usePersonaFormData = (personaId: number | null) => {
  const [personaFormInitialValues, setPersonaInitialValues] = useState({
    // Datos personales
    nombres: "", //
    apellido_paterno: "", //
    apellido_materno: "", //
    sexo: "", //
    fecha_nacimiento: "", //
    nacionalidad: "mexicana",
    estado_civil: "soltero",
    curp: "", //
    rfc: "", //
    ine: "", //
    ocupacion_profesion: "", //

    // Lugar de nacimiento / catálogo
    pais_nacimiento: "mexico",
    estado_nacimiento: "Baja California Sur",
    municipio_nacimiento: "La Paz",
    localidad_nacimiento: "La Paz",

    // Domicilio
    calle: "",
    numero_interior: "",
    numero_exterior: "",
    colonia: "",
    codigo_postal: "",
    estado_domicilio: "Baja California Sur",
    municipio_domicilio: "La Paz",
    localidad_domicilio: "La Paz",
    pais_domicilio: "mexico",

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
    nombres: Yup.string().notRequired(),

    apellido_paterno: Yup.string().notRequired(),

    apellido_materno: Yup.string().notRequired(),

    sexo: Yup.string().notRequired(),

    fecha_nacimiento: Yup.date().nullable().notRequired(),

    nacionalidad: Yup.string().notRequired(),

    estado_civil: Yup.string().notRequired(),

    curp: Yup.string()
      .length(18, "La CURP debe tener 18 caracteres")
      .notRequired(),

    rfc: Yup.string()
      .min(12, "RFC inválido")
      .max(13, "RFC inválido")
      .notRequired(),

    ine: Yup.string().notRequired(),

    ocupacion_profesion: Yup.string().notRequired(),

    // Catálogos
    estado_nacimiento: Yup.string().notRequired(),
    municipio_nacimiento: Yup.string().notRequired(),
    localidad_nacimiento: Yup.string().notRequired(),
    pais_nacimiento: Yup.string().notRequired(),

    // Domicilio
    calle: Yup.string().notRequired(),
    numero_exterior: Yup.string().notRequired(),
    numero_interior: Yup.string().nullable().notRequired(),
    colonia: Yup.string().notRequired(),

    codigo_postal: Yup.string()
      .length(5, "El código postal debe tener 5 dígitos")
      .notRequired(),

    estado_domicilio: Yup.string().notRequired(),
    municipio_domicilio: Yup.string().notRequired(),
    localidad_domicilio: Yup.string().notRequired(),
    pais_domicilio: Yup.string().notRequired(),

    // Contacto
    celular: Yup.string()
      .min(10, "El celular debe tener al menos 10 dígitos")
      .notRequired(),

    telefono: Yup.string().nullable().notRequired(),

    correo_electronico: Yup.string()
      .email("Correo electrónico inválido")
      .notRequired(),

    // Referencias
    referencias: Yup.array()
      .of(
        Yup.object({
          nombres: Yup.string().notRequired(),
          celular: Yup.string().min(10, "Celular inválido").notRequired(),
          parentesco: Yup.string().notRequired(),
        })
      )
      .notRequired(),

    // Archivos
    archivos: Yup.array().notRequired(),
  });

  const calcularEdad = (fechaNacimiento: string) => {
    if (!fechaNacimiento) return 0;

    const hoy = new Date();
    const nacimiento = new Date(fechaNacimiento);

    let edad = hoy.getFullYear() - nacimiento.getFullYear();
    const mes = hoy.getMonth() - nacimiento.getMonth();

    if (mes < 0 || (mes === 0 && hoy.getDate() < nacimiento.getDate())) {
      edad--;
    }

    return edad;
  };

  const [editando, setEditando] = useState(false);

  useEffect(() => {
    if (personaId == null) {
      setEditando(true);
    } else {
      setEditando(false);
    }
  }, [personaId]);

  const guardarDatos = () => {
    if (personaId) {
      alert("editar datos");
    } else {
      alert("crear datos");
    }
    setEditando(false);
  };

  return {
    personaFormInitialValues,
    PersonaSchema,
    calcularEdad,
    editando,
    setEditando,
    guardarDatos,
  };
};
