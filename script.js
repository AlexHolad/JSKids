 "use strict";

// Игра: "Найди клад!"

// Получить случайное число от 0 до size-1
// var getRandomNumber = function (size) {
//    return Math.floor(Math.random() * size);
// };

// Получить для расстояния строку подсказки
// var getDistance = function (event, target) {
//    var diffX = event.offsetX - target.x;
//    var diffY = event.offsetY - target.y;
//    return Math.sqrt((diffX * diffX) + (diffY * diffY));
// };

// Вычислить расстояние от клика (event) до клада (target)
// var getDistanceHint = function (distance) {
//    if (distance < 10) {
//       return "Обожжёшься";
//    } else if (distance < 30) {
//       return "Очень горячо"; 
//    } else if (distance < 50) {
//       return "Горячо"; 
//    } else if (distance < 100) {
//       return "Тепло"; 
//    } else if (distance < 200) {
//       return "Холодно"; 
//    } else if (distance < 400) {
//       return "Холодно"; 
//    } else if (distance < 600) {
//       return "Очень-очень-очень холодно"; 
//    } else {
//       return "Замёрзнешь"; 
//    }
// };

// Создаем переменные
// var width = 800;
// var height = 800;
// var clicks = 0;

// Случайная позиция клада
// var target = {
//    x: getRandomNumber(width),
//    y: getRandomNumber(height)
// };

// Добавляем элементу img обработчик клика
// $("#map").click(function (event) {
//     clicks++;
//    Получаем расстояние от места клика до клада
//     var distance = getDistance (event, target);
//    Преобразуем расстояние в подсказку
//     var distanceHint = getDistanceHint(distance);
//    Записываем в элемент #distance новую подсказку
//    $("#distance").text(distanceHint + " " + (16 - clicks));
//    Если клик был достаточно близко, поздравляем с победой 
//     if (distance < 8) {
//        alert("Клад найден! " + "Сделано кликов: " + clicks);
//     }
//     if (clicks > 15) {
//        let theEnd = confirm("КОНЕЦ ИГРЫ");
//        if (theEnd == true) {
//          location.reload();
//        } else {
//          location.reload();
//        }
//     }
// });


 // Игра: поймай цифру)
// $("h1").click(function() {
//    clearInterval(intervalId);
//    var speed = 100; 
//    setInterval (moveHeadingRight, speed -= 10)
//    counter++;
//    $("h1").text(counter);
//    if (counter == 10) {
//       clearInterval(intervalId);
//       $("h1").text("ВЫ ПОБЕДИЛИ!");
//       alert("ВЫ ПОБЕДИЛИ!");
//    }
// });

// var counter = 0;
// let koorX = 0;
// let koorY = 0;

// function moveHeadingRight () {
//    $("#heading").offset({ left: koorX, top: koorY });
//    if (koorX < 200 && koorY === 0) {
//       koorX++;  
//    } else if (koorX === 200 && koorY < 200) {
//       koorY++;
//    } else if (koorX > 0 && koorY === 200) { 
//       koorX--;
//    } else {
//       koorY--;
//    }
// };

// var intervalId = setInterval (moveHeadingRight, 60);





// Заголовок при клике перемещается к курсору
//  $("html").click (function (event) {
//    $("#heading").offset({
//       left: event.pageX,
//       top: event.pageY
//    });
// });

 // Заголовок следует за курсором
//  $("html").mousemove (function (event) {
//    $("#heading").offset({
//       left: event.pageX,
//       top: event.pageY
//    });
// });



// При клике Передаем в консоль коррдинаты места клика 
//  var clickHandler = function (event) {
//    console.log("Клик! " + event.pageX + " " + event.pageY);
// };
//    $("h1").click(clickHandler);


 // двигаем html элемент влево 
// var leftOffset = 0;

// function moveHeading () {
//    $("#heading").offset({ left: leftOffset });

//    leftOffset += 10;
//    if (leftOffset > 200) {
//       leftOffset = 0;
//    }
// };

// setInterval (moveHeading, 200);
// alert по таймеру 
// function doHomeworkAlarm () {
//    alert("Сделай домашку!");
// };
// setTimeout (doHomeworkAlarm, 60000);

