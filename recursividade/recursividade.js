var res = 1
var numEle = 0

function regVida(hp) {
    setTimeout(function () {
        console.log(hp)
        if (hp >= 100) {
            hp = 100
            return
        }
        else {
            hp++
            regVida(hp)
        }
    }, 250)
}

function alongar(fu) {
    if (fu.length == 50) {
        return
    }
    else {
        fu = fu + "u"
        console.log(fu + "bá")
        alongar(fu)
    }
}

function dano(hp) {
    hp = -25
    return hp
}

function fatorial(num) {
    if (num == 1) {
        console.log(res)
        return
    } else {
        res =+ res*num
        fatorial(num-1)
    }
}

function fibonacci(num1, num2){
    if ( numEle == 10 ) {
        console.log("valor final =" + num2)
        numEle = 0
        return
    } else {
        let soma = num1 + num2
        numEle++
        console.log(soma)
        fibonacci(num2, soma)
    }
 }
var vida = 50
//regVida(vida)

regVida(vida)
fatorial(5)
fibonacci(1,1)