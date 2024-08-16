const btnAgregarTarea = document.querySelector('.app__button--add-task');
const formAgragarTarea = document.querySelector('.app__form-add-task');
const textarea = document.querySelector('.app__form-textarea');
const tareas = [];

btnAgregarTarea.addEventListener('click', function() {
    console.log("click");
    formAgragarTarea.classList.toggle("hidden");
});

formAgragarTarea.addEventListener('submit', function(event){
    event.preventDefault();
    console.log("Guardar: ", textarea.value);

    const tarea = {
        descripcion: textarea.value,
    };

    tareas.push(tarea);

    //JSON
    // stringify - convertir un parametro a string
    // parse - convertir un string a un array/obj

    localStorage.setItem("tareas", JSON.stringify(tareas));
});