let intervalo = '';//inicializa a variavel com escopo global para dar ação ao jogo.
let bolaEstouradas = 0;
let total = 0;


function addBola() {
    //Criando uma div qualquer e setando a classe "bolinha" para ela
    var bola = document.createElement("div");
    bola.setAttribute("class", "bola");

    //Definindo uma posição X e Y
    var p1 = Math.floor(Math.random() * 645 + 10); //limita o campo que a bola irá aparecer na horizontal até o 700px do container
    var p2 = Math.floor(Math.random() * 613 + 42); //limita o campo que a bola irá aparecer na vertical até o 700px do container
    bola.setAttribute("style", "left:"+p1+"px;top:"+p2+"px;");
    bola.setAttribute("onclick", "estourar(this)");

    //Acrescenta a bolinha na tela(body)
    document.body.appendChild(bola);

    //Encrementa o total de bolinhas e atualiza no body
    total = total + 1;
    document.getElementById("total").innerHTML = 'Total: ' + total;

}
function estourar(obj) {
    //Remove o balão da Tela
    document.body.removeChild(obj);

    //Encrementa o total de balão estourado e atualiza no body
    bolaEstouradas = bolaEstouradas + 1;
    document.getElementById("estourados").innerHTML = 'Estouradas: ' + bolaEstouradas;

}
function inicio (a) {

    //Inicia e para o game
    switch (a) {
        case 'iniciar':
            console.log('Esta com o valor iniciar!')
            intervalo = setInterval(addBola,1000);
        break;
        case 'parar':
            console.log('Esta com o valor parar!')
            clearInterval(intervalo);
        break;
        default:
            console.log(`Valor de ${a}`);
    }
}

//Ao carregar a pagina carrega as informações
function placar () {
    document.getElementById("estourados").innerHTML = 'Estouradas: '
    document.getElementById("total").innerHTML = 'Total: '
}
