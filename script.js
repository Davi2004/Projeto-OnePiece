// Pegar os botões no JS para poder verificar quando o usuário clicar em cima de um deles.
const botoes = document.querySelectorAll('.botao')

// Pegar os personagens no JS para poder mostrar ou esconder eles.
const personagens = document.querySelectorAll(".personagem")

botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {
        
        // Verificar se já existe um botão selecionado, se sim, devemos remover a seleção dele.        
        desselecionarBotao();
        
        // Adicionar a classe "Selecionado" no botão que o usuário clicou.
        botao.classList.add("selecionado");
        
        // Verificar se já existe um personagem selcionado, se sim, devemos remover a seleção dele.
        desselecionarPersonagem();
        
        // Adicionar a classe 'selecionado' no personagem que o usuário selecionar.
        personagens[indice].classList.add("selecionado")
    });
});


function desselecionarPersonagem() {
    const personagemSelecionado = document.querySelector(".personagem.selecionado");
    personagemSelecionado.classList.remove("selecionado");
}

function desselecionarBotao() {
    const botaoSelecionado = document.querySelector(".botao.selecionado");
    botaoSelecionado.classList.remove("selecionado");
}