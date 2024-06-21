//------------------------------------------------- Question Number 2 -------------------------------------------------\\

import InputPrompt from "inquirer/lib/prompts/input.js";
import prompt from "inquirer/lib/ui/prompt.js";

 let name1 = "Ali";
 console.log(`${name1}, "How is your prepration for the exames?"`);

 //-------------------------------------------------- question number 3 -------------------------------------------------\\

 let name2 = "muhammad-zaki";
 console.log(name2.toLowerCase());
 console.log(name2.toUpperCase());
 console.log(name2[0].toUpperCase()+name2.slice(1,9)+name2[9].toUpperCase()+name2.slice(10));

 //-------------------------------------------------- question number 4 ------------------------------------------------\\

 let name3 = "Albert Einstein"
 console.log(`${name3} once said, “A person who never made a mistake never tried anything new.”`);

//---------------------------------------------------question number 5 -----------------------------------------------\\

 let famous_person = "Albert Einstein"
 let message1 = `${famous_person} once said, “A person who never made a mistake never tried anything new.” `
 console.log(message1);
// //---------------------------------------------------question number 6 -----------------------------------------------\\

let men_name = "\t\t\t\t\t Muhammad Zaki \n"
console.log("normal:", men_name);
console.log("trimed:", men_name.trim());

// //---------------------------------------------------question number 7 -----------------------------------------------\\

function add (num1: number, num2: number){
   return num1 + num2;
}
console.log(add(5,3));
function sub (num1: number, num2: number){
    return num1-num2;
}
console.log(sub(10,2));
function multi (num1: number, num2: number){
    return num1*num2;
}
console.log(multi(4,2));
function divide (num1: number, num2: number){
    return num1/num2;
}
console.log(divide(16,2));

// //---------------------------------------------------question number 8 -----------------------------------------------\\

console.log(5+3);
console.log(10-2);
console.log(4*2);
console.log(16/2);

// //------------------------------------------------- Question Number 9 -------------------------------------------------\\

let favorite_number = 7;
let message = `My favorite number is is ${favorite_number}`;
console.log(message);

// //------------------------------------------------- Question Number 10 ------------------------------------------------\\

// //these are my 45 assignements

// //---------------------------------------------------question number 11 ------------------------------------------------\\

let names = ["Hadi", "Zaki","Hamzah","Ali"];
for (let i = 0; i < names.length; i++) {
    const element = names[i];
    console.log(element);
}

// //---------------------------------------------------question number 12 ------------------------------------------------\\

let names1 = ["Hadi", "Zaki","Hamzah","Ali"];
for (let i = 0; i < names1.length; i++) {
    const element = names1[i];
    console.log(`Happy new year: ${element}`);
}

// //---------------------------------------------------question number 13 ------------------------------------------------\\

let transportations = ["Trans", "Car","Bikes", "Cycle"];
console.log(transportations[0], "is the best option to travel throughout the contry" );
console.log(transportations[1], "keys jingled in his hand as he approached the parked vehicle.");
console.log(transportations[2], "give good fule averag");
console.log(transportations[3], "do not produce polution");

// //---------------------------------------------------question number 14 -----------------------------------------------\\

let invited_persons = ["Hadi","Hamzhah","Ali","Anees","Habib","Nasir"]
for (let i = 0; i < invited_persons.length; i++) {
    const friends_name = invited_persons[i];
    console.log(`"${friends_name} , would you like to join me for dinner tonight? "`);
}

// //-------------------------------------------------- question number 15 -----------------------------------------------\\

let absent_person:string[] = ["Imran","Zohair","Ahamad"]
console.log("Hellow", absent_person[0], "You are invited to a dinner tonight, because same of my friends are not coming.So plese be on time");

console.log("Hellow", absent_person[1], "You are invited to a dinner tonight, because same of my friends are not coming.So plese be on time");

console.log("Hellow", absent_person[2], "You are invited to a dinner tonight, because same of my friends are not coming.So plese be on time");
absent_person.pop() 
absent_person.push("Rafay")
console.log("Hellow", absent_person[0], "You are invited to a dinner tonight, because same of my friends are not coming.So plese be on time");
console.log("Hellow", absent_person[1], "You are invited to a dinner tonight, because same of my friends are not coming.So plese be on time");

