const request = require("supertest");
const app = require("../src/index");

describe("GET /", () => {
  test("should return a 200 status code", async () => {
    const response = await request(app).get("/");

    expect(response.statusCode).toBe(200)
  });
});
