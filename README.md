
<a name="tabela-de-conteúdos"></a>

<h1 align="center">
  Motors shop API
</h1>

<p align = "center">
Comércio eletrônico de veículos: Compra e venda de carros e motos online
</p>

<p align="center">
  <a href="#sobre">Sobre</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <a href="#links">Links relevantes</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <a href="#techs">Techs</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <a href="#install">Intalação</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <a href="#devs">Desenvolvedores</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <a href="#terms">Termos</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</p>


<a name="sobre"></a>

## 1. Sobre

- O back-end do Motors Shop é responsável por gerenciar todas as operações relacionadas ao armazenamento e recuperação de dados dos veículos, usuários e transações realizadas no sistema. A arquitetura do back-end é composta por diversas camadas e componentes, que trabalham em conjunto para fornecer uma experiência confiável e eficiente aos usuários.

- No nível mais baixo, o back-end utiliza um banco de dados para armazenar os dados dos veículos e usuários. Esse banco de dados é acessado por uma camada de acesso a dados, que fornece uma interface padronizada para a manipulação dos dados. Além disso, a camada de acesso a dados também implementa recursos de cache para acelerar as operações de leitura e escrita.

- Acima da camada de acesso a dados, o back-end fornece um conjunto de serviços que encapsulam a lógica de negócios do sistema. Esses serviços incluem funcionalidades como cadastro de veículos, busca de veículos, autenticação de usuários e processamento de transações. Os serviços são expostos através de uma API RESTful, que permite a integração com outras aplicações e serviços.

- Para garantir a segurança e a escalabilidade do sistema, o back-end utiliza diversas técnicas e tecnologias avançadas. Por exemplo, o sistema implementa recursos de autenticação e autorização baseados em tokens JWT, que garantem a segurança das transações e protegem os dados dos usuários. Além disso, o sistema é projetado para ser altamente escalável, permitindo que ele possa lidar com um grande número de transações e usuários simultaneamente.

- Em resumo, o back-end do Motors Shop é uma plataforma robusta e confiável para o gerenciamento de dados e operações relacionadas à compra e venda de veículos. Com sua arquitetura escalável e segura, o sistema é capaz de lidar com um grande número de usuários e transações, proporcionando uma experiência eficiente e satisfatória aos usuários.

<a name="links"></a>

## 2. Links relevantes

- <a name="deploy-da-aplicação" href ="" target="_blank">Link da aplicação no vercel</a>

<a align="left" name="techs"></a>

## 3. Techs

Visão Geral das tecnologias usadas no projeto.

- [NodeJS](https://nodejs.org/en/)
- [Express](https://expressjs.com/pt-br/)
- [TypeScript](https://www.typescriptlang.org/)
- [PostgreSQL](https://www.postgresql.org/)
- [Prisma](https://www.prisma.io)
- [Yup](https://www.npmjs.com/package/yup)
- [Docker](https://docs.docker.com)
- [Aws-sdk](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html)
- [Bcryptjs](https://www.npmjs.com/package/bcryptjs)
- [Multer-s3](https://www.npmjs.com/package/multer-s3)
- [uuid-validate](https://www.npmjs.com/package/uuid-validate)
- [reflect-metadata](https://github.com/rbuckton/reflect-metadata)
- [pg](https://www.postgresql.org/docs/)
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
- [express-async-errors](https://expressjs.com/pt-br/)
- [dotenv](https://www.npmjs.com/package/dotenv)

<a name="install"></a>

## 4. Instalação e uso

### 4.1 Requisitos:
- NodeJs a partir da versão 16.14.1
- Gerenciador de pacotes yarn ou npm
- Banco de dados PostgreSQL

### 4.2 Instalação
4.2.1 - Crie um banco de dados chamado vibe_database no PostgreSQL
4.2.2 - Após o clone no repositório para adicionar todas as dependências do package json execute o comando: 
`yarn install` 

4.2.1 - Crie um arquivo na raiz do projeto chamado .env e faça as configurações das variáveis de ambiente com base no .env.example do projeto
```
DATABASE_URL="postgres://user:password@localhost:5432/postgres_db"  
SECRET_KEY=
```
4.2.2 - Para rodar projeto utilize o comando `yarn dev` no terminal, caso de tudo certo receberá uma mensagem parecida com essa:

```
[INFO] 17:23:18 ts-node-dev ver. 2.0.0 (using ts-node ver. 10.9.1, typescript ver. 4.8.4)
query: SELECT * FROM current_schema()
query: CREATE EXTENSION IF NOT EXISTS "uuid-ossp"
query: SELECT version();
Servidor executando.
```

<a name="devs"></a>

## 5. Desenvolvedores

[ Voltar para o topo ](#tabela-de-conteúdos)

- <a name="Gabriel-Fray" href="https://www.linkedin.com/in/gabrielfray/" target="_blank">Gabriel Fray</a>
- <a name="Tierry-Barros" href="https://www.linkedin.com/in/tierrybarros/" target="_blank">Tierry Barros</a>
- <a name="Lucas-Galvão" href="https://www.linkedin.com/in/galvs135/" target="_blank">Lucas Galvão</a>
- <a name="Vinícius-Moreira" href="https://www.linkedin.com/in/vinicius-moreira-henrique/" target="_blank">Vinícius Moreira</a>

<a name="terms"></a>

## 6. Termos de uso

Este é um projeto Open Source para fins educacionais e não comerciais, **Tipo de licença** - <a name="mit" href="https://opensource.org/licenses/MIT" target="_blank">MIT</a>
