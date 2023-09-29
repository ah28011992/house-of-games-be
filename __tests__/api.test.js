const db = require("../db/connection");
const app = require("../app");
const seed = require("../db/seeds/seed.js");
const request = require("supertest");
const testData = require("../db/data/test-data");

beforeEach(() => seed(testData));
afterAll(() => db.end());

describe("House of Games API", () => {
	describe("GET /api/categories", () => {
		it("returns an array of category objects", () => {
			return request(app)
				.get("/api/categories")
				.expect(200)
				.then(({ body: { categories } }) => {
					expect(categories.length).toBe(4);
					categories.forEach((category) => {
						expect(typeof category.description).toBe("string");
						expect(typeof category.slug).toBe("string");
						expect(category).toMatchObject({
							description: expect.any(String),
							slug: expect.any(String),
						});
					});
				});
		});
		it("404: returns a error message 'Invalid request' when a bad request is made", () => {
			return request(app)
				.get("/api/categoriez")
				.expect(404)
				.then(({ body }) => {
					expect(body.msg).toBe("Not Found");
				});
		});
	});
	// psql errors
});
