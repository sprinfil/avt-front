import { SharedInput } from "@/components/SharedInput/SharedInput"
import { SharedMoneyInput } from "@/components/SharedMoneyInput/SharedMoneyInput"
import { Button } from "@/components/ui/button"
import type { formaPago } from "@/lib/Ventas/types"
import { useState } from "react"



export const PosSeleccionarMetodoPago = () => {
  const [metodoPago, setMetodoPago] = useState<formaPago>("efectivo");

  return (
    <>
      <p>Metodo de pago</p>
      <div className="w-full flex gap-2 flex-wrap">
        <Button
          onClick={() => { setMetodoPago("efectivo") }}
          variant={metodoPago == "efectivo" ? "default" : "outline"}>Efectivo</Button>
        <Button
          onClick={() => { setMetodoPago("tarjeta_debito") }}
          variant={metodoPago == "tarjeta_debito" ? "default" : "outline"}>Tarjeta de debito</Button>
        <Button
          onClick={() => { setMetodoPago("tarjeta_credito") }}
          variant={metodoPago == "tarjeta_credito" ? "default" : "outline"}>Tarjeta de credito</Button>
        <Button
          onClick={() => { setMetodoPago("cheque") }}
          variant={metodoPago == "cheque" ? "default" : "outline"}>Cheque</Button>
        <Button
          onClick={() => { setMetodoPago("transferencia") }}
          variant={metodoPago == "transferencia" ? "default" : "outline"}>Transferencia</Button>
      </div>
      <div className="flex gap-2 w-full items-end">
        <SharedMoneyInput
          value={0}
          error=""
          label="Cantidad abonar"
          Input={SharedInput}
          onChange={(value) => { }}

        />
        {
          metodoPago == "efectivo" ?
            <>
              <SharedMoneyInput
                value={0}
                error=""
                label="Recibi"
                Input={SharedInput}
                onChange={(value) => { }}

              />
              <SharedMoneyInput
                value={200}
                error=""
                label="Cambio"
                Input={SharedInput}
                onChange={(value) => { }}
                className="pointer-events-none"
              />
            </>

            :
            <SharedInput label="Referencia" placeholder="Referencia" />
        }
      </div>
      <Button variant={"accion"}>Pagar</Button>
    </>
  )
}
