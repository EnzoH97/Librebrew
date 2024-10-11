function GetEstilos() {
    const xhr = new XMLHttpRequest(),
        $lista = document.getElementById('listado_catalogo');

    console.log(xhr);
    xhr.addEventListener('readystatechange', (e)=>{
        if (xhr.readyState !== 4) return;

        if(xhr.status >= 200 && xhr.status < 300){
            console.log('conectado');
            
            
            let json = JSON.parse(xhr.responseText);
            let estilo = json.Estilos;
            console.log(estilo);

            estilo.forEach((el) => {
                $lista.innerHTML +=`
                    <div class="card">
                <div class="card-image"> <img src="${el.img}" alt="${el.TxtAlt}"></div>
                <div class="category">${el.encabezado} </div>
                <div class="heading"> 
                    <p>${el.reseña}</p>
                    <p><strong>${el.dato1}</strong> ${el.info1}</p>
                    <p><strong>${el.dato2}</strong> ${el.info2} </p>
                </div>
                </div>`
            });
                } else {
                    $lista.innerHTML =`
                    <div class="card">
                <div class="card-image"> <img src="" alt=""></div>
                <div class="category">Error no se encuentran datos</div>
                <div class="heading"> 
                    <p>${xhr.status}</p>
                    <p><strong></strong>${xhr.statusText}</p>
                    <p><strong></strong></p>
                </div>
                </div>`
                }
    });

    xhr.open("GET",'../data/datos_catalogo.json');

    xhr.send();
}