// alert('Please unremark the code one by one to test all the JS Task From Chapter 1 - 20');
/**
 * Chapter 1
 */
//  1
// alert("Dear visitor your are welcome on our website");
//  2
// alert("Error! Please enter valid password.");
//  3
// alert("Welccome to JS Land...\nHappy Coding!");
//  4
// alert("Welccome to JS Land...");
// alert("Happy Coding!");

/**
 * Chapter 2
 */
//  1
// var username;
//  2
// var myName = 'Saqib Rahman';
//  3
// var message;
// message =  'Hello World';
// alert(message);
//  4
// var studentName = prompt("What is the name of Student?");
// var studentAge = prompt("What is the age of Student? (In Years)");
// var studentCourse = prompt("In which course Student enrols in?");
// alert(studentName);
// alert(studentAge + ' Years old');
// alert(studentCourse);
//  5
// var message = 'PIZZA';
// alert(message.slice(0,5) + '\n' + message.slice(0,4) + '\n' + message.slice(0,3) + '\n'+message.slice(0,2) + '\n' + message.slice(0,1));
//  6
// var email = 'saqib.rahman82@gmail.com';
// alert("My email address is "+email);
//  7
// var book = 'A smarter way to learn JavaScript';
// alert("I am trying to learn from the Book "+book);
//  8
// document.write('Yah! I can write HTML content through JavaScript');
//  9
// var message =  '▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬';
// alert(message);

/**
 * Chapter 3
 */
//  1
// var age = 38;
// alert('I am '+age+' years old');
//  2
// var visitCount = 28;
// alert('You have vsited this site '+visitCount+' times');
//  3
// var birthYear = 1982;
// document.write('My birth year is '+birthYear);
// document.write('<br />');
// document.write('Data type of my ddeclared variable is number');
//  4
// var visitorName = prompt("What is the name of visitor?");
// var productTitle = prompt("Visitor wants which product?");
// var quantity = prompt("Visitor wants product in which quantity?");
// document.write('<b>' + visitorName + '</b> ordered <b>'+ quantity + ' ' + productTitle + '</b>(s) on XYZ Clothing store');

/**
 * Chapter 4
 */
//  1
// var a, b, c;
//  2
// var userName, userSex, _age, _$alary, userVar;
// var student%, var, student@ge, 1link, user#; 
//3
// document.write('<b>Rules for naming JS variables</b><br /><br />');
// document.write('Variable names can only contain a letter, number, $ and _. For example: $my_1stVariable<br />');
// document.write('Variables must begin with a letter, $ or _. For example $name, _name or name<br />');
// document.write('Variable names are case sensitive<br />');
// document.write('Variable names should not be JS keywords');

/**
 * Chapter 5
 */
