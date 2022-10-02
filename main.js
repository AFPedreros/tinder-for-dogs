import { dogs } from "./data.js"
import { Dog } from "./Dog.js"

let dogsArray = dogs
let isWaiting = false

document.getElementById("heart").addEventListener("click", function () {
    if (!dog.hasBeenSwiped) {
        swipe("liked")
    }
})
document.getElementById("cross").addEventListener("click", function () {
    if (!dog.hasBeenSwiped) {
        swipe("nope")
    }
})

const render = () => {
    document.getElementById("description").innerHTML = dog.getDogHtml()
    document.querySelector(".like-img").style.display = "none"
    document.querySelector(".nope-img").style.display = "none"
    isWaiting = false
}

const swipe = (reaction) => {
    dog.hasBeenSwiped = true

    if (!isWaiting) {
        if (reaction == "liked") {
            document.querySelector(".like-img").style.display = "block"
            dog.hasBeenLiked = true
        } else if (reaction == "nope") {
            document.querySelector(".nope-img").style.display = "block"
        }
        setTimeout(() => {
            if (dogsArray.length === 0) {
                document.querySelector(".dog-info").innerHTML =
                    getNoMoreDogsHtml()
            } else {
                dog = getNewDog()
                render()
            }
        }, 1000)

        isWaiting = true
    }
}

const getNoMoreDogsHtml = () => {
    document.querySelector(".dog-info").style.background = `linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.9) -11.44%,
        rgba(0, 0, 0, 0) 39.97%
    )`
    document.getElementById("heart").style.display = "none"
    document.getElementById("cross").style.display = "none"

    return `
    <div>
    </div>
    `
}

const getNewDog = () => {
    const nextDogData = dogsArray[0]
    dogsArray.shift()

    return dogsArray ? new Dog(nextDogData) : {}
}

let dog = getNewDog()
render()

function render() {
    if (dogs.length === 0) {
        endSwipes()
    } else {
        let dogProfile = getNewDog()

        console.log(dogs.length)
        document.getElementById("profile-container").innerHTML =
            dogProfile.getDogHTML()
        dogProfile.hasBeenSwiped = true
    }
}
