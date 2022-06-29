function guardadaCotizaciones(){
    class Cotizador{
        constructor(marca,gama,plan,sumaAsegurada,gnc,okm,id){
            this.plan=plan;
            this.gama=gama;
            this.gnc=gnc;
            this.sumaAsegurada=sumaAsegurada;
            this.okm=okm;
            this.marca=marca;
            this.id=id;
        }
    }
    
    let marca=document.getElementById('marca').value
    let gama=document.getElementById('gama').value
    let plan=document.querySelector('input[name="plan"]:checked').value
    let sumaAsegurada=document.getElementById('sumaAsegurada').value
    let gnc=document.querySelector('input[name="gnc"]:checked').value
    let okm=document.querySelector('input[name="Okm"]:checked').value
    let id=0;
   let coti1= new Cotizador(marca,gama, plan,sumaAsegurada,gnc,okm,id);

   //validacion de campos MARA Y GAMA 
    if (marca!==' ' && gama!==' ' && sumaAsegurada!==''){
        datosCotizacion=[... datosCotizacion,coti1]
        sincronizarStorage()
        loading()
    calcularCuota()

    }else{
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Los campos Marca, Gama y Suma asegurada son obligatorios',
            customClass: {
                confirmButton: 'swalBtnColor'
                
              }
          })       
    }
   

  

  
   
    
}
