// alert('Please unremark the code one by one to test all the JS Task From Chapter 1 - 20');

/**
 * Chapter 21 - 25
 */
//  1
// var firstName = prompt("Enter your first name");
// var lastName = prompt("Enter your last name");
// var fullName = firstName + " " + lastName;
// alert("Welcome " + fullName);
//  2
// var favMobileModel = prompt("What is your favorite mobile phone model?");
// document.write("Your favorite mobile phone model is: " + favMobileModel + "<br />");
// document.write("Length of string: " + favMobileModel.length);
//  3
// var nationality =  "Pakistani";
// document.write("String: " + nationality + "<br />");
// document.write("Index of letter \'n\': " + nationality.indexOf('n'));
//  4
// var str =  "Hello World";
// document.write("String: " + str + "<br />");
// document.write("Index of letter \'l\': " + str.lastIndexOf('l'));
//  5
// var nationality =  "Pakistani";
// document.write("String: " + nationality + "<br />");
// document.write("Character at index 3: " + nationality.charAt(3));
//  6
// var firstName = prompt("Enter your first name");
// var lastName = prompt("Enter your last name");
// var fullName = "";
// fullName = fullName.concat(firstName, " ", lastName);
// alert("Welcome " + fullName);
//  7
// var city = "Hyderabad";
// document.write("City: " + city + "<br />");
// city = city.replace("Hyder", "Islam");
// document.write("After replacement: " + city);
//  8
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// message = message.replace(/and/g, "&");
// document.write(message);
//  9
// var str = "472";
// var num = parseInt(str);
// document.write(str + "<br />");
// document.write(typeof(str) + "<br />");
// document.write(num + "<br />");
// document.write(typeof(num));
//  10
// var str = prompt("Input a string in lowwercase");
// document.write("User input: " + str + "<br />");
// str = str.toUpperCase();
// document.write("Upper case: " + str);
//  11
// var str = prompt("Input a string in lowwercase");
// document.write("User input: " + str + "<br />");
// str = str.toLowerCase();
// str = str.substring(0, 1).toUpperCase() + str.substring(1,str.length);
// document.write("Title case: " + str);
//  12
// var num = 35.36;
// document.write("Number: " + num + "<br />");
// var str = num.toString();
// str = str.replace(".", "");
// document.write("Result: " + str);
//  13
// var userName = prompt("Enter username");
// for (let index = 0; index < userName.length; index++) {
//     var char = userName.charAt(index);
//     if(char === String.fromCharCode(33) || char === String.fromCharCode(44) || char === String.fromCharCode(46) || char === String.fromCharCode(64)){
//         alert("Please enter a valid username");
//         break;
//     }
// }
//  14
// var items = ['cake', 'apple pie', 'cookie', 'chips', 'patties']
// var item = prompt('Welcome to ABC Bakery. What do you wants to order sir/ma\'am');
// var found = false;
// for (const key in items) {
//     if (items[key].toLowerCase() === item.toLowerCase()) {
//         found = true;
//         document.write(item + ' is <b>available</b> at index ' + key + ' in our bakery');
//         break;
//     }
// }
// if(!found){
//     document.write('We are Sorry. ' + item + ' is <b>not available</b> in our bakery')
// }
//  15
// var pass = prompt("enter password");
// document.write("Entered password: " + pass + "<br />");
// var validPassword = true;
// if (validPassword) {
//     for (let index = 0; index < pass.length; index++) {
//         var asciiCode = pass.charCodeAt(index);
//         if ((asciiCode >= 48 && asciiCode <= 57) || (asciiCode >= 65 && asciiCode <= 90) || (asciiCode >= 97 && asciiCode <= 122)) {
//             validPassword = true;
//         } else {
//             validPassword = false;
//             document.write("Password should contain alphabets and numbers only.<br />");
//             document.write("Please enter a valid password.");
//             break;
//         }
//     }
// }
// if(validPassword){
//     var asciiCode = pass.charCodeAt(0);
//     if ((asciiCode >= 48 && asciiCode <= 57)) {
//         validPassword = false;
//         document.write("Password can not begin with a number.<br />");
//         document.write("Please enter a valid password");
//     } else if (pass.length < 6) {
//         validPassword = false;
//         document.write("Password must be atleast 6 characters long.<br />");
//         document.write("Please enter a valid password.");
//     }
// }
// if(validPassword){
//     document.write("You entered a valid password.");
// }
//  16
// var university = "University of Karachi";
// var res = university.split("");
// for (let index = 0; index < res.length; index++) {
//     document.write(res[index] + "<br />");    
// }
//  17
// var str = prompt("Input a string in lowwercase");
// document.write("User input: " + str + "<br />");
// document.write("Last character of input: " + str.substring(str.length - 1, str.length));
//  18
// var str = "The quick brown fox jumps over the lazy dog";
// var count = (str.toLowerCase().match(/the /g) || []).length;
// document.write("Text: " + str + "<br />");
// document.write("There are " + count + " occurrence(s) of the word \'the\'");

