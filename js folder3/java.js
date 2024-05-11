console.log("hello world");
let a = 5;
let b = 2;
console.log("a =",a, "& b =", b);
console.log("a + b =", a + b);
console.log("a - b =", a - b);
console.log("a % b =", a % b);
console.log("a * b =", a * b);
console.log("a ** b =", a**b);

console.log("a / b =", a / b);

console.log("a = b =", a=b);

console.log("hi kaise ho");
let c = 5;
let d = 2;  

console.log("c =",c, "& d =", d);
c = c + 1;
console.log("c =", c);
c = c - 1;
console.log("c =", c);
{
    let a = 5;
    let b = 2;
    console.log("++a =", ++a);
}
{
    let a = 5;
    let b = 2;
    console.log("a++ =", a++);
}
{
    let a = 5;
    let b = 2;
    console.log("--a =", --a);
}
{
    let a = 5;
    let b = 2;
    console.log("a-- =", a--);
}
{
    let a = 5;
    let b = 2;
    a += 4;
    console.log("a =", a);
}
{
    let a = 5;
    let b = 2;
    a -= 4;
    console.log("a =", a);
}
{
    let a = 5;
    let b = 2;
    a *= 4;
    console.log("a =", a);
}
{
    let a = 5;
    let b = 2;
    a /= 4;
    console.log("a =", a);
}
{
    let a = 5;
    let b = 2;
    a %= 4;
    console.log("a =", a);
}
{
    let a = 5;
    let b = 2;
    a **= 4;
    console.log("a =", a);
}
// comparison operators
{
    let a = 5;
    let b = 2;
    console.log("a == b", a == b);
}
{
    let a = 5;
    let b = 2;
    console.log("a!= b", a!= b);
}
{
    let a = 5;
    let b = 2;
    console.log("a !== b", a !== b);
}
{
    let a = 5;
    let b = 2;
    console.log("a === b", a === b);
}
{
    let a = 5;
    let b = 2;
    console.log("a > b", a > b);
}
{
    let a = 5;
    let b = 2;
    console.log("a <= b", a <= b);
}
// logical operators
{
    let a = 6;
    let b = 5;
    console.log("cond1 && cond2 =", a > b && a === 6);
}
{
    let a = 6;
    let b = 5;
    console.log("cond1 || cond2 =", a > b || a === 6);
}
{
    let a = 6;
    let b = 5;
    console.log("!(6 < 5) =", !(a < b));
}
// conditional statements
{
    let age = 23;
    if (age >= 18){
        console.log("you can vote");
    }
    if (age < 18){
        console.log("you cannot vote");
    }
}
{
    let mode = "dark";
    let color;
    if (mode === "dark"){
        color = "black";
    }
    if(mode === "light"){
        color = "white";
    }
    console.log(color);
}
// conditional statements
{
    let mode = "silver";
    let color;
    if(mode === "dark") {
        color = "black";
    } else if (mode === "blue"){
        color = "blue";
    } else if (mode === "pink") {
        color = "pink";
    } else {
        color = "white";
    }
    console.log(color);
    if(mode === "dark") console.log(mode);
}
{
    let age = 23;
    let result = age >= 18 ? "adult" : "not adult";
    console.log(result);
}
{
    let mode = "light";
    let color;
    if(mode === "dark") {
      color = "black";
    } else {
        color = "white";
    }
    console.log(color);
}
{
    let mode = "light";
    let color;
    if(mode === "dark") {
      color = "black";
    } else {
        color = "white";
    }
    console.log(color);
}
// odd or even
{
    let num = 10;
    if(num % 2 === 0) {
       console.log(num, "is even");
    } else {
        console.log(num, "is odd");
    }
}
// conditional statements
{
    let mode = "dark";
    let color;
    if(mode === "dark") {
        color = "black";
    } else if(mode === "blue") {
        color = "blue";
    } else if(mode === "yellow") {
        color = "yellow";
    } else {
        color = "white";
    }
    console.log(color);
}
{
    let mode = "light";
    let color;
    if(mode === "dark") {
        color = "black";
    } else {
        color = "white";
    }
    console.log(color);
}
{
    let age = 23;
    if (age >= 18) {
        console.log("you can vote");
    } else {
        console.log("you cannot vote");
    }

}
{

    for (let count = 1; count <= 5; count++) {
        console.log("ayan")
    }
}
// calculate sum of 1 to 5
{
    let sum = 0;
    for (let i = 1; i<= 5; i++) {
        sum = sum + i;
    }
    console.log("sum =", sum);
}
{
    let sum = 0;
    let n = 100;
    for (let i = 1; i<= n; i++) {
        sum = sum + i;
    }
    console.log("sum =", sum);
}
{
    for (let i = 1; i <= 5; i++) {
        console.log("i", i);
    }
}
{
    let i = 1;
    while(i <= 10) {
        console.log("ayan");
        i++;
    }
}
{
    let i = 20;
    do {
        console.log("ayan");
        i--;
    } while(i <= 10);
}
