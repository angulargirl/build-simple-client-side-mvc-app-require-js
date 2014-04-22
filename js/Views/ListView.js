/* Just for demo purpose
 * Important: Using plain HTML in a JavaScript file like this
 * is not an ideal solution, because it’s very hard to maintain.
 * You should instead consider templating.
 * */


    define(function(){

    function render(parameters){
        var appDiv = document.getElementById('app');

        var users = parameters.users;

        var html = '<ul>';

        for (var i = 0, len = users.length; i < len; i++){
            //concatenate each user in an HTML string
            html += '<li>' + users[i].name + '</li>';
        }
        html += '</ul>';
        //inject in the #app element.
        appDiv.innerHTML = html;
        console.log("ListView: show the users...");
    }

    return {
        render:render
    };
});
