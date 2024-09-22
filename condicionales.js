// let edad = 38;
// ;
// let horario =8;

// if(edad > 17 && horario<10){
//      console.log(`Tiene ${edad}, Es mayor de edad, pero son las ${horario}, así que no se puede ir aun`);
// }else if(horario ==10){
//     console.log(`son las ${horario}, todos se pueden ir`);  
// }else{
//     console.log(`son las ${horario}, y tiene ${edad}, Es menor de edad, se puede ir`);
// };

/**
 * Estamos dormidos 0H - 5H
 * Buenos dias! 6H - 11H
 * Buenas tardes! 12H - 18H
 * Buenas noches! 18H - 23H
 */
//--------------------------------------------------------------------
//  let hora = 1;


//  if(hora >=0 && hora <=5){
//     console.log(`Es/son la/las ${hora}, así que estamos dormidos!!!`);
//  } else if(hora >=6 && hora <=11){
//     console.log(`Son las ${hora}, buenos días!!!`);
//  }else if(hora >=12 && hora <=17){
//     console.log(`Son las ${hora}, buenas tardes!!!`);
//  }else if(hora >=18 && hora <=23){
//     console.log(`Son las ${hora}, buenas noches!!!`);
//  }
//-------------------------------------------------------------------------

// let edad = 28;
// let esMayor = (edad>=18) ? 'Es mayor de edad' : 'Es menor de edad';
// console.log(esMayor);
// //? : símbolos de operación terniaria;
//-----------------------------------------------------------------------

let dia = 7;

switch (dia){
 case 1:
    console.log('Lunes');
    break;
    case 2:
        console.log('Martes');
        break;
        case 3:
            console.log('Miercoles');
            break;
            case 4:
                console.log('Jueves');
                break;
                case 5:
                    console.log('Viernes');
                    break;
                    case 6:
                        console.log('Sabado');
                        break;
                        case 7:
                            console.log('Domingo');
                            break;
                            default:
                                console.log('No es un dia de la semana');
};