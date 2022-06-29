//creamos un array vacio para colocar el valor total de la cuota y luego sumarlos 
let datosCotizacion=[];
let cuotaTotal=0;

cargarEventListeners()
function cargarEventListeners() {
document.addEventListener('DOMContentLoaded', () => {
    datosCotizacion = JSON.parse( localStorage.getItem('cotizaciones') ) || []  ;
    loadingInicio()
});
}
// funcion para ejecutar el formulario 
let cotizar=document.getElementById('btnAdd')
cotizar.addEventListener('click',()=>{
    
    guardadaCotizaciones();
    
   
    
});
// generar un objeto con los datos del formulario y gardarlos en un array

function sincronizarStorage() {
    localStorage.setItem('cotizaciones', JSON.stringify(datosCotizacion));

}


const btnOtra=document.getElementById('btnOtra');
btnOtra.addEventListener('click', ()=>{
    let ocultarContenido=document.getElementById('form');
        ocultarContenido.style.display='none';
        let mostrarContenido=document.getElementById('listadoCotizaciones');
        mostrarContenido.style.display='flex';
        secAnimacion.style.display='none';

sincronizarStorage()
calcularCuota()

})

    function calcularCuota(){ 
        let cotizaciones=[];


   let textoCotizacion= document.getElementById("textoCotizacion");
   textoCotizacion.innerHTML="  "
   let totalCotizado=document.getElementById('totalCotizado');
   totalCotizado.innerHTML=" Sin Cotizaciones para mostrar";
   let descuento=document.getElementById('descuento');
   descuento.innerHTML=" ";
   let beneficio=document.getElementById("beneficio")
   beneficio.style.display='flex';


    for (i=0; i<datosCotizacion.length; i++){
 // id de cada cotizacion solicitada
  datosCotizacion[i].id=i+1

        // sacamos las funciones y las remplazamos por operadores ternarios
    const totalPrima=(datosCotizacion[i].gama==="alta")? datosCotizacion[i].sumaAsegurada/50:(datosCotizacion[i].gama==="media"?datosCotizacion[i].sumaAsegurada/60:datosCotizacion[i].sumaAsegurada/70);

    const totalGnc = (datosCotizacion[i].gnc==="si") ? 100: 0;
        
    const totalOkm = (datosCotizacion[i].okm==="si") ? 100: 0;

    const totalPlan = (datosCotizacion[i].plan==="premium") ? 500: 0;

 
   

    
    cuotaTotal= (totalGnc+totalPrima+totalOkm+totalPlan).toFixed(2);


   console.table(cuotaTotal)
    
    
     mostrar = `<div class="cotizacionTexto"><div id="texto"> N°${datosCotizacion[i].id} La cuota a pagar de su vehiculo  ${ datosCotizacion[i].marca}  es de : $${cuotaTotal}.- </div><div id="contenedorBotones"><div id="botonVer"><a href="#" onclick="btnDescrip('${datosCotizacion[i].marca}','${datosCotizacion[i].gama}','${datosCotizacion[i].gnc}','${datosCotizacion[i].okm}','${datosCotizacion[i].sumaAsegurada}','${datosCotizacion[i].plan}','${cuotaTotal}')" id="btnDescrip">Ver detalles</a></div><div id="botonEliminar"><a href="#" onclick="btnBorrar('${datosCotizacion[i].id}')" id="btnBorrar">X</a></div></div></div>`;
    textoCotizacion.innerHTML+=mostrar

    let totalPresupuestado=0;

    
    //total del presupuesto
    cotizaciones=[...cotizaciones,Number(cuotaTotal)]
    
    cotizaciones.map(function(a){totalPresupuestado += a;});
    console.log(cotizaciones)
    
    totalCotizado.innerHTML=`Total Cotizado $${totalPresupuestado.toFixed(2)}.-`;
    let totalDescuento=0;
    if (totalPresupuestado>=20000){
        beneficio.style.display='none';

        totalDescuento=totalPresupuestado-((totalPresupuestado*10)/100);
        descuento.innerHTML=`Su nuevo presupesto con el 10% de descuento es de : $${totalDescuento.toFixed(2)}.- `;
        totalCotizado.innerHTML=` Presupuesto Original $${totalPresupuestado.toFixed(2)}.- `;

    }
    
   
}

    






}   

