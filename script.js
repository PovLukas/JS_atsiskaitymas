import { fetchShop } from "./utils/fetch.js";

const wrapper = document.getElementById("wrapper")

const buildShop = (items) => {
    items.sort((a, b) => {
        return a.price > b.price ? 1 : -1
    }).forEach((e) => {
        const card = document.createElement("div")

        const name = document.createElement("h3")
        name.textContent = e.title

        const price = document.createElement("p")
        price.textContent = e.price

        const img = document.createElement("img")
        img.src = e.img

        wrapper.append(card)
        card.append(img)
        card.append(name)
        card.append(price)
    })
}


const buildPage = async () => {
    const items = await fetchShop()
    console.log(items)
    buildShop(items)
}

buildPage()