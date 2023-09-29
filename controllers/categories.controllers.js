const { fetchCategories } = require("../models/categories.models");

exports.getCategories = (req, res, next) => {
	fetchCategories().then((categories) => {
		return res.status(200).send({ categories: categories });
	}).catch((err) => next(err));
};
