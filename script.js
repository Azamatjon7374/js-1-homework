"use strict" //qattiq tartibda yozish


// alert('day-5');

var ism = "Abdulloh";
console.log(   ism + " " +  "26 yoshda, " + ism + " bugun ishga bormadi, chunki " + ism + " mashina sotib oldi !"); 
//string bu qoshtirnoq . sozni yozish uchun yoki konsolga chiqarish uchun stingda yozish kerak
//consolda ozgaruvchini elon qilishda string shart emas
//stringga raqam qoshganimizda raqamni ham js string qiladi qolgan vaqtda (-,*,:) da matematik amal boladi
//stringga agar (-,*,:) bilan raqam qollasak Nan beradi yani number  yoq  
console.log(5+5);
console.log("5" + 5);
console.log(5 + +"5");
console.log("A" + 5);
console.log("5" * 5);
console.log("a" * 5);


var sss = 'Ulug\'bek'
console.log(sss);

var userName = "Umar"; //cameCase
var user_name = "Akmal";//snake_case
var UserName;//PascalCase


console.log(userName , user_name , UserName);

//underfined-- ozgaruvchi elon qilingan , lekin qiymat berilganmagan

//ozgaruvchi elon qilishda kalit sozlardan foydalanib bolmaydi: return , ...

var $ = "text"
console.log($);

var _ = "text"
console.log(_);

var text = "text" , title = "title";

console.log(text, title);

var text = "text",
    title = "title";

    console.log(text, title);
    console.log(title);

var textColor = "red";
textColor = "blue";
let textBorder = "3px";
textBorder = "5px";
const PI = "3.14";
       // PI = "3.16";
        //const da ozgaruvchini elon qilishda katta harflardan foydalaniladi
        // const togridan togri ozgartirib bolmaydi


console.log(textColor, textBorder, PI);



let borderWidth = "3px";
console.log( borderColor);
var borderColor = "blue";   /*var butun page ga elon qilingan  bolib qoladi qachonki console.log undan oldin kelsa. va console ga undefined beradi*/
 
/* let da var dagidek bolmaydi , xatolik beradi*/
/*let kalit sozi bilan ozgartirib bolmaydi xatolik beradi */

 /*object*/    let person = {    
    ism: "Abdusattor",
    surname: "Qodirov",
    age: 26
}
console.log(person);

console.log(person["age"]);




  /*null--yoq narsani sorash*/  //console.log(people);

// let sorov = prompt("ismingizni kiriting");
// let surname = prompt("familiyangizni kiriting")
// let profession = prompt("kasbingizni kiriting");
// let age = prompt("yoshingizni kiriting");

// console.log(sorov)


// alert("sizning ismingiz " + sorov);
// alert("sizning familiyangiz " + surname);
// alert("sizning kasbingiz " + profession);
// alert("sizning yoshingiz " + age); 





// let name = prompt("ismingizni kiriting", "Azamatjon");
// let surname = prompt("familiyangizni kiriting", "Abduraimov");
// let age = prompt("yoshingizni kiriting", 26);
let name = prompt("ismingizni kiriting");
let surname = prompt("familiyangizni kiriting");
let age = prompt("yoshingizni kiriting");

alert("sizning ismingiz " + name);
alert("sizning familiyangiz " + surname);
alert("sizning yoshingiz " + age);

alert("bizning veb sahifamizga xush kelibsiz");