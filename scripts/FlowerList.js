import {getFlowers, useFlowers} from "./FlowerProvider.js"
import {FlowerHTMLConv} from "./FlowerHTML.js"

const contentTarget = document.querySelector(".flowers")

let flowers = []

export const FlowerList = () => {
    getFlowers()
        .then(() => {
            flowers = useFlowers()



            render()
        })
}

const render = () => {
    let flowerHTML = ""
    flowers.forEach(flower => {
        flowerHTML += FlowerHTMLConv(flower)
    })
    contentTarget.innerHTML = `
    <article class="flowers">
        ${flowerHTML}
    </article>
    `
            
        
}