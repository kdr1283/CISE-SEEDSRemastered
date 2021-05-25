const mongoose = require("mongoose");

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
      await mongoose.connect(
        process.env.MONGO_URI,
        { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, useFindAndModify: true },
        (err) => {
          if (err) {
            console.error(err);
            process.exit(1);
          }
        }
      );
    });
  });