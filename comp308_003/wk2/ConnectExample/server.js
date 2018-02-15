const connect = require('connect')   //load connect
const app = connect() //create server obj

//middleware function definitions
const logger = (req, res, next) => {
    console.log(req.method, req.url)
    next() //calls the next middleware
}

const helloWorld = function (req, res, next) {
    res.setHeader('Content-Type', 'text/plain')
    res.write('Hello Good World, and check console for info printed by logger\n')
    next()
}

const testMiddleware = (req, res, next) => {
    console.log("This is my new middleware function! JavaScript is my favorite programming language!")
    next()
}

const anotherTestFunction = (req, res, next) => {
    // res.setHeader('Content-Type', 'text/plain')
    res.end(`
                This is my second new middleware function!
                I am trying to use the new string delimiter from es6!
            `)
    next()
}

// register the middleware function to use
app.use(logger) //first one to run
app.use(helloWorld) //second to run
app.use(testMiddleware) //third to run
app.use(anotherTestFunction) //fourth to run

app.listen(3000)    //make server to listen
console.log('Server running at http://localhost:3000')