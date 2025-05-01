import { insertItem } from "../utils/fetch.js";


const name = document.getElementById("name")
const price = document.getElementById("price")
const description = document.getElementById("description")
const soldWhere = document.getElementById("soldWhere")
const img = document.getElementById("img")
const btn = document.getElementById("submit-btn")

const success = document.getElementById("success")
const returnBtn = document.getElementById("return-btn")

returnBtn.addEventListener("click", () => {
    window.location.href = "../index.html"
})

btn.addEventListener("click", () => {
    const data = {
        title: name.value,
        price: price.value,
        description: description.value,
        soldWhere: soldWhere.value,
        img: img.value,
    }

    if (!data.title || !data.price || !data.description || !data.soldWhere || !data.img) {
        console.log("Fill all fields")
        return
    }

    const isValidURL = (str) => /^(https?:\/\/)?([\w\-]+\.)+[\w]{2,}(\/\S*)?$/.test(str);

    if (!isValidURL(img.value)) {
        console.log("Invalid URL")
        return
    } 

    insertItem(data)

    if (data) {
        success.textContent = "SUCCESS!"
    }


})