/**
 * Chapter 26 - 30
 */
//  1
// var num = +prompt("Enter a positive number");
// document.write("number: " + num + "<br />");
// document.write("round of value: " + Math.round(num) + "<br />");
// document.write("floor value: " + Math.floor(num) + "<br />");
// document.write("ceil value: " + Math.ceil(num));
//  2
// var num = +prompt("Enter a negative number");
// document.write("number: " + num + "<br />");
// document.write("round of value: " + Math.round(num) + "<br />");
// document.write("floor value: " + Math.floor(num) + "<br />");
// document.write("ceil value: " + Math.ceil(num));
//  3
// var num = +prompt("Enter a number");
// document.write("The absolute value of " + num + " is " + Math.abs(num));
//  4
// var num = Math.random() * 6;
// num = Math.ceil(num);
// document.write("random dice value is " + num);
//  5
// var num = Math.random() * 2;
// num = Math.ceil(num);
// document.write(num + "<br />");
// document.write("random coin value is " + (num === 1 ? "Tails" : "Heads"));
//  6
// var num = Math.random() * 100;
// num = Math.ceil(num);
// document.write("random number between 1 and 100: " + num);
//  7
// var weight = prompt("Enter your weight");
// document.write("The weight of the user is " + parseFloat(weight) + " kilograms");
//  8
// var secretNum = Math.random() * 10;
// secretNum = Math.ceil(secretNum);
// var guess = +prompt('Enter a number (ranging from 1 to 10)');
// if (guess === secretNum) {
//     alert('Bingo! Correct answer');
// } else {
//     alert('Try again!');
// }

/**
 * Chapter 31 - 34
 */
