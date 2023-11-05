# Função Lambda de Geração de Token JWT

Esta função AWS Lambda é responsável por gerar tokens JWT que são usados para autenticar e autorizar usuários em uma API de lanchonete.

## Funcionalidade

A função pode ser invocada via AWS API Gateway. Quando chamada, a função pode receber um CPF (taxId) no corpo da requisição. Se nenhum CPF for fornecido, um token sem CPF será gerado.

## Requisitos

- Node.js 18.x
- NPM ou Yarn para gerenciar pacotes Node.js
- AWS CLI configurado com as credenciais apropriadas
- Permissões IAM para criar e gerenciar funções Lambda e API Gateway

## Configuração Local

1. Clone o repositório para a sua máquina local.
2. Instale as dependências com `npm install`.

## Variáveis de Ambiente

- `AUTH_SECRET_KEY`: Uma chave secreta usada para assinar o token JWT.

## Deploy

O deploy é realizado automaticamente via GitHub Actions quando um push é feito para a branch `main`.

## Uso

Para invocar a função via API Gateway:

```
POST /order/init
Content-Type: application/json

Body: { "taxId": "00000000000" }
```

A função retornará um token JWT que pode ser usado para autenticar solicitações a API da lanchonete.