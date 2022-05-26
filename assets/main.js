document.write("conected version 1.0")
const botonAdd = document.getElementById("agregar")
const addTarea = document.getElementById("add-tarea");
const addsection = document.querySelector(".add")
const closebtn = document.getElementById("close")

botonAdd.addEventListener("click",()=>{
    addTarea.classList.add("open")
    addsection.classList.add("close")
})

closebtn.addEventListener("click",()=>{
    addTarea.classList.remove("open")
    addsection.classList.remove("close")
    
})