let mates = 2500;
let termo = 3500;
let bombilla = 600;
let carritoInicial = 0;
let resultado = carritoInicial;

function sumar (i){
    resultado = resultado + i;
}

const listaProductos = []

do {
    opcion = Number(prompt('Menu Productos:\n1 - Mates (2500$)\n2 - Termos (3500$)\n3 - Bombilla (600$)\n4 - Mates LIMITADOS\n\nFunciones:\n5 - Consultar monto\n6 - Lista\n7 - Salir'));
    
    switch (opcion) {
        case 1:
            sumar(mates);
            listaProductos.push('Mate');
            console.log('Se agrego un Mate');
            break;  

        case 2:
            sumar(termo);
            listaProductos.push('Termo');
            console.log('Se agrego un termo');
            break;

        case 3:
            sumar(bombilla);
            listaProductos.push('Bombilla');
            console.log('Se agrego una bombilla');
            break;

        case 4:
            opcionesDos = Number(prompt('Mates Limitados:\n1- Mate Dragon Imperial\n2 - Mate Leñador\n3 - Mate Arcoiris\n4 - Atras'));
            
            class MateLimitados{
                constructor(material, color, tamano, precio){
                    this.material = material.toUpperCase();
                    this.color = color.toUpperCase();
                    this.tamano = tamano.toUpperCase(); 
                    this.precio = parseFloat(precio); 
                }
            }
            
            const mate1 = new MateLimitados('Calabaza',  'Rojo', 'Imperial', '3500');
            const mate2 = new MateLimitados('Madera',  'Tallado', 'Camionero', '4000');
            const mate3 = new MateLimitados('Vidrio',  'Holografico', 'Mediano', '2000');
            
            if (opcionesDos == 1){
                    console.log(mate1);
                    let siono = prompt('Lo quieres?');
                    if (siono === 'si'){
                        sumar (mate1.precio)
                        listaProductos.push('Mate Dragon Imperial');
                        console.log('Se agrego un Mate Limitado');
                        break;
                    }else{
                        break;
                    }
                }
                else if (opcionesDos == 2){
                    console.log(mate2);
                    let siono2 = prompt('Lo quieres?');
                    if (siono2 === 'si'){
                        sumar (mate2.precio)
                        listaProductos.push('Mate Leñador');
                        console.log('Se agrego un Mate Limitado');
                        break;
                    }else{
                        break;
                    }
                }
                else if (opcionesDos == 3){
                    console.log(mate3);
                    let siono3 = prompt('Lo quieres?');
                    if (siono3 === 'si' || 'Si'){
                        sumar (mate3.precio);
                        listaProductos.push('Mate Arcoiris');
                        console.log('Se agrego un Mate Limitado');
                        break;
                    }else{
                        break;
                    }
                }
                else{
                    break;
                }
            
        case 5:
            console.log('Tu monto actual es de ' + resultado + '$');
            break;
    
        case 6:
            console.log(listaProductos.join(' - '));
            console.log('Cantidad de productos ' + listaProductos.length);
            break;

        case 7:
            if (resultado > 0){
                alert('Tu compra final es de ' + resultado + '$ Gracias por la compra!');
                break;
            }
            else{
                alert('Para que venis raton');
                break;
            }    
        }       
} while(opcion != 7);

// ⢕⢕⢕⢕⢕⢕⢕⢕⢕⢕⢕⢕⢕⢕⢕⢕⢕⢕⢕⢕⢕⢕⠕⠕⠕⠕⢕⢕
// ⢕⢕⢕⢕⢕⠕⠕⢕⢕⢕⢕⢕⢕⢕⢕⢕⢕⠕⠁⣁⣠⣤⣤⣤⣶⣦⡄⢑
// ⢕⢕⢕⠅⢁⣴⣤⠀⣀⠁⠑⠑⠁⢁⣀⣀⣀⣀⣘⢻⣿⣿⣿⣿⣿⡟⢁⢔
// ⢕⢕⠕⠀⣿⡁⠄⠀⣹⣿⣿⣿⡿⢋⣥⠤⠙⣿⣿⣿⣿⣿⡿⠿⡟⠀⢔⢕
// ⢕⠕⠁⣴⣦⣤⣴⣾⣿⣿⣿⣿⣇⠻⣇⠐⠀⣼⣿⣿⣿⣿⣿⣄⠀⠐⢕⢕
// ⠅⢀⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣶⣶⣿⣿⣿⣿⣿⣿⣿⣿⣷⡄⠐⢕
// ⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡄⠐
// ⢄⠈⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡆
// ⢕⢔⠀⠈⠛⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
// ⢕⢕⢄⠈⠳⣶⣶⣶⣤⣤⣤⣤⣭⡍⢭⡍⢨⣯⡛⢿⣿⣿⣿⣿⣿⣿⣿⣿
// ⢕⢕⢕⢕⠀⠈⠛⠿⢿⣿⣿⣿⣿⣿⣦⣤⣿⣿⣿⣦⣈⠛⢿⢿⣿⣿⣿⣿
// ⢕⢕⢕⠁⢠⣾⣶⣾⣭⣖⣛⣿⠿⣿⣿⣿⣿⣿⣿⣿⣿⣷⡆⢸⣿⣿⣿⡟
// ⢕⢕⠅⢀⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠟⠈⢿⣿⣿⡇
// ⢕⠕⠀⠼⠟⢉⣉⡙⠻⠿⢿⣿⣿⣿⣿⣿⡿⢿⣛⣭⡴⠶⠶⠂⠀⠿⠿⠇