var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

app.use(express.static(__dirname+'/client'));
app.use(bodyParser.json());


List = require('./models/list');

mongoose.connect('mongodb://127.0.0.1/listDB');
var db = mongoose.connection;


//http requests
//Requests homepage and calls function
app.get('/', function (req, res) {
    res.send('Please use API yo yo');
} );

app.get('/api/list', function (req, res){
    List.getList(function(err, allReadingList){
    	if(err){
    		throw err;
    	}
    	res.json(allReadingList);
    });
} );

app.get('/api/list/:_id', function (req, res){
    List.getItemByID(req.params._id, function(err, readingList){
    	if(err){
    		throw err;
    	}

    	res.json(readingList);
    });
} );

app.post('/api/list', function (req, res){
	var item_id = req.body;
    List.addListItem(item_id, function(err, item){
    	if(err){
    		throw err;
    	}
    	res.json(item);
    });
} );

app.put('/api/list/:_id', function (req, res){
	var id = req.params._id;
	var item_id = req.body;
    List.updateListItem(id, item_id, {}, function(err, item){
    	if(err){
    		throw err;
    	}
    	res.json(item);
    });
} );

app.delete('/api/list/:_id', function (req, res){
	var id = req.params._id;
    List.deleteListItem(id, function(err, item){
    	if(err){
    		throw err;
    	}
    	res.json(item);
    });
} );



app.listen(3000);
console.log('Running on port 3000...');