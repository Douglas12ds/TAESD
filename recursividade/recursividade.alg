algoritmo "semnome"
// Função :
// Autor :
// Data : 07/05/2019
// Seção de Declarações 
var
   res, num: real
   x: inteiro
inicio
      res := 1
      procedimento fatorial(num: real)
      inicio
      se ( num = 0 ) entao
         escreval("O fatorial de", x," é", res, ".")
      senao
         res := res + (res*(num-1))
         fatorial(num-1)
      fimse
      fimprocedimento

      ESCREVAL("Digite um valor:")
      Leia(x)
      fatorial(x)

fimalgoritmo
