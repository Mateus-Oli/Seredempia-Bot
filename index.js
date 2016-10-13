//Requiring Selenium
var webdriver = require('selenium-webdriver');
var By        = webdriver.By;
var until     = webdriver.until;

//Site
var page = 'http://seredempia.herokuapp.com/#/';
//var page = 'http://127.0.0.1:8080/#/';

//Waiting Time
var time = 5000;

//Student
var student = '33333333333';

//School
var school = {};

//Escola
school.username = '99999999999999';
school.password = 'Escola';

//Faculdade
//school.username = '88888888888888';
//school.password = 'Faculdade';

//Transport
var transport = {};

//transporte
transport.username = '77777777777777'
transport.password = 'Transporte'

//Connecting to Driver (Must be in PATH)
var driver    = new webdriver.Builder().forBrowser('chrome').build();

var exist = function(name){

}


//Commands

//Going to Student Page
driver.get(page + 'Estudante').then(function(){
  //Waiting Page to Load
  driver.wait(until.titleIs('Seredempia - Estudante'));

  //Filling in CPF and sending request
  driver.findElement(By.name('cpf')).sendKeys(student);
  driver.findElement(By.name('solicitar')).click();
  driver.wait(until.elementLocated(By.name('aviso')));
});

//School Log-IN
driver.get(page + 'logIn?origin=Escola').then(function(){
  //Waiting for Page to Load
  driver.wait(until.titleIs('Seredempia - Log-In'));

  //Logging in
  driver.findElement(By.name('user')).sendKeys(school.username);
  driver.findElement(By.name('password')).sendKeys(school.password);
  driver.findElement(By.name('login')).click();
  driver.wait(until.titleIs('Seredempia - Escola'));

  //School Page

  //Waiting for Element
  driver.wait(until.elementLocated(By.name(student)),time).then(function(){

    //Confirming Student
    driver.findElement(By.name(student)).click();
    driver.findElement(By.name('confirmar')).click();
    driver.findElement(By.name('logout')).click();
    driver.wait(until.titleIs('Seredempia'));

  //If Element does not exist
  }, function(err){});

});

//Transport Log-IN
driver.get(page + 'logIn?origin=Transporte').then(function(){
  //Waiting for Page to Load
  driver.wait(until.titleIs('Seredempia - Log-In'));

  driver.findElement(By.name('user')).sendKeys('77777777777777');
  driver.findElement(By.name('password')).sendKeys('Transporte');
  driver.findElement(By.name('login')).click();
  driver.wait(until.titleIs('Seredempia - Transporte'));

  //Transport Page

  //Waiting for Element
  driver.wait(until.elementLocated(By.name(student)),time).then(function(){

    //Blocking Student
    driver.findElement(By.name(student)).click();
    driver.findElement(By.name('comprar')).click();
    driver.findElement(By.name('logout')).click();
    driver.wait(until.titleIs('Seredempia')).then(function(){

      //Prevent premature ending
      setTimeout(function(){

        //Closing Driver
        driver.quit();
      },1000);
    });

  //If Element does not exist
  }, function(err){
    driver.quit();
  });
});
