# Patrino API
API do Projeto Patrino

## Descrição da API

## Rota: Listando mães cadastradas
Método GET

Rota /mother

Retorno
Lista de mães cadastradas no aplicativo

## Rota: Realizando login na aplicação
Método POST

Rota /mothers/login/

Parametros 
JSON
email
password

Retorno
{"message": "OK", "code": usercode }
{"message": "ERROR"}

## Rota: Criando um novo usuário
Método POST

Rota /mothers/

Parametros 
JSON
name
email 
password 
phone 
address 
createdAt 
modifiedAt

Retorno
{"message": "OK"}
{"message": "ERROR"}

## Rota: Deletando um novo usuário
Método DELETE

Rota /mothers/

Parametros 
JSON
email

Retorno
{"message": "OK"}
{"message": "ERROR"}

## Rota: Atualizando usuário
Método PUT

Rota /mothers/

Parametros 
JSON
name
password 
phone 
address 

Retorno
{"message": "OK"}
{"message": "ERROR"}
