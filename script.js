let paginaAtual = 0;

const paginas = document.querySelectorAll(".pagina");


function mostrarPagina() {

    // Esconde todas as páginas
    paginas.forEach(pagina => {
        pagina.classList.remove("ativa");
    });


    // Mostra a página atual
    paginas[paginaAtual].classList.add("ativa");


    // Volta para o topo da página
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}



function proximaPagina() {

    if (paginaAtual < paginas.length - 1) {

        paginaAtual++;

        mostrarPagina();

    }

}



function voltarPagina() {

    if (paginaAtual > 0) {

        paginaAtual--;

        mostrarPagina();

    }

}