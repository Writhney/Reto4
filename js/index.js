'use strict';

let documentReady = () => {
    const contenedorPreguntas = document.getElementById('contenedorPreguntas');
    const botonGenerar = window.document.getElementById('botonGenerar');

    //RELOJ
    let mueveReloj = () => {
        let relojPantalla = window.document.getElementById('relojPantalla');
        
        let momentoActual = new Date();
        let hora = momentoActual.getHours();
        let minuto = momentoActual.getMinutes();
        let segundo = momentoActual.getSeconds();
        
        let horaImprimible = hora + " : " + minuto + " : " + segundo;
        
        relojPantalla.innerHTML=`${horaImprimible}`;        
    }   
    setInterval(mueveReloj,1000);
    

    //GENERAR CARTILLA
    let generarCartilla = (e) => {
        
        crearContenedorPreguntas()

        e.preventDefault();

        
        
        const valoresAlternativas = ["A", "B", "C", "D", "E", "F"];
        let cantidad_Preguntas = document.getElementById('cantidadPreguntas').value;
        let cantidad_Alternativas = document.getElementById('cantidadAlternativas').value;
        
        let contenedorAlternativas = '';
        preguntas.innerHTML = '';

        for (let index = 1; index <= cantidad_Preguntas; index++) {
            for (let index = 0; index < cantidad_Alternativas; index++) {
                contenedorAlternativas += `<li class="alternativa">${valoresAlternativas[index]}</li>`
            }
                var unaSeccion = preguntas.innerHTML += `
                <ol class="pregunta-lista">
                    <li class="numero">${index}</li>
                    ${contenedorAlternativas}
                </ol>
            `;
            contenedorAlternativas = '';
        };

        function crearContenedorPreguntas() {
            contenedorPreguntas.innerHTML = `
            <section class="preguntas" id="preguntas">
            ${unaSeccion}
            </section>
            `;
        };

        let estiloPreguntas = document.getElementById('preguntas');
        console.log(cantidad_Preguntas);
        if(cantidad_Preguntas>10){
            estiloPreguntas.style.background= "--box-shadow:";
            estiloPreguntas.style.columnCount= 2;
        }
        else{
            estiloPreguntas.style.background = "--box-shadow:";
        };
    }

    
    function valoresValidos (){
        let cantidad_Preguntas = document.getElementById('cantidadPreguntas').value;
        let cantidad_Alternativas = document.getElementById('cantidadAlternativas').value;
        
        if(cantidad_Alternativas<=6 && cantidad_Preguntas<=100){
            botonGenerar.addEventListener('click', generarCartilla);
        }
        else{
            alert("Ingrese valores validos");
        }
    } 
    try {
        botonGenerar.addEventListener('click', valoresValidos());
    } catch (error) {
        console.log(error);
    }
    

}
document.addEventListener('DOMContentLoaded', documentReady);
alert("Aun no funciona el input subir Datos xd");