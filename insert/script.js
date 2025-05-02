import { insertItem } from "../utils/fetch.js";
import { validation, isValidPrice, isValidURL } from "../utils/validation.js";


const name = document.getElementById("name")
const price = document.getElementById("price")
const description = document.getElementById("description")
const soldWhere = document.getElementById("soldWhere")
const img = document.getElementById("img")
const btn = document.getElementById("submit-btn")

const success = document.getElementById("success")
const returnBtn = document.getElementById("return-btn")

const urlStatus = document.getElementById('url-status');

returnBtn.addEventListener("click", () => {
    window.location.href = "../index.html"
})



img.addEventListener('input', () => {
    if (isValidURL(img.value)) {
      urlStatus.textContent = '✅';
    } else {
      urlStatus.textContent = '❌'; 
    }
  });


btn.addEventListener("click", () => {
    const data = {
        title: name.value,
        price: price.value,
        description: description.value,
        soldWhere: soldWhere.value,
        img: img.value,
    }

    if (!validation(data)) {
        return
    }

    insertItem(data)

    if (data) {
        success.textContent = "SUCCESS!"
    }


})