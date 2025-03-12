 // Aquí tu código

// coger la lista para poder introducir el elemento
const lista = document.getElementById(`lista`)
// coger el boton para poder hacer el evento
const agregar = document.getElementById(`agregar`)
const nombres = []
// crear evento

agregar.addEventListener(`click`, function(){
    // crear prompt
    const name = prompt(`Introducir nombre`)
    // agregar el nuevo nombre al array
    if(name){
        nombres.push(name);
    }
    lista.innerHTML = ``;
    nombres.forEach(nombre =>{
        const li = document.createElement(`li`);
        li.textContent = nombre;
        lista.appendChild(li);
    })
})
