import { dogs } from "./data.js"
import { Dog } from "./Dog.js"

let dogsArray = dogs
let isWaiting = false

const render = () => {
    document.getElementById("description").innerHTML = dog.getDogHtml()
    document.querySelector(".like-img").style.display = "none"
    document.querySelector(".nope-img").style.display = "none"
    isWaiting = false
}

const swipe = (reaction) => {
    dog.hasBeenSwiped = true
    if (!isWaiting) {
        if (dogsArray.length >= 0) {
            isWaiting = true
            if (reaction == "liked") {
                document.querySelector(".like-img").style.display = "block"
                dog.hasBeenLiked = true
            } else if (reaction == "nope") {
                document.querySelector(".nope-img").style.display = "block"
            }
            setTimeout(() => {
                dog = getNewDog()
                render()
            }, 1000)
        }
    }
}

const getNewDog = () => {
    const nextDogData = dogsArray[0]
    dogsArray.shift()

    return dogsArray ? new Dog(nextDogData) : {}
}

let dog = getNewDog()

document.getElementById("heart").addEventListener("click", function () {
    swipe("liked")
})
document.getElementById("cross").addEventListener("click", function () {
    swipe("nope")
})

render()
