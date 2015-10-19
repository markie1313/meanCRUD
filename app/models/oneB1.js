var mongoose = require('mongoose'),
	Schema = mongoose.Schema;
	
var OneASchema = new Schema({
	myName: String
});

mongoose.model('carla', OneASchema);

/*
can specify the collection name explicity - as below
mongoose.model('carla', OneASchema, 'theCollectionName');
*/