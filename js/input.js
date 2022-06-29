const sumaAsegurada=document.getElementById('sumaAsegurada');

let  errorSumaAsegurada = document.createElement("p");

const nombreApellido=document.getElementById('nombreApellido');
const codigoPostal=document.getElementById('codigoPostal');
const email=document.getElementById('email');
const año=document.getElementById('año');
año.addEventListener('blur',errorInput);
email.addEventListener('blur',errorInput);
codigoPostal.addEventListener('blur',errorInput);
sumaAsegurada.addEventListener('blur', errorInputSumaAsegurada);
nombreApellido.addEventListener('blur', errorInput)


function errorInputSumaAsegurada(e){

    if (e.target.value.length>0){
        e.target.style.borderColor = "rgba(40, 110, 0, 0.877)"
        errorSumaAsegurada.innerHTML=" "


}else {
    e.target.style.borderColor = "rgba(200, 0, 0, 0.7)"
    errorSumaAsegurada.innerHTML="Campo obligatorio"

    setTimeout(()=>{
        errorSumaAsegurada.innerHTML=" "


    },3000);
    

}
document.getElementById("errorSumaAsegurada").appendChild(errorSumaAsegurada);
}

function errorInput(e){

    if (e.target.value.length>0){
        e.target.style.borderColor = "rgba(40, 110, 0, 0.877)"


}else {
    e.target.style.borderColor = "rgba(200, 0, 0, 0.7)"
    
    
    

}
}
        