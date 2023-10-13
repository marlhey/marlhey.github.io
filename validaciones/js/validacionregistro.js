window.onload=()=>{
    var btn = document.getElementById("btnRegistro")
    var nombre = document.getElementById("txtNombre")
    var telefono = document.getElementById("txtTelefono")
    var edad = document.getElementById("txtEdad")
    var email = document.getElementById("txtEmail")
    var password = document.getElementById("txtPassword")
    var confirmacion = document.getElementById("txtConfirmar")
    var divA =document.querySelector("#alerta")
    var divAS = document.querySelector("#alertaSuccess")

    btn.addEventListener('click',(evt)=>{
      evt.preventDefault() //para que cuando se recargue no se borren los mensajes
      

    if(nombre.value ==""|| telefono.value =="" || edad.value =="" || email.value == "" || password.value =="" || confirmacion.value ==""){
        divA.innerHTML='Error: <br> <small>favor de llenar los campos</small>'
            divA.style.display ="block"
    }else{
        if(telefono.value.length < 10){
            divA.innerHTML='Error: <br> <small>El Telefono debe tener más de 10 numeros</small>'
            divA.style.display ="block"

        }else if(password.value != confirmacion.value){
            divA.innerHTML='Error: <br> <small>La contraseña y la confirmación no son iguales</small>'
            divA.style.display ="block"
        }else{
            divAS.style.display="block"
        }
    }

    })

    nombre.addEventListener('focus',(evt)=>{
        divA.style.display='none'
        divAS.style.display='none'
      })
    
    telefono.addEventListener('focus',(evt)=>{
        divA.style.display='none'
        divAS.style.display='none'
      })

    edad.addEventListener('focus',(evt)=>{
        divA.style.display='none'
        divAS.style.display='none'
      })

    email.addEventListener('focus',(evt)=>{
        divA.style.display='none'
        divAS.style.display='none'
      })
    
    password.addEventListener('focus',(evt)=>{
        divA.style.display='none'
        divAS.style.display='none'
      })
    
    confirmacion.addEventListener('focus',(evt)=>{
        divA.style.display='none'
        divAS.style.display='none'
      })
}