function consulta(event, nombreTabla, texto, num_filas, num_celdas, offset = 0) {
    // Clean
    let destacados = document.querySelectorAll(".destacado");
    for (let f of destacados) {
        f.classList.remove("destacado");
    }

    event.currentTarget.classList.add("destacado");

    tabla = document.querySelector(`.${nombreTabla}`);
    filasTabla = tabla.querySelectorAll("tr");
    let fila_actual = -1;
    for (let f of filasTabla) {
        let celdas = f.querySelectorAll("td");
        f.classList.remove("destacado");
        let primeraCelda = f.querySelector("td");
        if (primeraCelda.innerText.includes(texto) && (celdas.length == num_celdas)) {
            fila_actual = 0;
            primeraCelda.classList.add("destacado");
        }
        if ((fila_actual > -1) && (fila_actual < num_filas)) {
            if (fila_actual >= offset)
                f.classList.add("destacado");
            fila_actual++;
        }
    }
}
window.addEventListener("load", (evento) => {
    let casosDeUso = document.querySelectorAll(".casosdeuso tbody tr");
    
    casosDeUso[0].addEventListener("click", (event) => consulta(event, 'tablaprincipal', 'mov_movie1', 8, 6));
    casosDeUso[1].addEventListener("click", (event) => consulta(event, 'tablagsi', 'movie', 4, 6));
    casosDeUso[2].addEventListener("click", (event) => consulta(event, 'tablagsi', 'dir_director2', 4, 5));
    casosDeUso[3].addEventListener("click", (event) => consulta(event, 'tablagsi', 'dir_director2', 4, 5, 2));
    casosDeUso[4].addEventListener("click", (event) => consulta(event, 'tablagsi', 'act_actor1', 6, 5));
    casosDeUso[5].addEventListener("click", (event) => consulta(event, 'tablagsi', 'act_actor1', 6, 5, 2));
    casosDeUso[6].addEventListener("click", (event) => consulta(event, 'tablaprincipal', 'mov_movie2', 6, 6, 4));
    casosDeUso[7].addEventListener("click", (event) => consulta(event, 'tablaprincipal', 'mov_movie2', 4, 6, 2));

});
