# Cannect Life - Teste Back-End

Olá caro desenvolvedor back-end, nesse teste analisaremos seu conhecimento geral, velocidade de desenvolvimento e padrões de projeto utilizados. Abaixo explicaremos tudo o que será necessário, lembrando que, tecnologias mais recentes, aumento de complexidade, foco em performance, serão pontos positivos na avaliação.

## Descrição do teste

Essa avaliação consiste em testar seus conhecimentos em Node e demais tecnologias back-end. Você será responsável por desenvolver uma solução completa de back-end, desde a modelagem do banco de dados, até a definição de arquitetura e os padrões.

O tempo ideal para realização da tarefa é de **4 dias**. Também consideramos que, se demorar pouco mais do que isso, mas entregar um projeto melhor estruturado e com tecnologias mais recentes, também será tão válido quanto o de 4 dias.

* Prazo ideal: 4 dias
* Prazo máximo: 7 dias

## O que você precisará fazer

A forma de entregar o projeto deve ser feita pelo GitHub, através do processo descrito abaixo:

* Clone este repositório para sua máquina.
* Crie uma branch com o nome *teste-back-end-SEUNOME*.
* Criar duas APIs que contemplem um CRUD completo (não esqueça de usar o padrão REST)
* As APIs são descritas abaixo
* O banco de dados pode ser usado Mysql ou qualquer outro banco de dados relacional, basta enviar no projeto o .sql completo para criação do banco
* Faça um commit da sua branch
* Dê um pull request da sua branch
* Avise-nos por e-mail que o pull request foi feito (ligiavalle@cannect.com.br)
* Entregar um arquivo md com um descritivo passo-a-passo (simples) de como executar a aplicação.

## APIs

API 1: Cliente:

Criar uma API que vai manter dados de um cliente, como este body:

```
{
    "nome": "Nome da Pessoa",
    "dataNascimento": "18/05/2000",
    "email": "emailteste@12345.com.br",
    "cpf": "00000000000",
    "endereco": {
        "rua": "Rua Dom Jose",
        "numero": "1234",
        "bairro": "Bairro Jd Tatira",
        "cidade": "São Paulo",
        "estado": "SP",
        "cep": "00000000"
    }
}
```

API 2: Pagamento:

Criar uma API que vai realizar dados de transação de compras de um cliente, como este body:

```
{
    "valor": 100.0,
    "cpf": "00000000000",
    "cartao": {
        "titular": "John Doe",
        "numero": "4111111111111111",
        "data_expiracao": "12/2018",
        "bandeira": "VISA",
        "cvv": "123"
    }
}
```

## Quais tecnologias você pode utilizar?

Você pode escolher uma ou mais tecnologias para a entrega. A utilização do Laravel com Lumen é um diferencial:

* Node;
* Rest (pré-requisito);
* Express/Adonis/Nest (caso decida fazer em Node)
* Mysql/PostgreSql/MariaDB

## O que será avaliado?

* Clareza do código
* Código comentado
* Conhecimento de OO
* Controle correto das rotas da aplicação
* Uso correto do Git
* Padrões de classe, atributos e métodos
* Testes Unitários (pode usar qualquer tecnologia).

## Pontos extras (diferencial)

Desejável mas não obrigatório

* Configurar o Swagger para termos acesso a documentação da API;
* Acesso aos endpoints das APIs através de Token;
* Entrega do projeto em Docker;
* Funcionalidades/tecnologias extras no geral serão sempre bem-vindas, desde que explicadas e bem codadas.

Caso tenha ficado alguma dúvida entre em contato com [ligiavalle@cannect.com.br](mailto:ligiavalle@cannect.com.br).

print ("Boa sorte!");
