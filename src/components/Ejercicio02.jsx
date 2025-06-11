export const Ejercicio02 = () => {
  // logica del componente
  // 1_variable / constante
  // 2_hooks
  // 3_funciones

  const nombreProducto = 'Smart Tv90';

  function agregarCarrito(){
    console.log('El producto:',nombreProducto, "se agrego al carrito")

  }

  function eliminarCarrito(){
    console.log('El producto:',nombreProducto, "se elimino del carrito")
  }
  return (
    <>
    <div className="row mt-4">
        <div className="col-12">
            <h2 className="h4 mt-4">
                Ejercicio 2 - Boton y funciones
            </h2>
            <hr/>
        </div>
        <button className="w-25 btn btn-primary" onClick={agregarCarrito}>
          <i class="bi bi-hurricane"></i>
          <span className="ms-2">
            Agregar articulo
          </span>
        </button>
        <hr/>
        <button className="w-25 btn btn-danger" onClick={eliminarCarrito}>
          <i class="bi bi-trash"></i>
          <span className="ms-2">
            Eliminar articulo
          </span>
        </button>
    </div>
    </>
  );
};
