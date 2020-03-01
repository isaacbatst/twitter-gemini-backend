const request = require("supertest");
const server = require("../src/");
beforeAll(async () => {
  console.log("Beginning the tests");
});

describe("Testing Tweets routes", () => {
  it("should create a tweet and return 200", async () => {
    const res = await createPost();
    expect(res.statusCode).toEqual(200);

    async function createPost() {
      try {
        return await request(server)
        .post("/api/v1/Tweets")
        .send({
          message: "test tweet",
          favorite: false
        })
      } catch (error) {
        return error
      }
    }
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
