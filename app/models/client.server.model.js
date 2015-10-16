var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ClientSchema = new Schema({
    clientname: String,
    clienturl: String,
    internalip: String,
    dbase: String,
    dbname: String,
    webserver: String,
    externalIP: String,
    sqlIP: String,
    hasSSL: Boolean,
    hasPreferred: Boolean,
    isParty: Boolean
});

mongoose.model('Client', ClientSchema);