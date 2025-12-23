export const formatearDinero = (monto: number | string): string => {
  const numero = Number(monto);

  if (isNaN(numero)) return "$0.00";

  return new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(numero);
};

export const formatearFecha = (fecha: string | Date): string => {
  const date = new Date(fecha);

  if (isNaN(date.getTime())) return "";

  const dia = String(date.getDate()).padStart(2, "0");
  const mes = String(date.getMonth() + 1).padStart(2, "0");
  const anio = date.getFullYear();

  return `${dia}/${mes}/${anio}`;
};
