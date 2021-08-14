
/*******************eye***********************/
var eye=document.getElementById("Eye");
var input=document.getElementById("password");
var btn=document.getElementById("ingresar");
var nit=document.getElementById("nit");
var password=document.getElementById("password");


eye.addEventListener("click",function(){

    if(input.type=="password"){
        input.type="text";
    
        document.getElementById('Eye').classList.add('fa-eye')/*Hace que el ojo se abra*/ 
        document.getElementById('Eye').classList.remove('fa-eye-slash')/*Hace que el ojo se cierre*/
    }
    else {
        input.type="password";
        document.getElementById('Eye').classList.remove('fa-eye')
        document.getElementById('Eye').classList.add('fa-eye-slash')
    }
})

btn.addEventListener("click",function(e){
    console.log("dentro del boton")
    e.preventDefault()
    if(nit.value=="" ){
        document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo')
        document.getElementById('nit').classList.add('formulario_input-error')
    }
    if(password.value==""){
        document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo') //mensaje de error
        document.getElementById('password').classList.add('formulario_input-error')
       
    }
    else if(nit.value!="" && password.value!=""){
        document.getElementById('formulario__mensaje').classList.remove('formulario__mensaje-activo')
        document.getElementById('formulario__mensaje').classList.add('formulario__mensaje')
        formulario_inicioAPL.reset();

       
        document.getElementById('nit').classList.remove('formulario_input-error')
        document.getElementById('password').classList.remove('formulario_input-error')
    }
})