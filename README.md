# QAJavaScriptProject

QA Academy Project to create a simple HR application using HTML 5, Javascript and CSS. 

## Acknowledgements
Thanks to Aswene and Morgan from QA for advising to keep the application to one html page which solved the problems I faced when overcomplicating this project.

## Features
* The application opens with a list of dummy data ready to use.
* Viewing employee data stored in an array.
* Filter the employee data shown by department using a drop-down selection box.
* Employee can be added to the list and shown on the display.
* An employee can be selected and their data edited.
* An employee can be selected and deleted from the list.

## Getting started
Fork and then clone the repository. To view the end version, open the index.html file on your browser. To view the code, open the index.html and script.js in Visual Studio Code.

## Evaluation
After the academy, this task was expected to be a challenge. The main issue was that I initially tried to put the different functions of the application (add & edit) on different html pages which caused the data list to reset when navigating back to the main page. This was solved using the advice from Aswene and Morgan by keeping everything contained in one html file and one JavaScript file. Once this was solved, the rest of the functionality was fairly straightforward but involved lots of editing DOM Objects in the js file to show and hide elements.

In the future this project would be extended to include more security features such as keeping the NINO and address of employees hidden on the main table so these fields are only accessed when necessary and having a secondary check before deleting employee data.

The Jira board for this project can be found at https://tdp-demo.atlassian.net/jira/software/projects/QJP/boards/3/roadmap

