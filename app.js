var num1 =parseInt(prompt(" First number"));
var num2 = parseInt(prompt(" Second number"));

sum = num1 + num2
output1 = "The sum of " + num1 + " & " + num2 + " = " + sum
alert(output1)
// function userId(){
var f_name = prompt("Your frist name");
var l_name = prompt("Your last name");
var fourchar = f_name.slice(0,4);
var lastchar = l_name.slice(0,1);
var combine = fourchar + lastchar;
var userId = combine.toLowerCase();
var output2 = " your capacitybay userId is " + userId;
alert(output2)
// // }
// // userId()
// var DogAge = prompt("input your DogAge");
// var HumanAge = (DogAge-2)*4+21;
// output = " Your DogAge is" + HumanAge + " in HumanAge";
// alert(output)