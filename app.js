const express = require("express");
const { getCategories } = require("./controllers/categories.controllers");
const errorHandler404 = require("./errorHandling/404handler");
const {
	handleServerErrors,
	handleCustomErrors,
} = require("./errorHandling/index");
const app = express();

app.use(handleCustomErrors);
app.use(handleServerErrors);

app.get("/api/categories", getCategories);

app.use("*", errorHandler404);

module.exports = app;
