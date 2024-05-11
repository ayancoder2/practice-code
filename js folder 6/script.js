{
    let items = [250, 645, 300, 900, 50];
    // let i = 0;
    // for(let val of items) {
    //     console.log(`value at index ${i} = ${val}`);
    //     let offer = val / 10;
    //     items[i] = items[i] - offer;
    //     console.log(`value after offer = ${items[i]}`);  
    //     i++;
    // }
    for(let i = 0; i < items.lenght; i++) {
        let offer = items[i] / 10;
        items[i] -=  offer;
    }
    console.log(items);
}
{
    let fooditems = ["apple", "mango", "banana", "grapes"];
    fooditems.push("chips", "burger");
    console.log(fooditems);
}
{
   let fooditem = ["apple", "mango", "banana", "grapes", "tomato"];
   console.log(fooditem);
   let deleteditem = fooditem;
   console.log(fooditem);
   console.log("deleted", deleteditem);
}
{
    let  cities = ["karachi", "lahore", "hyderabad", "islamabad", "swat"];
    for (let city of cities) {
        console.log(city.toUpperCase());
    }
}
{
    let marks = [85, 97, 44, 37, 76, 60];
    let sum = 0;
    for(let val of marks) {
        console.log(val);
    }
}
{
    let marks = [85, 97, 44, 37, 76, 60];
    let sum = 0;
    for(let val of marks) {
        sum += val;
    }
    console.log(sum);
}
{
    let marks = [85, 97, 44, 37, 76, 60];

    let sum = 0;

    for (let val of marks) {
        sum += val;
    }

    let avg = sum / marks.lenght;
    console.log(`avg marks of the class = ${avg}`);// kam nahi kar rahe                 
}
{
    let items = [250, 645, 300, 900, 50];
    let idx = 0;
    for(let val of items) {
        console.log(`value at index &{idx} = $(val)`);
    }
    idx++;
}
{
    let items = [250, 645, 300, 900, 50];
    let idx = 0;
    for(let val of items) {
        console.log(`value at index ${idx} = ${val}`);
        idx++;
    }
}
{
    console.log("hi kaise ho");
}
// Arrays in js
{
    let marks = [97, 82, 75, 64, 36];
    console.log(marks);
    console.log(marks.lenght); // property hoti hai
}
{
    let heroes = ["ironman", "thor", "hulk", "shaktiman", "spiderman"];
    console.log(heroes);
}   
{
    let heroes = ["ironman", "thor", "hulk", "shaktiman", "spiderman", "antman"];             
        for (let i = 0; i < heroes.lenght; i++) {
        console.log(heroes[i]);//hekdswqdef
    }
}
{
    let heroes = ["ironman", "thor", "hulk", "shaktiman", "spiderman", "antman"];
    for(let hero of heroes) {
        console.log(hero);
    }
}
{
    console.log("hello");
}
// strings
{
    let str = "muhammad ayan";
    console.log(str[0]);
}
{
    let obj = {
        item: "pen",
        price: 50,
    };
    console.log("the cost of", obj.item, "is", obj.price, "rupess");
}
{
    let obj = {
        item: "pen",
        price: 50,
    };
    let output = `the cost of ${obj.item} is ${obj.price} rupess`;
    console.log(output);
}
// template literals
{
    let specialstring = `this is a template literal`;
    console.log(specialstring);
}
{
    let specialstring = `this is a template literal ${1+2+3}`;
    console.log(specialstring);
}
{
    console.log("muhammad \n ayan");
}
{
    console.log("muhammad \t ayan");
}
{
    let str = "muhammad ayan";
    console.log(str.length);
}
{
    let str = "muhammmad ayan";
    let newstr = str.toUpperCase();
    console.log(str);
    console.log(newstr);
}
{
    let str = "ayan";
    str = str.toUpperCase();
    console.log(str);
}
{
    let str = " muhammad ayan ";
    console.log(str.trim());
}
{
    let str = "0123456789";
    console.log(str.slice(1, 6));
}
{
    let str1 = "muhammad";
    let str2 = "ayan";
    let res = str2.concat(str1);
    console.log(res);
}
{
    let str1 = "muhammad";
    let str2 = "ayan";
    let res = str1 + str2;
    console.log(res);
}
{
    let str = "hello";
    console.log(str.replace("h", "y"));
}
{
    let str = "Ilovejs";
    console.log(str.charAt(0));
}
{
    let str = "Ilovejs";
    str = str.replace("I", "S");
    console.log(str);
}
// calculate sum of 1 to 5
{
    let sum = 0;
    for(let i = 1; i<= 5; i++) {
        sum = sum + i;
    }
    console.log("sum =", sum);
}
{
    let i = 1; 
    do {
        console.log("ayan");
        i++;
    } while (i <= 3);
}
// for-of loop
{
    let str = "javascript";
    let size = 0;
    for(let i of str) {
        console.log("i =", i);
        size++;
    }
    console.log("string size =", size);
}
{
    let str = "hello";
    for(let i of str) {
        console.log("i =", i);
    }
}
// for in loop
{
    let student = {
        name: "ayan",
        age: 20,
        cgpa: 7.5,
        ispass: true,
    };
    for(let i in student) {
        console.log("i =", i, "value =", student[i]);
    }
}
// practice Qs1
{
    for(let num = 0; num <= 100; num++) {
        if(num%2 ===0) {
            console.log("num =", num);
        }
    }
}
{
    console.log("hello");
}
{
    for(let num = 0; num <= 100; num++) {
        if(num%2 !==0) {
            console.log("num =", num);
        }
    }
}
{
    let fooditem = ["apple", "mango", "banana", "grapes", "tomato"];
    console.log(fooditem);
    let deleteditem = fooditem.pop();
    console.log(fooditem);
    console.log("deleted", deleteditem);
 }
 {
    let fooditems = ["apple", "mango", "banana", "grapes",];
    console.log(fooditems);// normal print 
 }
 {
    console.log("hello world");
 }
 {
    let fooditems = ["potato", "apple", "banana", "grapes"];
    console.log(fooditems);
    console.log(fooditems.toString());
}
{
    let marvelheroes = ["thor", "hulk", "spiderman"];
    let dcheroes = ["spiderman", "ironman"];
    let heroes = marvelheroes.concat(dcheroes);
    console.log(heroes);
}
{
    let marvelheroes = ["thor", "hulk", "spiderman"];
    marvelheroes.unshift("ironman");
    console.log(marvelheroes);
}
{
    let marvelheroes = ["thor", "hulk", "spiderman"];
    let val = marvelheroes.shift();
    console.log("deleted", val);
}
{
    let marvelheroes = ["thor", "hulk", "spiderman", "ironman", "antman"];
    console.log(marvelheroes);
    console.log(marvelheroes.slice(1, 2));
}
{
    let arr = [1, 2, 3, 4, 5, 6, 7];
    arr.splice(2, 2, 101, 102);
    console.log(arr);
}
{
    let arr = [1, 2, 3, 4, 5, 6, 7];
    arr.splice(2, 0, 101);
    console.log(arr);
}
{
    let arr = [1, 2, 3, 4, 5, 6, 7];
    arr.splice(3, 1, 101);
    console.log(arr);
}
// practice Qs1
{
    let companies = ["bloomberg", "microsoft", "uber", "google", "IBM", "netfilx"];
    console.log(companies);
    companies.shift();
}
// practice Qs2
{
    let companies = ["bloomberg", "microsoft", "uber", "google", "IBM", "netfilx"];
    console.log(companies);
    companies.splice(2, 1, "Ola");
}
// practice Qs3
{
    let companies = ["bloomberg", "microsoft", "uber", "google", "IBM", "netfilx"];
    console.log(companies);
    companies.push("Amazon");
}
// ye 3 function hai 
console.log("hello");
"abc".toUpperCase();
[1, 2, 3].push(4);
// ye function hai 
// function definition
function myfunction() {
    console.log("hello world");
    console.log("kaise ho ");
}
myfunction();
myfunction();
// function -> 2 numbers, sum
console.log("+")
{
    function sum(x, y) {
        s = x + y;
        return s;
    }
    let val = sum(3, 4);
   console.log(val);// ye 1+2 answer 3 ata hai is kam ka hai plus+ and 111+222 answer 333
}
{
    function sum(x,y) {
        s = x - y;
        console.log("before return")
        return s;
    }
    let val = sum(3, 4);
    console.log(val);
}
// Arrow function 
// sum function 
{
   function sum(a, b) {
       return a + b;
   }
   // multipilication function
   function mul(a, b) {
      return a * b;
   }
}
// sum function 
{
    function sum(a, b) {
        return a + b;
    }
    const x = 5;

    const arrowsum = (a, b) => {
        console.log(a  + b);
    };
    // multipilication function
    function mul(a, b) {
       return a * b;
    }
 }
