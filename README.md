# Salesforce Connection using Node JS - jsforce
A sample Node.js application that integrates with Salesforce using npm jsforce module can be found in this repository. If you are beginner then also you will easily understand this code. In this repository all node files are there to set up salesforce connection peoject, please follow the instruction as I mentioned bellow section. .

As a programmer, I think this is the easiest way to retrieve without any API call. Just have to use like normal mongoo query. In this repository, I am attaching only code for retrieve only. You can also add a record in Salesforce. Here a sample code inserts a record :

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
For insert also you have to log in like mentioned in the attached file(lib\controller\controller.salesforce.js).



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

**Please make sure your account should be Enterprise Edition, Unlimited Edition and Developer Edition

## Configuring and instalation

1. Create a new folder and add package.json
2. npm install
3. Now copy other files to the newly created folder.
4. Change PORT no as per your server on index.js file in the root. I put as 9005 as per my server.
5. Change Salesforce credential on lib\controller\controller.salesforce.js file.

**Please make sure your directory has full permission


## How to Run

After all Configuring and instalation

1. Run *node index* from your terminal
2. After that, *"Connected to port 9005 for Salesforce! Developer : Angshuman Baruah"* on your terminal screen.
3. From browser or postman using **_Get_** method hit URL : http://localhost:9005/ (Instead  of 9005 use your port no).
4. The response will appear on your terminal.


> *Courtesy: https://jsforce.github.io/document/* 
