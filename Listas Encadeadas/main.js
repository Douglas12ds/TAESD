
// TAD do Nodo -------------
class Nodo {
    // Variável que armazena a informação.
    info
    // Ponteiro para o próximo nodo do encadeamento.
    prox;

    constructor(valor) {
        this.info = valor;
        this.prox = null;
    }
}

// TAD da Lista Encadeada ------------
class Lista {
    // Representa a quantidade de elementos adicionados na lista.
    tamanho;
    // Aponta para o primeiro elemento da lista.
    cabeca;

    constructor() {
        // Toda lista começa vazia.
        this.tamanho = 0;
        // Por começar vazia , cabeça não aponta para ninguém.
        this.cabeca = null;
    }

    // Operações ---------

    inserir(valor, index) {
        if (index < 0 || index > this.tamanho) {
            $('#erro').text("");
            $('#erro').text("Índice Inválido");
            return false;
        }

        var novo = new Nodo(valor);

        if (index == 0) {
            novo.prox = this.cabeca;
            this.cabeca = novo;
        } else {
            var i = 0;
            var pont = this.cabeca;
            while (i != index - 1) {
                i++;
                pont = pont.prox;
            }
            novo.prox = pont.prox;
            pont.prox = novo;
        }
        this.tamanho++
        return true
    }

    buscar(valor) {
        this.elem = this.cabeca
        while (this.elem != null) {
            if (this.elem.info == valor) {
                return this.elem
            }
            this.elem = this.elem.prox
        }
        return null
    }
}

var lista = new Lista();
lista.inserir(3, 0);
lista.inserir(4, 0);
lista.inserir(2, 1);

// Manipulação DOM -------------------

var campoValor = '<input id="inputValor" class="campotxt" type="number" autocomplete="off" placeholder="Insira um valor">';
var campoIndice = '<input id="inputIndice" class="campotxt" type="number" autocomplete="off" placeholder="Insira o índice">';
var $formAdd = $('<form id="formAdd" onsubmit="adicionarNodo()">'
    + campoValor
    + campoIndice +
    '<button type="submit" class="btn enviar">Adicionar</button><br>'
    + '</form>');
var $formBsc = $('<form id="formBsc" onsubmit="buscarNodo()">'
    + campoValor +
    '<button type="submit" class="btn enviar">Buscar</button><br>'
    + '</form>');

var $nodo = '<div class="nodo">'
    + '<div class="conteudo"></div>'
    + '<div class="prox"></div>'
    + '</div>';

function limparTextos() {
    $formAdd.remove();
}

function listarNodos(lista) {
    $('#lista').text("");
    var nodo = lista.cabeca;
    var i = 0;
    while (nodo !== null) {
        if (nodo.prox !== null) {
            $('#lista').append('<div class="nodo">'
                + '<div class="conteudo">' + nodo.info + '</div>'
                + '<div class="prox">' + nodo.prox.info + '</div>'
                + '</div>');
        } else {
            $('#lista').append('<div class="nodo">'
                + '<div class="conteudo">' + nodo.info + ' </div>'
                + '<div class="prox">' + nodo.prox + '</div>'
                + '</div>');
        }
        nodo = nodo.prox;
        i++;
    }
}

function adicionarNodo() {
    lista.inserir($('#inputValor').val(), $('#inputIndice').val());
    listarNodos(lista);
    $('#erro').text("");
}

function buscarNodo() {
    if ((lista.buscar($('#inputValor').val())) !== null) {
        $('#erro').text("");
        $('.nodo').css({
            'border': '1px solid black'
        })
        let esteNodo = lista.buscar($('#inputValor').val())
        let $esteNodo = '.conteudo:contains(' + esteNodo + ')'
        $(".conteudo:contains('" + esteNodo + "')").text("oi")
        $($esteNodo).css({
            'border': '2px solid green'
        })
    } else {
        $('#erro').text("");
        $('#erro').text("Este valor não existe na lista!")
    }
}

$(function () {
    listarNodos(lista);

    if (lista.cabeca !== null) {
        $('#l-cbc').text(lista.cabeca.info);
    } else {
        $('#l-cbc').text('null');
    }

    $('#add').on('click', function () {
        limparTextos()
        $('#add').after($formAdd);
    })

    $('#bsc').on('click', function () {
        limparTextos()
        $('#bsc').after($formBsc)
    })

    $('#del').on('click', function () {
        limparTextos()
    })
})

$(document).on('submit', '#formAdd', function (e) {
    return false;
    e.preventDefault();
    event.stopImmediatePropagation();
    lista.inserir($('#inputValor').val(), $('#inputIndice').val());
    listarNodos(lista);
    $('#erro').text("");
})

$(document).on('submit', '#formBsc', function (e) {
    return false;
    e.preventDefault();
    event.stopImmediatePropagation();
    buscarNodo();
    listarNodos(lista);
    $('#erro').text("");
})