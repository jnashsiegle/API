var express = require('express');  //load up express
var body_parser = require('body-parser');
var app = express();  //call app express

//Configuration

var port = 3000;

/*app.get('/howdy', function(req, res){
	res.json ({hello: 'world'});
});    lets change the routing -> keeping for reference */

app.use('/api', require('../routes/api.js')(express)); //as api is required we need to pass with it the express object as it will be needed and accessible
// note above be sure to go up two directories as we are calling this out of src

var server = app.listen(port, function(){   //listening to port number defined above
console.log('Server active on', port);
});

module.exports = server;
 
