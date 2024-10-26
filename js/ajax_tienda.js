function GetProductos() {
    const xhr = new XMLHttpRequest(),
        $lista = document.getElementById('tienda');

    console.log(xhr);
    xhr.addEventListener('readystatechange', (e)=>{
        if (xhr.readyState !== 4) return;

        if(xhr.status >= 200 && xhr.status < 300){
            console.log('conectado');
            
            
            let json = JSON.parse(xhr.responseText);

            for (var p in json) {
                json[p].forEach((el) => {
                    $lista.innerHTML +=`
                    <div class="card">
                    <div class="card-img"><img src=${el.imagen} alt="${el.AltTexto}"></div>
                    <div class="card-info">
                        <p class="text-title">${el.titulo} </p>
                        <p class="text-body">${el.descripcion}</p>
                    </div>
                    <div class="card-footer">
                        <span class="text-title">${el.precio}</span>
                        <div class="card-button">
                            <svg class="svg-icon" viewBox="0 0 20 20">
                                ${el.carrito.paths.map(path => `<path d="${path}"></path>`).join('')}
                            </svg>
                        </div>
                    </div>        
                </div>`;
                });
            }

            } else {
                $lista.innerHTML +=`
                <div class="card">
                <div class="card-img"><img src= alt=""></div>
                <div class="card-info">
                    <p class="text-title">No se encuentran datos</p>
                    <p class="text-body">${xhr.status}</p>
                </div>
                <div class="card-footer">
                    <span class="text-title">${xhr.statusText}</span>
                    <div class="card-button">
                        <svg class="svg-icon" viewBox="0 0 20 20">
                                
                        </svg>
                    </div>
                </div>        
            </div>`}
                
    });

    xhr.open("GET",'../data/datos_tienda.json');
    xhr.send();
}

function FiltroProductos() {
    var desde = parseInt(document.getElementById('desde').value);
    var hasta = parseInt(document.getElementById('hasta').value);
    var cat = document.getElementById('categorias').value;

    if (desde == "") {
        desde = 0
    }

    if (hasta == "") {
        hasta = 999999999
    }

    const xhr = new XMLHttpRequest(),
        $lista = document.getElementById('tienda');

    console.log(xhr);
    xhr.addEventListener('readystatechange', (e) => {
        if (xhr.readyState !== 4) return;

        if (xhr.status >= 200 && xhr.status < 300) {
            console.log('conectado');
            
            let json = JSON.parse(xhr.responseText);

            $lista.innerHTML = ``;

            if (cat == "") { 
                for (const p in json) {
                    json[p].forEach((el) => {
                        if (desde <= el.precio && hasta >= el.precio) {
                            console.log(el.precio)
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
                                    ${el.carrito.paths.map(path => `<path d="${path}"></path>`).join('')}
                                    </svg>
                                </div>
                            </div>        
                        </div>`;
                        } else {
                        }
                    });
                }

            } else {

                json[cat].forEach((el) => {
                    if (desde <= el.precio && hasta >= el.precio) {
                        console.log(el.precio)
                        $lista.innerHTML +=`
                        <div class="card">
                        <div class="card-img"><img src="${el.imagen}" alt=""></div>
                        <div class="card-info">
                            <p class="text-title">${el.titulo} </p>
                            <p class="text-body">${el.descripcion}</p>
                        </div>
                        <div class="card-footer">
                            <span class="text-title">${el.precio}</span>
                            <div class="card-button">
                                <svg class="svg-icon" viewBox="0 0 20 20">
                                ${el.carrito.paths.map(path => `<path d="${path}"></path>`).join('')}
                                </svg>
                            </div>
                        </div>        
                    </div>`;
                    } else {
                    }
                });
            }
        } else {
            $lista.innerHTML +=`
            <div class="card">
            <div class="card-img"><img src="" alt=""></div>
            <div class="card-info">
                <p class="text-title">No se encuentran datos</p>
                <p class="text-body">${xhr.status}</p>
            </div>
            <div class="card-footer">
                <span class="text-title">${xhr.statusText}</span>
                <div class="card-button">
                    <svg class="svg-icon" viewBox="0 0 20 20">
                    </svg>
                </div>
            </div>        
        </div>`;
        }
    });

    xhr.open("GET", '../data/datos_tienda.json');

    xhr.send();
}