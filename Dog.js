class Dog {
    constructor(data) {
        Object.assign(this, data)
    }

    getDogHtml = () => {
        const { name, avatar, age, bio } = this

        document.querySelector(".dog-info").style.background = `linear-gradient(
            0deg,
            rgba(0, 0, 0, 0.9) -11.44%,
            rgba(0, 0, 0, 0) 39.97%
        ),
        url("${avatar}")`
        document.querySelector(".dog-info").style.backgroundSize = "cover"
        document.querySelector(".dog-info").style.backgroundPosition = "center"

        return `
        <div>
            <h1>${name}, ${age}</h1>
            <h2>${bio}</h2>
        </div>
        `
    }
}

export { Dog }
