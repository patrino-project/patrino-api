
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

});
