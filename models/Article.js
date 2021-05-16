const mongoose = require("mongoose");

const ArticleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  authors: {
    type: String,
    required: true
  },
  year: {
    type: Date,
    required: true
  },
  practice: {
    type: String,
    required: true
  },
  claim: {
    type: String,
    required: true
  },
  strength: {
    type: String,
    required: true
  }
});

module.exports = Article = mongoose.model('article', ArticleSchema);