// const name = 'Yehor';
// let age = +prompt ('введите ваш возраст');
// const message = 'hello world' + name;
// console.log(message);

// let newMessage = `My name is ${age}`;
// console.log(newMessage);
// age = 20;
// console.log(newMessage);
// console.log(age);
// age = +age;
// answer = confirm (`хуй соси`);
// console.log(answer);
// console.log(typeof answer);

// let newQuestion = 'вы любите js?';
// let newAnswer = confirm (newQuestion);
// console.log(typeof newAnswer);

// let num = 10;
// let boolNum = Boolean(num);
// console.log(boolNum);

// num = 0;
// boolNum = Boolean(num);
// console.log(boolNum);

// let str = 'Gena';
// let boolStr = Boolean(str);
// console.log(boolStr);

// str = ``;
// boolStr = Boolean(str);
// console.log(boolStr);

// str = ` `;
// boolStr = Boolean(str);
// console.log(boolStr);

// let isOpen;
// console.log(isOpen);
// console.log(typeof isOpen);

// let boolUnd = Boolean(isOpen);
// console.log(boolUnd);
// console.log(typeof boolUnd);

// isOpen = null;
// console.log(isOpen);
// console.log(typeof isOpen);

// let boolNull = Boolean (isOpen);
// console.log(boolNull)
// console.log(typeof boolNull)


// -----------------------------------------------------------------------------


// const showMeArguments = functions(...args) {

// }

// ----------------------Task1

// const logItems = function(array) {
//   for(let i =0; i < array.length; i++) {
//     console.log(`${i+1}-${array[i]}`)
//   }
// };


// logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);

// logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);

// logItems([100,`CSS`,`JS`,[`react`, `css`]]);

// -----------------------Task2

// const a = function(message, pricePerWord) {
//   let b = message.split(` `);
//   // console.log(b);
//   let c = b.length;
//   // console.log(c);
//   let d = pricePerWord * c;
//   // console.log(d);
//   return d;
// };

// console.log(
//   a(
//     'Proin sociis natoque et magnis parturient montes mus',
//     10,
//   ),
// ); // 80

// console.log(
//   a(
//     'Proin sociis natoque et magnis parturient montes mus',
//     20,
//   ),
// ); // 160

// console.log(
//   a('Donec orci lectus aliquam est magnis', 40),
// ); // 240

// console.log(
//   a('Donec orci lectus aliquam est magnis', 20),
// ); // 120

// ----------------------Task3

// const findLongestWord = function(string) {
//   let arrayWord = string.split(` `);
//   // console.log(arrayWord);
//   let longestWord = arrayWord[0];
//   let wordLength = arrayWord[0].length;
//   for(let i = 1; i < arrayWord.length; i++){
//     // console.log(arrayWord[i]);
//     // console.log(arrayWord[i].length);
//     if(wordLength < arrayWord[i].length) {
//       wordLength = arrayWord[i].length
//       // console.log(wordLength);
//       longestWord = arrayWord[i];
//       // console.log(longestWord);
//     }
//   }
//   return longestWord
//   // for (let word of arrayWord) {
//   //   console.log(typeof word);
    
//   // }
// };


// console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));

// console.log(findLongestWord('Google do a roll'));

// console.log(findLongestWord('May the force be with you'));


// ----------------------------------------------------------------------------------------------------------------------


// const humanCreate = function (hair, eyes, height, weight) {

//   return `Human with ${hair} hair and ${weight} weight has been created`

// }

// console.log(humanCreate('black', 'green', 175, 75));
// console.log(humanCreate('red', 'blue', 200, 95));




// const humanCreate = (hair, eyes, height, weight) => `Human with ${hair} hair and ${weight} weight has been created`;

// console.log(humanCreate('black', 'green', 175, 75));
// console.log(humanCreate('red', 'blue', 200, 95));




// const repeat = function (str, n) {
//   let result = '';
//   for (let i = 0; i < n; i += 1);
//   return repeat;
// }

// repeat('joinToUs', 3)



// ---------------------------------------------------------------------------


// const obj = {
//   defaultValue: 0,
//   add: function() {
//     obj.defaultValue += 1;
//     const a = 10;
//     return a;
//   },
//   onDecrement: function() {
//     obj.defaultValue -=1;
//   }
// };

// let increment = obj.add;
// increment();

// obj.mul = function(n) {
//   obj.defaultValue *=n
// }

// obj.mul(3);

// ---------------------------------------------------------

// const obj2 = {
//   defaultValue: 0,
//   add: function(n) {
//    return obj2.defaultValue += n;
//   }
//   console.log(obj2.add(228));

//   onDecrement: function(n) {
//     return obj2.defaultValue -= n;
//    }
//    console.log(obj2.add(228));
  
 
// }





//   add: function(n) {
//    return obj3.defaultValue -= n;
//   }
// console.log(obj3.add(228));



// const obj4 = {
//   defaultValue: 0,
//   add: function(n) {
//    return obj4.defaultValue *= n;
//   }
// }
// console.log(obj4.add(228));



// const obj5 = {
//   defaultValue: 0,
//   add: function(n) {
//    return obj5.defaultValue %= n;
//   }
// }
// console.log(obj5.add(228));

// ----------------------------------------------------------------------------------------------------------------------

