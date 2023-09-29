function errorHandler404(req, res, next) {
	res.status(404).send({ msg: "Not Found" });
}

module.exports = errorHandler404;
