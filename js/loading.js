function loading(){
    let secAnimacion=document.querySelector('#secAnimacion');

    let ocultarContenido=document.getElementById('form');

    ocultarContenido.style.display='none';

    let mostrarContenido=document.getElementById('listadoCotizaciones');
    mostrarContenido.style.display='none'
    secAnimacion.style.display='flex';
    
    setTimeout(()=>{
        ocultarContenido.style.display='none';
        mostrarContenido.style.display='flex'
        secAnimacion.style.display='none';

    },3000);


}
function loadingInicio(){
    let animacionInicio=document.querySelector('#animacionInicio');

    let ocultarContenido=document.getElementById('form');

    ocultarContenido.style.display='none';

    
    animacionInicio.style.display='flex';
    
    setTimeout(()=>{
        ocultarContenido.style.display='flex';
        
        animacionInicio.style.display='none';

    },1500);


}
