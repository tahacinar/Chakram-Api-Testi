const chakram = require('chakram'),
    expect = chakram.expect;

describe("User Tests", function () {

    it("GET /v2/user/{userName}", function () {
        const response = chakram.get("https://petstore.swagger.io/v2/user/tahacinar");
        expect(response).to.have.status(200);
        return chakram.wait();
    });

    it("GET /v2/user/logout", function () {
        const response = chakram.get("https://petstore.swagger.io/v2/user/logout");
        expect(response).to.have.status(200);
        return chakram.wait();
    });

    it("GET /v2/user/login", function () {
        const response = chakram.get("https://petstore.swagger.io/v2/user/login?username=tahacinar&password=tahacinar");
        expect(response).to.have.status(200);
        return chakram.wait();
    });

    
    it("POST /v2/user userCreate", function () {
        const data = {
            "id": 7267846,
            "username": "tahacinar",
            "firstName": "taha",
            "lastName": "cinar",
            "email": "tahacinar@outlook.com.tr",
            "password": "tahacinar",
            "phone": "5355353535",
            "userStatus": 0
          };

          const resData = {
            "code": 200,
            "type": "unknown",
            "message": "7267846"
          };

        const response = chakram.post("https://petstore.swagger.io/v2/user", data);
        
        return response.then(function (res){
            // console.log(res.body);
            expect(res).to.have.status(200);
            expect(res).to.have.json(resData);
        })
    });

    it("PUT /v2/user userUpdate", function () {
        const data = {
            "id": 7267846,
            "username": "tahacinar1",
            "firstName": "taha",
            "lastName": "cinar",
            "email": "tahacinar@outlook.com.tr",
            "password": "tahacinar1",
            "phone": "53553535353535",
            "userStatus": 0
          };

        const response = chakram.put("https://petstore.swagger.io/v2/user/tahacinar", data);
        
        return response.then(function (res){
            // console.log(res.body);
            expect(res).to.have.status(200);
        })
    });

    it("DELETE /v2/user/{username}", function () {
        const response = chakram.delete("https://petstore.swagger.io/v2/user/tahacinar");
        expect(response).to.have.status(200);
        return chakram.wait();
    });


});