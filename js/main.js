// Declaramos variables
let body = document.querySelector('body');
let trabajo = document.getElementById('trabajo');
let descanso = document.getElementById('descanso');

let tiempoTrabajo = 25;
let tiempoDescanso = 5;
let esDesanso = false;

let segundos = '00';
let negro = '100';
let morado = '100';

// refresh
window.onload = () => {
    document.getElementById('minutos').innerHTML = tiempoTrabajo;
    document.getElementById('segundos').innerHTML = segundos;
}
// 
function comenzar() {
    document.getElementById('comenzar').style.width = '0';

    segundos = 59;

    let minutosTrabajo = tiempoTrabajo - 1;
    let breackMinutos = tiempoDescanso - 1 ;

    let tiempo = ()  => {
        document.getElementById('minutos').innerHTML = minutosTrabajo;
        document.getElementById('segundos').innerHTML = segundos;

        segundos -= 1 ;

        if ( segundos === 0 ){
            segundos = 59;
            minutosTrabajo-=1;
            if ( minutosTrabajo === -1 ){
                if( esDesanso == false ) {
                    esDesanso = true;
                    minutosTrabajo = breackMinutos;

                    negro = 0;
                    morado = 0;
                    
                    trabajo.classList.add('luego');
                    trabajo.classList.remove('ahora');
                    descanso.classList.add('ahora');
                    descanso.classList.remove('luego');
                }else{
                    esDesanso = false;
                    minutosTrabajo = tiempoTrabajo - 1;

                    negro = 100;
                    morado = 100;

                    trabajo.classList.remove('luego');
                    trabajo.classList.add('ahora');
                    descanso.classList.remove('ahora');
                    descanso.classList.add('luego');
                }
            } 

        }
        if ( esDesanso == false ){
            negro -= (100 / 737 );
        } else{
            morado += (100 / 147 );
        }
        body.style.background = 'linear-gradient(45deg, rgba(4,28,50,1) ${negro}%, rgba(95,30,148,1) ${morado}%)' 
   }
    // intervalos de segundos 1000 =1s
    setInterval(tiempo, 100);
}