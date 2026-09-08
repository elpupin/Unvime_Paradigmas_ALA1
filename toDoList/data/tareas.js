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