//-------------------------------------------------- question number 16------------------------------------------------\\

let new_person:string[] = ["Imran","Zohair","Ahamad"]
console.log(new_person[0] , "I like you to invite to dinner because, I find a bigger dinner table.");
console.log(new_person[1] , "I also like to invite you to dinner because, I find a bigger dinner table.");
console.log(new_person[2] , "I also like to invite you to dinner because, I find a bigger dinner table.");
new_person.unshift("usman")
new_person.splice(2,0,"Huzaifa")
new_person.push("Zakir")
for (let i = 0; i < new_person.length; i++) {
    const element = new_person[i];
    console.log(`"\nHellow"${element}, Please be on time to the dinner.`);    
}
//-------------------------------------------------- question number 17 ------------------------------------------------\\

// let new_person:string[] = ["Imran","Zohair","Ahamad"]
// console.log(new_person[0] , "I like you to invite to dinner because, I find a bigger dinner table.");
// console.log(new_person[1] , "I also like to invite you to dinner because, I find a bigger dinner table.");
// console.log(new_person[2] , "I also like to invite you to dinner because, I find a bigger dinner table.");
// new_person.unshift("usman")
// new_person.splice(2,0,"Huzaifa")
// new_person.push("Zakir")
// for (let i = 0; i < new_person.length; i++) {
//     const element = new_person[i];
//     console.log(`"\nHellow"${element}, Please be on time to the dinner.`);    
// }
console.log("Sorry to inform you all that i dont have enough space on the table as i just got to know that i mistankenly  booked 2 person table. ");
let person1 = new_person.pop()
console.log(`${person1}, "Unfortunately, I must share that our dinner table will not arrive on schedule. As a result, I'm limited to inviteing only two people. I regret to inform you that I won't be able to accommodate you." `);
let person2 = new_person.pop()
console.log(`${person2}, "Unfortunately, I must share that our dinner table will not arrive on schedule. As a result, I'm limited to inviteing only two people. I regret to inform you that I won't be able to accommodate you." `);
let person3 = new_person.pop()
console.log(`${person3}, "Unfortunately, I must share that our dinner table will not arrive on schedule. As a result, I'm limited to inviteing only two people. I regret to inform you that I won't be able to accommodate you." `);
let person4 = new_person.pop()
console.log(`${person4}, "Unfortunately, I must share that our dinner table will not arrive on schedule. As a result, I'm limited to inviteing only two people. I regret to inform you that I won't be able to accommodate you.d" `);
let person5 = new_person.pop()
console.log(`${person5}, "You're still welcome to come. Thus, punctuality is appreciated. Looking forward to seeing you there!" `);
let person6 = new_person.pop()
console.log(`${person6}, "You're still welcome to come. Thus, punctuality is appreciated. Looking forward to seeing you there!" `);
console.log(new_person);

// //------------------------------------------------- Question Number 18 ----------------------------------------------\\

let visit_places = ["America","England","Canada","Brazil","Dubai"]
console.log("Original Array:" , visit_places);
console.log("Alphabetical order",[...visit_places].sort());//
console.log("Original Array:" ,visit_places);
console.log("Reverse Alphabetical order",[...visit_places].sort().reverse());
console.log("Original Array:" ,visit_places);
console.log(" Reversed order",visit_places.reverse());
console.log("Changed Array:", visit_places);
console.log("It is back to its original form", visit_places.reverse());
console.log(visit_places.sort());
console.log(visit_places.sort().reverse());
console.log("Original Array is changed in to reverse alphabetical order", visit_places);

// //----------------------------------------------- Question Number 19 --------------------------------------------\\


// //----------------------------------------------- Question Number 20 --------------------------------------------\\

let  Programming_languages = ["Python","JavaScript","Java","C++","Ruby"]
Programming_languages.forEach(languages => {
    console.log(languages);
});

// //----------------------------------------------- Question Number 21 --------------------------------------------\\

let student:{
name:string,grades:number,class:number,roolNo:number
}={
    name:"Abdul Hadi",
    grades:84.95,
    class:9,
    roolNo:30,
 }
// //----------------------------------------------- Question Number 22 --------------------------------------------\\