//  1
// var variable1 = +prompt('Enter 1st number');
// var variable2 = +prompt('Enter 2nd number');
// var sum = variable1 + variable2;
// document.write('Sum of ' + variable1 + ' and ' + variable2 + ' is ' + sum);
//  2
// var variable1 = +prompt('Enter 1st number');
// var variable2 = +prompt('Enter 2nd number');
// var difference = variable1 - variable2;
// document.write('Difference of ' + variable1 + ' and ' + variable2 + ' is ' + difference + '<br />');
// var product = variable1 * variable2;
// document.write('Product of ' + variable1 + ' and ' + variable2 + ' is ' + product + '<br />');
// var divisor = variable1 / variable2;
// document.write('Divisor of ' + variable1 + ' from ' + variable2 + ' is ' + divisor + '<br />');
// var remainder = variable1 % variable2;
// document.write('Remainder of ' + variable1 + ' from ' + variable2 + ' is ' + remainder);
//  3
// var variable1;
// document.write('Value after variable declaration is: ' + variable1 + '<br />');
// variable1 = 5;
// document.write('Initial value: ' + variable1 + '<br />');
// variable1++;
// document.write('Value after increment is: ' + variable1 + '<br />');
// variable1 += 7;
// document.write('Value after addition is: ' + variable1 + '<br />');
// variable1--;
// document.write('Value after decrement is: ' + variable1 + '<br />');
// document.write('The remainder is : ' + variable1%3 + '<br />');
//  4
// var ticketCost = +prompt('Enter cost of a single movie ticket');
// document.write('Total cost to buy 5 tickes to a movie is ' + ticketCost * 5 + 'PKR');
//  5
// var table = +prompt('Enter number to display table');
// var multiplier = 1;
// document.write('Table of ' + table + '<br />');
// document.write(table + 'x' + multiplier + '=' + table * multiplier++ + '<br />');
// document.write(table + 'x' + multiplier + '=' + table * multiplier++ + '<br />');
// document.write(table + 'x' + multiplier + '=' + table * multiplier++ + '<br />');
// document.write(table + 'x' + multiplier + '=' + table * multiplier++ + '<br />');
// document.write(table + 'x' + multiplier + '=' + table * multiplier++ + '<br />');
// document.write(table + 'x' + multiplier + '=' + table * multiplier++ + '<br />');
// document.write(table + 'x' + multiplier + '=' + table * multiplier++ + '<br />');
// document.write(table + 'x' + multiplier + '=' + table * multiplier++ + '<br />');
// document.write(table + 'x' + multiplier + '=' + table * multiplier++ + '<br />');
// document.write(table + 'x' + multiplier + '=' + table * multiplier++ + '<br />');
//  6
// var celsiusInput = +prompt('Enter Temprature in Celsius.');
// var fahrenheitInput = +prompt('Enter Temprature in Fahrenheit.');
// var celsiusCalculated = (fahrenheitInput - 32) * 5 / 9;
// var fahrenheitCalculated = (celsiusInput * 9 / 5) + 32;
// document.write(celsiusInput + '<sup>0</sup>C is ' + fahrenheitCalculated + '<sup>0</sup>F<br />');
// document.write(fahrenheitInput + '<sup>0</sup>F is ' + celsiusCalculated + '<sup>0</sup>C<br />');
//  7
// var item1Price = 650;
// var item2Price = 100;
// var item1QtyOrdered = +prompt('Enter Quantity Ordered of Item 1');
// var item2QtyOrdered = +prompt('Enter Quantity Ordered of Item 2');
// var shippingCharges = 100;
// var total = (item1Price * item1QtyOrdered) + (item2Price * item2QtyOrdered) + shippingCharges;
// document.write('<h1><b>Shopping Cart</b></h1><br /><br />');
// document.write('Price of Item 1 is ' + item1Price + '<br />');
// document.write('Quantity of Item 1 is ' + item1QtyOrdered + '<br />');
// document.write('Price of Item 2 is ' + item2Price + '<br />');
// document.write('Quantity of Item 2 is ' + item2QtyOrdered + '<br /><br />');
// document.write('Total cost of your order is ' + total);
//  8
// var totalMarks = +prompt('Enter total marks.');
// var obtainedMarks = +prompt('Enter obtained marks.');
// var persentage = (obtainedMarks / totalMarks) * 100;
// document.write('<h1><b>Marks Sheet</b></h1><br /><br />');
// document.write('Total Marks: ' + totalMarks + '<br />');
// document.write('Marks Obtained: ' + obtainedMarks + '<br />');
// document.write('Persentage: ' + persentage + '%');
//  9
// var usd = 10;
// var sar = 25;
// var pkr = (usd * 104.80) + (sar * 28);
// document.write('<h1><b>Currency in PKR</b></h1><br /><br />');
// document.write('Total Currency in PKR: ' + pkr);
//  10
// var variable = 10;
// document.write((variable + 5) * 10 / 2);
//  11
// var curYear = (new Date()).getFullYear();
// var birthYear = +prompt('Enter your year of birth.');
// var age = curYear - birthYear;
// document.write('<h1><b>Age Calculator</b></h1><br /><br />');
// document.write('Current Year: ' + curYear + '<br />');
// document.write('Birth Year: ' + birthYear + '<br />');
// document.write('Your age is: ' + age);
//  12
// var radius = +prompt('Enter radius of the circle');
// const pie = 3.142;
// var circumference = 2 * pie * radius;
// var area = pie * Math.pow(radius, 2);
// document.write('<h1><b>The Geometrizer</b></h1><br /><br />');
// document.write('Radius of a circle: ' + radius + '<br />');
// document.write('The circumference is: ' + circumference + '<br />');
// document.write('The area is: ' + area)  ;
//  13
// var favSnack = prompt('Enter your favorite snack.');
// var curAge = +prompt('Enter your current age in years');
// var maxEstAge = 65;
// var snackPerDayEst = +prompt('Enter estimated numbers of snack you eat per day');
// var ageRemain = maxEstAge - curAge;
// var totalSnack = (ageRemain * 365) * snackPerDayEst;
// document.write('<h1><b>Life time Supply Calculator</b></h1><br /><br />');
// document.write('Favorite snack: ' + favSnack + '<br />');
// document.write('Current Age: ' + curAge + '<br />');
// document.write('Estimated maximum Age: ' + maxEstAge + '<br />');
// document.write('Amount of snack per day: ' + snackPerDayEst + '<br />');
// document.write('You will need ' + totalSnack + ' ' + favSnack + ' to last you until the ripe old age of ' + maxEstAge);

