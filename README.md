# node-app
<b>Node Server App with React Front End</b>
<b>Snapshot of the final result is shown in snapshot folder of the repository</b>

<b>Instructions on how the app was created.</b>

<b>Step 1: Creating the table at MySql Database.</b>

create table if not exists `employee1`
(
`id` INTEGER NOT NULL auto_increment PRIMARY KEY,
`person` varchar(255),
`group` varchar(255),
`age` varchar(255)
);

<b>The App basically just is used to display the following result:
Given a table like that below, with person, group, and age columns, how  would you get the 2 oldest people in each group? (Ties within groups should not yield more results, but give the first 2 in alphabetical order)</b>

The query will be displayed in the following file: employee.model.js

<em><i><b>SELECT * FROM employee1 AS a WHERE <br/>
(SELECT COUNT(*) FROM employee1 AS b <br/>
  WHERE b.group = a.group AND b.age >= a.age) <= 2 <br/>
ORDER BY a.person ASC;</i></em><br/><b/>

<b>Step 2: Creating the node app for server</b><br/>
1. npm init - creates the package.json file.
2. npm install express mysql2 body-parser cors sequelize --save
3. Create the server.js for initializing the node.js server which will be used as an api(server.js)
4. Create the folder src with the following structure<br/>
    <p>
    src<br/>
    |----controllers<br/>
         |--employee.controller.js(used for controlling the flow of data from database)<br/>
    |----models<br/>
         |--employee.model.js(used for describing the data model of the table in the database)<br/>
    |----routes<br/>
         |--employee.route.js(used for routing through url)<br/>
    </p>
5. Start the app using the command node server.js the server starts at <a>http://localhost:5000</a>

Step 3: Creating the front end with React
1. Initializing the react front end with command npx install create-react-app frontend
2. yarn add @material-ui/core axios
3. The important folder structure is as below:<br/>
   |---public<br/>
   |---src <br/>
       |--components <br/>
          |-Tables.jsx <br/>
       |--services <br/>
          |-EmployeeService.jsx <br/>
4. The Tables component uses the material-ui/core to display the tabular structure.
5. The EmployeeService.jsx uses axios to fetch the url :http://localhost:5000/api/v1/employee

<b>Note: In config folder at the root will have dummy values instead of password of database of MySql </b>
    
