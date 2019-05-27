# Salesforce Connection using Node JS - jsforce
A sample Node.js application that integrates with Salesforce using npm jsforce module can be found in this repository. If you are beginner then also you will easily understand this code. I am not mentioned node express connection or routing files over here. Just attaching file for Salesforce connection with login and retrieve data only. 

## Declaring your application in Salesforce

Before being able to interact with the Salesforce Platform with your application, you will have to declare it as a connected application:

1. Log in your Salesforce administrator account
2. Enable API from Manage Users->Profile and scroll down to Administrative Permissions and check the API Enabled box. 
3. Generate Token : In the User Menu, select Setup. In the menu on the left, under Personal Setup, expand My Personal Information, and then click Reset My Security Token.Follow onscreen instructions.A new email message will be sent.Over there you will find out token as Security Token.
4. Always you have to make connection and login for fetch records from Salesforce.


## Configuring and instalation

1. npm install jsforce
2. And other instalation for run node.
3. Use saleforceNode.js file.
