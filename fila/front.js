function listarElementos() {
    fila.elementos.map(function (elemento) {
        if (elemento) {
            $elemento = "<div class='elemento'>" + elemento + "</div>"
            $('#fila').append($elemento)
        }
    })
}

listarElementos()

$(document).on('submit', '#adicionar', function (e) {
    e.preventDefault()
    event.stopImmediatePropagation()
    fila.inserir($('#valor').val())
    $valor = "<div class='elemento'>" + $('#valor').val() + "</div>"
    $('.elemento').last().after($valor)
    $('.elemento').last().hide().fadeIn(500)
    /*$('.elemento').last().animate({
        opacity: 0.25,
        "margin-left": "-50px"
    }, 500, function () {

    })*/
})

$('#remover').on('click', function () {
    fila.remover()
    $('.elemento').first().animate({
        opacity: 0.25,
        "margin-left": "-50px"
    }, 500, function () {
        $('.elemento').first().remove()
    })
})

