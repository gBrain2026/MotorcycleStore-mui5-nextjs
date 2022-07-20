const env = require('dotenv');

var users = [
	{
		id: Date.now(),
		username: 'piglet',
		email: 'piglet@gmail.com',
		password: 'node street',
	},

	{
		id: Date.now()+1,
		username: 'smartdev',
		email: 'smartdev@gmail.com',
		password: 'express street',
	},

	{
		id: Date.now()+1,
		username: 'David',
		email: 'fli.dreamDev@gmail.com',
		password: 'express street',
	}
]
exports.getList = (req, res, next) => {
	res.send(users);
};

exports.getOne = (req, res, next) => {
	res.send(users.find(user=>user.id==req.params.id));
};

exports.getUser = (req, res, next) => {
	res.send(users.find(user=>user.email==req.params.email));
};

exports.getUser12 = (req, res, next) => {
	let user = users.find(user=>user.email==req.params.email)
		if(user){
			if(user.password == req.params.password)
				res.send({ username:user.username, email:user.email })
			else res.send('wrong password!')
		}
		else res.send('not exist!')
	
};

exports.createOne = (req, res, next) => {
	let newUser = {...req.body};
	if ( newUser.id )
	{
		let index = users.findIndex(user=>user.id==newUser.id);
		users[index] = newUser;
	}
	else
	{
		newUser.id = Date.now();
		users.push(newUser);
	}
	res.send(newUser);
};

exports.delete = (req, res, next) => {
	users = users.filter(user=>req.params.ids.split(',').findIndex(id=>id==user.id)==-1);
	res.send(users);
};