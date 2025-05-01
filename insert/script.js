import { insertItem } from "../utils/fetch.js";


const name = document.getElementById("name")
const price = document.getElementById("price")
const description = document.getElementById("description")
const soldWhere = document.getElementById("soldWhere")
const img = document.getElementById("img")
const btn = document.getElementById("submit-btn")

btn.addEventListener("click", () => {
    const data = {
        title: name.value,
        price: price.value,
        description: description.value,
        soldWhere: soldWhere.value,
        img: img.value,
    }

    insertItem(data)

    if (data) {
        console.log("success")
    }
})