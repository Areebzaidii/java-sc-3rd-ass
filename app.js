// CHAPTER #9-11
// QUESTION #01

// var city = prompt("entere your city name");
// if(city=="karachi"){
//      alert("Welcome to the city of lights")
// }
// else {
//     document.write("your not eligible")
// }


// QUESTION #02
// var geder = prompt("Enter your gender")
// if(geder==="male"){
//     alert("welcome sir")
// }
// else if (geder==="female"){
//     alert("welcome madam")
// }
// else{alert("sorry gender not found")}


// QUESTION #03
// var sgcolor=prompt("enter signal color");
// if(sgcolor==="red"){console.log("Must stop")}
// else if(sgcolor==="yellow"){console.log("Ready to move")}
// else if(sgcolor==="green"){console.log("Move now")}


// QUESTION #04
//  var fuel= prompt("Enter you fuel in litres");

//  if(fuel <  0.25) {
//     console.log("please refill the fuel in your car");
    
//  }
//  else if (fuel>=0.25){console.log("your fuel is enough")}

// QUESTION #05

// a. var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }

// b. var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }
// c. var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }
// d. var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
// e. if (true){
// alert("True");
// }
// if (false){
// alert("False");
// }




// f. if("car" < "cat"){
// alert("car is smaller than cat");
// }
// QUESTION #6
// solution=1
// var english=("English");
// var urdu=("Urdu");
// var math=("Math");


// var totaleng=(100);
// var totalurd=(100);
// var totalmath=(100);

// var obteng=(64);
// var obturd=(18);
// var obtmath=(98);
// var per=((obteng+obtmath+obturd)*(100)/ (totaleng+totalmath+totalurd));

// document.write("<table >");

// document.write("<b>"+"Subject total marks Obtained marks Percentage"+  "</b>");
// document.write("<tr>");
// document.write("<td>"+"<b>"+"Subjects"+"</b>"+ "</td>");
// document.write("<td>"+"<b>"+"Total Marks"+"</b>"+ "</td>");
// document.write("<td>"+"<b>"+"Obtained Marks"+"</b>"+ "</td>");
// document.write("<td>"+"<b>"+"Percentage"+"</b>"+ "</td>");
// document.write("</tr>");


// document.write("</table");

// document.write("<table>");
// document.write("<tr>");
// document.write("<td>" +english  +"</td>");
// document.write("<td>" +totaleng  +"</td>");
// document.write("<td>" +obteng  +"</td>");
// document.write("<td>" +obteng*100/totaleng+"%"  +"</td>");
// document.write("</tr>");


// document.write("<tr>");
// document.write("<td>" +urdu  +"</td>");
// document.write("<td>" +totalurd  +"</td>");
// document.write("<td>" +obturd  +"</td>");
// document.write("<td>" +obturd*100/totalurd+"%"  +"</td>");
// document.write("</tr>");

// document.write("<tr>");
// document.write("<td>" +math  +"</td>");
// document.write("<td>" +totalmath  +"</td>");
// document.write("<td>" +obtmath  +"</td>");
// document.write("<td>" +obtmath*100/totalmath+"%"  +"</td>");
// document.write("</tr>");

// document.write("<tr>");
// document.write("<td>"+"</td>");
// document.write("<td>"+(totaleng+totalmath+totalurd) +"</td>");
// document.write("<td>"+(obteng+obturd+obtmath) +"</td>");
// document.write("<td>"+per+ "%"+"</td>");


// document.write("<tr>");
// document.write("<td>"+"</td>");

// document.write("<tr>");
// document.write("<td>"+"</td>");

// document.write("<tr>");
// document.write("<td>"+ "MARK SHEET" +"</td>");


// document.write("<tr>");
// document.write("<td>"+ "TOTAL MARKS" +"</td>");
// document.write("<td>"+(totaleng+totalmath+totalurd) +"</td>");

// document.write("<tr>");
// document.write("<td>"+ " MARKS OBTAINED" +"</td>");
// document.write("<td>"+(obteng+obturd+obtmath) +"</td>");

// document.write("<tr>");
// document.write("<td>"+ " PERCENTAGE" +"</td>");
// document.write("<td>"+(per)+ "%"+"</td>");



// document.write("<tr>");
// document.write("<td>"+ "Grade" +"</td>");

// if (per >=80)
// {document.write("<td>"+"A-one"+"</td>")}

// if (per >=70)
// {document.write("<td>"+"A"+"</td>")}


// if (per >=60)
// {document.write("<td>"+"B"+"</td>")}


// if (per <50)
// {document.write("<td>"+"Fail"+"</td>")}

// document.write("<tr>");
// {document.write("<td>"+"Remarks"+"</td>")}

