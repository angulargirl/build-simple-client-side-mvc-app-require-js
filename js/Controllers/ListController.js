// Deserialize the users from the local storage and pass it to render as an object.

define(['Views/ListView'], function(ListView){

    function start(){
        var users = JSON.parse(localStorage.users);
        ListView.render({users:users});
        console.log("ListController: deserialized the users...");
    }

    return {
        start:start
    };
});