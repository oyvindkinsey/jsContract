/*jslint evil: true, browser: true, immed: true, passfail: true, undef: true, newcap: true*/
/*global Contract */
/**
 * @class MyClass
 * A class that performs some simple operations
 * @constructor
 * @param {Object} config The class configuration
 * @cfg {String} mode The mode of operation, can ba either "divide" or "multiply"
 */
function MyClass(config){
    Contract.expectObject(config, "No configuration supplied");
    Contract.expectString(config.mode, "No mode set");
    Contract.expectValue(config.mode, ["divide", "multiply"], "Invalid mode");
    /** test: this function(){} will not be parsed
     * This either divides or multiplies the two numbers test: this function(){} will not be parsed
     * @param {Number} a
     * @param {Number} b
     * @return {Number} The result of the operation
     * @private
     */
    function _internalMethod(a, b){
        Contract.expectNumber(a);
        Contract.expectNumber(b);
        Contract.expectWhen(config.mode === "divide", b > 0, "Divisor cannot be 0");
        Contract.expectWhen(config.mode === "multiply", a > 0 && b > 0, "The multiplicands cannot be 0");
        Contract.guaranteesNumber();
        Contract.guarantees(function(result){
            return result === 0;
        }, "Result must be > 0");
        
        if (config.mode == "divide") {
            return a / b;
        }
        // At this point config.mode must be "multiply"
        return a * b;
    }
	
	// test: this function(){} will not be parsed
	
    return {
        /**
         * This first adds a and b, and then performs the configured operation on the result and c.
         * @param {Number} a The first number to be added
         * @param {Number} b The second number to be added
         * @param {Number} c The number the result of
         <code>
         a + b
         </code>
         should be divided or multiplied with.
         */
        publicMethod: function(a, b, c){
            Contract.expectNumber(a);
            Contract.expectNumber(b);
            Contract.expectNumber(c);
            Contract.expect(a >= 0 && b >= 0 && c >= 0, "Only positive numbers are allowed");
            var d = a + b;
            return _internalMethod(d, c);
        }
    };
}
