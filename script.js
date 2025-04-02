document.addEventListener('DOMContentLoaded', function () {
    const url = 'https://api.github.com/users/uANDYANO';

    const button = document.getElementById('button');
    const seguindo = document.getElementById('seguindo');
    const seguidores = document.getElementById('seguidores');
    const nome = document.getElementById('nome');
    const repositorios = document.getElementById('repositorios');
    const profileImage = document.getElementById('profile-picture');
    const fullName = document.getElementById('nome-completo')

    fetch(url)
        .then(function (response) {
            console.log(response);
            return response.json();

        })
        .then(function (json) {
            console.log(json);
            const login = "@" + json.login;
            const name = json.name;
            const followers = json.followers;
            const following = json.following;
            const public_repos = json.public_repos;
            profileImage.src = json.avatar_url;

            nome.innerHTML = login;
            fullName.innerHTML = name;
            seguidores.innerHTML = followers;
            seguindo.innerHTML = following;
            repositorios.innerHTML = public_repos;

            button.innerHTML = `<a href="https://github.com/uANDYANO" style="text-decoration: none; color: #fff;">Clique aqui para ir ao Github do ${login}</a>`

        })
}) 