//console.log(cotizaciones)











// evento para boton ver detalles de la cotizacion

function btnDescrip (marcaGuardada,gamaGyardada,gncGuardada,okmGuardada,sumaAseguradaGuardada,planGuardada,cuotaTotal){
   
fetch("js/marcasImg.json")
.then(response => {
   return response.json();
})
.then(jsondata  =>{
    console.log(typeof(marcaGuardada))
   let  jsondata1=jsondata.filter((coti)=>coti.marca=== marcaGuardada);
   // console.log(jsondata1)
   console.log(jsondata1)

   let mostarFoto=jsondata1[0].img
   Swal.fire({
    title: 'DETALLES DE LA COTIZACION SOLICITADA!',
    html: `<div class="cotizacionTexto2"> La cuota a pagar de su vehiculo ${marcaGuardada} es de :$${cuotaTotal}.- <br> Auto Gama: ${gamaGyardada} <br> posee GNC: ${gncGuardada} <br> Es 0KM: ${okmGuardada} <br> Valor asegurado: $${sumaAseguradaGuardada} <br> Plan elegido: ${planGuardada} </div>`,
    
    imageUrl: `${mostarFoto}`,
    width: 800,
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: 'Custom image',
    confirmButtonText:'Volver',
    customClass: {
        confirmButton: 'swalBtnColor'
        
      },
    
  })
    
} );




 
          



}
// funcion del boton borrar de a una cotizacion
function btnBorrar (id){
   let idCoti= Number(id)
   Swal.fire({
    title: `Esta seguro que deseea eliminar la cotizacion N°${id}`,
    text: "La misma no se va a poder recuperar",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    cancelButtonText: 'No, Eliminar',
    confirmButtonText: 'Si, Eliminar!',
   
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        'Eliminada',
        'Eliminada con exito',
        'success'
      )
datosCotizacion=datosCotizacion.filter((coti)=>coti.id!==idCoti);
calcularCuota()
sincronizarStorage()



    }
  })


}

// eventos VOLVER

document.getElementById('btnVolver').addEventListener('click', ()=>{
    let ocultarContenido=document.getElementById('listadoCotizaciones');
    ocultarContenido.style.display='none';
    let mostrarContenido=document.getElementById('form');
    mostrarContenido.style.display='flex'
    
    
    


})

document.getElementById('btnVolver2').addEventListener('click', ()=>{
    let mostrarContenido=document.getElementById('listadoCotizaciones');
    mostrarContenido.style.display='flex';
    let ocultarContenido=document.getElementById('form');
    ocultarContenido.style.display='none';
    let ocultarContenido1=document.getElementById('detalleCoti');
    ocultarContenido1.style.display='none';

    
})

//Eventos LIMPIAR

document.getElementById('btnLimpiar').addEventListener('click', ()=>{
    let mostrarContenido=document.getElementById('listadoCotizaciones');
    mostrarContenido.style.display='none';
    let ocultarContenido=document.getElementById('form');
    ocultarContenido.style.display='flex';
    let ocultarContenido1=document.getElementById('detalleCoti');
    ocultarContenido1.style.display='none';
    datosCotizacion=localStorage.removeItem("cotizaciones");
    
})


document.getElementById('btnLimpiar2').addEventListener('click', ()=>{
    let mostrarContenido=document.getElementById('listadoCotizaciones');
    mostrarContenido.style.display='none';
    let ocultarContenido=document.getElementById('form');
    ocultarContenido.style.display='flex';
    let ocultarContenido1=document.getElementById('detalleCoti');
    ocultarContenido1.style.display='none';
    datosCotizacion=localStorage.removeItem("cotizaciones");
    
})


   


    
  
      

     



