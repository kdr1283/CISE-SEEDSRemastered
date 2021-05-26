require('dotenv').config({ path: "./config.env"});
const mongoose = require("mongoose");
const db = process.env.MONGO_URI;
const Article = require("../models/Article");

const articleData = {
  title: "An experimental evaluation of test driven development vs. test-last development with industry professionals.",
  authors: "Munir, Hussan and Wnuk, Krzysztof and Petersen, Kai and Moayyed, Misagh",
  year: "2014",
  practice: "TDD",
  claim: "Improve Team Confidence and Satisfication",
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

    it("tests article record has the field '_id' with the type ObjectID", async () => {
      const exampleArticle = new Article(articleData);

      expect(exampleArticle._id instanceof mongoose.Types.ObjectId).toBe(true);
    });

    it("submit article successfully", async () => {
      const exampleArticle = new Article(articleData);
      const savedArticle = await exampleArticle.save();
      const id = savedArticle._id;
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
      title: "An experimental evaluation of test driven development vs. test-last development with industry professionals.",
      authors: "Munir, Hussan and Wnuk, Krzysztof and Petersen, Kai and Moayyed, Misagh",
      year: "2014",
      practice: "TDD",
      claim: "Improve Team Confidence and Satisfication",
      strength: "Strong",
      doi: "10.1/100" // the invalid field
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