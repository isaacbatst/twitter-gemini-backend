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

});
