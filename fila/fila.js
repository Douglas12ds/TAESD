class Fila {
    ultimo
    elementos
    max
    constructor(max) {
        this.max = max
        this.elementos = []
        this.ultimo = -1
    }

    inserir(valor){
        if ( this.elementos.length == this.max ) {
            console.error("Impossível inserir! fila cheia!")
            return false
        }
        this.ultimo++
        console.warn("Você adicionou " + valor + " na fila.")
        this.elementos[this.ultimo] = valor
        return true
    }

    remover(){
        if ( this.ultimo == -1 ) {
            console.error("Impossível remover! fila vazia!")
            return false
        }
        console.warn("O valor " + this.elementos[0] + " foi removido da fila.")
        for (let i = 0; i<this.ultimo; i++) {
            this.elementos[i] = this.elementos[i+1]
            this.elementos[i+1] = null
        }
        this.ultimo--
        return true
    }

    exibirfila(){
        console.log(fila.elementos)
        console.log("O elemento que está no ultimo é: " + this.elementos[this.ultimo] + ".")
    }
}

var fila = new Fila(6)

fila.inserir(3)
fila.inserir(6)
fila.inserir(1)