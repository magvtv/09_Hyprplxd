
// const sounds = new Map()
// sounds.set("dog", "woof")
// sounds.set("cat", "meow")
// sounds.set("duck", "quack")
// sounds.set("turkey", "gobbles")
// sounds.set("lion", "roar")

// for (const [key, value] of sounds) {
//     console.log(`${key} goes ${value}`)
// } 


// function bitch (citizen, age, bodycount) {
//     this.citizen = citizen
//     this.age = age
//     this.bodycount = bodycount
// }

// let Vaxalia = new bitch("South Korean", 20, 0)
// console.log(Vaxalia.citizen)

// const body = document.body
// body.querySelector(".button").addEventListener("click", () => {
//     console.log("You pressed the button!")
// })

// function doStep1(x) {
//     return(`${x}`)
// }

// function doStep2(x) {
//     return (`${x} we`)
// }


// function doStep3(x) {
//     return (`${x} can`)
// }

// let word = "Yes";
// word = doStep1(word)
// word = doStep2(word)
// word = doStep3(word)
// console.log(word)

// const firstWord = (initial, callback) => {
//     const word = `${initial}, PH`;
//     callback(word);
// }
// const secondWord = (initial, callback) => {
//     const word = `${initial}. Welcome`;
//     callback(word);
// }

// const thirdWord = (initial, callback) => {
//     const word = `${initial} Home.`;
//     callback(word);
// }

// function doEverything() {
//     firstWord("Hello", word1 => {
//         secondWord(word1, word2 => {
//             thirdWord(word2, word3  => {
//                 console.log(`${word3}`)
//             });
//         });
//     });
// }

// doEverything()

console.log("Getting what you said...")
const pataAhadi = fetch(
    console.log("Some randomly made promise")
)

pataAhadi.then((res) => {
    console.log("Is this what you promised: " + " " + `${res.text}`)
})
// console.log(pataAhadi)
console.log(pataAhadi)
