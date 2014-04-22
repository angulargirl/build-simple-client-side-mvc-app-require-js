/**
 * main: defines dependencies to load at startup or if you do a refresh
 *
 */

require.config({

    waitSeconds: 0 //still gives occasional error

});

//1. expect to find and load file
require(['alerter'], function(alerter){
    //error: alerter("In main");
    console.log("main: trying to find and load alerter file...");

});
/*
 The call to MyMath is now wrapped in the require function, which takes 2 parameters:

 An array of modules we want to load, declared with their path relative to the entry point
 (remember the data-main attribute in the HTML) and without the .js extension,
 A function to call once these dependencies are loaded. The modules will be passed as parameters
 of this function so you can simply name those parameters with the same modules names.


 */
require(['MyMath'], function(MyMath){

    console.log('main: trying to find and load MyMath file. 1 + 2 = ' + MyMath.add(1, 2));

});

require(['app'], function(app){
    //error:  alerter("In main");
//you don't have to run anything here
//we have separated concerns so
// main will load our app
    console.log('app: trying to find and load app file');
});

/*
If we now come back to our main.js file, we can declare the dependency to User
in the require method, and manually create a set of users for the purpose of this example:
*/

/*
 We then serialize in JSON the users array and store it in the HTML5 local storage
 to make it accessible just like a database:
 Note: JSON serialization with stringify and deserialization with parse need a polyfill
 to work in IE7 and inferiors. You should use Douglas Crockford’s json2.js from his Github
 repository for this.
 */
require(['Models/User'], function(User){

    var users = [new User('Barney'),
        new User('Cartman'),
        new User('Sheldon')];

    for (var i = 0, len = users.length; i < len; i++){
        console.log("main: ", users[i].name);
    }

    localStorage.users = JSON.stringify(users);
});

/*
* Runs our ListController module
*   1. declare it as a dependency of require
*   2. call ListController.start()
*
* */
require(['Models/User', 'Controllers/ListController'], function(User, ListController){

    var users = [new User('Barney'),
        new User('Cartman'),
        new User('Sheldon')];

    localStorage.users = JSON.stringify(users);

    ListController.start();
    console.log("main: ListController started...");
});






