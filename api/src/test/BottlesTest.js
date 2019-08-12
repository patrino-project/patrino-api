
const chai = require("chai");
var request = require("request");

const assert = chai.assert;

//const URL = "http://35.202.173.125";
const URL = "http://localhost:3000";

describe("TDD de Operações do Modelo de Requisições", () => {
  it("Teste: Deve retornar messagem de sucesso na criação de nova tentativa de doação", (done) => {
    var options = {
      uri: URL + "/bottles/",
      method: 'POST',
      json: {
        "mother": 2

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

}); /* end describe*/
