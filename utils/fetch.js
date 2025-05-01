const URL = "https://6807350ae81df7060eb92d15.mockapi.io/"

export const fetchShop = async () => {
    const response = await fetch(`${URL}recipes`)
    const data = await response.json()

    return data
}


export  const fetchItem = async (id) => {

    const response = await fetch(`https://6807350ae81df7060eb92d15.mockapi.io/recipes/${id}`);

    const data = await response.json();
    return data
}

export const deleteItem = async (id) => {

    const response = await fetch(`https://6807350ae81df7060eb92d15.mockapi.io/recipes/${id}`, {
        method: "DELETE"
    });
    const data = await response.json()
    return data
}

export const insertItem = async (data) => {
    const response = await fetch(`${URL}recipes`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {"Content-Type": "application/json"}
    })
    const item = await response.json()
    return item
} 