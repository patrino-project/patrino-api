# Patrino API
API do Projeto Patrino

## Descrição da API

## Rota #1: Listando mães cadastradas
GET /mothers

Resposta

Lista de mães cadastradas no aplicativo

## Rota $2: Realizando login na aplicação
POST /mothers/login/

Parâmetros 

email e password

Resposta

{"message": "OK", "code": usercode }

{"message": "ERROR"}

## Rota #3: Criando um novo usuário
POST /mothers/

Paràmetros

name
email 
password 
phone 
address 
createdAt 
modifiedAt

Resposta

{"message": "OK"}

{"message": "ERROR"}

## Rota #4: Deletando um novo usuário
DELETE /mothers/

Parâmetros 

email

Resposta

{"message": "OK"}

{"message": "ERROR"}

## Rota #5: Atualizando usuário
PUT /mothers/

Parâmetros 

name
password 
phone 
address 

Resposta

{"message": "OK"}

{"message": "ERROR"}
