// Run main behaviour of list controller

define(['Views/ListView'], function(ListView){

    function start(){
        var users = JSON.parse(localStorage.users);
        ListView.render({users:users});
    }

    return {
       // console.log("ListController: call ListView render with users...");
        start:start
    };
});