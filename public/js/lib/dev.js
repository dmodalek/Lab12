/**
 * Some development and debugging utilities
 * User: mdiethelm
 */
if (typeof console != 'undefined') {

	if ('dir' in console) {
		window.log = console.log;
		window.info = console.info;
		window.debug = console.debug;
		window.error = console.error;
		window.dir = console.dir;
		window.$log = function($obj) { dir( $obj.toArray() ) };
	} else { // IE
		window.log = function() {
			for (var i = 0, str = ''; i < arguments.length; i++) {
				str += (arguments[i].toString() + ' ');
			}
			console.log(str);
		}

	}

	window.clear = console.clear;
}