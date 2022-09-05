const mongoose = require('mongoose');

const ArticleSchema = new mongoose.Schema({
    category: {
        type: String,
        required: true,
    },
    type: {
        type: String,
    },
    name: {
        type: String,
    },
    born: {
        type: Number,
    },
    died: {
        type: Number,
    },
    nationality: {
        type: String
    },
    knownFor: {
        type: String
    },
    notableWork: {
        type: String
    },
    about: {
        type: String
    }
});

const Article = mongoose.model("schooldb", ArticleSchema, 'articles');
module.exports = Article;