import "./style.css"
import { setupCounter } from "./counter.js"

document.querySelector("#app").innerHTML = `
  <div>
      <img src="images/badge-like.png" class="logo" alt="Vite logo" />
      <img src="images/badge-like.png" class="logo vanilla" alt="JavaScript logo" />
   
    <h1>TINDOG</h1>
    <p class="read-the-docs">
      Tider app for dogs!
    </p>
  </div>
`

setupCounter(document.querySelector("#counter"))
