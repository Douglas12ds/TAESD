class Pilha {
    topo
    elementos
    max
    constructor(max) {
        this.max = max
        this.elementos = []
        this.topo = -1
    }

    inserir(valor){
        if ( this.elementos.length == this.max ) {
            console.error("Impossível inserir! Pilha cheia!")
            return false
        }
        this.topo++
        console.warn("Você chamou a função EMPILHAR(PUSH) e o valor " + valor + " foi adicionado na pilha.")
        this.elementos[this.topo] = valor
        return true
    }

    remover(){
        if ( this.topo == -1 ) {
            console.error("Impossível remover! Pilha vazia!")
            return false
        }
        console.war
        this.topo--
        console.warn("Você chamou a função DESEMPILHAR(POP) e o valor " + this.elementos[this.topo+1] + " foi removido da pilha.")
        return true
    }

    exibirPilha(){
        console.log("O elemento que está no topo é: " + this.elementos[this.topo] + ".")
    }
}

var pilha = new Pilha()

pilha.inserir(3)
pilha.inserir(6)
pilha.inserir(1)

pilha.exibirPilha()

pilha.remover()
pilha.remover()

pilha.exibirPilha()