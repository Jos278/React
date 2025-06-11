import { Boton } from "./components/Boton"
import { ComponenteBotones } from "./components/ComponenteBotones"
import { Ejercicio } from "./components/Ejercicio"
import { Ejercicio02 } from "./components/Ejercicio02"

function App() {
  return (
    <>
     <div className="container">
      <div className="row">
        <div className="col-12">
          <h1 className="mt-2 text-center alert alert-success">
            hola
          </h1>
        </div>
      </div>
     </div>
     {/* Mando a llamar comonente externo*/}
     <Ejercicio />
     <Boton />
     <ComponenteBotones />
     <Ejercicio02 />
    </>
  )
}

export default App
