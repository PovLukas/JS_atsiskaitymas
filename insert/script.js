import { insertItem } from "../utils/fetch.js";


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

const isValidURL = (str) => /^(https?:\/\/)?([\w\-]+\.)+[\w]{2,}(\/\S*)?$/.test(str);

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

    if (!data.title || !data.price || !data.description || !data.soldWhere || !data.img) {
        console.log("Fill all fields")
        return
    }

    

    if (!isValidURL(img.value)) {
        console.log("Invalid URL")
        return
    } 

    const isValidPrice = (str) => /^-?\d+(\.\d+)?$/.test(str);

    if (!isValidPrice(price.value)) {
        console.log("Price needs to be a number")
        return
    }

    insertItem(data)

    if (data) {
        success.textContent = "SUCCESS!"
    }


})