import { SharedSelect } from "../SharedSelect/SharedSelect";
import { SharedComboBox } from "../SharedComboBox/SharedComboBox";
import { estadosMexico } from "@/lib/EstadosMexico";
import { useEffect, useState } from "react";
import { EstadosUnidosEstados } from "@/lib/EstadosUnidosEstados";

type SelectorPaisProps = {
  values: any;
  errors: any;
  setFieldValue: (field: string, value: string) => void;
  nacimiento?: boolean;
  pais_field: any;
  estado_field: any;
  ciudad_field: any;
};
export const SelectorPais = ({
  values,
  errors,
  setFieldValue,
  pais_field,
  estado_field,
  ciudad_field,
}: SelectorPaisProps) => {
  let estadosBd: Record<string, string[]> = estadosMexico;

  if (values?.[pais_field] == "mexico") {
    estadosBd = estadosMexico;
  }
  if (values?.[pais_field] == "EstadosUnidos") {
    estadosBd = EstadosUnidosEstados;
  }

  const estados = Object.keys(estadosBd).map((estado) => ({
    label: estado,
    value: estado,
  }));

  const ciudades =
    estadosBd[values?.[estado_field] as keyof typeof estadosBd]?.map(
      (ciudad) => ({
        label: ciudad,
        value: ciudad,
      })
    ) ?? [];

  return (
    <>
      <SharedSelect
        label="País"
        value={values?.[pais_field]}
        options={[
          { value: "mexico", text: "México" },
          { value: "EstadosUnidos", text: "Estados Unidos" },
        ]}
        onChange={(value) => {
          setFieldValue(pais_field, value);
        }}
      />
      {errors?.[pais_field] && <p>{errors?.[pais_field]}</p>}
      <SharedComboBox
        defaultValue={values?.[estado_field]}
        label="Estado"
        data={estados}
        onChange={(value) => {
          setFieldValue(estado_field, value);
        }}
      />
      {errors?.[estado_field] && <p>{errors?.[estado_field]}</p>}
      <SharedComboBox
        defaultValue={values?.[ciudad_field]}
        label="Ciudad"
        data={ciudades}
        onChange={(value) => {
          setFieldValue(ciudad_field, value);
        }}
      />
      {errors?.[ciudad_field] && <p>{errors?.[ciudad_field]}</p>}
    </>
  );
};
