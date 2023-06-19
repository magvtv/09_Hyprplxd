
// const sounds = new Map()
// sounds.set("dog", "woof")
// sounds.set("cat", "meow")
// sounds.set("duck", "quack")
// sounds.set("turkey", "gobbles")
// sounds.set("lion", "roar")

// for (const [key, value] of sounds) {
//     console.log(`${key} goes ${value}`)
// } 


function bitch (citizen, age, bodycount) {
    this.citizen = citizen
    this.age = age
    this.bodycount = bodycount
}

let Vaxalia = new bitch("South Korean", 20, 0)
console.log(Vaxalia.citizen)