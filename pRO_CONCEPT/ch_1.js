const name = "John"; // string
const age = 25; // number
const isLoggedIn = true; //boolean

//Functions
function Greet(name){
    return name;
}

const user = {
    "username": "Ayush",
    "email": "ayushsonone27@gmail.com"
}

const userArr = [
    {
        "username": "Ayush",
        "email": "ayushsonone27@gmail.com"
    },
    {
        "username": "Ansh",
        "email": "anshsonone27@gmail.com"
    }
]

const userLoggedIn = true;
const auth = userLoggedIn ? user.email : "Login"

const usearr = ['A', 'B', 'C']

// usearr.map((i) => console.log(i))

let username = "Ayush"
const birthYear = 2002
// console.log(birthYear)

// Q1. Create a string variable for your favorite song name
const favSong = "closer"
// Q2. Create a number variable for how many hours you listen to music daily
const listenTime = 1
// Q3. Create a boolean variable for "do you like coding?"
const likeCoding = true
// Q4. Create an array with 3 favorite music artists
const favArtists = ['Arijit Singh', 'Ed sharen', 'Amit trivedi']
// Q5. Create an object that has your name and favorite genre
const favGenre = {
    "name": "Ayush",
    "genre": "indie"
}

// Q1. A function called `favoriteArtist` that returns your favorite artist's name
// function favoriteArtist(){
//     return "Arijit Singh, Amit trivedi"
// } 
// Q2. A function called `doubleNumber` that takes a number and returns its double
// function doubleNumber(num){
//     return num*2
// }
// Q3. A function called `sayHello` that takes a name and logs "Hello, <name>"
// function sayHello(name){
//     return `HELLO, ${name}`;
// } 
// console.log(favoriteArtist())
// console.log(doubleNumber(2))
// console.log(sayHello("Ayush"))

// Q1. Check if a number is even or odd (use % operator)
// function checkNum(number){
//     if(number%2 == 0){
//         console.log("Even")
//     }else{
//         console.log("Odd")
//     }
// }
// checkNum(5)
// Q2. Write a function that takes age and logs:
//      "Adult" if age >= 18,
//      "Teenager" if age >= 13,
//      "Child" otherwise
// function ageCheck(age){
//     if(age>=18){
//         console.log("Adult")
//     }else if(age>=13){
//         console.log("Teenager")
//     }else{
//         console.log("Child")
//     }
// }
// ageCheck(20)
// Q3. Bonus: Use template string in any of your outputs
// function templateString(name){
//     return `Hello, ${name}`
// }
// console.log(templateString("Ayush"))

// Q1. Use a `for` loop to print numbers from 1 to 10
// console.log("numbers from 1 to 10")
// for(let i=1;i<=10;i++){
//     console.log(i)
// }
// Q2. Use a `while` loop to print numbers from 5 to 1
// console.log("numbers from 5 to 1")
// let i=5
// while(i>=1){
//     console.log(i)
//     i--
// }
// Q3. BONUS: Print each item in this array using a for loop:
// console.log("looping through array")
// const hobbies = ["coding", "music", "gaming"];
// for(i=0; i<3; i++){
//     console.log(hobbies[i])
// }

// Q1. Create an array of 3 colors
// const colors = ["red", "green", "blue"]

// Q2. Add a new color to the end
// colors.push("white")
// console.log(colors)

// Q3. Remove the first color
// colors.shift()
// console.log(colors)

// Q4. Print the final array
// console.log(colors)

// Q5. Check if "blue" is included in the array and print true/false
// console.log(colors.includes("blue"))

// Q1. Create an object `song` with keys: title, artist, duration
// const song = {
//     "title" : "Closer",
//     "artist" : "The Chainsmokers",
//     "duration" : 3,
//     "describe" : function(){
//         return `Song: ${this.title} by ${this.artist}, duration: ${this.duration} mins`
//     }
// }
// Q2. Add a method `describe` that returns:
//     "Song: <title> by <artist>, duration: <duration> mins"
// console.log(song.describe())

// Q3. Call the method and print the result

// const double = (x) => console.log(x*2);
// double(2560)

// Q1. Convert this to arrow function:
// const greet = (name) => `Hello, ${name}`;
// console.log(greet("Ayush"))

  
  // Q2. Write an arrow function called `square` that returns square of a number
//   const square = (num) => num*num
//   console.log(square(2))

  // Q3. Use `let` or `const` properly in your code

//   const numbers = [1, 2, 3, 4, 5];

// Q1. Use `.map()` to double each number
// numbers.map((num) => console.log(num*2))
// Q2. Use `.filter()` to keep only even numbers
// const evenNumbers = numbers.filter((num) => num % 2 == 0);
// console.log(evenNumbers);
// Q3. Use `.forEach()` to print each number with "Number: <num>"
// numbers.forEach((num) => console.log(`Number: ${num}`))


const songs = [
    { title: "Closer", artist: "The Chainsmokers" },
    { title: "Shape of You", artist: "Ed Sheeran" },
    { title: "Channa Mereya", artist: "Arijit Singh" }
  ];
  
// Q1. Use `.find()` to get the song with title "Closer"
const songFind = songs.find((song) => song.title === "Closer");
console.log(songFind);
// Q2. Use `.some()` to check if there's a song by "Arijit Singh"
const hasSongByArijit = songs.some((song) => song.artist === "Arijit Singh");
console.log(hasSongByArijit);
// Q3. Use `.every()` to check if all songs have a title
const songEvery = songs.every((song) => song.title)
console.log(songEvery)
