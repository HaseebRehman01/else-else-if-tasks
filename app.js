// else,else-if tasks

// task 1

// var a = prompt("write number or alphabet ")
// .charCodeat()  it tells the decimal number of capital letter , number , lower letter 

// var b = "c"
// var user = b.charCodeAt()
// console.log(user)


// var a = prompt("Enter any num , string")
// var input = a.charCodeAt()
// if(input >= 97 && input <= 122)
// {
//     alert("you typed lower letter" )
// }
// else if (input >= 65 && input <= 90){
//     alert("you typed capital letter")
// }
// else if (input >= 48 && input <= 59 ){
//     alert("yoy typed number")

// }
// // else if for special characters
// else{
//     alert("Invalid character! please type only number , string")
// }


// task 2
// var a = +prompt("Write 1st inteeger")
// var b = +prompt("Write 2nd inteeger")
// if(a > b){
//     alert(a + " bigger than " +b)
// }
// else if (a === b)
// {
//     alert(a + " is equal to " +b)
// }
// else if (a < b){
//     alert(b + " bigger than " +a)
// }
// else{
//     alert("pllz write number")
// }



// task 3
// var a = +prompt("Write any number")
// if(a >= 0)
// {
//     alert("positive")
// }
// else if (a < 0){
//     alert("Negative")
// }
// else{
// alert("write only number")
// }

// task 4
// var a= prompt("Write any alphabet")
// if (a === "a" || a==="e"|| a=== "i" || a==="o"  || a==="u"){
// alert("True")
// }
// else{
//     alert("false")
// }





// task 6
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// alert(greeting)}
// else{
// greeting = "Good evening";
// alert(greeting)
// }


// task 7
var a = prompt("Enter your country time in 1900 format")
if (a  >= 0o00 && a<1200){
alert("Good morning")
}
else if(a >= 1200 && a<1700){
    alert("Good afternoon")
}
else if(a >= 1700 && a<2100){
    alert("Good Evening")
}
else if(a >= 2100 && a<2359){
    alert("Good Night")

}
else{
    alert("invalid")
}