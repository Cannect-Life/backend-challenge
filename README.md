# Cannect Life - Teste Back-End

Olá, para executar os projetos é necessário sua máquina ter os requisitos minimos e também deve se seguir
as instruções dos comandos via terminal corretamente.

## Requisitos necessários

A maquina deve ter o Docker instalado, para facilitar o uso do Banco de dados.

## Comandos para executar os projetos:

Para executar os projetos siga o passo a passo descrito abaixo:

* Acesso o terminal de comando na raiz do diretório do projeto.
* Suba o conteiner com o banco de dados usado nas aplicações:
```shell
docker-compose up
```
* Crie dois bancos de dados com os com os nomes "connect" e "payment-connect".
* Acesse o diretorio da primeira aplicação (cliente-api) e execute os comandos abaixo:
```shell
cd cliente-api
npm install
npm run prisma:migrate
npm run prisma:generate
npm start
```
* Volte para o diretório principal e faça o mesmo para a segunda aplicação (pagamento-api)
```shell
cd ..
cd pagamento-api
npm install
npm run prisma:migrate
npm run prisma:generate
npm start
```
* Pronto as duas APIs já estão prontas para receberem requisições.

## Observaçoes:

* Para a API de cliente os end-point de login e criação de cliente estão publicos, porem todos os outros
será necessário utilizar o token JWT para ter acesso.
* A API de cliente está integrada com a API de pagamentos, sendo possivel salvar uma transação e um cartão pela 
chamada pela API de cliente.
