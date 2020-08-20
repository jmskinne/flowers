let flowers = []

export const useFlowers = () => {
    return flowers.slice()
}

export const getFlowers = () => {
    return fetch("http://localhost8088/flowers")
        .then(response => response.json())
        .then(data => flowers = data)
}