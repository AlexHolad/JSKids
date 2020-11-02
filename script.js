"use strict";

//HANGMAN
// Создаем массив со словами
var words = ["кошка","собака","лев","слон","обезьяна","тигр","корова","коза","крыса","бык","лошадь","медведь","белка","ёж","волк","лиса","олень","лось","тюлень","морж","свинья","заяц","рысь"];
 // Выбираем случайное слово
 var word = words[Math.floor(Math.random() * words.length)];
 // Создаем итоговый массив
 var answerArray = [];
 for (var i = 0; i < word.length; i++) {
 answerArray[i] = "_";
 }
 var remainingLetters = word.length;
 var probe = word.length + 2;
 console.log(probe);
 // Игровой цикл
 while (remainingLetters > 0 && probe > 0) {
 // Показываем состояние игры
 alert(answerArray.join(" "));
// Запрашиваем вариант ответа
var guess = prompt("Угадайте букву, или нажмите Отмена для выхода из игры.");
guess.toLowerCase();
probe--;
alert("Осталось " + probe + " попыток");
if (guess === null) {
// Выходим из игрового цикла
break;
} else if (guess.length !== 1) {
alert("Пожалуйста, введите одиночную букву.");
} else {
// Обновляем состояние игры
for (var j = 0; j < word.length; j++) {
if (word[j] === guess, answerArray[j] === "_") {
answerArray[j] = guess;
remainingLetters--;
console.log("Неразгаданных букв осталось " + remainingLetters);
} 

}
}
// Конец игрового цикла
}
// Отображаем ответ и поздравляем игрока
alert(answerArray.join(" "));
alert("Было загадано слово " + word);


// let likesCat = confirm("Would you like cats?");

// if (likesCat) {
//     console.log("You are catsfriend");
// }   else {
//     console.log("You are good man");
// };




// var name = prompt("Как вас зовут?");
// console.log("Привет, " + name);
// alert("Sparta");



// let input = "javascript is awesome";
// let output = "";


// for (i = 0; i < input.length; i++) {
//     if (input[i] === "a") {
//         output += "4";
//     } else if (input[i] == "e") {
//         output += "3";
//     } else if (input[i] == "i") {
//         output += "1";;
//     } else if (input[i] == "o") {
//         output += "0";
//     } else {
//         output += input[i];
//     }
//     console.log(output);
// };




// var alphabet = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";
// let randomString = "";
// let randomIndex = Math.floor(Math.random() * alphabet.length);


// while (randomString.length < 7) {
//     randomIndex = Math.floor(Math.random() * alphabet.length);
//     randomString += alphabet[randomIndex];

// }

// console.log(randomString);





// var animals = ["Кот", "Рыба", "Лемур", "Комодский варан"];

// for (i = 0; i < animals.length; i++) {
//     animals[i] += " - прекрасное животное!";
// };
// console.log(animals);




// for (let x = 3; x < 10000; x = x * 3) {
//     console.log(x);
// };

// let x = 3;
// while (x < 10000) {
//     console.log(x);
//     x *= 3;

// };




// let name = 'Nico';

// for (i = 0; i < name.length; i++) {
//     console.log('My name have letter: ' + name[i]);
// };




// let animals = ['leopard', 'elephant', 'monkey', 'bird', 'bear', 'flamingo'];

// for (i = 0; i < animals.length; i++) {
//     console.log('В этом зоопарке есть ' + animals[i] + '.');
// };
// console.log(animals.length);



// let timeToSayHello = 3;
// for (i = 0; i < timeToSayHello; i++ ) {
//     console.log('Hello!');
// };

// for (i = 0; i < 10; i++) {
//     console.log('Sheeps = ' + (i + 1));
// };
// console.log("Хрррррррррр-псссс");


// var cat = {
//     name: "Harmony",
//     legs: 3,
//     color: "Leoparden",
//     age: 8
// };

// var dog = {
//     name: "Oladushek",
//     color: "white",
//     age: 8,
//     bark: "Gav!"
// };

// console.log(Object.keys(dog));
// console.log(Object.keys(cat));

// let object = {};



// var name = "Nico";

// if (name.length > 6) {
//     console.log("So long Name");
// } else {
//     console.log("Schöner Name");
// };

// let name;

// if (name === 'Alex') {
//     console.log('Hello me!');
// } else if (name === 'Vasilij') {
//     console.log('Hello father!!!');
// } else if (name === 'Marina') {
//     console.log('Hello mother!!');
// } else {
//     console.log('Hello Stranger!!!');
// };

// var sheepCounter = 0;

// while (sheepCounter < 10) {
//     console.log("Sheeps = " + (sheepCounter + 1));
//     sheepCounter++;
// };
// console.log("Хрррррррррр-псссс");


