const chai = require("chai");
var request = require("request");

const assert = chai.assert;

const URL = "http://localhost:3000";

describe("TDD de Operações do Modelo Atendente", () => {
  it("Teste: Deve retornar messagem de sucesso quando entrar no aplicativo", (done) => {

    var options = {
      uri: URL + "/attendants/login/",
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

});
