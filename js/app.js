const personas = [
    new Persona('Juan', 'Perez'),
    new Persona('Karla', 'lara')
];
// metodo que trae los datos al inicar la pagina 
function mostrarPersonas(){
    console.log('mostrar personas');
    let texto = '';
    for(let persona of personas){
        // console.log(persona);
        texto += `<li> ${persona.nombre} ${persona.apellido} </li>`;
    }
    document.getElementById('personas').innerHTML = texto;
}

function agregarPersona(){
    // podemos obtener el id del formulario con forms o podemos usar el getElementById
    const forma = document.forms['forma'];
    // recuperamos el input completo 
    const nombre = forma['nombre'];
    const apellido = forma['apellido'];

    if(nombre.value != '' && apellido.value != ''){
    // una vez recupardo el input para acceder al valor del input colocamos value 
    // asi mismo lo agregamos a la clase persona antes elaborada 
    const persona = new Persona(nombre.value, apellido.value);
    console.log(persona);
    personas.push(persona);
    mostrarPersonas()
    forma.reset() // se utiliza para borra la informacion del formulario 

    }else{
        alert('no hay informacion')
    }
}