var mongoose = require('mongoose');


var listSchema = mongoose.Schema({
	name:{
		type: String,
		required: true
	},
	theDate:{
		type: Date,
		default: Date.now
	},
	URL:{
		type: String,
		default: "null"
	},
	theDesc:{
		type: String,
		default: "null"
	}

});

var List = module.exports = mongoose.model('genres', listSchema);


//Get all reading list items
module.exports.getList = function(callback, limit){
	List.find(callback, limit).limit(limit);
}

//Get a single reading list item
module.exports.getItemByID = function(id, callback){
	List.findById(id, callback);
}

//Add reading item
module.exports.addListItem = function(item, callback){
	List.create(item, callback);
}

//Update reading item
module.exports.updateListItem = function(id, item, options, callback){
	var query  = {_id: id};
	var update = {
		name: item.name,
		theDesc: item.theDesc,
		URL: item.URL
	}
	List.findOneAndUpdate(query, update, options, callback);
}

//Delete reading list item
module.exports.deleteListItem = function(id, callback){
	var query  = {_id: id};
	List.remove(query, callback);
}