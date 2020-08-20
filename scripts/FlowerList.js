import {getFlowers, useFlowers} from "./FlowerProvider.js"

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
    contentTarget.innerHTML = flowers.map(
        flower => {
            
        }
    )
}