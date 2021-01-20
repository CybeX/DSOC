var low = require('lowdb');
var FileSync = require('lowdb/adapters/FileSync');
var adapter = new FileSync('db.json');
var db = low(adapter);

db.defaults({ gameCount: 0, auths: {} }).write();
var auths = db.get('auths');

module.exports = {
	auths: auths.value(),
	bannedIps: {},
	ranks: {
		0: ' ', //User
		1: '+', //Voice > Tournaments und Broadcast
		2: '*', //MODS  > Ban and Mute
		3: '#', //Admin > Promote
		4: '-'  //OWNER > Console
	}
};