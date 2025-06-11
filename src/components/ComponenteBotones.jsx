import { BtnCrearCuenta } from "./BtnCrearCuenta"
import { BtnIniciarSesion } from "./BtnIniciarSesion"

export const ComponenteBotones = () => {
  return (
        <div className="col-12 d-flex flex-column">
            <BtnCrearCuenta />
            <BtnIniciarSesion />
        </div>
  )
}
