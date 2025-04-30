import { fetchItem } from "../utils/fetch.js";
import { deleteItem } from "../utils/fetch.js";


const button = document.getElementById("btn-delete")
const name = document.createElement("h3")
const img = document.createElement("img")
const price = document.createElement("p")
const description = document.createElement("p")
const location = document.createElement("p")
const card = document.createElement("div")
card.setAttribute("class", "card")

const wrapper = document.getElementById("wrapper")
wrapper.append(img, card)
card.append(name, price, description, location)

const url = new URL(window.location.href)
const id = url.searchParams.get("id");
console.log(id)

const itemPage = async (item) => {
    img.src = item.img;
    name.textContent = item.title
    price.textContent = `Kaina ${item.price}$`
    description.textContent = `Bulvyciu tipas ${item.description}`
    location.textContent = `Rasti galite ${item.soldWhere}`
}

button.addEventListener("click", async () => {
    const item = await deleteItem(id)

    if (item) {
        console.log("deleted")
    }
})

const buildItem = async () => {
    const item = await fetchItem(id)
    itemPage(item)

}

buildItem()



