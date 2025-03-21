let pagina = 1;

async function all(pagina) {
    const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${pagina}`);
    const data = await response.json();

    // Limpar o conteúdo atual da div
    const todosPersonagensDiv = document.getElementById('todos-personagens');
    todosPersonagensDiv.innerHTML = '';

    // Iterar sobre os personagens e criar elementos HTML para exibir
    data.results.forEach(character => {
        const characterDiv = document.createElement('div');
        characterDiv.classList.add('personagem-card');

        // Criar a imagem do personagem
        const img = document.createElement('img');
        img.src = character.image;
        img.alt = character.name;

        // Criar o nome do personagem
        const name = document.createElement('h3');
        name.textContent = character.name;

        // Criar o status do personagem
        const status = document.createElement('p');
        status.textContent = `Status: ${character.status}`;

        // Criar o gênero do personagem
        const gender = document.createElement('p');
        gender.textContent = `Gênero: ${character.gender}`;

        // Criar a espécie do personagem
        const species = document.createElement('p');
        species.textContent = `Espécie: ${character.species}`;

        // Adicionar todos os elementos à div do personagem
        characterDiv.appendChild(img);
        characterDiv.appendChild(name);
        characterDiv.appendChild(status);
        characterDiv.appendChild(gender);
        characterDiv.appendChild(species);

        // Adicionar a div do personagem ao container
        todosPersonagensDiv.appendChild(characterDiv);
    });
}

// Volta para a página anterior
function anterior() {
    if (pagina > 1) {
        pagina--;
        all(pagina);
    }
}
// Avança para a próxima página de personagem
function proxima() {
    if (pagina < 41) {
        pagina++;
        all(pagina);
    }
}

// Função para pesquisar o personagem
async function pesquisa(personagem_pesquisa) {
    const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${personagem_pesquisa}`);
    const data = await response.json();

    // Limpar o conteúdo atual da div
    const todosPersonagensDiv = document.getElementById('todos-personagens');
    //const todosPersonagensDiv = $('#todos-personagens').val("teste"); 
    todosPersonagensDiv.innerHTML = '';

    if (data.results && data.results.length > 0) {
        // Exibe o personagem encontrado
        data.results.forEach(character => {
            const characterDiv = document.createElement('div');
            characterDiv.classList.add('personagem-card');

            // Criar a imagem do personagem
            const img = document.createElement('img');
            img.src = character.image;
            img.alt = character.name;

            // Criar o nome do personagem
            const name = document.createElement('h3');
            name.textContent = character.name;

            // Criar o status do personagem
            const status = document.createElement('p');
            status.textContent = `Status: ${character.status}`;

            // Criar o gênero do personagem
            const gender = document.createElement('p');
            gender.textContent = `Gênero: ${character.gender}`;

            // Criar a espécie do personagem
            const species = document.createElement('p');
            species.textContent = `Espécie: ${character.species}`;

            // Adicionar todos os elementos à div do personagem
            characterDiv.appendChild(img);
            characterDiv.appendChild(name);
            characterDiv.appendChild(status);
            characterDiv.appendChild(gender);
            characterDiv.appendChild(species);

            // Adicionar a div do personagem ao container
            todosPersonagensDiv.appendChild(characterDiv);
        });
    } else {
        // Caso não encontre o personagem, exibe uma mensagem
        const noResultMessage = document.createElement('p');
        noResultMessage.textContent = 'Nenhum personagem encontrado.';
        todosPersonagensDiv.appendChild(noResultMessage);
    }
}

// Função de busca ao pressionar o botão
function buscar() {
    const personagem_pesquisa = document.getElementById("pesquisa-text").value;
    console.log(`Pesquisando por: ${personagem_pesquisa}`);
    pesquisa(personagem_pesquisa);
}

$("").val()