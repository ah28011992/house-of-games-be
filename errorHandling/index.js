function handleCustomErrors(err, req, res, next) {
	if (err.status && err.msg) {
		res.status(err.status).send({ msg: err.msg });
	} else {
		next(err);
	}
}

function handleServerErrors(err, req, res, next) {
	res.status(500).send({ msg: "Internal Server Error" });
}
module.exports = { handleCustomErrors, handleServerErrors };
