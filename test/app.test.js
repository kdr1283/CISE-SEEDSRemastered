require('dotenv').config({ path: "./config.env"});
const mongoose = require("mongoose");
const db = process.env.MONGO_URI;
const Article = require("../models/Article");

const articleData = {
  title: "test title",
  authors: "test author",
  year: "2008",
  practice: "TDD",
  claim: "Improve Code Quaity",
  strength: "Strong",
};

test("adds 2 + 2 to equal 4", () => {
  expect(2 + 2).toBe(4);
})

describe("Article Model Test", () => {
    beforeAll(async () => {
      await mongoose.connect(db, { 
        useNewUrlParser: true,
        useFindAndModify: true,
        useUnifiedTopology: true,
        useCreateIndex: true
      });
    });

    test("adds 3 + 3 to equal 6, if this test passes then successful connection to MongoDB", () => {
      expect(3 + 3).toBe(6);
    })

    afterAll(async done => {
      mongoose.disconnect();
      done();
    })
  });