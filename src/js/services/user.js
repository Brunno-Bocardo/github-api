import { baseURL } from "/src/js/variables.js"

async function user(userName) {
    const response = await fetch(`${baseURL}/${userName}`)
    return await response.json()
}

export { user }