/* eslint-disable no-undef */
import request from "supertest";
import app from "../app";
const db = require("../util/testing.db");

beforeAll(async () => await db.connect());
afterEach(async () => await db.clearDatabase());
afterAll(async () => await db.closeDatabase());

describe("Test the root path", () => {
	describe("GET /", () => {
		it("should return 200 OK & Welcome text", async () => {
			const response = await request(app).get("/");
			expect(response.status).toBe(200);
			expect(response.text).toBe("Travel Planning System");
		});
	});
});

describe("Test the Sample API", () => {
	describe("Sample CRUD", () => {
		it("GET / --> Get all samples", async () => {
			const response = await request(app).get("/sample").set("Accept", "application/json");

			// Check response status is 201
			expect(response.status).toBe(201);

			// Check response is an array
			expect(Array.isArray(response.body)).toBe(true);
		});

		it("POST / --> Insert one sample", async () => {
			const response = await request(app)
				.post("/sample")
				.send({
					title: "Sample 1",
					content: "This is a sample",
				})
				.set("Accept", "application/json");

			// Check response status is 201
			expect(response.status).toBe(201);

			// Check response is an object
			expect(typeof response.body).toBe("object");

			// Check response has the correct properties
			expect(response.body.title).toBe("Sample 1");
			expect(response.body.content).toBe("This is a sample");
		});

		it("GET /:id --> Get one sample", async () => {
			const response = await request(app)
				.post("/sample")
				.send({
					title: "Sample 2",
					content: "This is a sample 2",
				})
				.set("Accept", "application/json");

			const response2 = await request(app).get(`/sample/${response.body._id}`).set("Accept", "application/json");

			// Check response status is 201
			expect(response2.status).toBe(201);

			// Check response is an object
			expect(typeof response2.body).toBe("object");

			// Check response has the correct properties
			expect(response.body.title).toBe("Sample 2");
			expect(response.body.content).toBe("This is a sample 2");
		});

		it("PUT /:id --> Update one sample", async () => {
			const response = await request(app)
				.post("/sample")
				.send({
					title: "Sample 3",
					content: "This is a sample 3",
				})
				.set("Accept", "application/json");

			const response2 = await request(app)
				.put(`/sample/${response.body._id}`)
				.send({
					title: "Sample 3 - Updated",
					content: "This is a sample 3 - Updated",
				})
				.set("Accept", "application/json");

			// Check response status is 201
			expect(response2.status).toBe(201);

			// Check response is an object
			expect(typeof response2.body).toBe("object");

			// Check response has the correct properties
			expect(response2.body.title).toBe("Sample 3 - Updated");
			expect(response2.body.content).toBe("This is a sample 3 - Updated");
		});

		it("DELETE /:id --> Delete one sample", async () => {
			const response = await request(app)
				.post("/sample")
				.send({
					title: "Sample 4",
					content: "This is a sample 4",
				})
				.set("Accept", "application/json");

			const response2 = await request(app).delete(`/sample/${response.body._id}`).set("Accept", "application/json");

			const response3 = await request(app).get(`/sample/${response.body._id}`).set("Accept", "application/json");

			// Check response status is 201
			expect(response2.status).toBe(201);

			// Check response is an object
			expect(typeof response2.body).toBe("object");

			// Check response has the correct properties
			expect(response2.body.title).toBe("Sample 4");

			// Check response is empty
			expect(response3.body.details).toBe("Sample not found");
		});

		it("GET /search/:title --> Search for a sample by title", async () => {
			const response = await request(app)
				.post("/sample")
				.send({
					title: "Sample 4",
					content: "This is a sample 4",
				})
				.set("Accept", "application/json");

			await request(app).post("/sample").send({
				title: "Sample 5",
				content: "This is a sample 5",
			});

			const response2 = await request(app)
				.get(`/sample/search/${response.body.title}`)
				.set("Accept", "application/json");

			// Check response status is 201
			expect(response2.status).toBe(201);

			// Check response is an array
			expect(Array.isArray(response2.body)).toBe(true);

			// Array should have one element
			expect(response2.body.length).toBe(1);

			// Check inserted sample is in the array
			expect(response2.body.find((sample) => sample._id === response.body._id)).toBeDefined();
		});
	});

	describe("Sample Error Handling", () => {
		it("GET /:id --> Get one sample - Sample not found", async () => {
			const response = await request(app).get("/sample/625b07b3f3c87ae4f3dd3705").set("Accept", "application/json");

			// Check response status is 400
			expect(response.status).toBe(400);

			// Check response is an object
			expect(typeof response.body).toBe("object");

			// Check response has the correct properties
			expect(response.body.details).toBe("Sample not found");
		});

		it("PUT /:id --> Update one sample - Sample not found", async () => {
			const response = await request(app)
				.put("/sample/625b07b3f3c87ae4f3dd3705")
				.send({
					title: "Sample 4",
					content: "This is a sample 4",
				})
				.set("Accept", "application/json");

			// Check response status is 400
			expect(response.status).toBe(400);

			// Check response is an object
			expect(typeof response.body).toBe("object");

			// Check response has the correct properties
			expect(response.body.details).toBe("Sample not found");
		});
	});
});
