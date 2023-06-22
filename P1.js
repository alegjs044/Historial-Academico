// Seleccionar los elementos de HTML que se requieran 
var input = document.getElementById("Tarea") // document= todo lo que se encuentra en la pagina 
var boton = document.getElementById("boton")
var tareas = document.querySelector("ul")
// Visualizar cuando el usuario haga clic
boton.addEventListener("click", function(){
// Obtener lo que hay escrito en el input 
var tarea= input.value 
//Añadirlo como un nuevo elemento <li></li>
var li = document.createElement("li")
li.textContent = tarea
tareas.appendChild(li)
})

