export const tareas = [];

export function agregar(nuevaTarea) {
    tareas.push(nuevaTarea);
}

export function obtenerTodas() {
    return tareas;
}

export function buscarPorTitulo(termino) {
    const resultados = [];
    const terminoBusqueda = termino.toLowerCase();
    
    for (let i = 0; i < tareas.length; i++) {
        const tituloTarea = tareas[i].titulo.toLowerCase();
        
        if (tituloTarea.indexOf(terminoBusqueda) !== -1) {
            resultados.push(tareas[i]);
        }
    }
    
    return resultados;
}

export function obtenerPorEstado(estadoBuscado) {
    const filtradas = [];
    for (let i = 0; i < tareas.length; i++) {
        if (tareas[i].estado === estadoBuscado) {
            filtradas.push(tareas[i]);
        }
    }
    return filtradas;
}

export function actualizarTarea(tarea, nuevosDatos) {
    tarea.titulo = nuevosDatos.titulo;
    tarea.descripcion = nuevosDatos.descripcion;
    tarea.fechaVencimiento = nuevosDatos.fechaVencimiento;
    tarea.dificultad = nuevosDatos.dificultad;
}