//To do List

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let tareas =[
    {
        titulo: '',
        descripcion: '',
        estado: '',
        fechaCreacion: new Date(),
        fechaVencimiento: null,
        dificultad: ''
    }
];

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
                menuPrincipal();
            });
        });
    });
}
}

function buscarTareas() {
    rl.question('Ingrese el término de búsqueda: ', (termino) => {
        console.clear();
        const resultados = tareas.filter(tarea => tarea.titulo.includes(termino)); //Chequear si se permite user .filter() e .include()
        console.log(`Resultados de búsqueda para "${termino}". Desea ver los detalles de alguna tarea?`);
        let contador = 1;
        resultados.forEach(tarea => { //Chequear si se permite utilizar .forEach()
            console.log(`${contador}. ${tarea.titulo}`);
            contador++;
        });
        rl.question('>' , (opcion) => {
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
            }

        /*rl.question('Desea editar alguna tarea?: \n1. Sí\n2. No\n', (respuesta) => {
            if (respuesta === '1') {
                rl.question('Ingrese el título de la tarea a editar: ', (tituloEditar) => {
                    for (let i = 0; i < tareas.length; i++) {
                        if (tareas[i].titulo === tituloEditar) {
                            var tarea = tareas[i];
                            break;
                        }
                    }
                    if (tarea) {
                        rl.question('Ingrese el nuevo título de la tarea: ', (nuevoTitulo) => {
                            rl.question('Ingrese la nueva descripción de la tarea: ', (nuevaDescripcion) => {
                                tarea.titulo = nuevoTitulo;
                                tarea.descripcion = nuevaDescripcion;
                                console.clear();
                                console.log(`Tarea editada: ${nuevoTitulo}`);
                                menuPrincipal();
                            });
                        });
                    } else {
                        console.log('Tarea no encontrada.');
                        menuPrincipal();
                    }
                });
            } else {
                menuPrincipal();
            }
        });*/
    });
}
}

function mostrarTareas() {
    console.clear();
}

function menuPrincipal() {
    console.log('1. Agregar tarea');
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

console.log("Bienvenido a la aplicación de Lista de Tareas");
menuPrincipal();