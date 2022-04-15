____TECHNOLOGIES USED____<br/>
BACKEND:-<br/>
 Node.js - Express

DATABASE:- <br/>
MongoDb<br/>

FRONTEND:- <br/>
Handlebars,<br/>
HTML,<br/>
CSS,<br/>
Bootstrap<br/>

____TO RUN PROJECT____<br/>

Step 1: Install Node.js, MongoDB<br/>

Step 2: Clone the project from GitHub<br/>
$ git clone https://github.com/SivinSaji/machine-test-gipra.git<br/>

Step 3: Install all node modules<br/>
$ npm install <br/>

Step 4: To start server <br/>
$ nodemon bin/www<br/>

____About Project____ <br/>
Here I created a project to add items to a list. In this project, there are two pages one home page and a 'List-page". On the home page, we have the option to insert an item to the list this item will be stored in the dataBase 'machine-test-sivin' in collection 'item'. While in 'List-Page' it will display all the item in the list that is from the collection 'item' from the database.<br/>


____Different Pages____<br/>

Home page:- Here it collects data from the user to insert a new item to the list and this item will be stored in the collection 'item' in the 'machine-test-sivin' dataBase. We also give the success message while data is successfully stored in the dataBase.<br/>

List page:-  Here we display all the items in the list. Which we retrieve data from 'item' collection in dataBase 'machine-test-sivin'.
