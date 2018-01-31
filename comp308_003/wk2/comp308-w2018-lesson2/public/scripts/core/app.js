// IIFE - Immediately Invoked Function Expression
// sometimes called a self-executing anonymous function
(function () {

    let name = 'Kevin'

    function Start() {
        console.log('application initializing...')
        Main()
    }

    function Main() {
        console.log('app started')
        // NOTE: need to use the ` char in order to insert ${}, new ES6 feature!
        console.log(`My name is ${name}`)
    }

    window.onload = Start
})()