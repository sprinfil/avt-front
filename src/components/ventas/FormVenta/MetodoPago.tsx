import { SharedInput } from "@/components/SharedInput/SharedInput";
import { SharedMoneyInput } from "@/components/SharedMoneyInput/SharedMoneyInput";
import { SharedSelect } from "@/components/SharedSelect/SharedSelect";
import { useState } from "react";

type formaPago =
  | "efectivo"
  | "tarjeta_debito"
  | "tarjeta_credito"
  | "cheque"
  | "transferencia";
export const MetodoPago = () => {
  const [metodoPago, setMetodoPago] = useState<"meses" | "contado">("meses");
  const [formaPago, setFormaPago] = useState<formaPago>("efectivo");
  return (
    <>
      <SharedSelect
        label="Metodo de pago"
        onChange={(value: "meses" | "contado") => {
          setMetodoPago(value);
        }}
        value={metodoPago}
        options={[
          { value: "meses", text: "A meses" },
          { value: "contado", text: "Contado" },
        ]}
      />
      {metodoPago == "meses" ? (
        <>
          <SharedMoneyInput
            label="Costo del lote"
            value={0}
            onChange={(value) => {}}
            Input={SharedInput}
          />
          <SharedMoneyInput
            label="Enganche"
            value={0}
            onChange={(value) => {}}
            Input={SharedInput}
          />
          <SharedInput
            label="Meses a pagar"
            placeholder="Meses a pagar"
            type="number"
          />
          <SharedMoneyInput
            label="Monto por mes"
            value={0}
            onChange={(value) => {}}
            Input={SharedInput}
          />
          <SharedInput
            label="Fecha del primer abono"
            type="date"
            placeholder="Fecha del primer abono"
          />
        </>
      ) : (
        <>
          <SharedMoneyInput
            label="Costo del lote"
            value={0}
            onChange={(value) => {}}
            Input={SharedInput}
          />
          <SharedSelect
            label="Forma de pago"
            onChange={(value: formaPago) => {
              setFormaPago(value);
            }}
            value={formaPago}
            options={[
              { value: "efectivo", text: "Efectivo" },
              { value: "tarjeta_debito", text: "Tarjeta de debito" },
              { value: "tarjeta_credito", text: "Tarjeta de crédito" },
              { value: "cheque", text: "Cheque" },
              { value: "transferencia", text: "Transferencia" },
            ]}
          />
          {formaPago == "efectivo" ? (
            <>
              <SharedMoneyInput
                label="Pago con"
                value={0}
                onChange={(value) => {}}
                Input={SharedInput}
              />
              <SharedMoneyInput
                label="Cambio"
                value={0}
                onChange={(value) => {}}
                Input={SharedInput}
              />
            </>
          ) : (
            <>
              <SharedInput label="Referencia" placeholder="Referencia"/>
            </>
          )}
        </>
      )}
    </>
  );
};
