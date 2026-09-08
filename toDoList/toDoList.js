//To do List

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let tareas = [];

function agregarTarea() {
    rl.question('Ingrese el titulo de la tarea: ', (titulo) => {
        rl.question('Ingrese la descripción de la tarea: ', (descripcion) => {
            rl.question('Ingrese la fecha de vencimiento de la tarea (YYYY-MM-DD): ', (fechaVencimiento) => {
                rl.question('Ingrese la dificultad de la tarea: ', (dificultad) => {
                    
                    const nuevaTarea = {
                        titulo: titulo,
                        descripcion: descripcion,
                        estado: 'Pendiente',
                        fechaCreacion: new Date(),
                        fechaVencimiento: fechaVencimiento,
                        dificultad: dificultad
                    };
                    
                    tareas.push(nuevaTarea);
                    console.clear();
                    console.log(`Tarea agregada: ${titulo}`);
                    
                    // Volvemos al menú
                    menuPrincipal();
                    
                }); // Cierra dificultad
            }); // Cierra fechaVencimiento
        }); // Cierra descripcion
    }); // Cierra titulo
}

function buscarTareas() {
    rl.question('Ingrese el término de búsqueda: ', (termino) => {
        console.clear();
        const resultados = [];
        
        // Búsqueda manual usando for e indexOf
        for (let i = 0; i < tareas.length; i++) {
            if (tareas[i].titulo.indexOf(termino) !== -1) {
                resultados.push(tareas[i]);
            }
        }
        
        console.log(`Resultados de búsqueda para "${termino}".`);
        let contador = 1;
        
        for (let i = 0; i < resultados.length; i++) {
            console.log(`${contador}. ${resultados[i].titulo}`);
            contador++;
        }
        
        console.log('\n¿Desea ver los detalles de alguna tarea? (Ingrese el número o 0 para volver)');
        rl.question('>' , (opcion) => {
            const index = parseInt(opcion) - 1;
            
            // Si elige una tarea válida
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
            
            // Pausa para que el usuario lea, y luego volvemos al menú principal
            console.log('\nPresione Enter para continuar...');
            rl.question('', () => {
                console.clear();
                menuPrincipal();
            });
            
        }); // Cierra opcion
    }); // Cierra termino
}

function mostrarTareas() {
    console.clear();
    console.log('--- LISTA DE TAREAS ---');
    
    // Imprimimos las tareas con un for clásico
    for (let i = 0; i < tareas.length; i++) {
        console.log(`${i + 1}. [${tareas[i].estado}] ${tareas[i].titulo}`);
    }
    
    if (tareas.length === 0) {
        console.log('No hay tareas registradas.');
    }
    
    // Pausa antes de volver al menú
    console.log('\nPresione Enter para volver al menú principal...');
    rl.question('', () => {
        console.clear();
        menuPrincipal();
    });
}

function menuPrincipal() {
    console.log('\n1. Agregar tarea');
    console.log('2. Buscar tareas');
    console.log('3. Mostrar tareas');
    console.log('0. Salir');
    
    rl.question('Seleccione una opción: ', (opcion) => {
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
                rl.close();
                break;
            default:
                console.log('Opción no válida. Intente nuevamente.');
                menuPrincipal();
                break;
        }
    });
}

console.clear();
console.log("Bienvenido a la aplicación de Lista de Tareas");
menuPrincipal();