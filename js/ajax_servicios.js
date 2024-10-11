function GetServicios() {
    const xhr = new XMLHttpRequest(),
        $lista = document.getElementById('lista_servicios');

    console.log(xhr);
    xhr.addEventListener('readystatechange', (e) => {
        if (xhr.readyState !== 4) return;

        if (xhr.status >= 200 && xhr.status < 300) {
            console.log('conectado');
            
            
            let json = JSON.parse(xhr.responseText);
            let servicio= json.servicio;
            console.log(servicio);

            servicio.forEach((el) => {
                $lista.innerHTML += `
                    <div class="card" style="border: 0;">
                        <div class="image">
                            <img src="${el.Foto}" alt="${el.AltTxt}">
                        </div>
                        <div class="content">
                            <a href="contacto.html">
                                <span class="title">
                                    ${el.Titulo}
                                </span>
                            </a>
                            <p class="desc">
                                ${el.Descripcion}
                            </p>
                            <a class="action" href="contacto.html">
                                ${el.TxtSpan}
                                <span aria-hidden="true">→</span>
                            </a>
                        </div>
                    </div>`;
            });
        } else {
            $lista.innerHTML = `
                    <div class="card" style="border: 0;">
                        <div class="image">
                            <img src="" alt="${el.AltTxt}">
                        </div>
                        <div class="content">
                            <a href="contacto.html">
                                <span class="title">
                                    No se encuentran datos
                                </span>
                            </a>
                            <p class="desc">
                                ERROR
                            </p>
                            <a class="action" >
                                
                                <span aria-hidden="true">→</span>
                            </a>
                        </div>
                    </div>`;
        }
    });

    // Abrir la conexión al archivo JSON
    xhr.open("GET", '../data/datos_servicios.json');

    // Enviar la solicitud
    xhr.send();
}
