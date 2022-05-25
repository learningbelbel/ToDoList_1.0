const botonAdd = document.getElementById("agregar")
const addTarea = document.getElementById("add-tarea");

botonAdd.addEventListener("click",()=>{
    addTarea.classList.toggle("close")
})