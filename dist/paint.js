"use strict";
const cardsEstudiantes = document.querySelector("#cardsEstudiantes");
const cardsProfesores = document.querySelector("#cardsProfesores");

const addStudent = (name, lastName, mail, tele, msn, select) =>{
    let student = {
        sname: name,
        slastName: lastName,
        smail: mail,
        stele : tele,
        smsn : msn,
        sselect : select
    }
    console.log(student);
    let text = `¿Está seguro ${student.sname} ${student.slastName} de enviar la petición?`;

    modalAlert(text, "aceptar",student);
}
const addProfesor=(name,lastName, mail, select, tele, msn) =>{
    let person ={
        pname: name,
        plastName : lastName,
        pmail: mail,
        pselect: select,
        ptele:tele,
        pmsn: msn
    };
let text = `¿Esta seguro ${person.pname} ${person.plastName} de enviar la peticion como Profesor?`;

    modalAlert(text, "aceptar", person);
}

function modalAlert(cadena, tipo, estudiante){
    const alerta = document.createElement("div");
    const texto = document.createElement("p");
    const btnCerrar = document.createElement("input");
    alerta.setAttribute("id", "alerta");
    alerta.setAttribute("class", "alerta");
    texto.setAttribute("class", "textAlerta");
    texto.innerHTML = `<strong>${cadena}</strong>`;
    btnCerrar.setAttribute("type", "button");
    btnCerrar.setAttribute("class", "btnAlerta");
    btnCerrar.setAttribute("value", "Cerrar");
    alerta.appendChild(btnCerrar);
    alerta.appendChild(texto);

    if(tipo=== "aceptar"){
        const btnEnviar = document.createElement("input");
        btnEnviar.setAttribute("type", "button");
        btnEnviar.setAttribute("class", "btnAlerta");
        btnEnviar.setAttribute("value", "Enviar");
        alerta.appendChild(btnEnviar);
        document.body.appendChild(alerta);
        btnEnviar.onclick = function(){
            paintCard(estudiante, "Estudiante");
            document.getElementById("alerta").remove();
        }
    }else{
        document.body.appendChild(alerta);     
    }

    btnCerrar.onclick = function (){
        document.getElementById("alerta").remove();
    }

}

const paintCard = (datos, tipo) =>{
    const select = document.getElementById("select").value;
    tipo = select.toUpperCase();
    const fragmento = document.createDocumentFragment();
    const temEstudiante = document.getElementById("templateEstudiante").content;
    const tempProfesor = document.getElementById("templateProfesor").content;
    if (tipo === "ESTUDIANTE"){
        let tempTemplate = temEstudiante.cloneNode(true);
        tempTemplate.querySelector(".title-card").innerHTML = `DATOS DEL PQR ESTUDIANTE<hr>`;
        tempTemplate.querySelector('.data-card').innerHTML = `NOMBRES Y APELLIDOS: ${datos.sname} 
        ${datos.slastName}`;
        tempTemplate.querySelector('.text-mail').innerHTML = `Correo electrónico: ${datos.smail}`;
        tempTemplate.querySelector('.text-select').innerHTML = `CARGO: ${datos.sselect} `;
        tempTemplate.querySelector('.text-telefono').innerHTML = `Teléfono: ${datos.stele}`;
        tempTemplate.querySelector('.text-msn').innerHTML = `Mensaje: ${datos.smsn}`;
        fragmento.appendChild(tempTemplate);
        cardsEstudiantes.appendChild(fragmento);
    }else if(tipo === "PROFESOR"){
        let tempTemplateT = tempProfesor.cloneNode(true);
        tempTemplateT.querySelector('.title-card').innerHTML = 'DATOS DEL PQR PROFESOR <hr>';
        tempTemplateT.querySelector('.data-card').innerHTML = `NOMBRES Y APELLIDOS: ${datos.pname} ${datos.plastName}`;
        tempTemplateT.querySelector('.text-mail').innerHTML = `CORREO ELECTRONICO: ${datos.pmail} `;
        tempTemplateT.querySelector('.text-select').innerHTML = `CARGO: ${datos.pselect} `;
        tempTemplateT.querySelector('.text-telefono').innerHTML = `TELEFONO: ${datos.ptele} `;
        tempTemplateT.querySelector('.text-msn').innerHTML = `MENSAJE: ${datos.pmsn} `;

        fragmento.appendChild(tempTemplateT);
        cardsProfesores.appendChild(fragmento);
    }    
    form.reset();
}

export {addStudent, modalAlert, addProfesor};