
/* ДЗ-№1 */


var b = +prompt('Введите возраст');

if(b == 18) {
    alert('Вы еще молоды. Вам нужно учится');
}
else if(b <= 0) {
    alert(' Что-то пошло не так');
}
else if(b <= 18) {
    alert(' Вы еще молоды. Вам нужно учится');
}
else if(b <= 50) {
    alert(' Вам нужно работать');
}
else if(b <= 59) {
    alert(' Вам скоро на пенсию');
}
else if(b <= 150) {
    alert(' Вы пенсионер');
}
else {
    alert('Что-то пошло не так');
}


/* ДЗ-№2 */


var time = +prompt('Введите время');


switch(time) {
    case 1:
        alert('Час ночи');
        break; 
    case 2:
        alert('два часа ночи')
        break;
    case 3:
        alert('три часа ночи')
        break;
    case 4:
        alert('четыре часа утра')
        break;
    case 5:
        alert('пять часов утра')
        break;
    case 6:
        alert('шесть часов утра')
        break;
    case 7:
        alert('семь часов утра')
        break;
    case 8:
        alert('восемь часов утра')
        break;
    case 9:
        alert('девять часов утра')
        break;
    case 10:
        alert('десять часов утра')
        break;
    case 11:
        alert('одиннадцать часов утра')
        break;
    case 12:
        alert('полдень')
        break;
    case 13:
        alert('час дня')
        break;
    case 14:
        alert('два часа дня')
        break;
    case 15:
        alert('три часа дня')
        break;
    case 16:    
        alert('четыре часа дня')
        break;
    case 17:
        alert('пять часов вечера')
        break;
    case 18:
        alert('шесть часов вечера')
        break;
    case 19:
        alert('семь часов вечера')
        break;
    case 20:
        alert('восемь часов вечера')
        break;
    case 21:
        alert('девять часов вечера')
        break;
    case 22:
        alert('десять часов вечера')
        break;
    case 23:
        alert('одиннадцать часов вечера')
        break;
    case 24:
        alert('полночь')
        break;
    default: 
        alert('Такого времени не существует')
        break;
}


/* ДЗ-№2 */