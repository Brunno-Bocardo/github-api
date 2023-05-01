import { baseURL } from "/src/js/variables.js"

async function repos(userName) {
    const response = await fetch(`${baseURL}/${userName}/repos`)
    return await response.json()
}

export { repos }