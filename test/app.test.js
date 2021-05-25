require('dotenv').config({ path: "./config.env"});
const mongoose = require("mongoose");
const db = process.env.MONGO_URI;
const Article = require("../models/Article");

const articleData = {
  title: "test title",
  authors: "test author",
  year: "2008",
  practice: "TDD",
  claim: "Improve Code Quality",
  strength: "Strong"
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

    it("submit article successfully", async () => {
      const exampleArticle = new Article(articleData);
      const savedArticle = await exampleArticle.save();
      // Object Id should be defined when successfully saved to MongoDB.
      expect(savedArticle._id).toBeDefined();
      expect(savedArticle.title).toBe(exampleArticle.title);
      expect(savedArticle.authors).toBe(exampleArticle.authors);
      expect(savedArticle.year).toBe(exampleArticle.year);
      expect(savedArticle.practice).toBe(exampleArticle.practice);
      expect(savedArticle.claim).toBe(exampleArticle.claim);
      expect(savedArticle.strength).toBe(exampleArticle.strength);
    });

    it('submit article successfully, but the field not defined in article schema should be undefined', async () => {
      const exampleArticleWithInvalidField = new Article({ 
      title: "test title",
      authors: "test author",
      year: "2008",
      practice: "TDD",
      claim: "Improve Code Quality",
      strength: "Strong",
      doi: "10.1/100"
      });

      const savedArticleWithInvalidField = await exampleArticleWithInvalidField.save();
      expect(savedArticleWithInvalidField._id).toBeDefined();
      expect(savedArticleWithInvalidField.doi).toBeUndefined();
    }); 
    
    afterAll(async done => {
      mongoose.disconnect();
      done();
    })
  });