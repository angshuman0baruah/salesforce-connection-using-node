
# Salesforce Connection using Node JS - jsforce
A sample Node.js application that integrates with Salesforce using npm jsforce module can be found in this repository. If you are beginner then also you will easily understand this code. I have not mentioned node express connection or routing files over here. Just attaching file for Salesforce connection with login and retrieve data only.

As a programmer, I think this is the easiest way to retrieve without any API call. Just have to use like normal mongoose query. In this repository, I am attaching only code for retrieve only. You can also add a record in Salesforce. Here a sample code inserts a record :

```
salesforceConn.sobject("Account").create([
  { Name : 'My Account #1' },
  { Name : 'My Account #2' }
],
function(err, resp) {
	if(resp.length>0){
		console.log(resp);
	} else{
		console.log("Something went wrong during insert :"+err);
	}
});
```
For insert also you have to log in like mentioned in the attached file(saleforceNode.js).


## Declaring your application in Salesforce

Before being able to interact with the Salesforce Platform with your application, you will have to declare it as a connected application:

1. Log in your Salesforce administrator account
2. Enable API from 
	- Manage Users->Profile 
	- Scroll down to Administrative Permissions 
	- Check the API Enabled box. 
3. Generate Token : 
	- In the User Menu, select Setup. 
	- In the menu on the left, under Personal Setup, expand My Personal Information, and then click Reset My Security Token.
	- Follow onscreen instructions.
	- A new email message will be sent.
	- Over there you will find out token as Security Token.
4. Always you have to make a connection and login for fetch records from Salesforce.

## Configuring and instalation

1. npm install jsforce
2. And other installation for run node.
3. Use saleforceNode.js file.








> *Courtesy: https://jsforce.github.io/document/* 
