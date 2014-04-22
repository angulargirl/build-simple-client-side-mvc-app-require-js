/**
 * 1. Create a MyMath.js file
 * 2. Define our MyMath module in the same folder as main.js
 */
define(function(){

    function add(a, b){
        return a + b;
    }

    return {
        add:add
    };
});
