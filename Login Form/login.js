
const sounds = new Map()
sounds.set("dog", "woof")
sounds.set("cat", "meow")
sounds.set("duck", "quack")
sounds.set("turkey", "gobbles")
sounds.set("lion", "roar")

for (const [key, value] of sounds) {
    console.log(`${key} goes ${value}`)
} 


constructor