var result = confirm('Задание 1');
var yourName = prompt('Введи свое имя')
var year = +prompt('Сколько тебе лет?')
var addition = +prompt('Вот только давай без калькулятора ок? 1 + 1 = ?')
var subtraction = +prompt('745 - 564 = ?')
var multiplication = +prompt('96234 * 49756 = ?')
var division = +prompt('7954694 / 3977347 = ?')
var procent = +prompt('9959694 % 4924747 = ?')
var understand = 'Ок'
var Didunderstand = 'Отмена'
var understands = 'Я подожду'
var Didunderstands = 'Открой консоль клавишой F12'
var bad = ' (Плохо)'
var notBad = ' (Молодец)'
var veryGood = ' (Очень даже не плохо)'
var omg = ' (Ну ничего себе)'
var fun = ' (Я же говорил не пользоваться калькулятором-_-)'
var warrior = ' (Кто-ты, Воин?0_0)'



console.log('Меня зовут ' + yourName);
console.log('Мне ' + year);
if (addition == 1 + 1) {
    console.log('Пример 1: 1 + 1 = ' + (1 + 1) + ' Ваш ответ ' + addition + notBad);
  } else {
    console.log('Пример 1: 1 + 1 = ' + (1 + 1) + ' Ваш ответ ' + addition + bad);
  }
if (subtraction == 745 - 564) {
    console.log('Пример 2: 745 - 564 = ' + (745 - 564) + ' Ваш ответ ' + subtraction + veryGood);
  } else {
    console.log('Пример 2: 745 - 564 = ' + (745 - 564) + ' Ваш ответ ' + subtraction + bad);
  }
if (multiplication == 96234 * 49756) {
    console.log('Пример 3: 96234 * 49756 = ' + (96234 * 49756) + ' Ваш ответ ' + multiplication + omg);
  } else {
    console.log('Пример 3: 96234 * 49756 = ' + (96234 * 49756) + ' Ваш ответ ' + multiplication + bad);
  }
if (division == 7954694 / 3977347) {
    console.log('Пример 4: 7954694 / 3977347 = ' + (7954694 / 3977347) + ' Ваш ответ ' + division + fun);
  } else {
    console.log('Пример 4: 7954694 / 3977347 = ' + (7954694 / 3977347) + ' Ваш ответ ' + division + bad);
  }
if (procent == 9959694 % 4924747) {
    console.log('Пример 5: 7954694 / 3977347 = ' + (9959694 % 4924747) + ' Ваш ответ ' + procent + warrior);
  } else {
    console.log('Пример 5: 7954694 / 3977347 = ' + (9959694 % 4924747) + ' Ваш ответ ' + procent + bad);
  }

var result = confirm('нажми Alt+F4, шучу , нажми F12 для открытия консоли.Если понял нажми ' + understand + ', если не понял нажми ' + Didunderstand);

if (result) alert(understands)
else (
    alert(Didunderstands)
);


var result = confirm('Задание 2');

var X, Y, Z, res;

var X = +prompt('Введи любое число')
var Y = +prompt('Введи любое число еще раз')
var Z = +prompt('И еще раз')

console.log((X + Y + Z) / 3);
