/*jslint evil: true, browser: true, immed: true, passfail: true, undef: true, newcap: true*/
/*global Contract, MyClass */

var instrument = (location.search && location.search.indexOf("instrument=true") !== -1);
Contract.load("MyClass.js", instrument, function(){
    try {
        var myClass = new MyClass({
            mode: "multiply"
        });
        
        var result = myClass.publicMethod(34, 5, 3);
    } 
    catch (ex) {
        alert(ex.message);
    }
});