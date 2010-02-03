jsContract is a tool for implementing code contracts in Javascript.
Code contracts are implemented as a series of statements in the head of each function supporting both pre- and postconditions.

	myFunction(a,b,c) {
		Contract.expectNumber(a,"a is not a number");
		Contract.guaranteesString("The result was not a string");

To support postconditions one has to instrument the script (rewrite it) using a call to Contract.instrument , such as

	var script = ".......";
	var instrumented = Contract.instrument(script);

One can also use the Contract framework to asynchronously load and instrument files using Contract.load

	Contract.load("myscript.js",true,function(){
		useCode();
	});
