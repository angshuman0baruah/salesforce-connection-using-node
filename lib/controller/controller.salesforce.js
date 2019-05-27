var jsforce = require('jsforce');

var SALESFORCE_LOGIN_URL = "https://test.salesforce.com"; // for sandbox
//var SALESFORCE_LOGIN_URL = "https://login.salesforce.com"; // for production
var SALESFORCE_USERNAME = "***************";
var SALESFORCE_PASSWORD = "***************";
var SALESFORCE_TOKEN = "***************";

module.exports.salesforceLogin = function () {
	return new Promise(function (resolve, reject) {
		var conn = new jsforce.Connection({
			loginUrl: SALESFORCE_LOGIN_URL
		});
		conn.login(SALESFORCE_USERNAME, SALESFORCE_PASSWORD + SALESFORCE_TOKEN, function (err, userinfo) {
			if (err) {
				reject(err);
			} else {
				console.log("Connection establish with salesforce");
				resolve(conn);
			}
		})
	})
}

module.exports.salesforce = function () {
	(async function () {
		try {
			
			let loginRes = await exports.salesforceLogin();
			if (loginRes) {
				//loginRes.sobject('Opportunity').find({}).execute(function (err, records) {
				//loginRes.sobject('Account').find({}).execute(function (err, records) {
				//loginRes.sobject('Task').find({}).execute(function (err, records) {
				loginRes.sobject('Contact').find({}).execute(function (err, records) {
					if (err) {
						console.error(err);
					} else {
						console.log(records);
						console.log(records.length);
					}
				});
			} else {
				console.log("Connection failed with salesforce");
			}
		} catch (err) {
			console.log(err);
		}
	})();
}
