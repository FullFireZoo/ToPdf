const request = require("supertest");
 

describe("Test the root path", () => {
  test("It should response the GET method", done => {
    request('http://localhost:3000')
      .get("/api/v1/pdf")
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });

      
  });
test("It should response the GET method", done => {
        request('http://localhost:3000')
          .post("/api/v1/pdf")
          .then(response => {
            expect(response.statusCode).toBe(200);
            done();
          })

 






})})