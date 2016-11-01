//Requiring Read Line Module
const readline = require('readline');

//Standard I/O
const rl = readline.createInterface({
  input:  process.stdin,
  output: process.stdout
});

const Navigator = require('./service/navigatorService');

//GET the CPF of Student
rl.question('Student CPF:', student =>{

  //Close Standard Input
  rl.close();

  //GET's
  var school    = Navigator.getSchool(student);
  var transport = Navigator.getTransport();

  //Type of Entity
  school.type = 'Escola';
  transport.type = 'Transporte';

  //Navigate Site
  Navigator.openRequest(student)//Open new Request
    .then(Navigator.logIn(school))//Log In on School
    .then(Navigator.confirmRequest(student))//Confirm Opened Request
    .then(Navigator.logIn(transport))//Log In on Transport
    .then(Navigator.blockRequest(student))//Block Confirmed Request
    .then(Navigator.logOut(school))//Log Out of School
    .then(Navigator.logOut(transport))//Log Out of Transport
    .then(Navigator.closeBrowser())//Close Browser (End Test)
    .catch(err =>{

      //Possible Errors
      console.error(err);
    });
});
