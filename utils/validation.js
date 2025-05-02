export const isValidURL = (str) => /^(https?:\/\/)?([\w\-]+\.)+[\w]{2,}(\/\S*)?$/.test(str);
export  const isValidPrice = (str) => /^-?\d+(\.\d+)?$/.test(str);

export const validation = (data) => {
    if (!data.title || !data.price || !data.description || !data.soldWhere || !data.img) {
        console.log("Fill all fields")
        return
    }


    if (!isValidURL(img.value)) {
        console.log("Invalid URL")
        return 
    } 
   

    if (!isValidPrice(price.value)) {
        console.log("Price needs to be a number")
        return 
    }

    return true
}