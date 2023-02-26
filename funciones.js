/*const persona={ "nombre":"Gisela Frascino",
                "profesion":"Analista de Sistemas Informáticos",
                "correo":"giselafrascino@gmail.com",
                "cumple":"30 de julio",
                "direccion":"Diaz de Solis 427",
                "telefono":"(0351)153460356",
                "info_prof":"Me desempeñé como empleada administrativa en mis ultimos trabajos, pero mi aspiración es trabajar en sistemas de ahora en adelante.",
                "expe_laboral":[
                    {
                        "empresa":"Boutique EF",
                        "puesto":"Vendedora y cajera",
                        "periodo":"Temporada verano 1997"
                    },
                    {
                        "empresa":"Cuspide Cia. Arg. Seguros S.A.",
                        "puesto":"Empleada administrativa y de procuracion",
                        "periodo":"Noviembre 2001 a Octubre 2009" 
                    }
                ]
            };*/

//const obj=JSON.parse(persona);

//fetch('db.json')
//   .then (data=>{return db.json()})
//   .then (res=> {console.log(res)});

//    .then((response) => response.json())
//    .then((json) => console.log(json));

/*const xmlhttp = new XMLHttpRequest();
xmlhttp.onload = function() {
  const myObj = JSON.parse(this.responseText);
//  document.getElementById("informacion").innerHTML = myObj.nombre;
};
xmlhttp.open("GET", "db.json");
xmlhttp.send();*/

let valor_nombre=0;

function cargarNombre(){
    document.getElementById('mostrar_nombre').style.color='rgb(100,149,237)';
    document.getElementById('titulo').innerHTML="Mi nombre es:";

    const xmlhttp = new XMLHttpRequest();
    xmlhttp.onload = function() {
    const myObj = JSON.parse(this.responseText);
    document.getElementById('informacion').innerHTML= myObj.nombre;
    };
    xmlhttp.open("GET", "db.json");
    xmlhttp.send();

    let valor_nombre=1;
    const trabajo= document.getElementsByClassName('trabajo');
        for (let i=0; i<trabajo.length;i++){
            trabajo[i].style.display='none';
        };
    const educacion= document.getElementsByClassName('educacion');
        for (let i=0; i<educacion.length;i++){
            educacion[i].style.display='none';
    };
    document.getElementById('skills').style.borderStyle='none';
    const habilidad= document.getElementsByClassName('habilidad');
        for (let i=0; i<habilidad.length;i++){
            habilidad[i].style.display='none';
    };
    const proyecto= document.getElementsByClassName('proyecto');
        for (let i=0; i<proyecto.length;i++){
            proyecto[i].style.display='none';
    };
};

document.getElementById('mostrar_nombre').addEventListener('mousemove', function(){
    document.getElementById('mostrar_nombre').style.color='rgb(100,149,237)';
    document.getElementById('titulo').innerHTML="Mi nombre es:";

    const xmlhttp = new XMLHttpRequest();
    xmlhttp.onload = function() {
    const myObj = JSON.parse(this.responseText);
    document.getElementById('informacion').innerHTML= myObj.nombre;
    };
    xmlhttp.open("GET", "db.json");
    xmlhttp.send();
});

document.getElementById('mostrar_profesion').addEventListener('mousemove', function(){
    document.getElementById('mostrar_profesion').style.color='rgb(100,149,237)';
    document.getElementById('titulo').innerHTML="Mi profesion es:";

    const xmlhttp = new XMLHttpRequest();
    xmlhttp.onload = function() {
    const myObj = JSON.parse(this.responseText);
    document.getElementById('informacion').innerHTML= myObj.profesion;
    };
    xmlhttp.open("GET", "db.json");
    xmlhttp.send();
   
    if (valor_nombre=1){
        document.getElementById('mostrar_nombre').style.color='rgb(128,128,128)';
    }
});

document.getElementById('mostrar_correoe').addEventListener('mousemove', function(){
    document.getElementById('mostrar_correoe').style.color='rgb(100,149,237)';
    document.getElementById('titulo').innerHTML="Mi correo electrónico es:";

    const xmlhttp = new XMLHttpRequest();
    xmlhttp.onload = function() {
    const myObj = JSON.parse(this.responseText);
    document.getElementById('informacion').innerHTML= myObj.correo;
    };
    xmlhttp.open("GET", "db.json");
    xmlhttp.send();
    
    if (valor_nombre=1){
        document.getElementById('mostrar_nombre').style.color='rgb(128,128,128)';
    }
});

