# Week1
# Chapter 1: Introduction to MEAN

- MongoDB 
    - database
- Express
    - web server framework
- AngularJS
    - web client framework
- Node.js
    - server platform

- **strength** of the stack
    - centralization of JavaScript as main prog language

- problem
    - connecting these tools together, scaling and architetcture issues
    - affect dvelopment process

Module pattern
---
In software engineering, the module pattern is a design pattern used to implement the concept of software modules, defined by modular programming, in a programming language with incomplete direct support for the concept.

This pattern can be implemented in several ways depending on the host programming language, such as the singleton design pattern, object-oriented static members in a class and procedural global functions.

In software development, source code can be organized into components that accomplish a particular function or contain everything necessary to accomplish a particular task. Modular programming is one of those approaches.

The concept of a “module” is not fully supported in many common programming languages.

In order to consider that a Singleton or any group of related code implements this pattern, the following features must be supplied:
    (
        NOTE: 
        In software engineering, the singleton pattern is a software design pattern that restricts the instantiation of a class to one object. This is useful when exactly one object is needed to coordinate actions across the system.
            e.g. using private constructor in Java class, then use static method to instantiate obj only if static varible is null

            public class MySingleTon {
     
            private static MySingleTon myObj;
            /**
            * Create private constructor
            */
            private MySingleTon(){
                
            }
            /**
            * Create a static method to get instance.
            */
            public static MySingleTon getInstance(){
                if(myObj == null){
                    myObj = new MySingleTon();
                }
                return myObj;
            }
    )

A portion of the code must have global or public access and be designed for use as global/public code. Additional private or protected code can be executed by the main public code.

A module must have an initializer function that is equivalent to, or complementary to an object constructor method. This feature is not supported by regular namespaces.

A module must have a finalizer function that is equivalent to, or complementary to an object destructor method. This feature is not supported by regular namespaces.

Supporting members may require initialization/finalization code that is executed by the module’s initializer/finalizer function.

Most members are functions that perform operations on elements external to the class, provided as arguments by calling functions. Such functions are “utilities”, “tools” or “libraries”.

in 2015, es6 released, support for modules
    export and imports

Pre-es6, commonjs workaround
---
// helper/MathHelper.js
module.exports = {
  add: function(left, right) {
    return left + right;
  },

  times: function(left, right) {
    return left * right;
  }
}

Implementation
// program.js
var mathHelper = require('./helper/MathHelper');

console.log(mathHelper.add(5, 8)); // 13
console.log(mathHelper.times(3, 4)); // 12

ECMASCRIPT 2015
---
es6
classes became like C#/java classes

// helper/MathHelper.js
export function add(left, right) {
  return left + right;
}

export function times(left, right) {
  return left * right;
}
Implementation
// program.js
import { add, times } from './helper/MathHelper';

console.log(add(5, 8)); // 13
console.log(times(3, 4)); // 12

Modules
-
Export and import

lib.js
-
export function halfOf(x) {
    return x / 2;
}
export function multiply(x, y) {
    return x * y;
}

another html file
-
<script type="module" >
    import { halfOf, multiply } from './lib.js';
    document.getElementById('output').innerHTML = "halfOf(4)="+halfOf(4);
</script>


http://babeljs.io/
https://leanpub.com/ecmascript2015es6guide/read
https://jsfiddle.net/
https://codepen.io/

--------------------------------------------------------------------------------------

installed nodejs v9.4.0

powershell
(gci env:path | select value) -split ';' | sls java

use yarn instead of bower (outdated now)

install git via desktop.github.com or git-scm.com

nodejs is very slim as a server, use npm to add functionality (dependencies to get our webapp to work)

node is everything going on in the backend

DON'T do:
$ npm install express --save

this is normally how we install packages though

express is an addon for nodejs

installed .ejs extension in vscode
and Angular 2 TypeScript Emmet

package.json keeps track of all dependencies for the package
    properties/manifest for all dependencies

npm init to create the package.json file

express is middleware...?

never push node_modules to github

nodemon is a helper, developer dependency, our app doesnt need it to run
$ npm install nodemon --save-dev
it helps us so that we dont need to stop and start server everytime make a change

get nodemon and mongod working...

nodejs essential training on lynda.com

sign up for mlab
    create mongodb on the web, not just local db

heroku > azure 
    works with mlab, free

---

After reviewing lecture slides....
-
why would we want to use export default???

(
    NOTE:
    arrow functions share the same lexical 'this' as their scope
    e.g.
        const author = {
            fullName: "Bob Alice",
            books: [],
            printBooks() {
                this.books.forEach(book => console.log(book + ' by ' +
                this.fullName));
            }
        };
        If used as a regular function, this would be the book
        object and not the author
)

default, rest and spread
    default => default values of function params
        e.g. function add(x, y = 0) {
            add(1)
            add(1,2)

    rest => pass array as trailing argument
        e.g. function userFriends(user, ...friends) {
            userFriends('User', 'Bob', 'Alice');

    spread => turns an array into a call argument
        e.g. function userTopFriends(firstFriend, secondFriend, thirdFriends) {
            userTopFriends(...['Alice', 'Bob', 'Michelle']);

what is serialization/deserialization of data?

what is data marshalling?

from tom's yt videos:

downloaded book at https://smtebooks.com/book/2426/mean-web-development-2nd-edition-pdf

code samples from book
https://github.com/amoshaviv/mean-web-development

tom recommended book
https://smtebooks.com/book/4995/web-application-development-mean-pdf

2nd book code samples
https://github.com/PacktPublishing/Developing-Microservices-With-Nodejs

web technologies are the most challenging to work with
    e.g. every 3 months there is something changing
        breaks ur code; sth that used to work no longer works. need to rework alot of
        the code

sth like java or c# easier since those are fairly stable.

js courses at cencol
1.comp125
2.comp397 web game programming
3.comp392 advanced graphics
4.comp308 emerging technologies
all tie together

doing es6 now, ECMASCRIPT 2015
https://es6-features.org

lots of new features, need to see if we can use them (which browser + version compatible)
http://caniuse.com
    penetration % tells us how many % of browsers we can use the feature with

e.g. classes are a new feature
before we simply made objects and prototypes
with es6, classes are available

let
---
hoisting is the issue with var keyword
    if var is declared lower in the code, it will get "hoisted' to the top
    this is bad because we expect declaration to happen down there where we wrote the code, but it actually happens up at the top
        this can cause weird glitches, it is available throughout the scope, we expect it declared somewhere but it is actually declared somehwere else

let keyword fixes this; doesnt let hoisting happening; wont get weird glitches

let, const and class penetration cross browser increased alot

previously only had like ~20% penetration, had to use things to convert from es6 to es5 
    eg. babylon js or typescript

microsoft developed typescript, google hoped on board
    ts close to all es6 features, and even some es7 features (which hasnt come out yet)

typescript gives us a lot of intellisense for things like nodejs which we didnt have before

git vs github
---
github is repo hosting website
git is the tool u use to upload stuff 

git is version ctrl sys u install on ur system
    allows u to
        version ctrl
        backup
        collaboration

github is a cloud service
    software as a service
    online repo where u can connect ur local git repo and upload to github so that u can share w every1
    shareable platform
    version ctrl
    backup
    issue tracking
    project management
    branch management

git is local

a commit:
    snapshot of the current state of your files

git push -u origin master
    -u is unconditional

can install git via:
1. desktop-github.com, or 
2. git-scm.com

as a mac user, install npm with homebrew, not through nodejs.com

node is really js on backend

mongodb is a no sql db that uses javascript

NoSQL database (non relational)
---
database provides mechanism for storage and retrieveal of data which is modeled in means other than tabular relations used  in relational databases

before installing mongodb, need to do setup
mkdir c:/data/db
    this is the default folder required by mongodb to access

sign up for mlab and heroku

need to have one cmd open to run server using 
mongod command

then open 2nd cmd and use mongo command to connect to the local db server

by eod, should have installed git, nodejs, npm, mongodb
signedup for heroku and mlab

Normally, when we access websites:
client sends request to server
server looks up ip routing table
server sends response with html page to client

for nodejs, we have to do all of this manually

nodejs is event driven, single thread

node app.js
---
if we make a change to the js files, need to reload the server in order to see changes
    it was loaded with the code at the time server started

install nodemon
    detects changes to files in the project, auto reloads the server

npm
---
contains packages, public and private
e.g. make a very good contact page, company can pay and make it private package on npm
    dont need to recreate contact page everytime, can just download it and pop it into the new project

OTHER INSTALLATIONS
------------------------------------------------------------------------------------------------------
lite-server
---
npm install lite-server -g

express generator
---
scaffolds out a whole application for us
npm install express-generator -game

bower.io
---
npm install bower -g

bower is package manager for the web 
    gets stuff like jquery, angular, front end frameworks

npm is for node packages
    adds functionality to nodejs

to see what is installed:
    npm ls -g --depth=0

gulpjs
---
npm install gulp-cli -g

gulp is automation for your web project
    e.g. minification css/js files for improved performance

cache windows credentials for github so wont be prompted everytime
or
git config --global username and password


---

# Week2
JavaScript Closures
---
JavaScript variables can belong to the local or global scope.

Global variables can be made local (private) with closures.

Global Variables
-
A function can access all variables defined inside the function, like this:

    function myFunction() {
        var a = 4;
        return a * a;
    }

But a function can also access variables defined outside the function, like this:

    var a = 4;
    function myFunction() {
        return a * a;
    }

In the last example, a is a global variable.

In a web page, global variables belong to the window object.

Global variables can be used (and changed) by all scripts in the page (and in the window).

In the first example, a is a local variable.

A local variable can only be used inside the function where it is defined. It is hidden from other functions and other scripting code.

Global and local variables with the same name are different variables. Modifying one, does not modify the other.

(
    NOTE:
    Variables created without the keyword var, are always global, even if they are created inside a function.
)

Variable Lifetime
-
Global variables live as long as your application (your window / your web page) lives.

Local variables have short lives. They are created when the function is invoked, and deleted when the function is finished.

A Counter Dilemma
-
Suppose you want to use a variable for counting something, and you want this counter to be available to all functions.

You could use a global variable, and a function to increase the counter:
    var counter = 0;

    function add() {
        counter += 1;
    }

    add();
    add();
    add();

    // the counter is now equal to 3

The counter should only be changed by the add() function.

The problem is, that any script on the page can change the counter, without calling add().

If I declare the counter inside the function, nobody will be able to change it without calling add(), however, the counter would at max always only be 1!

A JavaScript inner function can solve this.

JavaScript Nested Functions
-
All functions have access to the global scope.  

In fact, in JavaScript, all functions have access to the scope "above" them.

JavaScript supports nested functions. Nested functions have access to the scope "above" them.

In this example, the inner function plus() has access to the counter variable in the parent function:

    function add() {
        var counter = 0;
        function plus() {counter += 1;}
        plus();    
        return counter; 
    }

This could have solved the counter dilemma, if we could reach the plus() function from the outside.

We also need to find a way to execute counter = 0 only once.

We need a closure...

JavaScript Closures
---
Remember self-invoking functions? What does this function do?

    var add = (function () {
        var counter = 0;
        return function () {return counter += 1;}
    })();

    add();
    add();
    add();

    // the counter is now 3

The variable add is assigned the return value of a self-invoking function.

The self-invoking function only runs once. It sets the counter to zero (0), and returns a function expression.

This way add becomes a function. The "wonderful" part is that it can access the counter in the parent scope.

This is called a JavaScript closure. It makes it possible for a function to have "private" variables.

The counter is protected by the scope of the anonymous function, and can only be changed using the add function.

(
    NOTE:
    A closure is a function having access to the parent scope, even after the parent function has closed.
)

functions are objects in JavaScript
    hence we can return functions; this may not work in other prog languages

what is the benefit of using closures??

what are the benefits of using commonjs modules ??

express --view=ejs
    creates an app using ejs engine


---

# Week3
.ejs instead of .html files for views

embedded javascript
- embeds javascript into html file
    <p> <%= loginMessage %></p>

Recall: 
- pass param by using ?param=value
- e.g. http://localhost:3000/?name=kevin

extending functionality
- add new view (.ejs)
- add new route
- add  new controller
- require new route file in ./config/express.js

assignment 1 will be similar to SessionTest example

---

# Week4
- from now on, we will be using Express for our REST api
- mongodb...name comes from mass amt of data lol? huMONGOus
    - according to ilia 
- MongoDB uses BSON format
    - BinaryJSON
- normal SQL
- `SELECT * FROM Posts WHERE Title LIKE '%mongo%';`
- MongoDB
- `db.posts.find({ title:/mongo/ });`
- can also do something like
- `db.posts.find({ commentsCount: { $gt: 10 } });`

- a **COLLECTION** is a set of **DOCUMENTS**
    - simmilar to sql, **TABLE** is a set of **RECORDS**

```
use <db_name>
show collections
db.<collection_name>.insert({prop:"value"});
db.<collection_name>.find()
db.posts.update({user:'alice'},{$set:{title:'Second Post'}},{multi:true});
db.posts.find({ user:{$in: ['alice','bob']} });

```
- in Java and C#, we needed **database drivers**
    - translates db language to programming language
- also needed **db frameworks**
    - classes that gave db functionalities

- we need these 2 things here as well:
    - mongoose

## Mongoose
- is an ODM, **Object Document Mapper**
    - allows us to connect to a db and CRUD
    - for Java and C#, we had ORM, Object Relational Mapper

---

# Week5
- REST API differs from other APIs because it lets us use HTTP protocol
- POST, GET, PUT, DELETE => CRUD
- dynamic field names are created by 
- `UserSchema.virtual('fullName').get(function() {`
- two approaches to do referencing in mongodb
    - dbref
    - embedded document approach
- TOM starts here
- if we dont cover everything, refer to lesson 5 and 6 of w2017 from tom's YT playlist for comp308
    - https://www.youtube.com/watch?v=WoeCISvyc0A&list=PL5svY1bZDBZr0mzfldKz2ERqPDY9pqAH_&index=47
```
use <dbName>;
db.<collectionsName>.insert({ properties:values...});
db.<collection>.find().pretty();
db.games.update({name:"PUBG"},{name:"PUBG", rating: 3})
db.games.update({name:"PUBG"},{$set:{rating: 30}})
```
More reference
- https://docs.mongodb.com/manual/crud/

NOTE: Need to return the entire object when updating
- db.games.update({name:"PUBG"},{name:"PUBG", rating: 3})
    - not just the field to be updated
    - this would replace EVERY document who has name:"PUBG"
- OR, use $set flag
    - `db.games.update({name:"PUBG"},{$set:{rating: 30}})`
- If we do not use set flag, we are **REPLACING** the object

- given this route
- `app.get('/hi/:param1', function(req,res){} );`
- given this URL
- `http://www.google.com/hi/there?qs1=you&qs2=tube`
- req.**query**
```
{
  qs1: 'you',
  qs2: 'tube'
}
```
- req.**params**
```
{
  param1: 'there'
}
```

---

# Week6
## User Authentication
- passport module

### Passport Authentication Steps
1. Install passport module
2. Configure passport module in configfolder
3. Register passport module in express.jsfile
4. Install authentication strategies modules
5. Configure authentication strategies in separate files in strategies subfolder of configfolder
6. Authenticated user must be serializedto the session
7. Serialized user should be deserializedwhen requests are made

- in options arguments, when retrieving fields from document, omit -password and -salt, dont want to read these into memory as they can be intercepted by hackers
- salt is random number used to hash the password

- The **flash** is a special area of the session used for storing messages. Messages are written to the flash and cleared after being displayed to the user. The flash is typically used in combination with redirects, ensuring that the message is available to the next page that is to be rendered.

