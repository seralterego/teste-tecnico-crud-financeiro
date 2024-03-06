# Teste Técnico – Desenvolvedor Front-End

## Desenvolvimento aplicação angular
Desenvolver a estrutura do site HTML, CSS e imagens, utilizando como referência o layout a seguir:
- <code>layout secreto</code>😉
<!-- https://www.figma.com/file/7UHeflMA9KkgrsdDQ7pWhe/Teste?node-id=0-1&t=r6qDhCDvOfjlQmGj-0 -->

### Criar sistema CRUD com os seguintes requisitos:
1. Tela de cadastro de cliente contendo os campos: Nome Cliente, CPF, Data Nascimento, Renda Mensal, E-mail e Data Cadastro.

2. Tela com listagem de clientes, com os campos: Nome Cliente, CPF, Data Cadastro, Renda Mensal.
  - Essa tela deverá conter filtro do Nome Cliente, CPF, Data Nascimento.
  - Essa tela deverá conter também ordenação e paginação;
  - Possibilitar remover registros;

3. Tela com o detalhe das informações do cliente, podendo ser editáveis todos os campos, exceto o CPF;
  - Toda a comunicação REST deve ser utilizada a biblioteca JSON Server ou a Mockoon, para mockar os dados.
  - Utilizar validações de dados e máscaras nos campos correspondentes (CPF, Data Nascimento, Renda Mensal, E-mail e Data Cadastro)

### Validações:
- Cliente deve possuir mais de 18 anos e menos de 60;
- CPF deve ser válido;
- Nome Cliente deve possuir ao menos um sobrenome;