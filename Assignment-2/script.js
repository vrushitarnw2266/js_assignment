// ======== LOOPS ======
// // Q.1 Write a Program to print 1 to 10 using a for loop.
// for (let i = 1; i <= 10; i++) {
//     document.writeln(i);
// }
// // Q.2 Write a Program to print 10 to 1 using a for  loop.
// document.write("<br>")
// for (let j = 10; j >= 1; j--) {
//     document.writeln(j);
// }

// // Q.3 Write a Program to print 1 to N using a for loop.
// document.write("<br>")
// let n = Number(prompt("enter any number:"))

// for (let k= 1; k <= n; k++) {
//     document.writeln(k);
// }
// // Q.4 Write a Program to print odd numbers from N to 1 using a for loop.
// document.write("<br>")
// let m=Number(prompt("enter any number:"))

// for (let a=m; a>=1; a--) {
//     if (a%2!=0) {

//         document.writeln(a)
//     }
// }
// Q.5 Write a Program to print even numbers from 1 to N using for loop.
// document.write("<br>")
// let p=Number(prompt("enter any number:"))

// for (let b=1; b<p; b++) {
//     if (b%2==0) {
//         document.writeln(b)
//     }
// }


// Q.6 Write a Program to print the Fibonacci series up to N numbers using a for loop.
// document.write("<br>")

// let c = Number(prompt("enter any number:"));
// let n1 = 0; n2 = 1;
// let swap;
// for (let d = 1; d <= c; d++){
//     document.writeln(n1);
//     swap = n1 + n2;
//     n1 = n2;
//     n2 = swap;
// }

// Q.6 Write a Program to print leap years between two given numbers using a for loop.
// document.write("<br>")

// let year1 = Number(prompt("enter the first year"));
// let year2 = Number(prompt("enter the second year"));

// for (let between = year1; between <= year2;between++ ) {
//     if ((between%4==0 && between%100!=0)|| between%400==0) {
//         document.writeln(between)
//     }

// }
// Q.7 Write a Program to print the multiplication table of the number N using for loop.
// document.write("<br>")

// let num = Number(prompt("enter you like any number"))
// let ans;
// for (let num1 = 1; num1 <= 10;num1++){
//     document.write("<br>")
//     ans = num * num1;
//     document.writeln(${num}*${num1}=${ans});
// }



// Q.8 Print this using nested for loops
// let numstr = Number(prompt("enter any number"));
// for (let first = 1; first <= numstr; first++) {
//     document.write("<br>")
//     for (let secod = 1; secod <= numstr;secod++) {
//         document.writeln("*")

//     }
// }