const URL = "https://6807350ae81df7060eb92d15.mockapi.io/"

export const fetchShop = async () => {
    const response = await fetch(`${URL}recipes`)
    const data = await response.json()

    return data
}