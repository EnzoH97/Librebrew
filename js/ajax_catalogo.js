function GetEstilos() {
    const xhr = new XMLHttpRequest(),
        $lista = document.getElementById('listado_catalogo');

    console.log(xhr);
    xhr.addEventListener('readystatechange', (e)=>{
        if (xhr.readyState !== 4) return;

        if(xhr.status >= 200 && xhr.status < 300){
            console.log('conectado');
            
            
            let json = JSON.parse(xhr.responseText);
            //
            let estilo = json.Estilos;
            console.log(estilo);

            estilo.forEach((el) => {
                $lista.innerHTML +=`
                    <div class="card">
                <div class="card-image"> <img src="${el.img}" alt=""></div>
                <div class="category">${el.titulo} </div>
                <div class="heading"> 
                    <p>${el.descripcion}</p>
                    <p><strong>${el.dato1}</strong> ${el.info1}</p>
                    <p><strong>${el.dato2}</strong> ${el.info2} </p>
                </div>
            </div>`
            });
                } else {
            $lista.innerHTML =`
                <div class="card">
                <div class="card-image"> <img src="" alt=""></div>
                <div class="category">NO se encontraron datos </div>
                <div class="heading"> 
                    <p></p>
                    <p><strong></strong> </p>
                    <p><strong></strong> </p>
                </div>
            </div>`;
        }
    });

    xhr.open("GET",'../data/datos.json');

    xhr.send();
}