// var timeOutID = setTimeout (doHomeworkAlarm, 60000);

// clearTimeout (timeOutID);



//  var friends = ["Sonia","Serega","Wowchik","Wowa"]

// for (let i = 0; i < friends.length; i++) {
//    $("body").append("<p>" + friends[i] + "</p>");
// }

// $("h1").text("МОИ ДРУЗЬЯ");
// $("p").append(" лучший!");
// $("h1").fadeTo(2000, 0.2);

//  for (let i = 0; i < 1; i++) {
//    $("h1").show(1000).hide(1000);
//    $("h1").show(2000).hide(2000);
//    $("h1").show(3000).hide(3000);

//  }

// $("p").fadeOut(2000).delay(4000).fadeIn(5000);
 // // Заменяем текст в элементе
// var newHeadingText = prompt("Введите новый заголовок:");
// $("#main-heading").text(newHeadingText);


// for (let i = 0; i < 5; i++) {
//    $("h1").fadeOut(1000);
//    $("h1").fadeIn(1000);
// }


//  var resultScore = function (result) {
//     if (result < 6) {
//         return 'Bronze';
//     }
//     if (result < 12) {
//         return 'Silber';
//     }
//         return 'Gold';
// };



//  var generateRandomInsult = function () {

//     var randomBodyParts = ["глаз", "нос", "череп"];
//     var randomAdjectives = ["вонючая", "унылая", "дурацкая"];
//     var randomWords = ["муха", "выдра", "дубина", "мартышка", "крыса"];
 
//     let pickRandomWord = function (words) {
//         return words[Math.floor(Math.random() * words.length)];
//     };
 
//     var randomInsult = "У тебя " + pickRandomWord(randomBodyParts) + " словно " + pickRandomWord(randomAdjectives) + " " + pickRandomWord(randomWords) + "!!!";
//     return randomInsult;
// };

// var double = function (number) {
//     return number * 2
// };

// double(8);
// double(76) + double(55);


// var printMultipleTimes = function (howManyTimes, whatToDraw) {
//     for (let i = 0; i < howManyTimes; i++) {
//         console.log(i + ". " + whatToDraw)
//     }
// };

// printMultipleTimes(11, "=^.^=");

// let sayHallo = function (name) {
//     console.log ("Hallo " + name);
// };

// sayHallo ("Lidochka");
// sayHallo ("Annuschka");


//  var ourFirstFunction = function () {
//     console.log("Hello World!")
//  };

//  ourFirstFunction ();


// //HANGMAN
// // Создаем массив со словами
// var words = ["кошка","собака","лев","слон","обезьяна","тигр","корова","коза","крыса","бык","лошадь","медведь","белка","ёж","волк","лиса","олень","лось","тюлень","морж","свинья","заяц","рысь"];
//  // Выбираем случайное слово
//  var word = words[Math.floor(Math.random() * words.length)];
//  // Создаем итоговый массив
//  var answerArray = [];
//  for (var i = 0; i < word.length; i++) {
//  answerArray[i] = "_";
//  }
//  var remainingLetters = word.length;
//  var probe = word.length + 2;
//  console.log(probe);
//  // Игровой цикл
//  while (remainingLetters > 0 && probe > 0) {
//  // Показываем состояние игры
//  alert(answerArray.join(" "));
// // Запрашиваем вариант ответа
// var guess = prompt("Угадайте букву, или нажмите Отмена для выхода из игры.");
// guess.toLowerCase();
// probe--;
// alert("Осталось " + probe + " попыток");
// if (guess === null) {
// // Выходим из игрового цикла
// break;
// } else if (guess.length !== 1) {
// alert("Пожалуйста, введите одиночную букву.");
// } else {
// // Обновляем состояние игры
// for (var j = 0; j < word.length; j++) {
// if (word[j] === guess, answerArray[j] === "_") {
// answerArray[j] = guess;
// remainingLetters--;
// console.log("Неразгаданных букв осталось " + remainingLetters);
// } 

// }
// }
// // Конец игрового цикла
// }
// // Отображаем ответ и поздравляем игрока
// alert(answerArray.join(" "));
// alert("Было загадано слово " + word);


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


