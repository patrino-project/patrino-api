
const chai = require("chai");
var request = require("request");

const assert = chai.assert;

const URL = "http://localhost:3000";

describe("TDD de Operações do Modelo Mãe", () => {
  it("Teste: Deve retornar messagem de sucesso na listagem de mães", (done) => {
    request.get(
      {
        url : URL + "/users/"
      },
      function(error, response, body){

        assert.equal(response.statusCode, 200);

        done();
      }
    );
  });

  it("Teste: Deve retornar messagem de sucesso quando entrar no aplicativo", (done) => {

    var options = {
      uri: URL + "/login/",
      method: 'POST',
      json: {
        "email": "paulo@gmail.com",
        "password": "paulo"
      }
    };

    request(
      options,
      function(error, response, body){

        // precisamos converter o retorno para um objeto json
        var _body = {};
        try{
          _body = JSON.parse(body);
        }
        catch(e){
          _body = {};
        }

        assert.equal(response.statusCode, 200);

        done();
      }
    );
  });

  it("Teste: Deve retornar messagem de sucesso quando criar um novo usuário no aplicativo", (done) => {

    var options = {
      uri: URL + "/users/",
      method: 'POST',
      json: {
        "name": "Jane Doe",
        "email": "janedoee@gmail.com",
        "password": "jane"
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

});
