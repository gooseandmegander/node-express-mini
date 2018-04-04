# Back End Journey

* Build a RESTful API using Express and Node.js
* Persist API Data to a Database
* Secure an API
* Test, Package, and Deploy an API
* Full Stack Project

## Build a RESTful API using Express and Node.js

* HTTP (Theory)
    * methods
        * CRUD (Post, Get, Put, Delete)
    * status codes
        * 200 (OK), 201 (Created), 400 (Bad Request), 404 (Not Found), 500 (Server Error)
        * 200-299: success codes
        * 300-399: redirects, something moved
        * 400-499: user/client error e.g. 403,418 (joke)
        * 500-599: server error
* REST (Theory)
    * REpresentational State Transfer
    * resource thinking e.g. user is resource
    * endpoint design /api/createuser/updateuser becomes api/user
        * 1 endpoint per resource
* Node (Theory)
    * way to run JavaScript outside the browser
    * advantages
        * no context switching (from language A on front-end to language B on back-end)
        * asynchronous 
        * same paradigm
        * single-threaded (adds complexity in multi-threaded)
    * disadvantages
        * single threaded (cannot use full power of computer)
    * create-react-app is a node application
* Express (Theory and Practice)
    * advantages
        * minimalistic/light weight
        * extendible
    * disadvantages
        * minimalistic
    * core parts
        * routing
        * middleware, extends functionality of Express
        * sub-applications (like components in React)
    * code!!
* Postman
    * why
    * how (demo)