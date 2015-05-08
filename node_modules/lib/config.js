var configs = { 

	production:{
		port: 3000,
		db: {
			uri: 'mongodb://localhost:27017/ezpos',
			options: { server: { socketOptions: {keepAlive: 1} } }
		},
		crudApiRoot: ''
	},

	development:{
		port: 4000,
		db: {
			uri: 'mongodb://localhost:27017/ezpos_test',
			options: { server: { socketOptions: {keepAlive: 1} } }
		},
		crudApiRoot: ''
	}
};

module.exports = configs[ process.env.NODE_ENV || 'production' ];
