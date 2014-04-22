//In this example, a User will be a simple class with a name attribute:
define(function(){

    function User(name){
        this.name = name || 'Default name';
        console.log("User: init name...");
    }

    return User;
});