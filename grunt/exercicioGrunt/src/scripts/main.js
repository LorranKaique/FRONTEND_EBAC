
function mostrarData() {
    var hoje = new Date();
    var dataFormatada = hoje.toLocaleDateString("pt-BR",
        {
            weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
        }
    );
    document.getElementById("dataAtual").innerHTML = dataFormatada;
}