
const botonSuma=document.getElementById("sumar");

botonSuma.addEventListener('click', async(event)=>{

    event.preventDefault();
    const numero_1=parseFloat(document.getElementById("num1").value);
    const numero_2=parseFloat(document.getElementById("num2").value);

    const respuesta= await fetch(
        'http://localhost:3000/api/sumar',
        {
            "method":"POST",
            "headers":{
                "Content-type":"application/json"
            },
            "body": JSON.stringify({numero_1,numero_2})
        }
    );

    const datos= await respuesta.json();
    const div_resultado=document.getElementById("resultado");
    div_resultado.innerHTML=datos;
});

const botonResta=document.getElementById("restar");

botonResta.addEventListener('click', async(event)=>{

    event.preventDefault();
    const numero_1=parseFloat(document.getElementById("num1").value);
    const numero_2=parseFloat(document.getElementById("num2").value);

    const respuesta= await fetch(
        'http://localhost:3000/api/restar',
        {
            "method":"POST",
            "headers":{
                "Content-type":"application/json"
            },
            "body": JSON.stringify({numero_1,numero_2})
        }
    );

    const datos= await respuesta.json();
    const div_resultado=document.getElementById("resultado");
    div_resultado.innerHTML=datos;
});

const botonDividir=document.getElementById("dividir");

botonDividir.addEventListener('click', async(event)=>{

    event.preventDefault();
    const numero_1=parseFloat(document.getElementById("num1").value);
    const numero_2=parseFloat(document.getElementById("num2").value);

    const respuesta= await fetch(
        'http://localhost:3000/api/dividir',
        {
            "method":"POST",
            "headers":{
                "Content-type":"application/json"
            },
            "body": JSON.stringify({numero_1,numero_2})
        }
    );

    const datos= await respuesta.json();
    const div_resultado=document.getElementById("resultado");
    div_resultado.innerHTML=datos;
});

const botonMultiplicar=document.getElementById("multiplicar");

botonMultiplicar.addEventListener('click', async(event)=>{

    event.preventDefault();
    const numero_1=parseFloat(document.getElementById("num1").value);
    const numero_2=parseFloat(document.getElementById("num2").value);

    const respuesta= await fetch(
        'http://localhost:3000/api/multiplicar',
        {
            "method":"POST",
            "headers":{
                "Content-type":"application/json"
            },
            "body": JSON.stringify({numero_1,numero_2})
        }
    );

    const datos= await respuesta.json();
    const div_resultado=document.getElementById("resultado");
    div_resultado.innerHTML=datos;
});

const botonClear=document.getElementById("clear");

botonClear.addEventListener('click', ()=>{
        const borrar=0;
        const clear=document.getElementById("resultado");
        clear.innerHTML=borrar;
});
