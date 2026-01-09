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

export const catchErrors = async (
  e: any,
  personalizado: string | null = null
) => {
  let texto = "Algo salió mal";
  let variant: "destructive" | "warning" | "permission" = "destructive";
  let title = "Error";

  if (personalizado) {
    texto = personalizado;
  } else {
    try {
      // 🔹 Manejo especial: respuesta Blob con JSON

      if (
        e?.response?.data instanceof Blob &&
        e.response.data.type === "application/json"
      ) {
        variant = "warning";
        title = "Advertencia";

        const text = await e.response.data.text();
        const json = JSON.parse(text);
        texto = json?.error ?? json?.message ?? texto;
      }
      // 🔹 Errores de validación Laravel (422)
      else if (e?.response?.status == 422) {
        variant = "warning";
        title = "Validación";
        texto = "";

        if (e?.response?.data?.error != null) {
          texto = e?.response?.data?.error;
        } else {
          let errores = e?.response?.data?.errors;

          for (const key in errores) {
            if (errores.hasOwnProperty(key)) {
              const mensaje = errores[key].join(" ").replace(/\./g, " ");
              texto += `${key}: ${mensaje} `;
            }
          }
        }
      }

      // 🔹 Errores de permisos (403)
      else if (e?.response?.status == 403) {
        variant = "permission";
        title = "Error de permisos";
        texto = e?.response?.data?.error ?? texto;
      }
      // 🔹 Otros estados
      else if (e?.response?.status == 401) {
        variant = "warning";
        title = "Advertencia";
      } else if (e?.response?.status == 501) {
        variant = "warning";
        title = "Error";
      }

      if (e?.response?.status != 422) {
        // 🔹 Manejo genérico de error / mensaje
        if (e?.response?.data?.error != null) {
          texto = e?.response?.data?.error;
        } else if (e?.response?.data?.errors?.length > 0) {
          texto = e?.response?.data?.errors;
        } else if (e?.response?.data?.message?.length > 0) {
          texto = e?.response?.data?.message;
        } else if (e?.response?.data?.data?.message) {
          texto = e?.response?.data?.data?.message;
        } else if (e?.length > 0) {
          texto = e;
        }
      }
    } catch (parseError) {
      console.error("Error al procesar catchErrors:", parseError);
    }
  }

  return texto;
};