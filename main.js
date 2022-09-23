import { dogs } from "./data.js"
import { Dog } from "./Dog.js"

let dogsArray = dogs
let isWaiting = false

const render = () => {
    document.getElementById("description").innerHTML = dog.getDogHtml()
    isWaiting = false
}

const swipe = () => {
    if (!isWaiting) {
        console.log("clicked")
        if (dogsArray.length > 0) {
            isWaiting = true
            setTimeout(() => {
                dog = getNewDog()
                render()
            }, 1500)
        }
    }
}

const getNewDog = () => {
    const nextDogData = dogsArray[0]
    dogsArray.shift()

    return dogsArray ? new Dog(nextDogData) : {}
}

let dog = getNewDog()

document.getElementById("heart").addEventListener("click", swipe)
document.getElementById("cross").addEventListener("click", swipe)

render()
