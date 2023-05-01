// import { user } from "../l/user"

const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(userInfo) {
        this.userProfile.innerHTML=`<div class="profile">
                                        <img src="${userInfo.avatarUrl} alt="Foto de perfil do usuário" />
                                        <div class="data">
                                            <h1>${userInfo.name ?? 'Não possui nome cadastrado'}</h1>
                                            <p>${userInfo.bio ?? 'Não possui bio cadastrada'}</p>
                                        </div>
                                    </div>`
        
        let repositoriesItens = ''
        userInfo.repositories.forEach(repo => {
            repositoriesItens += `<li> <a href="${repo.html_url}" target="_blank">${repo.name}</a> </li>`
        })

        if(userInfo.repositories.length > 0) {
            this.userProfile.innerHTML += `<div class="repositories">
                                                <h2>Repositórios</h2>
                                                <ul>${repositoriesItens}</ul>
                                            </div>`
        }
    },
    renderNotFound() {
        this.userProfile.innerHTML = "<h3>Usuário não encontrado</h3>"
    }
}

export { screen }