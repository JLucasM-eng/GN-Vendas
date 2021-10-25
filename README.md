

# GN-Vendas

Esta aplicação simula o funcionamento de um sistema de cadastro e venda de produtos. O projeto conta com os arquivos de backend e frontend.

## Pré-requisitos iniciais

* Antes de iniciar a aplicação, certifique-se de que você possui o banco de dados <a href="https://www.mysql.com/">MySql</a> instalado no seu computador.
* Tenha suas informações como usuário e senha em mãos para utiliza-las.
* Certifique-se de que as configurações de Hostname do seu banco de dados está configurado como o padrão 127.0.0.1 e Port como 3306.
* Crie um novo Schema no seu Banco de dados, com o nome que quiser (sugestão: gnvendas). Esse nome será usado posteriormente para conexão com a aplicação.
* Certifique-se também de que você possui o <a href="https://nodejs.org/en/">Node js</a> e o <a href="https://yarnpkg.com/">Yarn</a> instalado na sua maquina.

## Getting started

### Backend

Após clonar o repositório do projeto, navegue pelo terminal até a pasta `gnvendas`. Dentro dela, execute o seguinte comando:

```sh
yarn
```
Ainda dentro da pasta `gnvendas`, vá até a pasta `config.json` e altere as configurações do banco de dados (dentro do parametro development).

````json
"development": {
    "username": "root",
    "password": "SuaSenha",
    "database": "gnvendas",// Ou o nome do Schema que voce criou
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
````
Agora altere o arquivo `.env` da pasta `gnvendas`. Modificando as informações necessarias para conexão com o banco de dados, para a configuração do server backend e para integração com a api utilizada para geração dos boletos bancários <a href="https://dev.gerencianet.com.br/docs/gerar-boleto-bancario">*link</a>.

#### Criação das tabelas no BD

Para criação das tabelas, dentro da pasta `gnvendas` execute o comando:

```sh
npx sequelize db:migrate
```
Finalmente, inicie o servidor executando de dentro da pasta `gnvendas` o comando:

```sh
yarn dev
```

### FrontEnd

Pelo terminal, navegue até a pasta front-gnvendas. Estando nela, execute o seguinte comando:
```sh
yarn
```

Com todas as dependencias instaladas, excute o comando:

```sh
yarn start
```

 para iniciar a aplicação.

## Utilizando a aplicação

### Cadastro de produtos

Para cadastrar um novo produto, Vá para a página `Cadastrar produtos`, informe o nome e o valor do produto que deseja cadastrar, e pronto! O seu produto já será listado na página `Produtos`.

### Comprar produtos

Na página `Produtos`, clique no botão `Comprar` do produto que você deseja. Você será direcionado para um formulário de cadastro, onde você deverá informar o seu nome completo, telefone (DDD de dois digitos e 9° dígito opcional) e um cpf existente (apenas numeros). Ao clicar em `Finalizar compra`, será gerado um boleto com vencimento de 2 dias úteis após a compra.