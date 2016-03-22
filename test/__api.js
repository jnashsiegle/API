var expect = require('expect');  //loads up the expect module installed via npm
var request = require('supertest');  //overwriting supertest as a var with a var called request

describe('API', function(){
	var server;

//lets reconfigure our server each time automatically so it is brand new before each test
	beforeEach(function(){
		server = require('../src/server.js');  //loads up server.js file
	});
	afterEach(function(){
		server.close();
	});

	it('/ should return specified object.', function testHealth(done){
		request(server)
		.get('/api/')
		.set('Accept', 'application/json') //set headers to accept json
		.expect('Content-Type', /json/)
		.expect(200, {hello: "world. Welcome to my API"}, done);
	});

	it('/status should return specified healthy:true.', function testHealth(done){
		request(server)
		.get('/api/status')
		.set('Accept', 'application/json') //set headers to accept json
		.expect('Content-Type', /json/)
		.expect(200, {healthy: true}, done);
	});
	it('/user/id should return a user obj with id.', function testHealth(done){		
		var fakeUserID = 374; 
		request(server)		
		.get('/api/user/' + fakeUserID)
		.set('Accept', 'application/json')
		.expect('Content-Type', /json/)
		.expect(200, { user: {id: fakeUserID}} ,done);
	});
	it('/ should return specified object.', function testHealth(done){
		request(server)
		.get('/api/v1')
		.set('Accept', 'application/json') //set headers to accept json
		.expect('Content-Type', /json/)
		.expect(200, {hello: "world to v1"}, done);
	});
});