document.getElementById('mostrar_cumple').addEventListener('mousemove', function(){
    document.getElementById('mostrar_cumple').style.color='rgb(100,149,237)';
    document.getElementById('titulo').innerHTML="Mi cumpleaños es:";

    const xmlhttp = new XMLHttpRequest();
    xmlhttp.onload = function() {
    const myObj = JSON.parse(this.responseText);
    document.getElementById('informacion').innerHTML= myObj.cumple;
    };
    xmlhttp.open("GET", "db.json");
    xmlhttp.send();

    if (valor_nombre=1){
        document.getElementById('mostrar_nombre').style.color='rgb(128,128,128)';
    }
});

document.getElementById('mostrar_direccion').addEventListener('mousemove', function(){
    document.getElementById('mostrar_direccion').style.color='rgb(100,149,237)';
    document.getElementById('titulo').innerHTML="Mi dirección es:";

    const xmlhttp = new XMLHttpRequest();
    xmlhttp.onload = function() {
    const myObj = JSON.parse(this.responseText);
    document.getElementById('informacion').innerHTML= myObj.direccion;
    };
    xmlhttp.open("GET", "db.json");
    xmlhttp.send();

    if (valor_nombre=1){
        document.getElementById('mostrar_nombre').style.color='rgb(128,128,128)';
    }
});

document.getElementById('mostrar_telefono').addEventListener('mousemove', function(){
    document.getElementById('mostrar_telefono').style.color='rgb(100,149,237)';
    document.getElementById('titulo').innerHTML="Mi teléfono es:";

    const xmlhttp = new XMLHttpRequest();
    xmlhttp.onload = function() {
    const myObj = JSON.parse(this.responseText);
    document.getElementById('informacion').innerHTML= myObj.telefono;
    };
    xmlhttp.open("GET", "db.json");
    xmlhttp.send();

    if (valor_nombre=1){
        document.getElementById('mostrar_nombre').style.color='rgb(128,128,128)';
    }
});

document.getElementById('mostrar_nombre').addEventListener('mouseout', function(){
    document.getElementById('mostrar_nombre').style.color='rgb(128,128,128)';
});

document.getElementById('mostrar_profesion').addEventListener('mouseout', function(){
    document.getElementById('mostrar_profesion').style.color='rgb(128,128,128)';
});

document.getElementById('mostrar_correoe').addEventListener('mouseout', function(){
    document.getElementById('mostrar_correoe').style.color='rgb(128,128,128)';
});

document.getElementById('mostrar_cumple').addEventListener('mouseout', function(){
    document.getElementById('mostrar_cumple').style.color='rgb(128,128,128)';
});

document.getElementById('mostrar_direccion').addEventListener('mouseout', function(){
    document.getElementById('mostrar_direccion').style.color='rgb(128,128,128)';
});

document.getElementById('mostrar_telefono').addEventListener('mouseout', function(){
    document.getElementById('mostrar_telefono').style.color='rgb(128,128,128)';
});

document.getElementById('mostrar_info_prof').addEventListener('click', function(){
    if(document.getElementById('mostrar_info_prof').innerText=='MOSTRAR'){
        document.getElementById('mostrar_info_prof').textContent='OCULTAR';

        const xmlhttp = new XMLHttpRequest();
        xmlhttp.onload = function() {
        const myObj = JSON.parse(this.responseText);
        document.getElementById('text_info_prof').innerHTML= myObj.info_prof;
        };
        xmlhttp.open("GET", "db.json");
        xmlhttp.send();

        document.getElementById('text_info_prof').style.display='block';
    }else{
        document.getElementById('mostrar_info_prof').textContent='MOSTRAR';
        document.getElementById('text_info_prof').style.display='none';
    }
});

document.getElementById('mostrar_experiencia').addEventListener('click', function(){
    if(document.getElementById('mostrar_experiencia').innerText=='MOSTRAR'){
        document.getElementById('mostrar_experiencia').textContent='OCULTAR';

        const xmlhttp = new XMLHttpRequest();
        xmlhttp.onload = function() {
        const myObj = JSON.parse(this.responseText);
        document.getElementById('empresa1').innerHTML= myObj.expe_laboral[0][0];
        document.getElementById('puesto1').innerHTML= myObj.expe_laboral[0][1];
        document.getElementById('periodo1').innerHTML= myObj.expe_laboral[0][2];
        document.getElementById('empresa2').innerHTML= myObj.expe_laboral[1][0];
        document.getElementById('puesto2').innerHTML= myObj.expe_laboral[1][1];
        document.getElementById('periodo2').innerHTML= myObj.expe_laboral[1][2];
        };
        xmlhttp.open("GET", "db.json");
        xmlhttp.send();

        const trabajo= document.getElementsByClassName('trabajo');
        for (let i=0; i<trabajo.length;i++){
            trabajo[i].style.display='block';
        }
    }else{
        document.getElementById('mostrar_experiencia').textContent='MOSTRAR';
        const trabajo= document.getElementsByClassName('trabajo');
        for (let i=0; i<trabajo.length;i++){
            trabajo[i].style.display='none';
    }
}});

