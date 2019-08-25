
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
This project is developed and tested on **Node v10.16.2**.  After downloading all files, navigate to the package.json folder and run `npm install` to grab all dependencies.

To take full advantage of the command line and use grunt tasks you will need to make sure that you have added `node_modules/.bin` to your `$PATH`.  Otherwise you will need to install the following globally:

  `npm install -g  grunt-cli`

To execute the entire test suite in local development, you must use grunt to launch the tests:

`grunt webdriver:test`.  