/**
 * Chapter 6 - 9
 */
//  1
// var a = +prompt('Enter a number');
// document.write('Result:<br />');
// document.write('The value of a is: ' + a + '<br />');
// document.write('............................<br />');
// document.write('<br />');
// document.write('The value of ++a is: ' + ++a + '<br />');
// document.write('Now the value of a is: ' + a + '<br />');
// document.write('<br />');
// document.write('The value of a is: ' + a++ + '<br />');
// document.write('Now the value of a is: ' + a + '<br />');
// document.write('<br />');
// document.write('The value of --a is: ' + --a + '<br />');
// document.write('Now the value of a is: ' + a + '<br />');
// document.write('<br />');
// document.write('The value of a-- is: ' + a-- + '<br />');
// document.write('Now the value of a is: ' + a + '<br />');
//  2
// var a = 2;
// var b = 1;
// var result = 0;
// result += --a;
// document.write('--a: ' + result + '<br />');
// result -= --b;
// document.write('--a - --b: ' + result + '<br />');
// result += ++b;
// document.write('--a - --b + ++b: ' + result + '<br />');
// result += b--;
// document.write('--a - --b + ++b + b--: ' + result + '<br />');
// document.write('a is ' + a + '<br />');
// document.write('b is ' + b + '<br />');
// document.write('result is ' + result + '<br />');
//  3
// var userName = prompt("What is your name?");
// alert('Wellcome ' + userName);
//  5
// var table = +prompt('Enter number to display table');
// if(table === 0){
//     table = 5;
// }
// var multiplier = 1;
// document.write('Table of ' + table + '<br />');
// document.write(table + 'x' + multiplier + '=' + table * multiplier++ + '<br />');
// document.write(table + 'x' + multiplier + '=' + table * multiplier++ + '<br />');
// document.write(table + 'x' + multiplier + '=' + table * multiplier++ + '<br />');
// document.write(table + 'x' + multiplier + '=' + table * multiplier++ + '<br />');
// document.write(table + 'x' + multiplier + '=' + table * multiplier++ + '<br />');
// document.write(table + 'x' + multiplier + '=' + table * multiplier++ + '<br />');
// document.write(table + 'x' + multiplier + '=' + table * multiplier++ + '<br />');
// document.write(table + 'x' + multiplier + '=' + table * multiplier++ + '<br />');
// document.write(table + 'x' + multiplier + '=' + table * multiplier++ + '<br />');
// document.write(table + 'x' + multiplier + '=' + table * multiplier++ + '<br />');
//  6
// var sub1 = prompt('Enter subject 1 name');
// var sub2 = prompt('Enter subject 2 name');
// var sub3 = prompt('Enter subject 3 name');
// var totMarks1 = 100;
// var totMarks2 = 100;
// var totMarks3 = 100;
// var grandTotal = totMarks1 + totMarks2 + totMarks3;
// var obtainedMarks1 = +prompt('Enter obtained marks for subject 1');
// var obtainedMarks2 = +prompt('Enter obtained marks for subject 2');
// var obtainedMarks3 = +prompt('Enter obtained marks for subject 3');
// var grandObtained = obtainedMarks1 + obtainedMarks2 + obtainedMarks3;
// var persentage1 = obtainedMarks1 / totMarks1 * 100;
// var persentage2 = obtainedMarks2 / totMarks2 * 100;
// var persentage3 = obtainedMarks3 / totMarks3 * 100;
// var grandPersentage = grandObtained / grandTotal * 100;
// document.write('<table>');
// document.write('<tr>');
// document.write('<th>Subject</th>');
// document.write('<th>Total Marks</th>');
// document.write('<th>Obtained Marks</th>');
// document.write('<th>Persentage</th>');
// document.write('</tr>');
// document.write('<tr>');
// document.write('<td>' + sub1 + '</td>');
// document.write('<td>' + totMarks1 + '</td>');
// document.write('<td>' + obtainedMarks1 + '</td>');
// document.write('<td>' + persentage1 + '</td>');
// document.write('</tr>');
// document.write('<tr>');
// document.write('<td>' + sub2 + '</td>');
// document.write('<td>' + totMarks2 + '</td>');
// document.write('<td>' + obtainedMarks2 + '</td>');
// document.write('<td>' + persentage2 + '</td>');
// document.write('</tr>');
// document.write('<tr>');
// document.write('<td>' + sub3 + '</td>');
// document.write('<td>' + totMarks3 + '</td>');
// document.write('<td>' + obtainedMarks3 + '</td>');
// document.write('<td>' + persentage3 + '</td>');
// document.write('</tr>');
// document.write('<tr>');
// document.write('<td></td>');
// document.write('<th>' + grandTotal + '</th>');
// document.write('<th>' + grandObtained + '</th>');
// document.write('<th>' + grandPersentage + '</th>');
// document.write('</tr>');
// document.write('</table>');