// //-------------------Intentional Error--------------------\\
let  Programming_language = ["Python","JavaScript","Java","C++"]
console.log(`The language on which i am working is ${Programming_language[5]}`);// Array Index Error(undefined)
console.log(`The language on which i am working is ${Programming_language[1]}`);

// //----------------------------------------------- Question Number 23 --------------------------------------------\\

let age = 18;
let transport ="Airplane";
let city ="karachi";
let hotel ="Hotel-Mehran";
let food = "Berger" ;
 // true statements
console.log("Is 'age == 18'? I predict True.");
console.log( age == 18);// true
console.log("Is 'transport == Airplane'? I predict True.");
console.log( transport == "Airplane");// true
console.log("Is city == 'karachi'? I predict True.");
console.log( city == 'karachi'); // true
console.log("Is Hotel == 'Hotel-Mehran'? I predict True.");
console.log( hotel == 'Hotel-Mehran'); // true
console.log("Is food == 'Berger'? I predict True.");
console.log( food == 'Berger'); // true
 // False statements
console.log("Is 'age == 15'? I predict True.");
console.log( age == 15);// False
console.log("Is 'transport == Train'? I predict True.");
console.log( transport == "Train");// False
console.log("Is city == 'Lohore'? I predict True.");
console.log( city == 'Lohore'); // False
console.log("Is Hotel == 'Aloft-Hotel'? I predict True.");
console.log( hotel == 'Aloft-Hotel'); // False
console.log("Is food == 'Pizza'? I predict True.");
console.log( food == 'pizza'); // False

// //----------------------------------------------- Question Number 24 --------------------------------------------\\

// Equality and Inequality with strings

let a:string = " Equality and Inequality with strings"
let b:string ="test of  Equality and Inequality with strings"
// No one:
console.log("No 1:" ,a === b);
console.log("No 1:" ,a !== b);

console.log("No 2:" , a.toLowerCase()=== b.toLowerCase());
console.log("No 2:" ,a.toLowerCase() != b.toLowerCase());
// Numerical tests
let c :number = 5
let d :number = 10
console.log("No 3:" ,c < d);// less than comparison
console.log("No 4:" ,c > d);// greater than comparison
console.log("No 5:" ,c >= d);// greater than equal to comparison
console.log("No 6:" ,c <=d);// less than equal to comparison
console.log("No 7:" ,c <= d || c >= d);// comparison using OR operator
console.log( "No 8:" ,c != d && c === d );// comparison using AND operator

let comparison  = ["Hadi","Zaki","Hamzhah","Admin","Ali"]
let comparisonVariable= ["Hadi","Zaki","Usman","Abid","Abdullah"];
console.log("No 9:" ,comparison.includes("Hadi"));
console.log("No 10:" ,comparison.includes("Zaki"));




// //----------------------------------------------- Question Number 25 --------------------------------------------\\

let alien_color :string = "Green" 
if (alien_color === "Green" ) {
    console.log("Congratulations! You just earned 5 points.");
} else {
    console.log("No output");    
}
if (alien_color == "Blue" ) {
    console.log("Congratulations! You just earned 5 points.");
} else {
    console.log("No output");    
}

// //----------------------------------------------- Question Number 26 --------------------------------------------\\

let alien_color1 :string = "Green" 
if (alien_color1 === "Green") {
    console.log("Congratulations! You just earned 5 points for shooting the alien.");
}else{
    console.log("Congratulations! You just earned 10 points for shooting the alien.");
}
let alien_color2 :string = "Blue"
if (alien_color2 === "green" ) {
    console.log("Congratulations! You just earned 5 points for shooting the alien.");
} else {
    console.log("Congratulations! You just earned 10 points for shooting the alien.");
}

// //----------------------------------------------- Question Number 27 --------------------------------------------\\

let alien_color3:string = "Green"
let alien_color4:string = "Yellow"
let alien_color5:string = "Red"
if (alien_color3 === "Green") {
    console.log("You earned 5 points.");
}else{
    console.log("No Output");
} 
if (alien_color4 === "Yellow") {
    console.log("You earned 10 points.");
}else{
    console.log("No Output");
}
if (alien_color5 === "Red") {
     console.log("You earned 15 points.");
}else{
        console.log("No Output");
}

