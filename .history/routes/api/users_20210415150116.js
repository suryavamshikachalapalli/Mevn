
const express  = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs')
const passport = require('passport')
const jwt = require('jsonwebtoken'); 


/**
 * required modules 
 */
const User = require('../../model/User')
const key = require('../../config/keys').secret


/** 
 * @ POST Methods 
 * */

/**
 * REGISTRATION
 * PUBLIC ROUTE
 */
 router.post('/register',  (req,res)=>{
	 console.log("POST Registration")
	const { username,password,retype_password,company,industry,hear,email,phone,track,coupon,uname,address,card} = req.body
    /** Validations */
	if(password !== retype_password){  /** Validation 1: password matching */
		return res.status(400).json({msg : "Password not matching"});
	}
	User.findOne({username : username})  /** Check for username existing or not */
	.then(user => {
		if(user){
			return res.status(400).json({msg : "Username already existing"});
		}
	})
	User.findOne({email : email})  /** Check for email existing or not */
	.then(user => {
		if(user){
			return res.status(400).json({msg : "Email already in use"});
		}
	})
	const newUser = new User ({  /** Create a DB instance */
		username,
		password,
		retype_password,
		company,
		industry,
		hear,
		email,
		phone,
		track,
		coupon,
		uname,
		address,
		card
	})
	bcrypt.genSalt(10, (err, salt) => {
		bcrypt.hash(newUser.password, salt ,(err,hash) => {
			if(err) throw err;
			
			newUser.password = hash; /** Sets passwords to hash */
			newUser.save()/** Save user to db */
			.then(user => {
				return res.status(200).json({
					success: true,
					msg: "User created successfully"
				});
			});
		 });
	 });

});

/**
 * LOGIN
 * PUBLIC ROUTE
 */

router.post('/login', (req,res) => {
	console.log("lOGIN")
	User.findOne({ username: req.body.username})
	.then(user => {
		if(!user){ /** check if user if existing or not */
			return res.status(404).json({msg : " user not found"})
			success : false
		}
		bcrypt.compare(req.body.password, user.password, (err,isMatch) => { /** comparing the user password */
			if(isMatch){
				const payload = {
					_id : user._id,
					username : user.username,
					email : user.email
				}
				jwt.sign(payload , key, {
					expiresIn : 10000000
				}, (err, token) =>{
					res.status(200).json({
						success: true,
						token : `Bearer ${token}`,
						user : user,
						msg : "Log-in successfully"
					})
				})			
			}else{
				return res.status(404).json({msg : "Invalid Password"})
                success : false
			}
		})
	})
})
/**
 * DASHBOARD (ACCESSED ONLY AFTER LOGIN)
 * PROTECTED ROUTE
 * 
 * 
 * 
 * router.get('/dashboard', passport.authenticate('jwt', {session : false}), (req,res) => {
	return res.json({user : req.user});

})
 */



module.exports = router;