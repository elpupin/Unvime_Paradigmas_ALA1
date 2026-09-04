const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calcular(num1, operador, num2) {
    let resultado;

                switch (operador) {
                case '+':
                    resultado = num1 + num2;
                    console.log(`El resultado de ${num1} mas ${num2} es: ${resultado}`);
                    rl.close();
                    break;
                case '-':
                    resultado = num1 - num2;
                    console.log(`El resultado de ${num1} menos ${num2} es: ${resultado}`);
                    rl.close();
                    break;
                case '*':
                    resultado = num1 * num2;
                    console.log(`El resultado de ${num1} por ${num2} es: ${resultado}`);
                    rl.close();
                    break;
                case '/':
                    if (num2 === 0) {
                        console.log('Error: División por cero no permitida');
                        rl.question('Ingrese un segundo número diferente de cero: ', (respuesta4) => {
                            const num2 = parseFloat(respuesta4);
                            calcular(num1, operador, num2);
                            
                        });
                        
                    } else {                    
                        resultado = num1 / num2;
                        console.log(`El resultado de ${num1} dividido ${num2} es: ${resultado}`);
                        rl.close();
                    }
                    break;
                default:
                    console.log('Operador no válido');
            }
    }
        

s
rl.question('Ingrese el primer número: ', (respuesta1) => {
    const num1 = parseFloat(respuesta1);
    rl.question('Ingrese el operador (+, -, *, /): ', (respuesta2) => {
        const operador = respuesta2;
        rl.question('Ingrese el segundo número: ', (respuesta3) => {
            const num2 = parseFloat(respuesta3);
            calcular(num1, operador, num2);
        });
    });
});