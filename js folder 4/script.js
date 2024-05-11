{
   let num = prompt("Enter a number") 
   if(num % 5 === 0) {
       console.log(num, "num is a multiple of 5");
   } else 
    console.log(num, "num is not a  multiple of 5");
    let grade;
    let score = prompt("Enter your score");
    if(score >= 90 && score <= 100) {
        grade = "A";
    } else if(score >= 70 && score <= 89) {
        grade = "B";
    } else if(score >= 60 && score <= 69) {
        grade = "C";
    } else if(score >= 50 && score <= 59) {
        grade = "D";
    } else if(score >= 0 && score <= 49) {
        grade = "Fail";
    }
    console.log("according to your scores, your grade was :", grade);
}
{
    let name = prompt("hello");
     console.log(name);
 }
 {
    alert("hello");
}
// practice Qs2
{
    let gamenum = 25;
    let usernum = prompt("Guess the game number:");
    while (usernum != gamenum) {
        usernum = prompt("you entered wrong number, Guess again :");
    }
    console.log("congralulations, you entered the right number");
}
{
    let fullname =  prompt("enter your fullname without spaces");
    let username = "@" + fullname + fullname.lenght;
    console.log(username);
}
