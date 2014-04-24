build-simple-client-side-mvc-app-require-js
===========================================

Initial tuts on requirejs and MVC


Why Requirejs?

Scripts are loaded asynchronously on the fly when they’re needed and in parallel reducing the loading time of your page.

What is it?
RequireJS is a well known JavaScript module and file loader which is supported
in the latest versions of popular browsers. In RequireJS we separate code into
modules which each handle a single responsibility. Additionally, dependencies
need to be configured when loading files.

When creating a js module, you can choose to use the Revealing Module Pattern, which returns private attributes and
methods.

All the JavaScript files, including the RequireJS file, are located inside the js folder.

main.js
 RequireJS uses main.js to look for other scripts and dependencies. The file main.js is used for initialization.
index.js
 All the magic of the MVC application will happen in the #app div. We also included RequireJS (which you can grab here)
 at the bottom of the body, and you can notice a special attribute on the script tag: data-main="js/main". The value
 passed to this attribute is used by RequireJS as the entry point of the entire application.




Why MVC?

When building a rich web app with many different views, MVC pattern helps structure your code.  In front-end
development, it is very common to have multiple views per controller.  In this tutorial, we’ll mimic the server-side
MVC in which 1 controller = 1 view.

