import { user } from "/src/js/services/user.js"
import { repos } from "/src/js/services/repositories.js"

import { userInfo } from "/src/js/objects/userInfo.js"
import { screen } from "/src/js/objects/screen.js"

 
document.getElementById('btn-search').addEventListener('click', () => {
    const userName = document.getElementById('input-search').value

    if(validation(userName)) return 

    getUserData(userName)
})

document.getElementById('input-search').addEventListener('keyup', (e) => {
    const userName = e.target.value
    const key = e.which || e.keyCode
    const isEnterKeyPressed = key === 13
    if(isEnterKeyPressed) {
        if(validation(userName)) return
        getUserData(userName)
    }
})

async function getUserData(userName) {

    const userResponse = await user(userName)
    if(userResponse.message === 'Not Found') {
        screen.renderNotFound()
        return
    }
    const repositoriesResponse = await repos(userName)
    
    userInfo.setInfo(userResponse)
    userInfo.setRepositories(repositoriesResponse)

    screen.renderUser(userInfo)
}

function validation(userName) {
    if(userName.length === 0) {
        alert('Por favor preencha o campo com um nome de usuário do GitHub')
        return true
    }
}