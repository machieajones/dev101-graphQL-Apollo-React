const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BlogSchema = new Schema({
	title: {
		type: String,
		required: true
	},
	author: String,
	body: String,
	date: {
		type: Date,
		default: Date.now
	},
});

module.exports = mongoose.model('Blog', BlogSchema);