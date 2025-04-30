import { fetchItem } from "../utils/fetch.js";

const name = document.createElement("h3")
const img = document.createElement("img")
const price = document.createElement("p")
const description = document.createElement("p")
const location = document.createElement("p")

const wrapper = document.getElementById("wrapper")
wrapper.append(img, name, price, description, location)

const url = new URL(window.location.href)
const id = url.searchParams.get("id");
console.log(id)

const itemPage = async (item) => {
    img.src = item.img;
    name.textContent = item.title
    price.textContent = item.price
    description.textContent = item.description
    location.textContent = item.location
}

const buildItem = async () => {
    const item = await fetchItem(id)
    itemPage(item)

}

buildItem()