document.getElementById('mostrar_educacion').addEventListener('click', function(){
    if(document.getElementById('mostrar_educacion').innerText=='MOSTRAR'){
        document.getElementById('mostrar_educacion').textContent='OCULTAR';

        const xmlhttp = new XMLHttpRequest();
        xmlhttp.onload = function() {
        const myObj = JSON.parse(this.responseText);
        document.getElementById('institucion1').innerHTML= myObj.educacion[0][0];
        document.getElementById('titulo1').innerHTML= myObj.educacion[0][1];
        document.getElementById('tiempo1').innerHTML= myObj.educacion[0][2];
        document.getElementById('institucion2').innerHTML= myObj.educacion[1][0];
        document.getElementById('titulo2').innerHTML= myObj.educacion[1][1];
        document.getElementById('tiempo2').innerHTML= myObj.educacion[1][2];
        document.getElementById('institucion3').innerHTML= myObj.educacion[2][0];
        document.getElementById('titulo3').innerHTML= myObj.educacion[2][1];
        document.getElementById('tiempo3').innerHTML= myObj.educacion[2][2];
        document.getElementById('institucion4').innerHTML= myObj.educacion[3][0];
        document.getElementById('titulo4').innerHTML= myObj.educacion[3][1];
        document.getElementById('tiempo4').innerHTML= myObj.educacion[3][2];
        document.getElementById('institucion5').innerHTML= myObj.educacion[4][0];
        document.getElementById('titulo5').innerHTML= myObj.educacion[4][1];
        document.getElementById('tiempo5').innerHTML= myObj.educacion[4][2];
        };
        xmlhttp.open("GET", "db.json");
        xmlhttp.send();
        
        const educacion= document.getElementsByClassName('educacion');
        for (let i=0; i<educacion.length;i++){
            educacion[i].style.display='block';
        }
    }else{
        document.getElementById('mostrar_educacion').textContent='MOSTRAR';
        const educacion= document.getElementsByClassName('educacion');
        for (let i=0; i<educacion.length;i++){
            educacion[i].style.display='none';
    }
}});

document.getElementById('mostrar_habilidad').addEventListener('click', function(){
    if(document.getElementById('mostrar_habilidad').innerText=='MOSTRAR'){
        document.getElementById('mostrar_habilidad').textContent='OCULTAR';
        document.getElementById('seccion-skills').style.marginTop='5px';
        const habilidad= document.getElementsByClassName('habilidad');
        for (let i=0; i<habilidad.length;i++){
            habilidad[i].style.display='block';
        }
    }else{
        document.getElementById('mostrar_habilidad').textContent='MOSTRAR';
        const habilidad= document.getElementsByClassName('habilidad');
        for (let i=0; i<habilidad.length;i++){
            habilidad[i].style.display='none';
    };
}});

document.getElementById('mostrar_proyecto').addEventListener('click', function(){
    if(document.getElementById('mostrar_proyecto').innerText=='MOSTRAR'){
        document.getElementById('mostrar_proyecto').textContent='OCULTAR';

        const xmlhttp = new XMLHttpRequest();
        xmlhttp.onload = function() {
        const myObj = JSON.parse(this.responseText);
        document.getElementById('empresa-proyecto1').innerHTML= myObj.proyecto[0][0];
        document.getElementById('temporada1').innerHTML= myObj.proyecto[0][1];
        document.getElementById('proyecto1').innerHTML= myObj.proyecto[0][2];
        };
        xmlhttp.open("GET", "db.json");
        xmlhttp.send();

        const proyecto= document.getElementsByClassName('proyecto');
        for (let i=0; i<proyecto.length;i++){
            proyecto[i].style.display='block';
        }
    }else{
        document.getElementById('mostrar_proyecto').textContent='MOSTRAR';
        const proyecto= document.getElementsByClassName('proyecto');
        for (let i=0; i<proyecto.length;i++){
            proyecto[i].style.display='none';
    };
}});