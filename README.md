## Rodando a aplicação

Clonando a aplicação: 

`git clone git@github.com:malves224/opencred-teste.git && cd opencred-teste`

### Com docker:

Após clonar o projeto basta montar a aplicação pelo docker utilizando o comando 
`npm run compose:up`, caso precise encerrar os container rode `npm run compose:down`.

Após terminar de montar os containers das imagens o frontend estará acessível na porta 3000 e o backend na porta 3001.

:warning: As portas 3000 e 3001 devem estar livres :warning:
