"use strict";
import { validateString, validateTelefono, Validate } from "./validate.js";
import { addStudent,modalAlert, addProfesor } from "./paint.js";
const btnEnviar = document.getElementById("btnEnviar");
const form = document.getElementById("fmContact");
//Objeto de validacion

let validator = new Validate();

const objectValid ={
    nameObject: false,
    lastNameobject: false,
    mailObject:false,
    teleobject:false,
    msnObject:false,
    selectObject: false
}

form.addEventListener ("change",function(event){
    const inputId = event.target.id;
    console.log(inputId);
    const inputValue = event.target.value;
    console.log(inputValue);
    const inputClass = event.target.classList;
    console.log(inputClass);

    const validClass = ()=>{
        inputClass.add("is-valid");
        inputClass.remove("is-invalid");
    }

    const invalidClass = ()=>{
        inputClass.add("is-invalid");
        inputClass.remove("is-valid");
    }

    switch(inputId){
        case "name": 
            objectValid.nameObject = validator.validNames(inputValue);
            objectValid.nameObject ? validClass() : invalidClass();
            console.log(Object.values(objectValid));
            break;
        case "lastName":    
            objectValid.lastNameObject = validator.validNames(inputValue);
            objectValid.lastNameObject ? validClass() : invalidClass();
            console.log(Object.values(objectValid));
            break;

        case "mail":    
            objectValid.mailObject = validator.validMail(inputValue);
            objectValid.mailObject ? validClass() : invalidClass();
            console.log(Object.values(objectValid));
            break;

        case "telephone":    
            objectValid.teleObject = validator.validTel(inputValue);
            objectValid.teleObject ? validClass() : invalidClass();
            console.log(Object.values(objectValid));
        break;

        case "msn":    
            objectValid.msnObject = validator.validText(inputValue);
            objectValid.msnObject ? validClass() : invalidClass();
            console.log(Object.values(objectValid));
        break;
        case "select":    
            objectValid.selectObject = validator.validSelect(inputValue);
            objectValid.selectObject ? validClass() : invalidClass();
            console.log(Object.values(objectValid));
        break;

    }
})


btnEnviar.addEventListener("click", (e) =>{
    e.preventDefault();
    const nombre = document.getElementById("name").value;
    const apellido = document.getElementById("lastName").value;
    const correo = document.getElementById("mail").value;
    const telefono = document.getElementById("telephone").value;
    const mensaje = document.getElementById("msn").value;
    const select = document.getElementById("select").value;
    console.log(select);        
    if(validateString(nombre) && validateString(apellido) && validateString(correo)
    && validateTelefono(telefono) && validateString(mensaje))
    {
        console.log(select);
        if(select === "Estudiante"){
            if(!isNaN(parseInt(telefono))){
                addStudent(nombre,apellido,correo,telefono,mensaje, select);
            }else{
                modalAlert("Verificar el numero");
            }
            
            }else if(select === "Profesor"){
                console.log(select);
                addProfesor(nombre,apellido,correo,select,telefono,mensaje);
            }else{
            modalAlert("No ha seleccionado cargo");
             }
}else{
    modalAlert("Datos incorrectos, por favor revisar")
     }
});