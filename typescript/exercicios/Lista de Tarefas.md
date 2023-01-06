# Exercício: Criar um componente de lista de tarefas
A tarefa é criar um componente de listagem de tarefas (Todo List) que exibe uma lista de tarefas a serem concluídas. O componente deve ter os seguintes recursos:

* Aceitar uma lista de tarefas como propriedades
* Exibir cada tarefa na lista como um item de lista
Permitir que o usuário marque uma tarefa como concluída ou não concluída
* Atualizar a lista de tarefas com o estado atualizado quando o utilizador clicar em uma tarefa

Para completar este exercício:

* Criar uma interface chamada Task que define o formato de uma tarefa. 
* A tarefa deve ter um ID, um título e um estado se ela foi concluída ou não.
* Criar uma interface chamada Props que define os tipos de propriedades que o componente deve receber. 
* O componente deve receber uma lista de tarefas no formato especificado pela interface Task e uma função de callback que será chamada quando o usuário clicar em uma tarefa.
* Criar o componente de lista de tarefas. 
* O componente deve exibir cada tarefa na lista como um item de lista (<LI>), permitir que o utilizador clique em uma tarefa para marcá-la como concluída ou não concluída e chamar a função de callback.