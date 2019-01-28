const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const mysql = require('mysql');
app.use(express.static(path.join(__dirname, 'dist/my-material-app')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const bcrypt = require('bcrypt');
const saltRounds = 10;
const pool = mysql.createPool({
	connectionLimit: 100,
	host: "127.0.0.1",
	user: "root",
	password: "1234",
	database: "testdb"
});

// login
app.post('/api/login', (req, res) => {
	console.log('dffdgdgdf');
	console.log(JSON.stringify(req.headers));
	user = req.body;
	check = false;
	pool.getConnection(function (err, connection) {
		if (err) {
			res.json(check);
			throw err;
		} else {
			sql = "select password from login where username = " + connection.escape(user['username']);
			connection.query(sql, function (err, result, fields) {
				if (err) {
					res.json(check);
					throw err;
				} else {
					if (result.length == 1) {
						myPromise = comparePass(bcrypt, user['password'], result[0].password);
						myPromise.then(function (check) {
							console.log("check  promise: ", check);
							this.check = check;
							res.json(check);
						});
					}
					else {
						res.json(check);
					}
				}
				connection.release();
			});
		}
	});
})
// create user
app.post('/api/create-user', (req, res) => {
	user = req.body;
	check = false;
	bcrypt.hash(user['password'], saltRounds, function (err, hash) {
		if (err) {
			res.json(check);
			throw err;
		}
		else {
			user['password'] = hash;
			pool.getConnection(function (err, connection) {
				if (err) {
					throw err;
				} else {
					sql = "select * from login where username = " + connection.escape(user['username']);
					query = connection.query(sql, function (err, results,fields) {
						if (err) {
							throw err;
						} else {
							console.log("results: " + results.length);
							if (results.length < 1) {
								// check = true;
								connection.beginTransaction(function (err) {
									console.log("begin transaction");
									if (err) {
										callback(connection, res, err);
									} else {
										sql = 'INSERT INTO login set ? ';
										query = connection.query(sql, user, function (err, results, fields) {
											if (err) {
												callback(connection, res, err);
											} else {
												connection.commit(function (err) {
													if (err) {
														callback(connection, res, err);
													} else {
														check = true;
														connection.release();
														console.log("insert successful");
														res.json(check);
													}
												});
											}
										});
									}
								});
							} else {
								res.json(check);
							}

						}
					});
					console.log(query.sql);
				}
			});



			// pool.getConnection(function (err, connection) {
			// 	if (err) {
			// 		res.json(check);
			// 		throw err;
			// 	} else {
			// 		connection.beginTransaction(function (err) {
			// 			console.log("begin transaction");
			// 			if (err) {
			// 				callback(connection, res, err);
			// 			} else {
			// 				sql = 'INSERT INTO login set ? ';
			// 				query = connection.query(sql, user, function (err, results, fields) {
			// 					if (err) {
			// 						callback(connection, res, err);
			// 					} else {
			// 						connection.commit(function (err) {
			// 							if (err) {
			// 								callback(connection, res, err);
			// 							} else {
			// 								check = true;
			// 								connection.release();
			// 								console.log("insert successful");
			// 								res.json(check);
			// 							}
			// 						});
			// 					}
			// 				});
			// 			}
			// 		});
			// 	}
			// });


		}
	});

});

function isExistUsername(username) {
	check = false;
	pool.getConnection(function (err, connection) {
		if (err) {
			throw err;
		} else {
			sql = "select username from login where username = " + connection.escape(username);
			query = connection.query(sql, function (err, results) {
				if (err) {
					throw err;
				} else {
					if (results.length == 1) {
						check = true;
					}
					return check;
				}
			});
			console.log(query.sql);
		}
	});
}

// update user
app.post('/api/update-user', (req, res) => {
	user = req.body;
	pool.getConnection(function (err, connection) {
		if (err) {
			res.json(check);
			throw err;
		} else {
			connection.beginTransaction(function (err) {
				console.log("begin transaction");
				if (err) {
					callback(connection, res, err);
				} else {
					sql = 'UPDATE login set address = ? , phone = ?  where username = ?';
					query = connection.query(sql, [user['address'], user['phone'], user['username']], function (err, results, fields) {
						if (err) {
							callback(connection, res, err);
						} else {
							connection.commit(function (err) {
								if (err) {
									callback(connection, res, err);
								} else {
									check = true;
									connection.release();
									console.log("insert successful");
									res.json(check);
								}
							});
						}
					});
					console.log(query.sql);
				}
			});
		}
	});
});

app.post('/api/users', (req, res) => {
	username = req.body;
	console.log(username['username']);
	check = false;
	pool.getConnection(function (err, connection) {
		if (err) {
			res.json(check);
			throw err;
		} else {
			sql = "select username from login where username = " + connection.escape(username['username']);
			query = connection.query(sql, function (err, results) {
				if (err) {
					res.json(check);
					throw err;
				} else {
					if (results.length == 1) {
						check = true;
					}
					console.log("Run server:" + check);
					res.json(check);
				}
			});
			console.log(query.sql);
		}
	});
});
app.post('/api/get-user', (req, res) => {
	console.log("gfdgfd");
	username = req.body;
	console.log(username['username']);
	user = [];
	pool.getConnection(function (err, connection) {
		if (err) {
			res.json(user);
			throw err;
		} else {
			sql = "select * from login where username = " + connection.escape(username['username']);
			query = connection.query(sql, function (err, results) {
				if (err) {
					res.json(user);
					throw err;
				} else {
					if (results.length == 1) {
						user = results;
					}
					console.log("Run server:" + user);
					res.json(user);
				}
			});
			console.log(query.sql);
		}
	});
});


app.get('/api/user-list', (req, res) => {
	console.log("user-list");
	users = [];
	pool.getConnection(function (err, connection) {
		if (err) {
			res.json(users);
			throw err;
		} else {
			sql = "select * from login";
			query = connection.query(sql, function (err, results) {
				if (err) {
					res.json(users);
					throw err;
				} else {
					res.json(results);
				}
			});
			console.log(query.sql);

		}

	})
})

app.delete('/api/delete-user', (req, res) => {
	console.log(req.originalUrl);
	params = req.query.username;
	check = false;
	if (params && params.length > 0) {
		pool.getConnection(function (err, connection) {
			if (err) {
				res.json(check);
				throw err;
			} else {
				connection.beginTransaction(function (err) {
					if (err) {
						callback(connection, res, err);
					} else {
						sql = "delete from login where username = " + connection.escape(params);
						query = connection.query(sql, function (err, result, fields) {

							if (err) {
								callback(connection, res, err);
							} else {
								connection.commit(function (err) {
									if (err) {
										callback(connection, res, err);
									} else {
										check = true;
										connection.release;
										res.json(check);
									}
								})

							}
						});


					}
				})
			}

		});
	} else {
		res.json(check);
	}
})



app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, 'dist/my-material-app/index.html'))
});
app.listen(4600, (req, res) => {
	console.log("RUNING 4600");
});

function comparePass(bcrypt, password, passwordUser) {
	return new Promise(function (resolve, reject) {
		bcrypt.compare(password, passwordUser, function (err, resultMatchPassword) {
			if (resultMatchPassword == true) {
				resolve(true);
			} else {
				resolve(false);
			}
			if (err) reject(err);
		});

	});
}

function createPasswordHash(bcrypt, plaintextPassword, saltRounds) {
	console.log(bcrypt);
	return new Promise(function (resolve, reject) {
		bcrypt.hash(plaintextPassword, saltRounds, function (err, hash) {
			console.log("hasjh");
			if (err) reject(err);
			else {
				resolve(hash);
			}

		});
	});
}

function callback(connection, res, err) {
	connection.rollback(function () {
		console.log("callback");
		connection.release();
		res.json(false);
		throw err;
	});
}