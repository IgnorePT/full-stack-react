# Exercício: Formulário de Compra de Bilhetes

Nesse exercício, você vai criar um formulário de compra de Bilhetes para um evento usando React.  
O formulário deverá ter os seguintes campos:

* Nome do comprador
* Email do comprador
* Tipo de Bilhete (com uma lista de opções pré-definidas, como "inteiro", "meio-bilhete" e "estudante")
* Quantidade de Bilhetes
* Forma de pagamento (com uma lista de opções pré-definidas, como "Cartão de crédito" e "Mb Way")

Quando o utilizador clicar no botão de finalizar compra, o formulário deverá enviar os dados da compra para o servidor  para processamento (`simular`). Se os dados forem válidos, o utilizador deverá ser redirecionado para a página de confirmação da compra. 

Validações:
* Bilhete não pode ser menor que 1
* Nome não pode conter menos de 3 caracteres
  
Se houver algum erro de validação, o formulário deverá exibir mensagens de erro ao lado de cada campo inválido.