//  1
// var curDate = new Date();
// document.write(curDate);
//  2
// var curDate = new Date();
// var monthsName = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
// document.write("Current month: " + monthsName[curDate.getMonth()]);
//  3
// var curDate = new Date();
// var monthsName = ["Sun", "Mon", "Tue", "Wed", "Thr", "Fri", "Sat"];
// document.write("Today is " + monthsName[curDate.getDay()]);
//  4
// var curDate = new Date();
// if(curDate.getDay() === 0 || curDate.getDay() === 6){
//     document.write("It's Fun day");
// }
//  5
// var curDate = new Date();
// if(curDate.getDate() <= 15){
//     document.write("First fifteen days of the month");
// }
//  6
// var curDate = new Date();
// var milliSec = curDate.getTime();
// var min = milliSec/(1000 * 60);
// document.write("Current Date: " + curDate + "<br />");
// document.write("Elapsed milliseconds since January 1, 1970: " + milliSec + "<br />");
// document.write("Elapsed minites since January 1, 1970: " + min);
//  7
// var curDate = new Date();
// if(curDate.getHours() >= 12){
//     document.write("It's PM");
// }else{
//     document.write("It's AM");
// }
//  8
// var laterDate = new Date("2020/12/31");
// document.write("Latter Date: " + laterDate);
//  9
// var _1stRamadan = new Date("2015/06/18");
// var curDate = new Date();
// var days = Math.ceil((curDate.getTime() - _1stRamadan.getTime()) / (1000 * 60 * 60 * 24));
// document.write(days + " days have passed since 1st Ramadan, 2015");
//  10
// var referenceDate = new Date("2015/12/05 22:50:16");
// var _1stJan2015 = new Date("2015/01/01");
// var sec = Math.ceil((referenceDate.getTime() - _1stJan2015.getTime()) / (1000));
// document.write("Our reference date " + referenceDate + ", " + sec + " seconds had passed since the beginning of 2015");
//  11
// var curDate = new Date();
// document.write("Current Date: " + curDate + "<br />");
// curDate.setHours(curDate.getHours() - 1);
// document.write("1 hour ago it was: " + curDate);
//  12
// var curDate = new Date();
// var hundredYearBack = new Date();
// hundredYearBack.setFullYear(hundredYearBack.getFullYear() - 100);
// alert("Current Date: " + curDate + "\n 100 Years back it was: " + hundredYearBack);
//  13
// var age = +prompt("Enter you age");
// var curDate = new Date();
// var birthYear = curDate.getFullYear() - age;
// document.write("Your Age: " + age + "<br />");
// document.write("Birth Year: " + birthYear);
//  14
// var custName = "ABC Customer";
// var monthsName = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
// var billingMonth = monthsName[new Date().getMonth()];
// var unitConsumed = 410;
// var perUintCharge = 17.95
// var amtPayableBeforDueDate = unitConsumed * perUintCharge;
// var surcharge = amtPayableBeforDueDate * .03;
// var amtPayableAfterDueDate = amtPayableBeforDueDate + surcharge;
// document.write('<h1><b>K-Electric Bill</b></h1><br /><br />');
// document.write('Customer Name: <b>' + custName + '</b><br />');
// document.write('Month: <b>' + billingMonth + '</b><br />');
// document.write('No of units: <b>' + unitConsumed.toFixed(2) + '</b><br />');
// document.write('Charge per unit: <b>' + perUintCharge.toFixed(2) + '</b><br /><br />');
// document.write('Net amout payable (with in due date): <b>' + amtPayableBeforDueDate.toFixed(2) + '</b><br />');
// document.write('surcharge: <b>' + surcharge.toFixed(2) + '</b><br />');
// document.write('Net amout payable (after due date): <b>' + amtPayableAfterDueDate.toFixed(2) + '</b><br />');

/**
 * Chapter 35 - 38
 */
