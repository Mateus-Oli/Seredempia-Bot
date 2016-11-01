//Requiring Selenium Module
const webdriver = require('selenium-webdriver');
const By        = webdriver.By;
const until     = webdriver.until;

//Site
const page = 'http://seredempia.herokuapp.com/#/';
//const page = 'http://127.0.0.1:8080/#/';

//Waiting Time
const time = 5000;

//Transport
var transport = {
  username: '77777777777777',
  password: 'Transporte',
};

//Transport Information
var _getTransport = function(){
  return transport;
}

//School information of informed Student
var _getSchool = function(student){

  //Escola
  if(student%2) return {
    username: '99999999999999',
    password: 'Escola'
  }

  //Faculdade
  else return {
    username: '88888888888888',
    password: 'Faculdade',
  }
}


//Open Navigator (Must be in PATH)
var driver    = new webdriver.Builder().forBrowser('chrome').build();

//Open Site
driver.get(page);

//Log in informed entity
var _logIn = function(entity){

  //Create Promise
  var defer = Promise.defer();

  //Log In page
  driver.get(page + 'logIn?origin=' + entity.type);

  //Wait for Page to Load
  driver.wait(until.titleIs('Seredempia - Log-In'));

  //Logging in
  driver.findElement(By.name('user')).sendKeys(entity.username);
  driver.findElement(By.name('password')).sendKeys(entity.password);
  driver.findElement(By.name('login')).click();
  driver.wait(until.titleIs('Seredempia - ' + entity.type),time).then(result =>{

    //Resolve Promise after Log In Successful
    defer.resolve('OK');

    //Reject Promise if Error in Log-In
  }).catch(err =>defer.reject('Erro Log-In'));

  //Return Promise
  return defer.promise;
}

//Log out of Informed Entity
var _logOut = function(entity){

  //Create Promise
  var defer = Promise.defer();

  //Entity Page
  driver.get(page + entity.type);

  //Wait Page to Load
  driver.wait(until.titleIs('Seredempia - ' + entity.type));

  //Log Out
  driver.findElement(By.name('logout')).click();
  driver.wait(until.titleIs('Seredempia')).then(result =>{

    //Resolve Promise after Log Out Successful
    defer.resolve('OK');

  //Reject Promise after error in Log Out
  }).catch(err =>{defer.reject(err)});


  //Return Promise
  return defer.promise;
}

//open a new request for informed student
var _openRequest = function(student){

  //Create Promise
  var defer = Promise.defer();

  //Student page
  driver.get(page + 'Estudante')

  //Wait Page to Load
  driver.wait(until.titleIs('Seredempia - Estudante'));

  //Filling in CPF and sending request
  driver.findElement(By.name('cpf')).sendKeys(student);
  driver.findElement(By.name('solicitar')).click();
  driver.wait(until.elementLocated(By.name('aviso'))).getText().then(result =>{

    //Resolve Promise with result of Request
    defer.resolve('OK');
  });

  //Return Promise
  return defer.promise;
}

//Confirm Request of informed Student
var _confirmRequest = function(student){

  //Create Promise
  var defer = Promise.defer();

  //Wait for Student Request
  driver.wait(until.elementLocated(By.name(student)),time).then(result =>{

    //Confirm Student
    driver.findElement(By.name(student)).click();
    driver.findElement(By.name('confirmar')).click().then(result =>{

      //Resolve Promise after confirmation
      defer.resolve('OK');
    });

  // Element does not exist
  }).catch(err =>{});

  //Return Promise
  return defer.promise;
}

//Block Future Requests of Informed Student
var _blockRequest = function(student){

  //Create Promise
  var defer = Promise.defer();

  //Wait for Student Request
  driver.wait(until.elementLocated(By.name(student)),time).then(result =>{

    //Confirm Student
    driver.findElement(By.name(student)).click();
    driver.findElement(By.name('comprar')).click().then(result =>{

      //Resolve Promise after confirmation
      defer.resolve('OK');
    });

  // Element does not exist
  }).catch(err =>{});

  //Return Promise
  return defer.promise;
}

//Close the Browser
var _closeBrowser = function(){

  //Create Promise
  var defer = Promise.defer();

  //Wait for Site to process transaction
  driver.wait(until.elementLocated(By.name('Esperar')),time/10).catch(err =>{

    //Quit Driver
    driver.quit();

    //Resolve Promise After Browser Finish
    defer.resolve('OK');
  });

  //Return Promise
  return defer.promise;
}

module.exports = {
  getTransport:   _getTransport,
  getSchool:      _getSchool,
  logIn:          _logIn,
  logOut:         _logOut,
  openRequest:    _openRequest,
  confirmRequest: _confirmRequest,
  blockRequest:   _blockRequest,
  closeBrowser:   _closeBrowser,
}