/**
 * Chapter 9 - 11
 */
//  1
// var cityName = prompt("What is your city name?");
// if(cityName === 'Karachi'){
//     alert('Wellcome to city of lights');
// }
//  2
// var gender = prompt("What is your gender?");
// if(gender === 'Male'){
//     alert('Good Morning Sir');
// }else if(gender === 'Female'){
//     alert('Good Morning Ma’am');
// }
//  3
// var signalColor = prompt('Enter a signal color');
// if (signalColor === 'Red') {    
//     alert('Must Stop');
// } else if (signalColor === 'Yellow') {    
//     alert('Ready to move');
// } else if (signalColor === 'Green') {    
//     alert('Move now');
// }
//  4
// var remainingFuel = +prompt('Enter a remaining fuel in liters');
// if (remainingFuel < 0.25) {    
//     alert('Please refill the fuel in your car');
// }
//  5
// var a = 4;
// if (++a === 5) {
//     alert("given condition for variable a is true");
// }
// var b = 82;
// if (b++ === 83) {
//     alert("given condition for variable b is true");
// }
// var c = 12;
// if (c++ === 13) {
//     alert("condition 1 is true");
// }
// if (c === 13) {
//     alert("condition 2 is true");
// }
// if (++c < 14) {
//     alert("condition 3 is true");
// }
// if (c === 14) {
//     alert("condition 4 is true");
// }
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost) {
//     alert("The cost equals");
// }
// if (true) {
//     alert("True");
// }
// if (false) {
//     alert("False");
// }
// if ("car" < "cat") {
//     alert("car is smaller than cat");
// }
//  6
// var sub1 = prompt('Enter subject 1 name');
// var totMarks1 = +prompt('Enter obtained marks for ' + sub1);
// var obtainedMarks1 = +prompt('Enter obtained marks for ' + sub1);

// var sub2 = prompt('Enter subject 2 name');
// var totMarks2 = +prompt('Enter obtained marks for ' + sub2);
// var obtainedMarks2 = +prompt('Enter obtained marks for subject 2');

// var sub3 = prompt('Enter subject 3 name');
// var totMarks3 = +prompt('Enter obtained marks for ' + sub3);
// var obtainedMarks3 = +prompt('Enter obtained marks for subject 3');

// var grandTotal = totMarks1 + totMarks2 + totMarks3;
// var grandObtained = obtainedMarks1 + obtainedMarks2 + obtainedMarks3;
// var persentage = grandObtained / grandTotal * 100;

// var grade, remarks;

// if (persentage >= 80) {
//     grade = 'A-one';
//     remarks = 'Excellent';
// } else if (persentage >= 70) {
//     grade = 'A';
//     remarks = 'Good';
// } else if (persentage >= 60) {
//     grade = 'B';
//     remarks = 'You need to improve';
// } else {
//     grade = 'Fail';
//     remarks = 'Soory';
// }
// document.wri=+te('<h1><b>Marks Shhet</b></h1><br /><br />');
// document.write('Total Marks: ' + grandTotal + '<br />');
// document.write('Marks Obtained: ' + grandObtained + '<br />');
// document.write('Persentage: ' + persentage + '%<br />');
// document.write('Grade: ' + grade + '<br />');
// document.write('Remarks: ' + remarks);
//  7
// const secretNum = 8;
// var guess = +prompt('Enter a number (ranging from 1 to 10)');
// if (guess === secretNum) {
//     alert('Bingo! Correct answer');
// } else if (guess + 1 === secretNum) {
//     alert('Close enough to the correct answer');
// }
//  8
// var number = +prompt('Enter a number');
// if (number % 3 === 0) {
//     alert('number is divisible by 3');
// }
//  9
// var number = +prompt('Enter a number');
// if (number % 2 === 0) {
//     alert('number is even');
// } else {
//     alert('number is odd');
// }
//  10
// var temprature = +prompt('Enter a temprature');
// if (temprature > 40) {
//     alert('It is too hot outside.');
// } else if (temprature > 30) {
//     alert('The Weather today is Normal.');
// } else if (temprature > 20) {
//     alert('The Weather today is Normal.');
// } else if (temprature > 10) {
//     alert('OMG! Today’s weather is so Cool.');
// }
//  11
// var firstNum = +prompt('Enter 1st number');
// var operation = prompt('Enter a operation (+, -, *, /, %)')
// var secondNum = +prompt('Enter 2nd number');
// if(operation === '+'){
//     alert(firstNum + ' + ' + secondNum + ' = ' + (firstNum + secondNum));
// } else if(operation === '-'){
//     alert(firstNum + ' - ' + secondNum + ' = ' + (firstNum - secondNum));
// } else if(operation === '*'){
//     alert(firstNum + ' * ' + secondNum + ' = ' + (firstNum * secondNum));
// }else if(operation === '/'){
//     alert(firstNum + ' / ' + secondNum + ' = ' + (firstNum / secondNum));
// } else if(operation === '%'){
//     alert(firstNum + ' % ' + secondNum + ' = ' + (firstNum % secondNum));
// }

/**
 * Chapter 12 - 13
 */
//  1
// var char = prompt('Enter a character');
// if(char >= 0 && char <= 9){
//     alert('Input char is a number');
// }else if(char.charCodeAt() >= 65 && char.charCodeAt() <= 90){
//     alert('Input char is a upper case letter');
// }else if(char.charCodeAt() >= 97 && char.charCodeAt() <= 122){
//     alert('Input char is a lower case letter');
// }
//  2
// var number1 = +prompt('Enter 1st number');
// var number2 = +prompt('Enter 2nd number');
// if (number1 > number2) {
//     alert(number1 + ' is larger');
// } else if (number1 < number2) {
//     alert(number2 + ' is larger');
// } else if(number1 === number2){
//     alert(number1 + ' and ' + number2 + ' both are equal');
// }
//  3
// var number1 = +prompt('Enter 1st number');
// if (number1 > 0) {
//     alert(number1 + ' is positive');
// } else if (number1 < 0) {
//     alert(number1 + ' is negative');
// } else if(number1 === 0){
//     alert(number1 + ' is zero');
// }
//  4
// var char = prompt('Enter a character');
// if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
//     alert('True');
// } else {
//     alert('False');
// }
//  5
// var password = 'P@$$0rd';
// var passwordEntered = prompt('Enter password');
// if (passwordEntered.length === 0) {
//     alert('Please enter your password');
// } else {
//     if (passwordEntered === password) {
//         alert('Correct! The password you entered matches the original password');
//     } else {
//         alert('Incorrect password');
//     }
// }
//  6
// var greeting;
// var hour = 13;
// if (hour < 18) {
//     greeting = "Good day";
// } else {
//     greeting = "Good evening";
// }
// alert(greeting);
//  7
// var time = +prompt('Enter time 24-Hour format');
// if (time >= 0000 && time < 1200) {
//     alert('Good Morning');
// } else if (time >= 1200 && time < 1700) {
//     alert('Good Afternoon');
// } else if (time >= 1700 && time < 2100) {
//     alert('Good Evening');
// } else if (time >= 2100 && time <= 2359) {
//     alert('Good Night');
// }

/**
 * Chapter 14 - 16
 */
//  1
// var studentNames = [];
//  2
// var studentNames = new Array();
//  3
// var stringArray = ['Saqib', 'Rahman'];
//  4
// var numberArray = new Array(37, 38);
//  5
// var booleanArray = [true, false];
//  6
// var mixedArray = ['Saqib Rahman', 37, true];
//  7
// var qualifications = ['SSC', 'HSC', 'BCS', 'BS', 'BCOM', 'MS', 'M. Phil.', 'PhD'];
// document.write('<h1><b>Qualifications</b></h1><br /><br />');
// document.write('1) ' + qualifications[0] + '<br />');
// document.write('2) ' + qualifications[1] + '<br />');
// document.write('3) ' + qualifications[2] + '<br />');
// document.write('4) ' + qualifications[3] + '<br />');
// document.write('5) ' + qualifications[4] + '<br />');
// document.write('6) ' + qualifications[5] + '<br />');
// document.write('7) ' + qualifications[6] + '<br />');
//  8
// var studentNames = [];
// var studentScores = [];
// var studentPersentage = [];
// studentNames[0] = prompt('Enter Student Name');
// studentScores[0] = +prompt('Enter ' + studentNames[0] + ' Score');
// studentPersentage[0] = studentScores[0] / 500 * 100;
// studentNames[1] = prompt('Enter Student Name');
// studentScores[1] = +prompt('Enter ' + studentNames[1] + ' Score');
// studentPersentage[1] = studentScores[1] / 500 * 100;
// studentNames[2] = prompt('Enter Student Name');
// studentScores[2] = +prompt('Enter ' + studentNames[2] + ' Score');
// studentPersentage[2] = studentScores[2] / 500 * 100;
// document.write('Score of ' + studentNames[0] + ' is ' + studentScores[0] + '. Persentage: ' + studentPersentage[0] + '%<br />');
// document.write('Score of ' + studentNames[1] + ' is ' + studentScores[1] + '. Persentage: ' + studentPersentage[1] + '%<br />');
// document.write('Score of ' + studentNames[2] + ' is ' + studentScores[2] + '. Persentage: ' + studentPersentage[2] + '%');
//  9
var colors = ['Red', 'Green', 'Blue'];
document.write(colors);
var newColor = prompt('What color you wants to add to the beginning?');
document.write('<br/>');
colors.unshift(newColor);
document.write(colors);
var newColor = prompt('What color you wants to add at the end?');
document.write('<br/>');
colors.push(newColor);
document.write(colors);
document.write('<br/>');
colors.unshift('Brown', 'Purple');
document.write(colors);
document.write('<br/>');
colors.shift();
document.write(colors);
document.write('<br/>');
colors.pop();
document.write(colors);
//  10
//  11
//  12
//  13
//  14

/**
 * Chapter 17 - 20
 */
//  1
// var multidimensionalArray = [
//     ["Saqib Rahman", 37, "Father"],
//     ["Aisha Siddiqa", 4, "Daughter"],
//     ["Haider Ali Siqqique", 3, "Son"]
// ];
//  2
// var multidimensionalArray = [
//     [0, 1, 2, 3], 
//     [1, 0, 1, 2], 
//     [2, 1, 0, 1]
// ];
//  3
// for (var i = 1; i <= 10; i++) {
//     document.write(i + '<br />');
// }
//  4
// var table = +prompt('Enter a number to show its multiplication table');
// var length = +prompt('Enter a length of multiplication table');
// document.write('Multiplication table of ' + table + '<br />Length' + length + '<br /><br />');
// for (let index = 1; index <= length; index++) {
//     document.write(table + ' x ' + index + ' = ' + (table * index) + '<br />');
// }
//  5
// var fruits = ['apple', 'banana', 'mango', 'orange', 'strawberry'];
// for (var key in fruits) {
//     document.write(fruits[key] + '<br/>');
// }
// document.write('<br/>');
// for (var key in fruits) {
//     document.write('Element at index ' + key + ' is ' + fruits[key] + '<br/>');
// }
//  6
// document.write('<b>Counting:</b><br/><br/>');
// var index;
// for (index = 1; index <= 15; index++) {
//     document.write(index + ', ');
// }
// document.write('<br/><br/><b>Reverse Counting:</b><br/><br/>');
// for (index = 10; index >= 1; index--) {
//     document.write(index + ', ');
// }
// document.write('<br/><br/><b>Even:</b><br/><br/>');
// for (index = 0; index <= 20; index++) {
//     if (index % 2 === 0) {
//         document.write(index + ', ');
//     }
// }
// document.write('<br/><br/><b>Odd:</b><br/><br/>');
// for (index = 0; index <= 20; index++) {
//     if (index % 2 === 1) {
//         document.write(index + ', ');
//     }
// }
// document.write('<br/><br/><b>Series:</b><br/><br/>');
// for (index = 1; index <= 20; index++) {
//     if (index % 2 === 0) {
//         document.write(index + 'k, ');
//     }
// }
//  7
// var items = ['cake', 'apple pie', 'cookie', 'chips', 'patties']
// var item = prompt('Welcome to ABC Bakery. What do you wants to order sir/ma\'am');
// var found = false;
// for (const key in items) {
//     if (items[key] === item) {
//         found = true;
//         document.write(item + ' is <b>available</b> at index ' + key + ' in our bakery');
//         break;
//     }
// }
// if(!found){
//     document.write('We are Sorry. ' + item + ' is <b>not available</b> in our bakery')
// }
//  8
// var numbers = [24, 53, 78, 91, 12];
// var largestNumber = 0;
// for (let index = 0; index < numbers.length; index++) {
//     if(numbers[index] > largestNumber){
//         largestNumber = numbers[index];
//     }    
// }
// document.write('Array items: ' + numbers + '<br />');
// document.write('The largest number is ' + largestNumber);
//  9
// var numbers = [24, 53, 78, 91, 12];
// var smallestNumber = 9999999999999999999999999999999;
// for (let index = 0; index < numbers.length; index++) {
//     if(numbers[index] < smallestNumber){
//         smallestNumber = numbers[index];
//     }    
// }
// document.write('Array items: ' + numbers + '<br />');
// document.write('The smallest number is ' + smallestNumber);
//  10
// for (let index = 1; index <= 100; index++) {
//     if (index % 5 == 0) {
//         document.write(index + ', ');
//     }
// }