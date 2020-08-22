'user strict';
var dbConn = require('../../config/db.config');

//Employee object create
var Employee = function(employee){
    this.person = employee.person;
    this.group = employee.group;
    this.age  = employee.age;
};
Employee.create = function (newEmp, result) {    
    dbConn.query("INSERT INTO employee1 set ?", newEmp, function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });           
};
Employee.findById = function (id, result) {
    dbConn.query("Select * from employee1 where id = ? ", id, function (err, res) {             
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
        }
    });   
};
Employee.findAll = function (result) {
    query1 = "SELECT * FROM employee1 AS a WHERE (SELECT COUNT(*) FROM employee1 AS b WHERE b.group = a.group AND b.age >= a.age) <= 2 ORDER BY a.person ASC";
    //query1 = "select count(1) from employee";
    dbConn.query(query1, function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            console.log('employees : ', res);  
            result(null, res);
        }
    });   
};
/*
Employee.update = function(id, employee, result){
  dbConn.query("UPDATE employee SET first_name=?,last_name=?,email=?,phone=?,organization=?,designation=?,salary=? WHERE id = ?", [employee.first_name,employee.last_name,employee.email,employee.phone,employee.organization,employee.designation,employee.salary, id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }else{   
            result(null, res);
        }
    }); 
};
Employee.delete = function(id, result){
     dbConn.query("DELETE FROM employee WHERE id = ?", [id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            result(null, res);
        }
    }); 
};*/

module.exports= Employee;