
This repository contains the scripts and config files to support the QA Case Study for automating a sequence of operations on the developer.salesforce.com site.  The scripts and config files use webdriverIO (v5x) and supporting libraries that leverages the Jasmine BDD framework for verifying the operational behavior of the case study.


The operations are as follows:

1) Login to developer.salesforce.com
2) Search for Writing Tests
3) Assert Writing test page is listed
4) On the Writing Tests Page, Click Link Testing Apex
5) Verify Testing Apex page is loaded.
6) Logout


Installation:
--------------
This project is developed and tested on **Node v10.16.2**.  After downloading all files, navigate to the package.json folder and run this command to grab all dependencies:

'npm install' 

To take full advantage of the command line and use grunt tasks you will need to make sure that you have added `node_modules/.bin` to your '$PATH'.  Otherwise you will need to install the following globally:

'npm install -g  grunt-cli'

To execute the entire test suite in local development, you can use two methods to execute:

'npm run test'

or

'grunt webdriver:test'

IMPORTANT NOTE:
----------------
On step 1 in the above case study, the login to the developer.salesforce.com site has consistently required a verification code to be entered after logging in with username and password.  I have not found a way to disable the verification code requirement.  Currently, the username of "sitetracker-test@sitetracker.com" (password "paloalto94306") in the developers site is defined with my email (artie.alvidrez@gmail.com).  Consequently, the verification code is always sent to artie.alvidrez@gmail.com.  In order to have the verification code sent to another email address, change the setting of this user (sitetracker-test@sitetracker.com) to an email address you can access in order to get the code.
 


