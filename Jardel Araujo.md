Desenvolvi o projeto usando duas frameworks, laravel e node.js, ambos diretório identificado.
Api referente ao cliente esta desenvolvida com node, a base de dados esta em Mysql, para iniciar o servidor é preciso abrir o diretório referente a o node.js executar terminal com o comando ‘npm start’, abaixo irei listar todas as rotas.
POST:  http://localhost:3000/cadastrarCliente
GET: http://localhost:3000/visualizarCliente
PATCH: http://localhost:3000/atualizarCliente/{  ID cadastrado }
DELETE: http://localhost:3000/deletarCliente/{ ID cadastrado }

Api referente ao pagamento estar em laravel, a base de dados que estou enviando no diretório SQL contemplar tanto a tabela do cliente quanto do pagamento, para rodar o servidor laravel, precisar abrir o diretório, rodar o comando ‘php artisan serve’, abaixo irei listar todas as rotas.
POST: http://localhost:8000/api/criarPagamento
GET: http://localhost:8000/api/consultarPagamento
DELETE: http://localhost:8000/api/apagarPagamento/{ ID cadastrado }
PATCH: http://localhost:8000/api/atualizarPagamento/{ ID cadastrado }

Ambos precisar estar em um servidor de banco de dados com os seguintes parâmetro de conexão:
Host: localhost
Porta:3306
Database: cannect
User: root
Password:
Ou no laravel trocar os dados de acesso do banco no arquivo .env que se encontrar na raiz do projeto, no node.js no diretório config o arquivo db.js.

Estou a disposição para qualquer dúvida abraços!
