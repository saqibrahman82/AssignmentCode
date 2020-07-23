// alert('Please unremark the code one by one to test all the JS Task From Chapter 1 - 20');

/**
 * Chapter 38 - 42
 */
//  1
// function power(a, b){
//     var res = Math.pow(a, b);
//     return res;
// }
// document.write(power(2, 3));
//  2
// function isLeapYear(year){
//     if(year % 4 === 0){
//         document.write(year + " is a leap Year");
//     }
//     else{
//         document.write(year + " is not a leap Year");
//     }
// }
// var year = +prompt("Enter Year");
// isLeapYear(year);
//  3    
// function semiperimeter(a, b, c){
//     return ((a + b + c) / 2);
// }
// function area(a, b, c){
//     S = semiperimeter(a, b, c);
//     return (S * (S - a) * (S - b) * (S - c));
// }
// document.write(area(3, 4, 5));
//  4
// function mainFunction(a, b, c){
//     document.write("Average score is: " + average(a, b, c) + "<br />");
//     document.write("Percentage is: " + percentage(a, b, c) + "%");
// }

// function average(a, b, c){
//     return ((a + b + c) / 3);
// }

// function percentage(a, b, c){
//     return (((a + b + c) / 300) * 100);
// }

// mainFunction(50, 60, 70);
//  5
// function myIndexOf(str, char){
//     for (let index = 0; index < str.length; index++) {
//         var charAt = str[index];
//         if(char === charAt){
//             return index;
//         }
//     }
//     return 0;
// }

// document.write(myIndexOf("Saqib", "q"));
//  6
//  7
//  8
// function km2m(Km){
//     return Km * 1000;
// }
// function m2cm(m){
//     return m * 100;
// }
// function m2f(m){
//     return m * 3;
// }
// function f2inch(f){
//     return f * 12;
// }
// var Km = +prompt("Enter distance between two cities in Km");
// var m = km2m(Km);
// var cm = m2cm(m);
// var f = m2f(m);
// var inch = f2inch(f);

// document.write("Distance between two cities in Km: " + Km + "<br/>");
// document.write("Distance between two cities in m: " + m + "<br/>");
// document.write("Distance between two cities in cm: " + cm + "<br/>");
// document.write("Distance between two cities in feet: " + f + "<br/>");
// document.write("Distance between two cities in inch: " + inch + "<br/>"); 
//  9
//  10
// function calculateNotes(amt){
//     var remaingAmt = amt;
//     var count100 = Math.floor(remaingAmt/100);
//     remaingAmt = remaingAmt - (count100 * 100);
//     var count50 = Math.floor(remaingAmt/50);
//     remaingAmt = remaingAmt - (count50 * 50); 
//     var count10 = Math.floor(remaingAmt/10);
//     document.write("You will have " + count100 + " hundred notes " + count50 + " fifty notes " + count10 + " ten notes.");
// }

// var amt = +prompt("Enter amount to withdraw!!");
// calculateNotes(amt);

/**
 * Chapter 43 - 48
 */
//  1
// function onClick(){
//     alert("Click event on Hyper-Link is fired.");
// }
//  2
// function selectMobile(){
//     alert("Thanks for purchasing a phone from us.");
// }
//  3
// function deleteRow(rowId){
//     var rowToDelete = document.getElementById(rowId);
//     rowToDelete.style.display = "none";
// }
//  4
// function onMouseOver(){
//     var img = document.getElementById("myImg");
//     img.src = "images/Tecno-Spark5pro.png";
// }

// function onMouseOut(){
//     var img = document.getElementById("myImg");
//     img.src = "images/Oppo-A72.png";
// }
//  5
// var counter = 0;
// function increase(){
//     counter++;
//     var heading = document.getElementById("counter");
//     heading.innerHTML = counter + "";
// }
// function decrease(){
//     counter--;
//     var heading = document.getElementById("counter");
//     heading.innerHTML = counter + "";
// }

/**
 * Chapter 49 - 52
 */
//  1

//  2
// var hiddenPara = document.getElementById("hiddenPara");
// var visiblePara = document.getElementById("visiblePara");
// var link = document.getElementById("link");

// var str = hiddenPara.innerHTML.toString();
// if (str.length > 100) {
//     visiblePara.innerHTML = str.substring(0, 100);
//     link.innerHTML = "Show More";
// }
// else {
//     visiblePara.innerHTML = str;
//     link.innerHTML = "";
// }


// function changePara() {
//     if (link.innerHTML === "Show More") {
//         visiblePara.innerHTML = str;
//         link.innerHTML = "Show Less";
//     } else {
//         visiblePara.innerHTML = str.substring(0, 100);
//         link.innerHTML = "Show More";
//     }
// }
//  3

/**
 * Chapter 58 - 67
 */
//  1
// var maincontent = document.getElementById("main-content");
// for (let index = 0; index < maincontent.childNodes.length; index++) {
//     console.log(maincontent.childNodes[index]);
    
// }
// document.getElementById("frst-name").value = "Saqib";
// document.getElementById("last-name").value = "Rahman";

//  2
// console.log(document.getElementById("form-content").nodeType);
// console.log(document.getElementById("lastName").nodeType);
// console.log(maincontent.firstChild);
// console.log(maincontent.lastChild);
// console.log(document.getElementById("lastName").nextSibling);
// console.log(document.getElementById("lastName").previousSibling);
// console.log(document.getElementById("email").parentNode);
// console.log(document.getElementById("email").nodeType);