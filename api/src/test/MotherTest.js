
const chai = require("chai");
var request = require("request");

const assert = chai.assert;

const URL = "http://localhost:3000";

describe("TDD de Operações do Modelo Mãe", () => {
  it("Teste: Deve retornar messagem de sucesso na listagem de mães", (done) => {
    request.get(
      {
        url : URL + "/mothers/"
      },
      function(error, response, body){

        assert.equal(response.statusCode, 200);

        done();
      }
    );
  });

  it("Teste: Deve retornar messagem de sucesso quando entrar no aplicativo", (done) => {

    var options = {
      uri: URL + "/mothers/login/",
      method: 'POST',
      json: {
        "email": "paulo@gmail.com",
        "password": "paulo"
      }
    };

    request(
      options,
      function(error, response, body){

        assert.equal(response.statusCode, 200);

        done();
      }
    );
  });

  it("Teste: Deve retornar messagem de sucesso quando criar um novo usuário no aplicativo", (done) => {

    var options = {
      uri: URL + "/mothers/",
      method: 'POST',
      json: {
        "name": "Jane Doe",
        "email": "janedoe@gmail.com",
        "password": "jane"
      }
    };

    request(
      options,
      function(error, response, body){

        assert.equal(response.statusCode, 200);

        var options = {
          uri: URL + "/mothers/",
          method: 'DELETE',
          json: {
            "email": "janedoe@gmail.com"
          }
        };

        request(
          options
        );

        done();
      }
    );
  });


  it("Teste: Deve retornar messagem de sucesso quando deletar um novo usuário no aplicativo", (done) => {

    var options = {
      uri: URL + "/mothers/",
      method: 'POST',
      json: {
        "name": "Jane Doe",
        "email": "janedoe@gmail.com",
        "password": "jane"
      }
    };

    request(
      options,
      function(error, response, body){

        var options = {
          uri: URL + "/mothers/",
          method: 'DELETE',
          json: {
            "email": "janedoe@gmail.com"
          }
        };

        request(
          options,
          function(error, response, body) {

            assert.equal(response.statusCode, 200);

            done();
          }
        );
      }
    );
  });

  it("Teste: Deve retornar messagem de sucesso quando atualizar um novo usuário no aplicativo", (done) => {

    /*Criando usuário*/
    var options = {
      uri: URL + "/mothers/",
      method: 'POST',
      json: {
        "name": "Jane Doe",
        "email": "janedoe@gmail.com",
        "password": "jane"
      }
    };

    request(
      options,
      function(error, response, body){

        /*Atualizando*/
        var options = {
          uri: URL + "/mothers/",
          method: 'PUT',
          json: {
            "name" : "Eduardo",
            "email" : "janedoe@gmail.com",
          }
        };

        request(
          options,
          function(error, response, body) {

            assert.equal(response.statusCode, 200);

          }
        );

        /*Deletando usuário*/
        var options = {
          uri: URL + "/mothers/",
          method: 'DELETE',
          json: {
            "email" : "janedoe@gmail.com"
          }
        };

        request(
          options
        );

        done();

      }
    );
  });

});
