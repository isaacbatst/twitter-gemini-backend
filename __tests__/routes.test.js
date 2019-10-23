const request = require("supertest");
const server = require("../src/server").listen(3001);

beforeAll(async () => {
  console.log("Beginning the tests");
});

describe("Testing Tweets routes", () => {
  it("should get 200 code", async () => {
    const res = await request(server).get("/api/v1/Tweets");
    expect(res.statusCode).toEqual(200);
  });
  it("should create a tweet and return 200", async () => {
    const res = await request(server)
      .post("/api/v1/Tweets")
      .send({
        message: "test tweet",
        favorite: false
      });
    expect(res.statusCode).toEqual(200);
  });
  it("should get a tweet and 200 code", async () => {
    const res = await request(server).get("/api/v1/Tweets/1");
    expect(res.statusCode).toEqual(200);
  });

  it("should update tweet and a get 200 code", async () => {
    const res = await request(server)
      .put("/api/v1/Tweets/1")
      .send({
        message: "Updating tweet",
        favorite: true
      });
    expect(res.statusCode).toEqual(200);
    expect(res.body.favorite).toEqual(true);
    expect(res.body.message).toMatch(/Updating tweet/);
  });
  it("should delete the tweet and a get 200 code", async () => {
    const res = await request(server).delete("/api/v1/Tweets/1");
    expect(res.statusCode).toEqual(204);
  });
});
