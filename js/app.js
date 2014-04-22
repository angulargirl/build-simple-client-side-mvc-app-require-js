/**
 * Define a function that uses require
 * to require the alerter
 * to alert that it is being called from the app
 */
define(function(require){
    var alerter = require('alerter');
    alerter("hello from the app");
    console.log("app: alerted with message");
});