// if (per>=80){document.write("<td>"+"Exellent"+"</td>")}
// if (per>=70){document.write("<td>"+"Good"+"</td>")}
// if (per>=60){document.write("<td>"+"you need yo improve"+"</td>")}
// if (per<50){document.write("<td>"+"sorry "+"</td>")}
// solution=2
// var totalMarks1=+prompt("Enter 1st subject toatal marks");
// var totalMarks2=+prompt("Enter 2nd subject toatal marks");
// var totalMarks3=+prompt("Enter 3rd subject toatal marks");

// var obtainMarks1=+prompt("obatined mark1");
// var obtainMarks2=+prompt("obatined mark3");
// var obtainMarks3=+prompt("obatined mark3");

// var  total=(totalMarks1+totalMarks2+totalMarks3);
// var  obtained=(obtainMarks1+obtainMarks2+obtainMarks3);
// var  per=((obtained/total)*100);


// document.write("<table >");

// document.write("<tr>");
// document.write("<td>"+"Mark Sheet"+"</td>")
// document.write("</tr>");

// document.write("<tr>");
// document.write("<td>"+" Total marks"+"</td>")
// document.write("<td>"+total+"</td>")
// document.write("</tr>");


// document.write("<tr>");
// document.write("<td>"+" Obtained marks"+"</td>")
// document.write("<td>"+obtained+"</td>")
// document.write("</tr>");

// document.write("<tr>");
// document.write("<td>"+" Percentage"+"</td>")
// document.write("<td>"+per+"%"+"</td>")
// document.write("</tr>");

// document.write("<tr>");
// document.write("<td>"+" Grade"+"</td>")
// if (per>=90){ document.write("<td>"+"A-one"+"</td>")}
// else if (per>=80){ document.write("<td>"+"A"+"</td>")}
// else if (per>=70){ document.write("<td>"+"b"+"</td>")}
// else if (per>=60){ document.write("<td>"+"poor"+"</td>")}
// else if (per<60){ document.write("<td>"+"mehnt kra bhai mhnt"+"</td>")}
// document.write("</tr>")




// QUESTION #07
// var num=prompt("Enter correct number");
// if (num==="+1"){document.write("“Bingo! Correct answer”.")}
// else {document.write("“You are close enoughto the Correct answer”.")}

// //QUESTION #8
// var num = prompt("Enter a number:");
// if (num % 3 === 0) {
//   document.write(num + " is divisible by 3");
// }  

// else{
//  document.write(num + " is not divisible by 3")
// }

// // //QUESTION #9
// var num = prompt("Enter a number:");
// if (num %2 ===0){
//     document.write("it is an even number")
// }
// else{document.write("it is an odd number")}

// // //QUESTION #10
// var tem=prompt("enter temperature");
// if (tem>40){document.write("it is too hot out side ")}
// else if (tem>30){document.write("The Weather today is Normal ")}
// else if (tem>20){document.write("Todays weather is cool ")}
//  else if (tem>10){document.write("“OMG! Today’s weather is so Cool.”")}


// QUESYION #11

// var num1 = +prompt("Enter number 1");
// var opt = prompt();
// var num2 = +prompt("Enter number 2");
// if (opt == "+") {
//      console.log(num1 + num2);
//      }
// else if (opt == "-") {
//     console.log(num1 - num2);
// }
// else if (opt == "*") {
//     console.log(num1 * num2);
// }
// else if (opt == "/") { 
//     console.log(num1/num2); 
// }
// else {
//     console.log("insert a Number please");
// 

// CHAPTER 12-13





// QUESTION #02

// var num1=+prompt("Enter 1st number");
// var num2=+prompt("Enter 2nd number");

// if(num1===num2){console.log("both are equal")}
// else if (num1>num2){console.log("Number 1 is greater than Number 2")}
// else{console.log("Number 2 is greater than number 1")}


// QUESTION #03

// var num =+prompt("enter number to cheack no is pos,neg")
// if(num>0){console.log("the given value is positive")}
// else if(num<0){console.log("the given value is negative")}
// else{document.write("zero")}

// QUESTION #04

// var  user =prompt("");
// if(user=="a"){document.write("yes it is vovel")}
// else if(user=="e"){document.write("yes it is vovel")}
// else if(user=="i"){document.write("yes it is vovel")}
// else if(user=="o"){document.write("yes it is vovel")}
// else if(user=="u"){document.write("yes it is vovel")}
// else{document.write("no its not vovel")}

// QUESTION #05
// var  enterPassword=prompt("Make password");
// var  conformPassword=prompt("conform Your password");

// if(enterPassword==="" ||conformPassword===""){document.write("enter password please")}
// else if(enterPassword===conformPassword){document.write("password confirm successful")}
// else{document.write("password not matched")}

// QUESTION #06


// var greeting;
// var hour = 13;
// if (hour < 18) {
//     greeting = "Good day";
// } else {
//     greeting = "Good evening";
// }

// QUESTION #07
var time=+prompt("Enter time in 24 hours");
if(time>=100){console.log("good morning");} 
else if (time>150){console.log("good ")}