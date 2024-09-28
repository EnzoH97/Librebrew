function GetProductos() {
    const xhr = new XMLHttpRequest(),
        $lista = document.getElementById('tienda');

    console.log(xhr);
    xhr.addEventListener('readystatechange', (e)=>{
        if (xhr.readyState !== 4) return;

        if(xhr.status >= 200 && xhr.status < 300){
            console.log('conectado');
            
            
            let json = JSON.parse(xhr.responseText);
            //
            let Articulos = json.Productos;
            console.log(Articulos);

            Articulos.forEach((el) => {
                $lista.innerHTML +=`
                <div class="card">
                <div class="card-img"><img src=${el.imagen} alt=""></div>
                <div class="card-info">
                    <p class="text-title">${el.titulo} </p>
                    <p class="text-body">${el.descripcion}</p>
                </div>
                <div class="card-footer">
                    <span class="text-title">${el.precio}</span>
                    <div class="card-button">
                        <svg class="svg-icon" viewBox="0 0 20 20">
                            ${el.carrito}
                        </svg>
                    </div>
                </div>        
            </div>`
            });
                } else {}
    });

    xhr.open("GET",'../data/datos.json');

    xhr.send();
}