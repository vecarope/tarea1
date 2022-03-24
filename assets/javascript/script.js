let formulario = document.getElementById("formulario");
let nameUser = document.getElementById("name");
let lastNameUser = document.getElementById("lastName");
let marca = document.getElementById("marca");
let modelo = document.getElementById("model");
let fecha = document.getElementById("fecha");
let hora = document.getElementById("hora");
let iva = (0.19);

formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    console.log("Nombre Cliente: " + nameUser.value + " " + lastNameUser.value);
    console.log("Auto : " + marca.value + " " + modelo.value);
    console.log("Fecha :" + fecha.value + " " + hora.value);


    let revisionTecnica = document.getElementsByName("revision");
    for (let i = 0; i < revisionTecnica.length; i++) {
        if (revisionTecnica[i].checked == true) {
            console.log("Revision Tecnica :" + revisionTecnica[i].value);
        }
    }

    let servicio = document.getElementsByName("checkbox");
    let iva = (0.19);

    for (let i = 0; i < servicio.length; i++) {

        if (servicio[i].checked == true) {
            console.log("Servicio solicitado:" + servicio[i].id)
            let valor = parseInt(servicio[i].value);
            console.log("Valor Servicio:" + valor);
            let conIva = valor * iva;
            console.log("IVA (19%): " + conIva);
            let total = valor + conIva;
            console.log("Valor con IVA:" + total)
            alert("Nombre cliente: " + nameUser.value + " " + lastNameUser.value + "   " + "   " + "Valor servicio neto: $" + valor + "  " + "IVA (19%): $" + conIva +
                "  " + "Valor con IVA: $" + total);
        }

    };


    document.getElementById("formulario").reset();
});