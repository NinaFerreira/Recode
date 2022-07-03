programa
{
	inclua biblioteca Util --> util
	
	funcao inicio()
	{
		cadeia clientes [5]
   		cadeia destinos [5]
		inteiro aux = 0
		inteiro i = 0
  		inteiro auxDes = 0
   		inteiro auxCad = 0
   		
   		escreva("##### BEM-VINDOS AO MENU DA AGENCIA DE VIAGENS AIRLINES TICKETS ####\n")

   	faca{
   		
      escreva("\n===== Escolha uma das opções abaixo =====\n")
      escreva("1 - Cadastra Cliente: \n")
      escreva("2 - Consulta Cliente: \n")
      escreva("3 - Cadastra Destino: \n")
      escreva("4 - Consulta Destino: \n")
      escreva("5 - Sair do Menu: \n")
      leia(aux)

      // Cadastra os clientes.
      se(aux == 1){
         i = auxCad
         escreva("\nBem vindo ao cadastro de cliente!!!\n")

         enquanto (i <= 4){ 
            se(clientes[i] == "") {
               escreva("Digite seu nome : ")
               leia(clientes[i])

               escreva("Sr(a) ", clientes[i], " foi cadastrado com sucesso.\n")
               i = 5
            }

         }

         se(auxCad > 4){
            escreva("Sr(a) cliente, infelizmente não há mais vagas.\n")
         }

         auxCad = auxCad + 1


     }senao{
         // Consulta os clientes cadastrados.
         se(aux == 2){
            escreva("Bem vindo a consulta de clientes!!!\n")

            para (i = 0; i <= 4; i ++) {
               se(clientes[i] != "") {
                  escreva(i+1,"° Cliente: ", clientes[i], "\n")
               }
            }

         }senao {
          // Cadastra os destinos.
            se(aux == 3) {
               i = auxDes
               escreva("\nBem vindo ao cadastro de novos destinos!!!\n")

               enquanto (i <= 4) {
                  se(destinos[i] == "") {
                     escreva("Digite o nome do destino: ")
                     leia(destinos[i])
                     escreva("O ", destinos[i], " foi cadastrado com sucesso.\n")
                     i = 5
                  }

               }
               se(auxDes > 5) {
                  escreva("Infelizmente você chegou ao limite da quantidade de destinos.\n")
               }
               auxDes = auxDes + 1

   			
            }senao{
             // Consulta os destinos cadastrados.
               se(aux == 4) {
                  escreva("Bem vindo a consulta de destinos!!!\n")

                  para (i = 0; i <= 4; i ++) {
                     se(destinos[i] != "") {
                        escreva(i+1,"° Destino: ", destinos[i],"\n") 
                     }
                  }
               }senao{
                // Finaliza o programa.
                  se(aux == 5){
                     escreva("O programa esta sendo encerrado...\n")
                  }senao{
                     escreva("Opção invalida, digite novamente.\n")
            	  }
                  
             }
           }
         }
      }
    } enquanto (aux != 5)
   
   escreva("\nO programa foi encerrado com sucesso!")
	
  }
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 686; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = {aux, 9, 10, 3};
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */