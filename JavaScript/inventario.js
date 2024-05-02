window.onload = function(){
    var inventario =[
        {id: 1, nombre: "Producto 1", cantidad: 10},
        {id: 2, nombre: "Producto 2", cantidad: 20},
        {id: 3, nombre: "Producto 2", cantidad: 30}
    ];

    var inventarioContainer = document.getElementById('inventario-container');

    function mostrarInventario(){
        inventarioContainer.innerHTML = '';

        inventario.forEach(function(producto){
            var checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.value = producto.id;

            var label = document.createElement('label');
            label.appendChild(document.createTextNode(producto.nombre + ' - Cantidad: ' + producto.cantidad));

            var br = document.createElement('br');

            inventarioContainer.appendChild(checkbox);
            inventarioContainer.appendChild(label);
            inventarioContainer.appendChild(br);
        })
    }

    mostrarInventario();

    btnBaja.addEventListener('click', function(){
        var productoSeleccionado = document.querySelectorAll('#inventario-container input[type="checkbox"]:checked');
        if (productoSeleccionado.length === 0){
            alert("Favor de seleccionar un producto");
        } else {
            var confirmacion = confirm("¿Seguro que quiere dar de bnaja este producto?");
            if (confirmacion) {
                alert("Producto dado de baja exitosamente.");
            }else{
                alert("Operacion cancelada.");
            }
        }
    });
};