// //----------------------------------------------- Question Number 28 --------------------------------------------\\

let age1 =  25
if (age1 < 2) {
    console.log("A person is a Baby");
}else if (age1 >= 2 && age1 <= 4 ) {
    console.log("A person is a Toddler");
}else if (age1 >= 4 && age1 < 13 ) {
    console.log("A person is a Kid");
}else if (age1 >= 13 && age1 < 20 ) {
    console.log("A person is a Teenager");
}else if (age1 >= 20 && age1 < 65 ) {
    console.log("A person is a Adult");
}else if (age1 >= 65) {
    console.log("A person is a Elder");
}

// //----------------------------------------------- Question Number 29 --------------------------------------------\\

let favorite_fruits =["Apple","Mango","Strawberry","Orange","Dragon-fruit"]
if(favorite_fruits[0]=== "Apple"){
console.log(`You really like ${favorite_fruits[0]}!`);
}
if(favorite_fruits[1]=== "Mongo"){
console.log(`You really like ${favorite_fruits[1]}!`);
}
if(favorite_fruits[2]=== "Strawberry"){
console.log(`You really like ${favorite_fruits[2]}!`);
}
if(favorite_fruits[3]=== "Orange"){
console.log(`You really like ${favorite_fruits[3]}!`);
}
if(favorite_fruits[4]=== "Dragon-fruit"){
console.log(`You really like ${favorite_fruits[4]}!`);
}

// //----------------------------------------------- Question Number 30 --------------------------------------------\\

let Username =["Hadi","Zaki","Hamzhah","Admin","Ali"]
Username.splice(0)
    for(let i of Username){
    if (i=== "Admin") {
        console.log("Hello Admin, would you like to see a status report?");
    }else(
        console.log(`Hello ${i}, thank you for logging in again.`)
    )
}

// //----------------------------------------------- Question Number 31 --------------------------------------------\\

Username =["Hadi","Zaki","Hamzhah","Admin","Ali"]
Username.splice(0)
if (Username.length === 0){
    console.log(" We need to find some users!");
}else {
    for(let i of Username){
        if (i=== "Admin") {
            console.log("Hello Admin, would you like to see a status report?");
        }else(
        console.log(`Hello ${i}, thank you for logging in again.`)
    )
}}

//----------------------------------------------- Question Number 32 --------------------------------------------\\

let current_users :string[] = ["Hadi","Zaki","Hamzhah","Admin","Ali"]
let new_users :string[] = ["Hadi","Zaki","Usman","Abid","Abdullah"]
let current_users_LC : string[] = current_users.map(current =>current.toLowerCase())

for (let New_user1 of new_users) {
if (current_users_LC.includes(New_user1.toLowerCase())) {
    console.log(`Sorry ${New_user1}, You will need to enter a new username.`);    
} else {
    console.log(`${New_user1}, your username is available.`);
  }
}

//----------------------------------------------- Question Number 33 --------------------------------------------\\

let ordinal_numbers = [1,2,3,4,5,6,7,8,9]; 
for (let ordinal of ordinal_numbers) {
        if (ordinal === 1) {
        console.log(`${ordinal}st`);
    } else if (ordinal === 2) {
        console.log(`${ordinal}nd`);
    } else if (ordinal === 3) {
        console.log(`${ordinal}rd`);
    } else {
        console.log(`${ordinal}th`);
        
    }
}

//----------------------------------------------- Question Number 34 --------------------------------------------\\

let Pizzas = ["Chicken Fajita","Paperoni","Chicken Cheese","Margherita"]
for (let i = 0; i < Pizzas.length; i++) {
     console.log(`I like ${Pizzas[i]} Pizza`);    
    }
    console.log("Pizza? Oh, I could write a love letter to pizza! It's the ultimate comfort food, a slice of heaven in every bite. I'd trade a kingdom for a perfect pizza pie!");
    console.log("I really love pizza!");
    
//----------------------------------------------- Question Number 35 --------------------------------------------\\

let animals = ["Dolphins","Wolves","Ants"]

for (let i = 0; i < animals.length; i++) {
    const element = animals[i];
    // console.log(`:${element}:`);
    console.log(`${element}, They engage in cooperative behaviors, communicate with each other, and work together to accomplish tasks such as hunting, caring for offspring, and defending their territories or nests.`);
}    

