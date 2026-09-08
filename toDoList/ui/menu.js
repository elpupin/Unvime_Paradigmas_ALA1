import rl from 'readline-sync';
import { tareas, agregar, obtenerTodas, buscarPorTitulo } from '../data/tareas.js';

export function menuPrincipal() {
    console.log('\n1. Agregar tarea');
    console.log('2. Buscar tareas');
    console.log('3. Mostrar tareas');
    console.log('0. Salir');
    
    const opcion = rl.question('Seleccione una opcion: ');
    console.clear();
    
    switch (opcion) {
        case '1':
            agregarTarea();
            break;
        case '2':
            buscarTareas();
            break;
        case '3':
            mostrarTareas();
            break;
        case '0':
            console.log('Saliendo de la aplicación...');
            process.exit(0);
        default:
            console.log('Opción no válida. Intente nuevamente.');
            menuPrincipal();
            break;
    }
}

function agregarTarea() {
    const titulo = rl.question('Ingrese el titulo de la tarea: ');
    const descripcion = rl.question('Ingrese la descripcion de la tarea: ');
    const fechaVencimiento = rl.question('Ingrese la fecha de vencimiento de la tarea (YYYY-MM-DD): ');
    const dificultad = rl.question('Ingrese la dificultad de la tarea: ');
    
    const nuevaTarea = {
        titulo: titulo,
        descripcion: descripcion,
        estado: 'Pendiente',
        fechaCreacion: new Date(),
        fechaVencimiento: fechaVencimiento,
        dificultad: dificultad
    };
    
    agregar(nuevaTarea);
    
    console.clear();
    console.log(`Tarea agregada: ${titulo}`);
    menuPrincipal();
}

function buscarTareas() {
    const termino = rl.question('Ingrese el termino de busqueda: ');
    console.clear();
    
    const resultados = buscarPorTitulo(termino);
    
    console.log(`Resultados de búsqueda para "${termino}".`);
    let contador = 1;
    
    for (let i = 0; i < resultados.length; i++) {
        console.log(`${contador}. ${resultados[i].titulo}`);
        contador++;
    }

    if (resultados.length === 0) {
        console.log('No se encontraron tareas con ese termino.');
    } else {
        console.log('\n¿Desea ver los detalles de alguna tarea? (Ingrese el numero o 0 para volver)');
        const opcion = rl.question('>');
        const index = parseInt(opcion) - 1;

        if (index >= 0 && index < resultados.length) {

            const tareaSeleccionada = resultados[index];
            console.clear();

            console.log(`Título: ${tareaSeleccionada.titulo}`);
            console.log(`Descripción: ${tareaSeleccionada.descripcion}`);
            console.log(`Fecha de creación: ${tareaSeleccionada.fechaCreacion}`);
            console.log(`Fecha de vencimiento: ${tareaSeleccionada.fechaVencimiento}`);
            console.log(`Estado: ${tareaSeleccionada.estado}`);
            console.log(`Dificultad: ${tareaSeleccionada.dificultad}`);
            
        } else if (opcion !== '0') {
            console.log('Opción no válida.');
        }
    }
    

    
    console.log('\nPresione Enter para continuar...');
    rl.question('');
    console.clear();
    menuPrincipal();
}

function mostrarTareas() {
    console.clear();
    console.log('--- LISTA DE TAREAS ---');
    
    const lista = obtenerTodas();
    
    for (let i = 0; i < lista.length; i++) {
        console.log(`${i + 1}. [${lista[i].estado}] ${lista[i].titulo}`);
    }
    
    if (lista.length === 0) {
        console.log('No hay tareas registradas.');
    }
    
    console.log('\nPresione Enter para volver al menu principal...');
    rl.question('');
    console.clear();
    menuPrincipal();
}