//  1
// function getCurDate(){
//     return new Date();
// }
// var curDate = getCurDate();
// document.write(curDate);
//  2
// function getFullName(firstName, lastName){
//     return firstName + " " + lastName;
// }
// var firstName = prompt("Enter your first name");
// var lastName = prompt("Enter your last name");
// var fullName = getFullName(firstName, lastName);
// alert("Welcome " + fullName);
//  3
// function getSum(num1, num2){
//     return num1 + num2;
// }
// var num1 = +prompt("Enter first number");
// var num2 = +prompt("Enter second number");
// var sum = getSum(num1, num2);
// alert("Sum of " + num1 + " and " +num2 + " is " + sum);
//  4
// function calculate(num1, operater, num2) {
//     switch (operater) {
//         case '+':
//             return num1 + num2;
//             break;
//         case '-':
//             return num1 - num2;
//             break;
//         case '*':
//             return num1 * num2;
//             break;
//         case '/':
//             return num1 / num2;
//             break;
//         case '%':
//             return num1 % num2;
//             break;
//         default:
//             return "Invalid operator";
//             break;
//     }
// }
// var num1 = +prompt("Enter first number");
// var operater = prompt("Enter operater (+, -, *, /, %)");
// var num2 = +prompt("Enter second number");
// var calculatedValue = calculate(num1, operater, num2);
// if (typeof (calculatedValue) === "number") {
//     alert(num1 + " " + operater + " " + num2 + " = " + calculatedValue);
// } else {
//     alert(calculatedValue);
// }
//  5
// function getSquare(num) {
//     return num * num;
// }
// var num = +prompt("Enter a number");
// var square = getSquare(num);
// alert("Square of " + num + " is " + square);
//  6
// function getFactorial(num) {
//     if (num >= 1) {
//         return num * getFactorial(num - 1);
//     } else {
//         return 1;
//     }
// }
// var num = +prompt("Enter a number");
// var square = getFactorial(num);
// alert("Factorial of " + num + " is " + square);
//  7
// function dispCounting(num1, num2) {
//     if (num1 <= num2) {
//         document.write('<b>Counting:</b><br/><br/>');
//         var index;
//         for (index = num1; index <= num2; index++) {
//             document.write(index + ', ');
//         }
//     } else {
//         document.write('<br/><br/><b>Reverse Counting:</b><br/><br/>');
//         var index;
//         for (index = num1; index >= num2; index--) {
//             document.write(index + ', ');
//         }
//     }
// }
// dispCounting(1, 10);
// dispCounting(10, 1);
//  8
// function getHypotenuse(base, perpendicular){
//     function getSquare(num){
//         return num * num;
//     }
//     return Math.pow((getSquare(base) + getSquare(perpendicular)), (1/2));
// }
// var base = 3;
// var perpendicular = 4;
// var hypotenuse = getHypotenuse(3, 4);
// document.write("Base: " + base + "<br />");
// document.write("Perpendicular: " + perpendicular + "<br />");
// document.write("Hypotenuse: " + hypotenuse);
//  9
// function getAreaFromValue(width, height){
//     return width * height;
// }
// function getAreaFromVariable(varObj){
//     varObj.area = varObj.width * varObj.height;
// }
// var width = 3;
// var height = 4;
// var area = getAreaFromValue(width, height);
// document.write('<h1><b>Calculate Area by passing values</b></h1>');
// document.write('Width: ' + width + '<br />');
// document.write('Height: ' + height + '<br />');
// document.write('Area: ' + area + '<br /><br />');
// var varObj = {width:10, height:15, area:0};
// getAreaFromVariable(varObj);
// document.write('<h1><b>Calculate Area by passing variable</b></h1>');
// document.write('Width: ' + varObj.width + '<br />');
// document.write('Height: ' + varObj.height + '<br />');
// document.write('Area: ' + varObj.area);
//  10
// function isPalindrome (str) {
//     str = str.toLowerCase();
//     var strArray = str.split("");
//     var strReverse = '';
//     for (var index = strArray.length - 1; index >= 0; index--) {
//         strReverse += strArray[index];
//     }
//     return str == strReverse;
// }
// if(isPalindrome("madam")){
//     alert("It's palindrom");
// }else{
//     alert("It's not palindrom");    
// }
//  11
// function getTitleCase(str){    
//     var strArray = str.toLowerCase().split(" ");    
//     returnStr = "";
//     for (let index = 0; index < strArray.length; index++) {
//         returnStr += strArray[index].substring(0, 1).toUpperCase() + strArray[index].substring(1, strArray[index].length) + " ";        
//     }    
//     returnStr = returnStr.trim();
//     return returnStr;
// }
// var str = 'thE quIck brown fox';
// var strTitleCase = getTitleCase(str);
// document.write("Text: " + str + "<br />");
// document.write("Output: " + strTitleCase);
//  12
// function getLongestWordInString(str){
//     var strArray = str.split(" ");
//     var longestWordLength = 0;
//     var longestWordIndex = 0;
//     for (let index = 0; index < strArray.length; index++) {
//         if(strArray[index].length > longestWordLength){
//             longestWordLength = strArray[index].length;
//             longestWordIndex = index
//         }        
//     }
//     document.write("Text: " + str + "<br />");
//     document.write("Longest Word: " + strArray[longestWordIndex]);
// }
// getLongestWordInString('Web Development Tutorial');
//  13
// function getCountOfSpecifiedLetterInString(str, char){
//     var count = 0;
//     var pos = str.toLowerCase().indexOf(char.toLowerCase());
//     while (pos > -1) {
//         ++count;
//         pos = str.toLowerCase().indexOf(char.toLowerCase(), ++pos);
//     }
//     document.write("Text: " + str + "<br />");
//     document.write("There are " + count + " occurrence(s) of the Letter \'" + char + "\'");
// }
// getCountOfSpecifiedLetterInString("JSResourceS.com", "o");
//  14
// const pie = 3.142;
// function getCircumference(radius){
//     var circumference = 2 * pie * radius;
//     document.write('The circumference is: ' + circumference + '<br />');
// }
// function getArea(radius){
//     var area = pie * Math.pow(radius, 2);
//     document.write('The area is: ' + area + '<br />');
// }
// getCircumference(3);
// getArea(3);