//----------------------------------------------- Question Number 36 --------------------------------------------\\

function make_shit(size:string,text:string ) {
    console.log(`The size of a shit is ${size}, and the text written on it is '${text}'. `);
}
make_shit("large","CHANGES ARE GOOD FOR LIFE" )

//----------------------------------------------- Question Number 37 --------------------------------------------\\

function make_shits(size:string = "Large" || "Medium" ,text:string = "I love TypeScript.") {
    console.log(`The size of a shit is ${size}, and the text written on it is '${text}'. `);
}
make_shits("XXL","CHANGES ARE GOOD FOR LIFE" )

//----------------------------------------------- Question Number 38 --------------------------------------------\\

function  describe_city (citys:string,countrys:string="Pakistan" ):void{
    console.log(`${citys} is in ${countrys}.`);
}

describe_city("Karachi")
describe_city("Toronto","Canada")
describe_city("Islamabad")

//----------------------------------------------- Question Number 39 --------------------------------------------\\

function city_country (city:string,country:string="Pakistan"){
    return `${city},${country}`
}

console.log(city_country("Toronto","Canada"))
console.log(city_country("Lohore"))
console.log(city_country("Tokoyo","Japan"))

//----------------------------------------------- Question Number 40 --------------------------------------------\\

function make_album ( artist : string,album_title : string ) {

let Dictionaries = {
artist,album_title
}
    return Dictionaries
}
 let Dictionaries1 = make_album("Adele","Rolling in the Deep")
console.log(Dictionaries1);
 let Dictionaries2 = make_album("Ed Sheeran","Shape of You")
console.log(Dictionaries2);
 let Dictionaries3 = make_album("Taylor Swift","Shake It Off")
console.log(Dictionaries3);

//----------------------------------------------- Question Number 41 --------------------------------------------\\

// Function to display the names of magicians
function  show_magician (magicians_names:string[]): (void) {
    
    for (const magicians of magicians_names ) {    
        console.log(magicians);
  }
}

    let  magicians_names :string[] = ["David Copperfield","Penn & Teller","Shin Lim","Dynamo","Léa Pauline"]
    
show_magician(magicians_names)
        
//----------------------------------------------- Question Number 42 --------------------------------------------\\

// // Function to add "the Great" to each magician's name
function make_great(magicians: string[]): string[] {

    return magicians.map(magician => magician + " the Great");

}
let great_magicians1= make_great(magicians_names)
console.log("\nGreat magicians:");
 console.log(great_magicians1);
console.log("Original magicians:");
    show_magician(magicians_names)    
  
//----------------------------------------------- Question Number 43 --------------------------------------------\\

// Array of magicians' names
const magicians: string[] = ["Harry Houdini", "David Blaine", "Criss Angel"];

// Make a copy of the array and modify it
const great_magicians: string[] = make_great([...magicians]);

// Display the original array of magicians
console.log("Original magicians:");
show_magician(magicians);

// Display the new array with "the Great" added to each name
console.log("\nGreat magicians:");
show_magician(great_magicians);

//----------------------------------------------- Question Number 44 --------------------------------------------\\

function make_sandwich(...items: string[]): void {
        console.log("Sandwich Order Summary:");
        console.log("You have ordered a sandwich which include this items:");
    for (const item of items) {
        console.log(`~ ${item}`);
    }
    console.log();
}
make_sandwich("Ham", "Cheese", "Lettuce");
make_sandwich("Turkey", "Tomato", "Mayo", "Avocado");
make_sandwich("Peanut Butter", "Jelly");

// ----------------------------------------------- Question Number 45 --------------------------------------------\\

type Car = {
    manufacturer: string;
    modelName: string;
    [key: string]: any;
};

function createCar(manufacturer: string, modelName: string, carInfo: { [key: string]: any }): Car {
    let car: Car = {
        manufacturer: manufacturer,
        modelName: modelName,
        ...carInfo
    };
    return car;
}
let car0 = createCar('Toyota', 'Corolla', { color: 'blue', year: 2020 });
console.log(car0);
let car1 = createCar('Kia', 'Grand Carnival', { color: 'Black', year: 2022 });
console.log(car1);