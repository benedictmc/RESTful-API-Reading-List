var mongoose = require('mongoose');


var listSchema = mongoose.Schema({
	name:{
		type: String,
		required: true
	},
	create_date:{
		type: Date,
		default: Date.now
	}
});

var List = module.exports = mongoose.model('List', listSchema);

module.exports.getList = function(callback, limit){
	List.find(callback, limit).limit(limit);
}