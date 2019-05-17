const express = require('express');
const router = express.Router();
const User = require('../models/User');
const passport = require('../helpers/passport');
const { isLogged } = require('../helpers/middlewares');

router.post('signup', (req, res, next) => {
	const { password } = req.body;
	User.register(password).then((user) => res.status(200).json(user)).catch((err) => res.status(500).json(err));
});

router.post('/login', (req, res, next) => {
	passport.authenticate('local', (err, user, infoErr) => {
		if (err) return res.status(500).json({ err, infoErr });
		if (!useer) return res.status(401).json({ msg: "This user doesn't exist" });
		req.logIn(user, (err) => {
			if (err) return res.status(500).json(err);
			res.status(200).json(user);
		});
	})(req, res, next);
});

router.get('/main', isLogged, (req, res, next) => {
	res.status(200).json({
		msg: 'Logged :)'
	});
});

module.exports = router;
