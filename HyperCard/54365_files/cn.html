/*global CN, console, window, location, document, Option, jQuery, setTimeout, clearTimeout, clearInterval, setInterval */ /* for jsLint */

/*
 * Conde Nast Digital Core JavaScript
 * @copyright   2008-2010 Conde Nast Digital except where specified. All rights reserved
 */


/*
 * Sets jQuery no conflict;
 */
jQuery.noConflict();


/*
    SECTION: EXTENSIONS TO NATIVE OBJECTS
*/


/*
    Prototypal inheritance, the missing JavaScript method
    Author:    Andrea Giammarchi
    Example:   newObject = Object.make(oldObject);
    Reference: http://webreflection.blogspot.com/2008/10/big-douglas-begetobject-revisited.html
    New version recycles function constructor to cut down on memory consumption
    and is based on Doug Crockford's original prototypal inheritance function
*/
if (typeof Object.make !== 'function') {
    Object.make = function(F) {
        return function(Object) {
            F.prototype = Object;
            return new F();
        };
    }(function() {});
}


/*
    Memoizes a function - this DOES add to the Function.prototype
    @author    Keith Gaughan
    @see       http://talideon.com/weblog/2005/07/javascript-memoization.cfm
*/
Function.prototype.memoize = function() {
    var memo = {},
        that = this,
        obj  = arguments.length > 0 ? arguments[i] : null, // TODO: fails jslint, references 'i' out of scope...
        memoizedFn;

    memoizedFn = function() {
        var args = [],
            i,
            il;

        for (i = 0, il = arguments.length; i < il; i++) {
            args[i] = arguments[i];
        }

        if (!(args in memo)) {
            memo[args] = that.apply(obj, arguments);
        }

        return memo[args];
    };

    memoizedFn.unmemoize = function() {
        return that;
    };

    return memoizedFn;
};

/*
    Unmemoizes a function
*/
Function.prototype.unmemoize = function() {
    CN.debug.info('Attempted to unmemoize a function that was never memoized in the first place');
    return null;
};


/*
    Sugar Arrays (c) Creative Commons 2006
    http://creativecommons.org/licenses/by-sa/2.5/
    Author: Dustin Diaz | http://www.dustindiaz.com
    Reference: http://www.dustindiaz.com/basement/sugar-arrays.html
*/

// IF checks were added by EBS to cover for a bug in jQuery whereby jQuery
// adds bogus event bindings to Array.prototype methods.
// Ticket is here: http://dev.jquery.com/ticket/6355
// When jQuery fixes this bug, these if (!this.splice) checks can be removed.

if (!Array.prototype.forEach) {
    Array.prototype.forEach = function(fn, thisObj) {
        if (!this.splice) {
            return;
        };
        var scope,
            i,
            j;
        scope = thisObj || window;
        for (i = 0, j = this.length; i < j; ++i) {
            fn.call(scope, this[i], i, this);
        }
    };

    Array.prototype.every = function(fn, thisObj) {
        if (!this.splice) {
            return;
        };
        var scope,
            i,
            j;
        scope = thisObj || window;
        for (i = 0, j = this.length; i < j; ++i) {
            if (!fn.call(scope, this[i], i, this)) {
                return false;
            }
        }
        return true;
    };

    Array.prototype.some = function(fn, thisObj) {
        if (!this.splice) {
            return;
        };
        var scope,
            i,
            j;
        scope = thisObj || window;
        for (i = 0, j = this.length; i < j; ++i) {
            if (fn.call(scope, this[i], i, this)) {
                return true;
            }
        }
        return false;
    };

    Array.prototype.map = function(fn, thisObj) {
        if (!this.splice) {
            return;
        };
        var scope,
            a,
            i,
            j;
        scope = thisObj || window;
        a = [];
        for (i = 0, j = this.length; i < j; ++i) {
            a.push(fn.call(scope, this[i], i, this));
        }
        return a;
    };

    Array.prototype.filter = function(fn, thisObj) {
        if (!this.splice) {
            return;
        };
        var scope,
            a,
            i,
            j;
        scope = thisObj || window;
        a = [];
        for (i = 0, j = this.length; i < j; ++i) {
            if (!fn.call(scope, this[i], i, this)) {
                continue;
            }
            a.push(this[i]);
        }
        return a;
    };

    Array.prototype.indexOf = function(el, start) {
        if (!this.splice) {
            return;
        };
        var i,
            j;
        start = start || 0;
        for (i = start, j = this.length; i < j; ++i) {
            if (this[i] === el) {
                return i;
            }
        }
        return -1;
    };

    Array.prototype.lastIndexOf = function(el, start) {
        if (!this.splice) {
            return;
        };
        var i;
        start = start || this.length;
        if (start >= this.length) {
            start = this.length;
        }
        if (start < 0) {
            start = this.length + start;
        }
        for (i = start; i >= 0; --i) {
            if (this[i] === el) {
                return i;
            }
        }
        return -1;
    };
}


/*
 * Remove items in an array. Not included in the above because it's not
 * an official part of the upcoming spec, so its implementation should be
 * checked separately.
 * @see http://ejohn.org/blog/javascript-array-remove/ (http://ejohn.org/blog/javascript-array-remove/#comment-296138)
 */
if (!Array.prototype.remove) {
    Array.prototype.remove = function(from, to) {
        if (!this.splice) {
            return;
        };
        this.splice(from, (to || from || 1) + (from < 0 ? this.length : 0));
        return this.length;
    };
}


/*
    SECTION: CN CORE METHODS
*/


if (typeof CN === 'undefined' || !CN)  {
    /**
     * CN global namespace object
     * @namespace CN global namespace object
     */
    var CN = {};
}


/*
    The following methods are located at the root of CN, because they
    deal with primitives that jQuery does not identify. No other functions
    should be placed at this level.
*/


/**
 * Determines whether or not the provided object is a boolean
 * @param  {mixed}   mixed  The object being testing
 * @return {boolean}        the result
 */
CN.isBoolean = function(mixed) {
    return typeof mixed === 'boolean';
};

/**
 * Determines whether or not the provided object is a date
 * @param  {mixed}   mixed  The object being tested
 * @return {boolean}        the result
 */
CN.isDate = function(mixed) {
    return Object.prototype.toString.call(mixed) === '[object Date]';
};

/**
 * Determines whether or not the provided string is empty
 * @param  {string}  str    The string being tested
 * @return {boolean}        the result
 */
CN.isEmpty = function(str) {
    return !/\S/.test(str || '');
};

/**
 * Determines whether or not the provided object is null
 * @param  {mixed}   mixed  The object being testing
 * @return {boolean}        the result
 */
CN.isNull = function(mixed) {
    return mixed === null;
};

/**
 * Determines whether or not the provided object is a legal number
 * @param  {mixed}   mixed  The object being testing
 * @return {boolean}        the result
 */
CN.isNumber = function(mixed) {
    return typeof mixed === 'number' && isFinite(mixed);
};

/**
 * Determines whether or not the provided object is of type object
 * @param  {mixed}   mixed  The object being testing
 * @return {boolean}        the result
 */
CN.isObject = function(mixed) {
    return typeof mixed === 'object';
};

/**
 * Determines whether or not the provided object is a string
 * @param  {mixed}   mixed  The object being testing
 * @return {boolean}        the result
 */
CN.isString = function(mixed) {
    return typeof mixed === 'string';
};

/**
 * Determines whether or not the provided object is undefined
 * @param  {mixed}   mixed  The object being testing
 * @return {boolean}        the result
 */
CN.isUndefined = function(mixed) {
    return typeof mixed === 'undefined';
};


/*
    SECTION: CN STATIC CLASSES
*/


/**
 * @class       CN URL Object
 * @description Contains methods for dealing with urls, query and hash params
 * @public
 * @author      Paul Bronshteyn
 * @author      Eric Shepherd
 */
CN.url = (function() {
    var
        /**
         * Path Cache Array.
         * @memberOf    CN.url
         * @private
         * @type        object
         */
        pathCache = [];

    /**
     * @scope CN.url
     */
    return {
        /**
         * Retrieves domain name from the url in the form of domain.com
         * @param   {string} [url]  Url to be parsed
         * @return  {string}        domain.com
         */
        domain : function(url) {
            var d = ((url) ? url.replace(/^https*:\/\/|(:|\/).*$/g, '') : location.hostname).split('.'),
                dl = d.length;
            return d.slice(dl - 2, dl).join('.');
        },

        /**
         * Retrieve current site section
         * @return {string} Section name
         */
        section : function() {
             return ((location.pathname.split('/')[1] || '').match(/^[^\.]*$/) || [''])[0];
        },

        /**
        * Returns url secure state
        * @return {boolean}
        */
        isSecure: function() {
            return location.protocol === 'https:';
        },

        /**
         * Get query params as object of key, value pairs or a value of a param passed in.
           If query is not provided, location.search will be used.
           Result will be caches to queryCache variable for faster access on next call.
         * @param   {string}        param     Parameter to lookup
         * @param   {string}        query     Query string to parse
         * @param   {string}        regex     String key representing regular expression in parsers object
         * @return  {object|string}
         */
        params : function(param, query, regex) {
            var result = CN.utils.parseStr((query || location.search), (regex || 'query'));
            return (param) ? result[param] || '' : result;
        },

        /**
         * Retrive current site path
         * @return {array} Path
         */
        path : function() {
            if (pathCache.length === 0) {
                pathCache = location.pathname.match(/([^\/]+)/g) || ['']; // remove leading and trailing slash.
            }
            return pathCache;
        },

        /**
         * Retrieve the URL fragment identifier
         * @return {string|boolean} fragment id
         */
        getFragment : function() {
            return location.hash.substring(1) || false;
        },

        /**
         * Sets the fragment identifier string
         */
        setFragment : function(value) {
            location.hash = value || '';
            return this;
        }
    };
})();


/**
 * @class           CN Utilities
 * @description     Collection of utility helper functions
 * @public
 * @author          Paul Bronshteyn
 * @author          Eric Shepherd
 */
CN.utils = (function() {
    var
        /**
         * Cache object.
         * @description Contains result objects for all parsed string using parseStr function.
         * @memberOf    CN.utils
         * @private
         * @type        object
         */
        cache = {},

        /**
         * Regular expression parsers
         * @memberOf    CN.utils
         * @private
         * @type        object
         */
        parsers = {
            /**
             * Query, hash parser expression.
             * @description Will parse a url string in the form of ?var=value&var1=value#hash=value&hash1=value1 into
                            key value pair object.
             * @memberOf    CN.utils
             * @private
             * @type        RegEx expression
             */
            query : /([^?=&]+)(=([^&]*))?/g,

            /**
             * Hash parser expression.
             * @description Will parse url hash string in the form of
                            ?var=value&var1=value into key value pair object.
             * @memberOf CN.utils
             * @private
             * @type RegEx expression
             */
            hash : /([^#=&]+)(=([^&]*))?/g,

            /**
             * User cookie hash parser expression.
             * @description  Will parse a cookie value in the form of var=value|var1=value|var2=value into
                             key value pair object.
             * @memberOf     CN.utils
             * @private
             * @type         RegEx expression
             */
            usercookie : /([^=|]+)(=([^|]*))?/g
        },

        /**
         * Takes an argument and a goal length and prepends or appends
           padding character to reach that length.
         * @param {string} str A number or string representing a number
         * @param {integer} total A length to make the return string
         * @param {string} padding A number or string to pad with
         * @param {string} dir Direction to pad on
         * @return {string} Padded string
         */
        pad = function(str, total, padding, dir) {
            str     = String(str || '');
            padding = String(padding || ' ');

            var strLen = str.length,
                padLen = padding.length;

            if (strLen >= total) {
                return str;
            }

            while (strLen < total) {
                str = (dir === 'left') ? padding + str : str + padding;
                strLen += padLen;
            }

            return str;
        };

    /**
     * @scope CN.utils
     */
    return {
        /**
         * Parse string using a regular expression and return object of key, value pairs.
         * @param   {string}    query   Query to be parsed
         * @param   {string}    regex   String key representing regular expression in parsers object
         * @return  {object}            Result object of key, value pairs
         */
        parseStr : function(str, regex) {
            if (cache[str+"_"+regex]) {
                return cache[str+"_"+regex];
            }
            cache[str+"_"+regex] = {};

            (str || '').replace(parsers[regex], function($0, $1, $2, $3) {
                cache[str+"_"+regex][$1] = $3;
            });

            return cache[str+"_"+regex];
        },

        /**
         * Intval - Check if variable is an integer
         * @param    {mixed}     mixed   The scalar value being converted to an integer
         * @param    {integer}   [base]  The base for the conversion, a number (from 2 to 36)
         *                               that represents the numeral system to be used (default is base 10)
         * @return   {integer}           Return a number (default is 0)
         */
        intval : function(mixed, base) {
            if (typeof mixed === 'boolean') {
                return (mixed) ? 1 : 0;
            } else if (typeof mixed === 'string') {
                mixed = parseInt(mixed * 1, (base || 10));
                return (isNaN(mixed) || !isFinite(mixed)) ? 0 : mixed;
            } else if (typeof mixed === 'number' && isFinite(mixed)) {
                return Math.floor(mixed);
            }

            return 0;
        },

        /**
         * Trim string.
         * @description  Remove leading and trailing space, tab and new lines characters
         * @param        {string}    str String to be trimmed
         * @return       {string}    Trimmed string
         * @author                   Ariel Flesler
         * @see                      http://flesler.blogspot.com/2008/11/fast-trim-function-for-javascript.html
         */
        trim : function(str) {
            var start = -1,
                end = str.length;
            while (str.charCodeAt(--end) < 33); // TODO: fails jslint - no while block
            while (++start < end && str.charCodeAt(start) < 33); // TODO: fails jslint - no while block
            return str.slice(start, end + 1);
        },

        /**
        * Transliterate string.
        * @description converts extended ascii characters to normal versions
        * @param {string} str String to be transliterated
        * @param {boolean} strip Whether or not to delete unknown characters. default: true
        * @return {string} string
        * @author Daniel Holly Wells
        */
        transliterate : function(str, strip) {
            if (typeof str == "undefined") {
                return "";
            }
            if (typeof strip == "undefined") {
                strip = true;
            }

            str = escape(str)
                       .replace(/%C[0-5]/g       ,'A')
                       .replace(/%C6/g           ,'AE')
                       .replace(/%C7/g           ,'C')
                       .replace(/%C[8-9|A-B]/g   ,'E')
                       .replace(/%C[C-F]/g       ,'I')
                       .replace(/%D[2-8]/g       ,'O')
                       .replace(/%D[9|A-C]/g     ,'U')
                       .replace(/%DD/g           ,'Y')
                       .replace(/%u0178/g        ,'Y')
                       .replace(/%u017D/g        ,'Z')
                       .replace(/%u0160/g        ,'S')
                       .replace(/%E[0-5]/g       ,'a')
                       .replace(/%E6/g           ,'ae')
                       .replace(/%E7/g           ,'c')
                       .replace(/%E[8-9|A-B]/g   ,'e')
                       .replace(/%E[C-F]/g       ,'i')
                       .replace(/%F[2-8]/g       ,'o')
                       .replace(/%F[9|A-C]/g     ,'u')
                       .replace(/%F[D-F]/g       ,'y')
                       .replace(/%u017E/g        ,'z')
                       .replace(/%u0161/g        ,'s')
                       .replace(/%u2014/g        ,'-')
                       .replace(/%u2013/g        ,'-')
                       .replace(/%u201[8-9]/g    ,"'")
                       .replace(/%u201A/g        ,',')
                       .replace(/%u2026/g        ,'...')
                       .replace(/%u201[C-D]/g    ,'"')
                       .replace(/%3F/g           ,'?')
                       .replace(/%21/g           ,'!')
                       .replace(/%26/g           ,'&')
                       .replace(/%25/g           ,'%')
                       .replace(/%24/g           ,'$')
                       .replace(/%5E/g           ,'^')
                       .replace(/%28/g           ,'(')
                       .replace(/%29/g           ,')')
                       .replace(/%7E/g           ,'~')
                       .replace(/%60/g           ,'`')
                       .replace(/%23/g           ,'#')
                       .replace(/%3D/g           ,'=')
                       .replace(/%2C/g           ,',')
                       .replace(/%3C/g           ,'<')
                       .replace(/%2E/g           ,'>')
                       .replace(/%7C/g           ,'|')
                       .replace(/%3A/g           ,':')
                       .replace(/%3B/g           ,';')
                       .replace(/%7D/g           ,'}')
                       .replace(/%7B/g           ,'{')
                       .replace(/%5B/g           ,'[')
                       .replace(/%5D/g           ,']')
                       .replace(/%20/g           ,' ');
            if (strip) {
                str = str.replace(/%u[0-9|A-F][0-9|A-F][0-9|A-F][0-9|A-F]/g, '').replace(/%u[0-9|A-F][0-9|A-F]/g, '').replace(/%[0-9|A-F][0-9|A-F]/g, '');
            } else {
                str = unescape(str);
            }
            return str;
        },

        /**
         * Takes an argument and a goal length and prepends
           padding character to reach that length.
         * @param {mixed} str A number or string representing a number
         * @param {integer} total A length to make the return string
         * @param {mixed} padding A number or string to pad with
         * @return {string} Padded string
         * @uses CN.utils.pad
         */
        padLeft : function(str, total, padding) {
            return pad(str, total, padding, 'left');
        },

        /**
         * Takes an argument and a goal length and appends
           padding character to reach that length.
         * @param {mixed} str A number or string representing a number
         * @param {integer} total A length to make the return string
         * @param {mixed} padding A number or string to pad with
         * @return {string} Padded string
         * @uses CN.utils.pad
         */
        padRight : function(str, total, padding) {
            return pad(str, total, padding, 'right');
        },

        /**
         * URI encode/decode a string
         * @private
         * @param {string} str String to encoded or decoded
         * @param {boolean} [encode] Will encode if set to true, otherwise decode
         * @return {string} Encoded or decoded string
         */
        uriencdec : function(str, encode) {
            return (encode) ? encodeURIComponent(str) : decodeURIComponent(str);
        },

        /**
         * Converts a property array to an object of values
         *
         * @param   {array|object}  arr     An array of key/value objects (or object as fallback)
         * @param   {string}        name    The name to use (defaults to 'name')
         * @param   {string}        value   The value to use (defaults to 'value')
         * @return  {object}                The resulting mapped object
         * @example mapPropertyArray([{'name':'left','value':200},{'name':'top','value':300}]);
         *          returns this object:
         *          { 'top'  : 300, 'left' : 200 }
         */
        mapPropertyArray : function(arr, name, value) {
            name  = name  || 'name';
            value = value || 'value';

            var obj = {};

            if (jQuery.isArray(arr)) {
                jQuery.each(arr, function(i) {
                    obj[arr[i][name]] = arr[i][value];
                });
            } else {
                obj[arr[name]] = arr[value];
            }

            return obj;
        }
    };
})();


/**
 * CN Debug Object
 * @requires    jQuery
 * @class       CN Debug Object
 * @public
 * @constructor
 * @author      Paul Bronshteyn
 */
CN.debug = (function() {
    var
        /**
         * Log Types (error, warn, info, user)
         * @memberOf    CN.debug
         * @private
         * @type        object
         */
        eType = {
            error : { f: 'error', msg: 'ERROR' },
            warn  : { f: 'warn',  msg: 'WARNING' },
            info  : { f: 'info',  msg: 'INFO' },
            user  : { f: 'error', msg: 'USER' }
        },

        /**
         * Log Types (DEV, STAG, PREV, PROD)
         * @memberOf    CN.debug
         * @private
         * @type        object
         */
        eEnv = {
            DEV  : 'Development',
            STAG : 'Staging',
            PREV : 'Preview',
            PROD : 'Production'
        },

        /**
         * Shows error information in console or alert
         * @memberOf    CN.debug
         * @private
         * @param       {string}    type    Error Type
         * @param       {string}    msg     Error message
         * @param       {array}     [args]  Error details
         */
        show = function(type, msg, args) {
            var t = eType[type] || eType.debug;

            if (CN.site.env === 'PROD' && !CN.site.debug) {
                return;
            }

            msg = msg || 'NO MSG';
            args = args || [];

            if (typeof console === 'object') {
                var func = console[t.f] || console.info;

                args.unshift(t.msg, msg);

                for (var i = 0; i < args.length - 1; i += 2) {
                    var part = args.splice(0, i + 1);
                    part.push(' :: ');
                    args = part.concat(args);
                }

                if (console.firebug) {
                    func.apply(this, args);
                } else {
                    console[t.f](args);
                }
            }
        };

        if (CN.url.params("debugOff") === 'true') {
            show = function() { return; };
        }

    /**
     * @scope CN.debug
     */
    return {
        /**
         * Log error messages
         * @param   {string}    msg     Error message
         * @param   {array}     [args]  Error details
         */
        error : function(msg, args) {
            show('error', msg, args);
            return this;
        },

        /**
         * Log warning messages
         * @param   {string}    msg     Warning message
         * @param   {array}     [args]  Warning details
         */
        warn : function(msg, args) {
            show('warn', msg, args);
            return this;
        },

        /**
         * Log info messages
         * @param   {string}    msg     Info message
         * @param   {array}     [args]  Info details
         */
        info : function(msg, args) {
            show('info', msg, args);
            return this;
        },

        /**
         * Log Try/Catch messages
         * @param   {object}        e Error object
         * @param   {array} [args]  Error details
         */
        user : function(e, args) {
            show('user', e.message, [args, e.fileName, e.lineNumber, e.name, e.stack]);
            return this;
        },

        /**
         * Speed test your function
         * @param   {function|string}   f           Function name or it's string representation
         * @param   {array}             [args]      Arguments that will be passed to the function
         * @param   {integer}           [cycles]    How many cycles to run the test (default 10000)
         * @return  {console|alert}                 Prints time in ms in console in FF,Safari,Chrome and alert() on IE
         */
        speedtest : function(f, args, cycles) {
            var x, i;

            if (CN.isNumber(args)) {
                cycles = args;
                args = [];
            }

            if (!jQuery.isArray(args)) {
                args = [];
            }

            cycles = cycles || 10000;

            if (!jQuery.isFunction(f)) {
                CN.debug.error('Not a function', [f]);
                return this;
            }

            if (typeof console === 'object') {
                if (console.time) {
                    x = 'timer' + Math.floor(Math.random() * 1000000);
                    console.time(x);
                    for (i = 0; i < cycles; i++) {
                        f.apply(this, args);
                    }
                    console.timeEnd(x);
                } else {
                    x = new Date() - 0;
                    for (i = 0; i < cycles; i++) {
                        f.apply(this, args);
                    }
                    x = new Date() - x;
                    console.log(x);
                }
            } else {
                x = new Date() - 0;
                for (i = 0; i < cycles; i++) {
                    f.apply(this, args);
                }
                x = new Date() - x;
                alert(x);
            }

            return this;
        },

        /**
         * CN Application Debug Object
         * @class       CN Application Debug Object
         * @constructor
         * @public
         * @author      Paul Bronshteyn
         */
        app : function() {
            var
                /**
                 * Holds setLevel options
                 * @memberOf    CN.debug.app
                 * @private
                 * @type        object
                 */
                options = {},

                /**
                 * Shows error information in console or alert.
                 * @description     Uses setLevel options to display or supress error messages.
                                    Calls parent show() method if setLevel options match
                 * @memberOf        CN.debug.app
                 * @link            CN.debug.show
                 * @private
                 * @param           {string}    type    Error Type
                 * @param           {string}    msg     Error message
                 * @param           {array}     [args]  Error details
                 */
                _show = function(type, msg, args) {
                    if (options[CN.site.env][type]) {
                        show(type, msg, args);
                    }
                };

            /**
             * @scope CN.debug.app
             */
            return {
                /**
                 * Set Levels of debuging messages
                 * @param   {array}     type    Log Types (error, warn, info, debug, user)
                 * @param   {string}    [env]   Enviroment (DEV, STAG, PREV, PROD)
                 */
                setLevel : function(type, env) {
                    if (!type || !jQuery.isArray(type) || type.length === 0) {
                        return this;
                    }
                    env = (env && env in eEnv) ? env : 'DEV';
                    options[env] = type;
                    return this;
                },

                /**
                 * Get Levels of debuging messages
                 * @param   {string}        [env]   Enviroment (DEV, STAG, PREV, PROD)
                 * @return  {object|array}          If enviroment not provided returns reporting object, if provided levels array
                 */
                getLevel : function(env) {
                    return (env) ? options[env] || '' : options;
                },

                /**
                 * Log error messages
                 * @link    CN.debug.error
                 * @param   {string}    msg     Error message
                 * @param   {array}     [args]  Error details
                 */
                error : function(msg, args) {
                    _show('error', msg, args);
                    return this;
                },

                /**
                 * Log warning messages
                 * @link    CN.debug.warn
                 * @param   {string}    msg     Warning message
                 * @param   {array}     [args]  Warning details
                 */
                warn : function(msg, args) {
                    _show('warn', msg, args);
                    return this;
                },

                /**
                 * Log info messages
                 * @link    CN.debug.info
                 * @param   {string}    msg     Info message
                 * @param   {array}     [args]  Info details
                 */
                info : function(msg, args) {
                    _show('info', msg, args);
                    return this;
                },

                /**
                 * Log Try/Catch messages
                 * @link    CN.debug.user
                 * @param   {object}    e       Error object
                 * @param   {array}     [args]  Error details
                 */
                user : function(e, args) {
                    _show('user', e.message, [args, e.fileName, e.lineNumber, e.name, e.stack]);
                    return this;
                }
            };
        }
    };
})();


/**
 * Intercept window errors, log them quietly.
 * @description      The error will be intercepted on all enviroments and suppresed
                     on production enviroment (this should be optional).
 * @name    onerror
 * @event
 * @param  {string}  msg Error message
 * @param  {string}  url URL of the error
 * @param  {integer} line Line number
 * @return {boolean}
 */
if (CN.url.params("debugOff") !== 'true') {
    window.onerror = function(msg, url, line) {
        CN.debug.error(msg, [url, line]);
        return (CN.site.env === 'PROD') ? true : false;
    };
}


/**
 * CN Site Object
 * @class    CN Site Object
 * @public
 * @author   Paul Bronshteyn
 */
CN.site = (function() {
    /** @scope CN.site */
    return {
        /**
         * Site code
         * @type string
         */
        code : '',

        /**
         * Site title
         * @type string
         */
        title : '',

        /**
         * Site name - Lower cased title
         * @type string
         */
        name : '',

        /**
         * Site alias - Upper case title
         * @type string
         */
        alias: '',

        /**
         * Site environment
         * @type string
         */
        env : '',

        /**
        * Site CND Request
        * @type boolean
        */
        cnd: false,

        /**
         * Site debug.
         * @description If set will console debug messages in any enviroment.
                        Use query parameter magdebug to toggle debuger.
         * @type boolean
         */
        debug : !!CN.url.params('magdebug') && !this.cnd,

        /**
         * Site no ads.
         * @description If set will disable ad calls on the page.
         * @type boolean
         */
        noads : !!CN.url.params('magnoads') && !this.cnd,

        /**
         * Test ads.
         * @description If not empty we will use this as dart site and zone
         * @type String
         */
        testads : CN.url.params('dartAdOverride') && !this.cnd,

        /**
         * Initiate site specific object, sets document.domain
         * @param {object} settings S
         * @type function
         */
        init : function(settings) {
            settings = settings || {};
            for (var s in settings) {
                if (settings.hasOwnProperty(s)) {
                    this[s] = settings[s];
                }
            }

            /**
             * @name        CN.site#dynamicName
             * @description Dynamically generated site object based on the name of the site.
                            All site specific code will be in this object.
             * @memberOf    CN.site
             * @type        object
             * @example     CN.site.glamour
             */
            this[this.name] = {};

            this.domain = CN.url.domain();

            try {
                if (this.domain) {
                    document.domain = this.domain;
                }
                CN.debug.info('Document domain was set', [this.domain]);
            } catch(e) {
                CN.debug.error(e);
            }

            CN.debug.info('CN Started', [this.code, this.title, this.env, this.name, this.alias, this.cnd, this.debug, this.noads]);

            return this;
        }
    };
})();


/*********************************************************************************************************************
 The above namespaces need to be in the order listed
 All namespaces below will follow in alphabetical order
*********************************************************************************************************************/

/**
 * @class    CN callwhen
 * Method for evaluating call[before || back] events.
 * @description      Ensures, parses, and triggers all call[before || back] events pass
 *                   in object fincs.
 * @public
 * @author   Russell Munson
 * @example funcs={
                callbefore : [{
                    func: function(){ dosomething();},  //Function to be executed
                    params: ["string",{object}],        //Params to be passed to function
                    scope : CN.dart                     //Scope to execute function in
                    }],
                callbefore : [{
                    func: function(){ dosomething();},
                    params: ["string",{object}],
                    scope : CN.dart
                    }]
                }
 */
CN.callwhen = {

    /* Add function to the callbefore/callback queue
     *
     * @param  {object}  queue State to queue "before||after".
     * @param  {object}  func) Object containing the function, params, and scopes.
     *                   ex:  { func: function(e,str){return str;},
     *                          params:["function running"],
     *                          scope : window}
     * @param  {object}  [queue] CN.callwhen object to add function to, or {}.
     */
    add : function(state,funcO,queue){
        if(!state || !funcO || !funcO["func"]) {return;}
        queue=queue || {},
        state = (state==="after" ? "callback" : "callbefore"),
        funcO= {
            func : funcO["func"],
            params : funcO["params"] || [],
            scope : funcO["scope"] || window
        };

        if(jQuery.isFunction(funcO.func) && CN.isString(state)){
            queue[state] = queue[state] || [],
            queue[state].push(funcO);
        }
        return queue;
    },

    /* Execute the functions in all defined states function
     * @param  {object}  funcs Object containing callwhen events
     * @param  {dom el}  [target] Optional DOM element to bind event to, which defaults to window.
     * @param  {string}  [state] Optional state to execute "before||after||both".  Defaults is both.
     */
    run : function(funcs,target,state){
        if (!CN.isObject(funcs)){
            return;
        }
        if (CN.isString(target)){
            state=target,
            target=window;
        }
        var funcThis,
            funcObj;
        /* Run through the callbefore queue */
        if ((state==="before" || !state) && jQuery.isArray(funcs.callbefore)){
            for (var i=0,len=funcs.callbefore.length; i<len; i++)
            {
                if (CN.isObject(funcs.callbefore[i])){

                    funcObj=funcs.callbefore[i],
                    funcThis=funcObj.scope || window;

                    if(jQuery.isFunction(funcObj.func)){
                        funcObj.func.call(funcThis,funcObj.params || {});
                    }
                }
            }
        }
        if ((state==="after" || !state) && jQuery.isArray(funcs.callback)){
        /* Run through the callback queue */
            for (var i=0, len=funcs.callback.length; i<len; i++)
            {
                if (CN.isObject(funcs.callback[i])){
                    target=target || window,
                    funcObj=funcs.callback[i],
                    funcThis=funcObj.scope || window;

                    if(jQuery.isFunction(funcObj.func)){
                        target.bind(funcObj.event || 'load',function(){
                            funcObj.func.apply(funcThis,funcObj.params || [])
                        });
                    }
                }
            }
        }
    }
};

/**
 * @class       CN.config
 * @description A shortcut to getting and setting page config properties.
 *              Uses CN.page.config object to store and retrieve properties.
 * @public
 * @author      Eric Shepherd
 */
CN.config = (function() {
    var get,
        set,
        listProperties;

    /**
     * @method get
     * @param  {String} prop A config property to get
     * @return {String}      The config property's value
     */
    get = function(prop) {
        return CN.page.config ? CN.page.config[prop] : '';
    };

    /**
     * @method set
     * @param  {Object} Name/value pairs of properties to set
     * @return {Object} CN.config
     */
    set = function(obj) {
        CN.page.config = CN.page.config || {}; // for backwards compatibility
        var prop;

        for (prop in obj) {
            if (obj.hasOwnProperty(prop)) {
                CN.page.config[prop] = obj[prop];
            }
        }

        return this;
    };

    /**
     * @method      listProperties
     * @description Outputs the page's config properties to the console
     */
    listProperties = function() {
        var conf = CN.page.config ? CN.page.config : {},
            prop;

        for (prop in conf) {
            if (conf.hasOwnProperty(prop)) {
                CN.debug.info('CONFIG LIST: ' + prop + ' : ' + conf[prop]);
            }
        }
    };

    return {
        get : get,
        set : set,
        listProperties : listProperties
    };
})();


/**
 * @class    CN Cookie
 * @public
 * @author   Paul Bronshteyn
 */
CN.cookie = (function() {
    var
        /**
         * Cookie Cache Object.
         * @description     Contains all the cookies parsed on the page.
         * @memberOf        CN.cookie
         * @private
         * @type            object
         */
        cookieCache = {};

    /**
     * @scope CN.cookie
     */
    return {
        /**
         * Get the value of a cookie with the given name.
         * @param   {string}    name   Cookie name
         * @return  {string}            Cookie value
         *
         * @example
             Get the value of a cookie:
             CN.cookie.get('the_cookie');
         */
        get : function(name) {
            if (cookieCache[name]) {
                return cookieCache[name];
            }

            var cookies = document.cookie.split('; '),
                cookie  = [],
                c       = 0,
                cl      = cookies.length;

            for (; c < cl; c++) {
                cookie = cookies[c].split('=');
                cookieCache[cookie[0]] = decodeURIComponent(cookie.slice(1).join('='));
                if (cookie[0] === name) {
                    return cookieCache[cookie[0]];
                }
            }

            this.delCache(name);
            return '';
        },

        /**
        * Delete the cookie with the given name.
        * @param {string} name Cookie name
        * @param {object} [options] Cookie options
        *
        * @example
            Delete the cookie:
            CN.cookie.del('the_cookie');

            Delete the cookie set with path:
            CN.cookie.del('the_cookie', { path: '/' });
        */
        del : function(name, options) {
            options = options || {};
            options.expires = -1;
            return this.set(name, '', options);
        },

        /**
         * Create a cookie with the given name and value and other optional parameters.
         * @param   {string}    name        Cookie name
         * @param   {string}    [value]     Cookie value
         * @param   {object}    [options]   Cookie options
         *
         * @example
             Create or set the value of a cookie:
             CN.cookie.set('the_cookie', 'the_value');

             Create a cookie with all available options:
             CN.cookie.set('the_cookie', 'the_value', { expires: 7, path: '/', domain: 'condenast.com', secure: true });

             Delete the cookie:
             CN.cookie.set('the_cookie', '', { expires: -1 });
         */
        set : function(name, value, options) {
            this.delCache(name);

            options = options || {};
            value = value || '';
            options.expires = CN.isDate(options.expires) ? options.expires.toUTCString() : CN.isNumber(options.expires) ? (new Date(+(new Date) + options.expires * 60 * 60 * 1000)).toUTCString() : ''; // TODO: fails jslint - second new Date needs ()?

            var cookie = [name + '=' + encodeURIComponent(value)];

            if (options.expires) {
                cookie.push('expires=' + options.expires);
            }
            if (options.path) {
                cookie.push('path=' + options.path);
            }
            if (options.domain) {
                cookie.push('domain=' + options.domain);
            }
            if (options.secure) {
                cookie.push('secure');
            }

            return document.cookie = cookie.join('; '), cookieCache[name] = value, true; // TODO: crashes jslint with assignment operator in return
        },

        delCache: function(name) {
            delete cookieCache[name];
            return this;
        }
    };
})();


/**
 * @class   CN Date Object
 * @public
 * @author  Eric Shepherd
 * @author  Paul Bronshteyn
 */
CN.date = (function() {
    var
        /**
         * Month name list
         * @memberOf    CN.date
         * @private
         * @type        object
         */
        months = {

            /**
             * English month names
             * @memberOf     CN.date
             * @private
             * @type         array
             */
            en : {
                /**
                 * English long month names
                 * @memberOf CN.date
                 * @private
                 * @type array
                 */
                _long: 'January,February,March,April,May,June,July,August,September,October,November,December'.split(','),

                /**
                 * English short month names
                 * @memberOf CN.date
                 * @private
                 * @type array
                 */
                _short: 'Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec'.split(',')
            },

            /**
             * Spanish month names
             * @memberOf     CN.date
             * @private
             * @type         array
             */
            es : {
                /**
                 * Spanish long month names
                 * @memberOf CN.date
                 * @private
                 * @type array
                 */
                _long: 'enero,febraro,marzo,abril,mayo,junio,julio,agosto,septiembre,octubre,noviembre,deciembre'.split(',')
            }
        },

        days = {

            /**
             * English day of the week names
             * @memberOf    CN.date
             * @private
             * @type        array
             */
            en : {
                /**
                 * English day of the week long names
                 * @memberOf CN.date
                 * @private
                 * @type array
                 */
                _long: 'Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday'.split(','),

                /**
                 * English day of the week short names
                 * @memberOf CN.date
                 * @private
                 * @type array
                 */
                _short: 'Sun,Mon,Tue,Wed,Thu,Fri,Sat'.split(',')
            },

            /**
             * Spanish day of the week names
             * @memberOf CN.date
             * @private
             * @type object
             */
            es: {
                /**
                 * Spanish day of the week long names
                 * @memberOf CN.date
                 * @private
                 * @type array
                 */
                _long: 'el domingo,el lines,el martes,el mi&eacute;rcoles,el jueves,el viernes,el s&aacute;bado'.split(',')
            }
        },


        /**
         * Takes an argument and a goal length, and prepends 0 digits to reach that length
         * @param   {mixed}     arg     A number or string representing a number
         * @param   {number}    len     A length to make the return string
         * @return  {string}            A string containing zero digits plus the original number
         */
        zeroPad = function(arg, len) {
            arg = arg.toString();
            var diff = len - arg.length,
                i;
            for (i = 0; i < diff; i++) {
                arg = '0' + arg.slice(0, arg.length);
            }
            return arg;
        },


        /**
         * Flags for formatting dates, parallels Java simple date format.
         * NOTE: Only works in English for now. We'll need a global language identifier probably at the CN.site level
         * @memberOf        CN.date
         * @private
         * @type            object
         */
        formatFlags = {

                    // G - Era designator, we assume AD for now
            G : function() {
                return 'AD';
            },
                    // y - Year
            y : function(d, number) {
                var y = d.getFullYear().toString();
                y = (number === 2) ? y.substring(y.length - 2, y.length) : zeroPad(y,number);
                return y;
            },

                    // M - Month in year
            M : function(d, number) {
                var m = d.getMonth(),
                    opt = {};
                if (number < 3) {
                    m = zeroPad(m + 1, number);
                } else {
                    opt.form = number === 3 ? 'short' : 'long';
                    m = CN.date.getMonthName(m, opt);
                }
                return m;
            },

                    // w - Week in year
            w : function(d, number) {
                var first = new Date(d.getFullYear(), 0, 1), // January first of the current year
                    w;
                w = Math.ceil((((d - first) / 86400000 /* ms in a day */) + first.getDay() + 1) / 7);
                w = zeroPad(w, number);
                return w;
            },

            // W - Week in month - not currently supported

                    // D - Day in year
            D : function(d, number) {
                var first = new Date(d.getFullYear(), 0, 1),
                    day;
                day = Math.ceil(((d - first) / 86400000 /* ms in a day */) + first.getDay() + 1);
                day = zeroPad(day, number);
                return day;
            },

                    // d - Day in month
            d : function(d, number) {
                return zeroPad(d.getDate(), number);
            },

            // F - Day of week in month - not currently supported

                    // E - Day in week
            E : function(d, number) {
                var opt = {};
                opt.form = number > 3 ? 'long' : 'short';
                return CN.date.getDayName(d.getDay(), opt);
            },

                    // a - AM/PM marker
            a : function(d, number) {
                return d.getHours() < 12 ? 'AM' : 'PM';
            },

                    // H - Hour in day (0-23)
            H : function(d, number) {
                return zeroPad(d.getHours(), number);
            },

                    // k - Hour in day (1-24)
            k : function(d, number) {
                return zeroPad(d.getHours() + 1, number);
            },

                    // K - Hour in am/pm (0-11)
            K : function(d, number) {
                var hours = d.getHours();
                return zeroPad(hours - 12 >= 0 ? hours - 12 : hours, number);
            },

                    // h - Hour in am/pm (1-12)
            h : function(d, number) {
                var hours = d.getHours();
                return zeroPad((hours - 13 >= 0 ? hours - 12 : hours), number);
            },

                    // m - Minute in hour
            m : function(d, number) {
                return zeroPad(d.getMinutes(), number);
            },

                    // s - Second in minute
            s : function(d, number) {
                return zeroPad(d.getSeconds(), number);
            },
                    // S - Millisecond
            S : function(d, number) {
                return zeroPad(d.getMilliseconds(), number);
            }

            // z - Time zone (general) // Not Supported
            // Z - Time Zone (RFC 822 e.g. -0800) // Not Supported
        };


    /**
     * @scope CN.date
     */
    return {

        /**
         * Determines whether or not the provided year is a leap year
         * @param   {number}    year    The year being tested
         * @return  {boolean}           Whether or not the year is a leap year
         */
        isLeapYear : function(year) {
            return !!(year && (year % 4 === 0) && (year % 100 !== 0 || year % 400 === 0));
        },

        /**
         * Get the number of days in the given month
         * @param   {number}    month   Month number (0-11) where January is 0
         * @param   {number}    year    The year
         * @return  {number}            The number of days in the month
         */
        getDaysInMonth : function(month, year) {
            return (month === 1 && this.isLeapYear(year)) ? 29 : [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month] || 0;
        },

        /**
         * Get month name.
         * @description Returns month name for specified month index and language, the language will
                        default to English if not provided.
         * @param       {integer}   month   Month number (0-11) where January is 0, February is 1 and so on
         * @param       {object}    options Language, short or long form
         * @option      {string}    lang    ISO 639-1 language code (default "en")
         * @option      {string}    form    Type of form to use (default "long")
         * @return      {string}            Month name or Empty
         * @link                            http://en.wikipedia.org/wiki/List_of_ISO_639-1_codes
         */
        getMonthName : function(month, options) {
            options = options || {};
            return CN.date.getMonthNames(options)[month] || '';
        },

        /**
         * Get month names array.
         * @description Returns array of month names for specified language
         * @param       {string}    lang    ISO 639-1 language code
         * @return      {array}             Month names or Empty
         * @link                            http://en.wikipedia.org/wiki/List_of_ISO_639-1_codes
         */
        getMonthNames : function(options) {
            options = options || {};
            return months[options.lang || 'en']['_' + (options.form || 'long')] || [];
        },

        /**
         * Get day name.
         * @description Returns day name for specified month index and language; the langauge will
                        default to English if not provided.
         * @param       {number}    day     Day number (0-6) where Sunday is 0
         * @param       {object}    options Language, short or long form
         * @option      {string}    lang    ISO 639-1 language code (default "en")
         * @option      {string}    form    Type of form to use (default "long")
         * @return      {string}            Day name or empty
         * @link                            http://en.wikipedia.org/wiki/List_of_ISO_639-1_codes
         */
        getDayName : function(day, options) {
            options = options || {};
            return CN.date.getDayNames(options)[((day === 7) ? 0 : day)] || '';
        },

        /**
        * Get day of the week names array.
        * @description Returns array of day of week names for specified language
        * @param {object} [options] Language and name options
        * @option {string} lang ISO 639-1 language code (default "en")
        * @option {string} Type of form to use (default "long")
        * @return {array} Month names or Empty array
        * @link http://en.wikipedia.org/wiki/List_of_ISO_639-1_codes
        */
        getDayNames : function(options){
            options = options || {};
            return days[options.lang || 'en']['_' + (options.form || 'long')] || [];
        },

        /**
         * Format a JavaScript date to a readable format
         * For now, this is only a format method. It can be expanded to parse a string into a date later.
         * @description Returns a formatted date
         * @param   {object}    d       A JavaScript date object
         * @param   {string}    pattern A formatting string, per Java's SimpleDateFormat specification
         * @return  {string}            A formatted date string
         * @link                        http://java.sun.com/j2se/1.4.2/docs/api/java/text/SimpleDateFormat.html
         */
        format : function(d, pattern) {
                    // For now, only accepting date objects.
            if (!CN.isDate(d)) {
                CN.debug.warn('date.format() method requires a JavaScript date object to be passed');
                return d;
            }

            var str = '',
                p = function(q) { // Utility function to push into the string we will be returning
                    str += q;
                },
                i,
                il,
                current       = '',
                flagLength    = 1,
                currentToEnd,
                subPattern;
            /// END VAR BLOCK

            if (CN.isString(pattern)) {

                pattern = pattern.split(''); // pattern is now an array since IE can't do String[n]

                for (i = 0, il = pattern.length; i < il; i++) {
                    current = pattern[i];

                            // If there's a flag, call it, else parse literally while accounting for single quotes
                    if (formatFlags[current]) {
                                // Keeps increasing flagLength if letters are repeated and match a flag
                        while (pattern[i + flagLength] === pattern[i]) {
                            flagLength += 1;
                        }
                                // Calls the method for the given flag
                        p(formatFlags[current](d, flagLength));

                    } else {
                                // If we get a single quote
                        if (pattern[i] === '\'') {
                            if (pattern[i + 1] !== '\'') {
                                currentToEnd = pattern.slice(i + 1, pattern.length);
                                subPattern = currentToEnd.slice(0, currentToEnd.indexOf("'"));
                                p(subPattern.join(''));
                                flagLength += (subPattern.length + 1);
                            } else {
                                p("'");
                                flagLength += 1;
                            }

                        } else {
                            p(pattern.slice(i, i + 1).join(''));
                        }
                    }

                    i += (flagLength - 1); // jump i ahead by the number of letters
                    current = ''; // reset
                    flagLength = 1; // reset
                }
            } else { // Fallback to generic toString() representation if no format was passed in
                str = d.toString();
            }

            return str;
        },

        /**
         * Converts an ISO-8601 date (W3C subset) into a JavaScript date
         * http://www.w3.org/TR/NOTE-datetime
         *
         * @param   {String}    d   A date string in ISO-8601 format
         * @return  {Date}          A JavaScript Date object
         */
        isoToDate : function(isoDate) {
            var regex  = /([0-9]{4})(-([0-9]{2})(-([0-9]{2})(T([0-9]{2}):([0-9]{2})(:([0-9]{2})(\.([0-9]+))?)?(Z|(([-+])([0-9]{2}):([0-9]{2})))?)?)?)?/, // TODO: fails jslint - unescaped - at 116
                offset = 0,
                date   = isoDate.match(regex),
                d      = new Date(date[1], 0, 1);

            if (date[3]) {
                d.setMonth(date[3] - 1);
            }
            if (date[5]) {
                d.setDate(date[5]);
            }
            if (date[7]) {
                d.setHours(date[7]);
            }
            if (date[8]) {
                d.setMinutes(date[8]);
            }
            if (date[10]) {
                d.setSeconds(date[10]);
            }
            if (date[12]) {
                d.setMilliseconds(Number('0.' + date[12]) * 1000);
            }
            if (date[14]) {
                offset = (Number(date[16]) * 60) + Number(date[17]);
                offset = offset * ((date[15] == '-') ? 1 : -1);
            }
            offset = offset - d.getTimezoneOffset();
            d.setTime(Number(Number(d) + (offset * 60 * 1000)));

            return d;
        },

        /**
         * Converts a Teamsite date into the standard ISO-8601 format
         * Using timezone offset that should at least give us the right day when the teamsite time is set to midnight.
         *
         * @param   {String}    iwDate  A date in InterWoven Teamsite format (20081204 11:23:34)
         * @return  {String}            A date in ISO-8601 format
         */
        convertIwDateToIso : function(iwDate) {
            var isoDate = '';
            if (CN.isString(iwDate)) {
                isoDate = iwDate.substr(0, 4) + '-' + iwDate.substr(4,2) + '-' + iwDate.substr(6, 2) + 'T' + iwDate.substr(9, 8) + '-05:00';
            }
            return isoDate || '';
        }
    };
})();


/**
 * @class        CN Frame
 * @description  Contains methods for dealing with iFrames.
 * @public
 * @requires     jQuery
 * @author       Paul Bronshteyn
 */
CN.frame = (function($) {
    var
        /**
         * Resize iFrame height to fit content on load.
         * @description This is a private function that is triggered by the onload
                        event of the iFrame. This will also be triggered by the
                        public resize method.
         * @memberOf    CN.frame
         * @private
         * @event
         */
        _resize = function(e) {
            var frame = (e.data && e.data.use) ? e.data.use : this;

            try {
                var body = frame.contentWindow.document.body;
            } catch(e) {
                return CN.debug.user(e, [frame, frame.id]);
            }

            if (typeof e.data === 'undefined') {
                $('iframe', body).bind('load', { use: frame }, _resize);
            }

            if (!$('.textAd', body).length || !$('#adHolder a', body).eq(0).text()) {
                $('#adHolder', body).css({ 'font-size': 0, 'line-height': 0 });
            }

            $(frame).css({
                border : 'none',
                margin : 0,
                height : $(body).css({ overflow: 'hidden', margin: 0, border: 0 }).outerHeight()
            });
        };

    /**
     * @scope CN.frame
     */
    return {
        /**
         * Bind iFframe resize on iFrame load.
         * @description     Binds the load event to the element passed in.
         * @param           {string}    frame   ID or class of the iFrame in jQuery excepted format.
         * @uses            CN.frame._resize
         *
         * @example
             Using element id:
             CN.frame.bindResize('#frame_id');

             Using element class:
             CN.frame.bindResize('.frame_class');

             Using multiple and combinations:
             CN.frame.bindResize('#frame_id, .frame_class');
         */
        bindResize : function(frame) {
            $(frame).bind('load', _resize);
            return this;
        },

        /**
         * Refresh iFrame
         * @description Refreshes an iFrame with the current url or with the url if the
                        param (if provided), resizes the frame onload to fit content.
         * @param       {string,array}  frames      Array, CSV or space-delimitted list of iframe
                                                    classes or ids or mixed
         * @param       {string}        [url]       Url for the iFrame(s) to be refreshed with, defaults to
                                                    refreshing current iFrame url
         * @param       {boolean}       [resize]    Resize iFrame after refresh, default is true
         * @uses        CN.frame._resize
         *
         * @example
             Refresh iFrame:
             CN.frame.refresh('#frame_id');

             Refresh multiple iFrames (comma-separated):
             CN.frame.refresh('#frame_id,.frame1,#frame2');

             Refresh multiple iFrames (space-separated):
             CN.frame.refresh('#frame_id .frame1 #frame2');

             Refresh iFrame with url:
             CN.frame.refresh('#frame_id', 'http://www.example.com');

             Refresh iFrame with url and do not resize:
             CN.frame.refresh('#frame_id', 'http://www.example.com', false);
         */
        refresh : function(frames, url, resize, funcs) {
            frames = (CN.isString(frames)) ? frames.split(/,|\s+/) : ($.isArray(frames)) ? frames : [];
            // frames array empty? exit
            if (!frames.length) {
                return this;
            }

            // shift arguments if resize was ommited
            if(CN.isObject(resize)){
                funcs=resize,resize=true;
            }

            // shift arguments if url and resize were ommited
            if(CN.isObject(url)){
                funcs=url,url='';
            }

            // shift arguments if url was ommited
            if (CN.isBoolean(url)) {
                resize = url;
                url = '';
            }

            // NOTE: == is intentional and checks for values that are null or undefined
            resize = (resize == null) ? true : resize;

            // update each frame
            $.each(frames, function(i, v) {
                if (!/\S/.test(v)) {
                    return true;
                }

                var frame = $(v);
                if (!frame.length) {
                    return true;
                }

                // bind load event
                if (resize) {
                    frame.bind('load', _resize);
                }

                //execute callbefore, and bind callafter
                CN.callwhen.run(funcs,frame);

                url = url || frame[0].src;

                // load url provided or refresh
                // adblock extension throws error, catch it, kill it
                try {
                    frame[0].contentWindow.location.replace(url);
                    CN.debug.info('CN Frame Refresh', [v, url, resize]);
                } catch(e) {
                    CN.debug.user(e, [v, url, resize]);
                }
            });

            return this;
        },

        /**
         * Resize iFrame height to fit content.
         * @description     Binds the load event to the element passed in and then triggers it.
         * @param           {string}    frame   ID or class of the iFrame in jQuery excepted format.
         * @uses            CN.frame._resize
         *
         * @example
             Using element id:
             CN.frame.resize('#frame_id');

             Using element class:
             CN.frame.resize('.frame_class');

             Using multiple and combinations:
             CN.frame.resize('#frame_id, .frame_class');
         */
        resize : function(frame) {
            $(frame).bind('load', _resize).triggerHandler('load');
            return this;
        }
    };
})(jQuery);

/**
 * @class       CN Internal Object
 * @description Handles functionality for non-production environments.
 * @public
 * @author      Eric Shepherd
 */
CN.internal = (function() {
    return {
        getTeamsiteServer : function() {
            return 'deprecated';
        }
    };
})();


/**
 * @class       CN.media
 * @description Methods to handle various types of media
 * @public
 * @author      Eric Shepherd
 */
CN.media = (function($) {

    var embedSwf,
        embedSwfWithTimeout;

    /**
     * Makes a call to swfobject to embed a swf movie with the given
     * parameters.
     *
     * @method embedSwf
     * @private
     * @param args {Array} An array of params for the swfobject call
     */
    embedSwf = function(args) {
        swfobject.embedSWF.apply(window, args)
    };

    /**
     * Sets a timer to allow dynamically loaded swfobject.js to be parsed
     * before running code dependent on it.
     *
     * @method embedSwfWithTimeout
     * @private
     * @param args {Array} An array of params for the swfobject call
     */
    embedSwfWithTimeout = function(args) {
        setTimeout(function() {
            embedSwf(args)
        }, 200);
    };

    /**
     * @scope CN.media
     */
    return {

        /**
         * Embeds a Flash movie using swfobject.js, loading it if it's not
         * already included on the page.
         *
         * @public
         * @method swf
         * @param  args {Array} An array of params for the swfobject call
         */
        swf : function(args) {
            if (typeof swfobject === 'undefined') {
                CN.debug.info('Dynamically loading swfobject.js - consider placing the script call in the site JSP if load time/FOUC is an issue.');
                $.getScript('/js/cn-presentation/swfobject.js', function() {
                    embedSwfWithTimeout(args);
                });
            } else {
                CN.debug.info('swfobject.js already loaded or being loaded on page, using it to render mediaItem');
                embedSwf(args);
            }
        }
    };
})(jQuery);


/**
 * @class       CN.modules
 * @description Holds page module APIs and provides methods for interacting with modules
 * @public
 * @author      Eric Shepherd
 */
CN.modules = (function() {
    CN.customEvents = CN.customEvents || {};
    CN.customEvents.moduleLoaded = {};

    var register,
        loaded = [];

    register = function(moduleName) {
        CN.modules.loaded.push(moduleName);
        jQuery(window).trigger('CN.customEvents.moduleLoaded.' + moduleName);
    };

    return {
        register : register,
        loaded   : loaded
    }
})();


/**
 * @class       CN.page
 * @description Page level information
 * @public
 * @author      Paul Bronshteyn
 * @author      Eric Shepherd
 */
CN.page = (function() {
    return {
        config : {},

        /**
         * The section of the site we are in
         * @memberOf CN.page
         * @public
         * @return {String} The current site section, or empty
         */
        section : function() {
             return ((location.pathname.split('/')[1] || '').match(/^[^\.]*$/) || [''])[0];
        },

        /**
         * The subsection of the site we are in, if applicable
         * @memberOf CN.page
         * @public
         * @return {String} The subsection of the site, or empty
         */
        subsection : function() {
            return ((location.pathname.split('/')[2] || '').match(/^[^\.|(\d{4})]*$/) || [''])[0];
        },

        /**
         * The content slug of the current page, if applicable
         * @memberOf CN.page
         * @public
         * @return {String} The current page's slug, or empty
         */
        slug : function() {
            return ((location.pathname.split('/')[location.pathname.split('/').length-1] || '').match(/^[^\.]*$/) || [''])[0];
        }
    };
})();


/**
 * @description     Reg specific methods.  If your function is used on
 *                  registration, and it doesn't fit anywhere else... then it belongs here.
 * @class           CN Reg
 * @public
 * @author          Paul Bronshteyn
 * @author          Russell Munson
 */
CN.reg = (function($) {

    var form     = {},
        reqClass = "rqrd";

    function formBindings() {
        form.bind('submit', function() {
            var bdayfield = $('#bdayfield', this);
            if (bdayfield.length && $('#birthYear', this).val() != 'YYYY') {
                bdayfield.val([$('#birthMonth', this).val(), $('#birthDay', this).val(), $('#birthYear', this).val()].join('/'));
            }
        });
    }

    return {

        /**
         * Set the form context for the usage in CN.reg
         *
         * @public
         * @param {String} fid Takes jQuery formatted selector pointing to form
         * @returns {Object} Returns CN.reg for easy command chaining.
         */
        setForm : function(fid){
            form = $(fid);
            formBindings();
            return this;
        },

        /**
         * Return for jQuery object containing the form currently in context
         *
         * @public
         * @returns {Object} jQuery object conaining form currently in context
         */
        getForm : function(){
            return form;
        },

        /**
         * Concatenates values of separate birthday fields with a '/' deliminator
         *
         * @public
         */
        setBirthday : function() {
            var bdayfield = $('#bdayfield', form);
            if (bdayfield.length) {
                var fields = bdayfield.val().split('/');
                $('#birthMonth', form).val(fields[0]);
                $('#birthDay', form).val(fields[1]);
                $('#birthYear', form).val(fields[2]);
            }
        },

        /**
         * Add css class indicator for required fields. Assumes
         * standard regForm markup, with parent .row containing class defined in reqClass
         *
         * @public
         */
        setReq : function(el) {
            $(el).parents('.row').addClass(reqClass);
        },

        /**
         * Remove css class indicator for required fields. Assumes
         * standard regForm markup, with parent .row containing class defined in reqClass
         *
         * @public
         */
        removeReq : function(el) {
            $(el).parents('.row').removeClass(reqClass);
        },

        /**
         * Return class name for marking required fields in a reg form
         *
         * @public
         */
        getReqClass : function() {
            return reqClass;
        }
    };
})(jQuery);


/**
 * @class    CN Search
 * @public
 * @author   Paul Bronshteyn
 */
CN.search = (function() {
    var
        /**
         * RegEx checks to validate search string
         * @memberOf CN.search
         * @private
         */
        checks = {
            alphanum : /[^0-9a-zA-Z\s]/g,
            script   : /<script(.|\s)*?\/script>/g
        };

    /**
     * @scope CN.search
     */
    return  {
        /**
         * Generate search path.
         * @description     Sanitizes the string first, replaces all spaces with -
         * @param           {string}    keywords    Search keywords
         * @return          {string}                Sanitized search path
         * @uses            CN.search.sanitize
         */
        path : function(keywords) {
            return this.sanitize(keywords).replace(/\s+/g, '-');
        },

        /**
         * Sanitize query string.
         * @description     Remove &lt;script/&gt; tags to prevent XSS and all non-alpha numeric characters.
         * @param           {string}    keywords    Search keywords
         * @return          {string}                Sanitized keywords
         * @uses            CN.utils.trim
         */
        sanitize : function(keywords) {
            return CN.utils.trim(keywords || '').replace(checks.script, '').replace(checks.alphanum, '');
        }
    };
})();


/**
 * @class    CN User
 * @public
 * @author   Paul Bronshteyn
 */
CN.user = (function() {

    /**
     * @scope CN.user
     */
    return {

        /**
         * Determine if the user is logged in?
         * @return  {boolean}
         * @uses    CN.cookie.get
         */
        isLoggedIn : function() {
            return CN.cookie.get('amg_user_record') && CN.cookie.get('amg_user');
        },

        /**
        * Determine if user has confirmed their registration
        * @return {boolean}
        * @uses CN.utils.parseStr
        * @uses CN.cookie.get
        */
        isConfirmed : function() {
            return CN.utils.parseStr(CN.cookie.get('amg_user_record'), 'usercookie').conf === 'true';
        },

        /**
         * Get logged in username
         * @return  {string}    Username
         * @uses    CN.utils.parseStr
         * @uses    CN.cookie.get
         */
        username : function() {
            return CN.utils.parseStr(CN.cookie.get('amg_user_record'), 'usercookie').username || '';
        },

        /**
         * Get user id
         * @return  {string}    id
         * @uses    CN.utils.parseStr
         * @uses    CN.cookie.get
         */
        userid : function() {
            return CN.utils.parseStr(CN.cookie.get('amg_user_record'), 'usercookie').uid || 0;
        }
    };
})();


/**
 * @description     Methods invloving geo-location, states, provinces, countries... anything
 *                  world oriented
 * @class           CN World
 * @public
 * @author          Paul Bronshteyn
 * @author          Russell Munson
 */
CN.world = (function($) {

    var
        states = {
            msg : 'Select your',

            us : {
                desc: 'state',
                code: 'AL,AK,AZ,AR,CA,CO,CT,DE,DC,FL,GA,HI,ID,IL,IN,IA,KS,KY,LA,ME,MD,MA,MI,MN,MS,MO,MT,NE,NV,NH,NJ,NM,NY,NC,ND,OH,OK,OR,PA,RI,SC,SD,TN,TX,UT,VT,VA,WA,WV,WI,WY,AE,AA,AP'.split(','),
                name: 'Alabama,Alaska,Arizona,Arkansas,California,Colorado,Connecticut,Delaware,District of Columbia,Florida,Georgia,Hawaii,Idaho,Illinois,Indiana,Iowa,Kansas,Kentucky,Louisiana,Maine,Maryland,Massachusetts,Michigan,Minnesota,Mississippi,Missouri,Montana,Nebraska,Nevada,New Hampshire,New Jersey,New Mexico,New York,North Carolina,North Dakota,Ohio,Oklahoma,Oregon,Pennsylvania,Rhode Island,South Carolina,South Dakota,Tennessee,Texas,Utah,Vermont,Virginia,Washington,West Virginia,Wisconsin,Wyoming,Armed Forces Europe,Armed Forces Americas,Armed Forces Pacific'.split(',')
            },

            ca : {
                desc: 'province',
                code: 'AB,BC,MB,NB,NL,NT,NS,NU,ON,PE,QC,SK,YT'.split(','),
                name: 'Alberta,British Columbia,Manitoba,New Brunswick,Newfoundland and Labrador,Northwest Territories,Nova Scotia,Nunavuta,Ontario,Prince Edward Island,Quebec,Saskatchewan,Yukon'.split(',')
            }
        },

        /**
         * Defaults the form context for the usage in CN.world to the form currently
         * in context for CN.reg.
         *
         * @protected
         * @returns {Object} Returns jQuery object containing a form
         * @see CN.reg.getForm
         */
        form = function() {
            return CN.reg.getForm();
        };

    return {

        /**
         * Set the form context for the usage in  CN.reg
         *
         * @public
         * @param {String} fid Takes jQuery formatted selector pointing to form
         * @returns {Object} Returns CN.reg for easy command chaining.
         */
        setForm : function(fid) {
            form = $(fid);
            return this;
        },

        /**
         * Event that handles coordination between the field containing the currently
         * selected country value, and the field #state which lists the states/provinces
         * currently supported by CN Digital reg forms.  State field is disabled for non-supported
         * nations
         *
         * @type Event
         * @public
         */
        setState : function() {
            var stateField = $('#state', form),
                zipField = $("#zip", form),
                selection = this.value.toLowerCase();

            if (!(selection in states)) {
                stateField.attr({disabled: 'true'});
                zipField.attr({disabled: 'true'}).data("val",zipField[0].value).val("");
                stateField[0][0].selected = true;
                CN.reg.removeReq("#zip, #state");
            } else {
                CN.reg.setReq("#zip, #state");
                zipField[0].value = (zipField.attr({disabled: ''}).data("val") || zipField[0].value);
                var choice = stateField.children("[selected]").val() || false;
                stateField.empty();
                stateField.attr('disabled', '')[0][0] = new Option(states.msg + ' ' + states[selection].desc, '');
                $.each(states[selection].code, function(i) {
                    stateField[0][i + 1] = new Option(states[selection].name[i], this);
                    if (choice && choice == this) { // TODO: is this == intentional?
                        stateField[0][i + 1].selected = true;
                    }
                });
            }
        }
    };
})(jQuery);


/*
    SECTION: CN INSTANTIABLE CLASSES
*/


/**
 * Interface creation and verification methods
 * @class Interface
 * @constructor
 * @author Ross Harmes and Dustin Diaz, from Pro JavaScript Design Patterns
 *
 * @param name    {String} The name of the interface. Preferable to use IName convention.
 * @param methods {Array}  The methods which need to be implemented by the child classes.
 */
CN.Interface = function(name, methods) {
    var i,
        il;
    if (arguments.length !== 2) {
        throw new Error('CN.Interface constructor called with ' + arguments.length + ' arguments, but expected exactly 2');
    }
    this.name = name;
    this.methods = [];
    for (i = 0, il = methods.length; i < il; i++) {
        if (typeof methods[i] !== 'string') {
            throw new Error('CN.Interface constructor expects method names to be passed in as strings');
        }
        this.methods.push(methods[i]);
    }
};


/**
 * Verifies that a class implements a given interface.
 * @method ensureImplements
 * @static
 *
 * @param object {Object} Any object to verify
 */
CN.Interface.ensureImplements = function(object) {
    var i,
        il,
        inter,
        j,
        jl,
        method;
    if (arguments.length < 2) {
        throw new Error('Static method CN.Interface.ensureImplements called with ' + arguments.length + ' arguments, but expected at least 2');
    }
    for (i = 1, il = arguments.length; i < il; i++) {
        inter = arguments[i];
        if (inter.constructor !== CN.Interface) {
            if (jQuery.browser.safari && jQuery.browser.version < 500) {
                // do nothing - safari 2 can't handle this constructor check, this is a patch fix for now
            } else {
                throw new Error('Static method CN.Interface.ensureImplements expects arguments two and above to be instances of CN.Interface.');
            }
        }
        for (j = 1, jl = inter.methods.length; j < jl; j++) {
            method = inter.methods[j];
            if (!object[method] || typeof object[method] !== 'function') {
                throw new Error('Static method CN.Interface.ensureImplements: object does not implement the ' + inter.name + ' interface. Method ' + method + ' was not found.');
            }
        }
    }
};


/**
 * Creates an observable object
 * @class Observer
 * @constructor
 */
CN.Observer = function(label) {
    /**
     * @property
     * @static
     */
    this.fns = [];
    /**
     * @property
     * @static
     */
    this.label = label || null;
};

/**
 * Holds the list of fired observers which provided a label at contruction time
 * @property
 * @static
 * @memberOf CN.Observer
 */
CN.Observer.haveFired = [];

CN.Observer.prototype = {

    /**
     * Subscribes to an observable event
     * @method subscribe
     *
     * @param fn {Function} A function to execute when the subscribed event fires
     */
    subscribe : function(fn) {
        this.fns.push(fn);
    },

    /**
     * Unsubscribes to an observable event
     * @method unsubscribe
     *
     * @param fn {Function} A function to remove from those executed when the subscribed event fires
     */
    unsubscribe : function(fn) {
        this.fns = this.fns.filter(
            function(el) {
                if (el !== fn) {
                    return el;
                }
            }
        );
    },

    /**
     * Executes the functions bound to the observable
     * @method fire
     *
     * @param o     {Object} Parameters to pass to the functions when they are called
     * @param scope {Object} Optional scope to execute function within, defaults to window
     */
    fire : function(o, thisObj) {
        var scope = thisObj || window;
        this.fns.forEach(function(el) {
            el.call(scope, o);
        });
        if (this.label && CN.Observer.haveFired.indexOf(this.label) === -1) {
            CN.Observer.haveFired.push(this.label);
        }
    }
};


/**
 * Creates a timer
 * Adapted from GNU licensed JavaScript Timer
 * Original API Docs: <http://abcoder.com/wp-content/uploads/2008/05/jstimer-api.html>
 * Pass in the milliseconds to wait and the callback function to assign.
 * Timer functions are chainable, and can be started, stopped, paused, resumed and restarted.
 * @class Timer
 * @constructor
 *
 * @param millis   {Number}   Milliseconds for the timer
 * @param callback {Function} A callback to execute each time the interval is reached
 */
CN.Timer = function(millis, callback) {
    this.interval = millis;
    this.timer = null;
    this.callbacks = [];
    this.multipliers = [];
    this.tickCounts = [];
    this.canRun = [];
    this.stoppedThreads = 0;
    this.shouldRunOnce = false;
    this.startedAt = -1;
    this.pausedAt = -1;
    this.addCallback(callback);
    return this;
};

CN.Timer.prototype = {

    preset : function() { // called from start()
        this.stoppedThreads = 0;
        this.startedAt = -1;
        this.pausedAt = -1;
        for (var i = 0, il = this.callbacks.length; i < il; i++) {
            this.canRun[i] = true;
            this.tickCounts[i] = 0;
        }
    },

    ticks : function(initInterval) {
        var that = this,
            i,
            il;
        for (i = 0, il = this.callbacks.length; i < il; i++) {
            if (typeof this.callbacks[i] === 'function' && this.canRun[i]) {
                this.tickCounts[i]++;
                if (this.tickCounts[i] === this.multipliers[i]) {
                    this.tickCounts[i] = 0;
                    if (this.runOnce()) {
                        this.canRun[i] = false;
                        this.stoppedThreads++;
                    }
                    window.setTimeout(that.callbacks[i], 0);
                }
            }
        }
        if (this.runOnce() && this.stoppedThreads === this.callbacks.length) {
            this.stop();
        }
        if (typeof initInterval === 'number') {
            this.stop().start(null, true);
        }
    },

    runOnce : function(isRunOnce) {
        if (typeof isRunOnce === 'undefined') {
            return this.shouldRunOnce;
        } else if (typeof isRunOnce === 'boolean') {
            this.shouldRunOnce = isRunOnce;
        } else {
            CN.logger.getInstance().log.error('Invalid argument for runOnce');
        }
        return this;
    },

    /**
     * Resets the interval to the specified time or returns the current interval setting
     * @method getSetInterval
     *
     * @param millis {Number} Milliseconds to change the timer's interval to
     *
     * @return {Mixed} Either the current interval or the timer object itself after resetting the interval
     */
    getSetInterval : function(millis) {
        if (typeof millis === 'undefined') {
            return this.interval;
        } else if (typeof millis === 'number') {
            this.interval = Math.floor(millis);
        }
        return this;
    },

    /**
     * Stops the timer.
     * @method stop
     */
    stop : function(isPausing) {
        if (this.timer) {
            if (!isPausing) {
                this.pausedAt = -1;
            }
            try {
                window.clearInterval(this.timer);
            } catch(e) {
            }
            this.timer = null;
        }
        return this;
    },

    isStopped : function() {
        return ((this.timer === null) && !this.isPaused());
    },

    /**
     * Starts the timer
     * @method start
     */
    start : function(initialInterval, withoutPreset) { // don't use params when calling
        var tempInterval,
            that = this;

        if (this.isPaused()) {
            return this.resume();
        }
        if (!this.isStopped()) {
            return this;
        }
        if (!withoutPreset) {
            this.preset();
        }
        tempInterval = this.interval;
        if (typeof initialInterval === 'number') {
            tempInterval = initialInterval;
        }
        this.timer = window.setInterval(function() {
            that.ticks(initialInterval);
        }, tempInterval);
        this.startedAt = new Date().getTime();
        this.startedAt -= (this.interval - tempInterval);
        return this;
    },

    /**
     * Pauses the timer, without resetting. Use resume() to restart playing.
     * @method pause
     */
    pause : function() {
        if (this.timer) {
            this.pausedAt = new Date().getTime();
            this.stop(true);
        }
        return this;
    },

    isPaused : function() {
        return (this.pausedAt >= 0);
    },

    /**
     * Resumes playing a paused timer
     * @method resume
     */
    resume : function() {
        if (this.isPaused()) {
            var tempInterval = this.interval - ((this.pausedAt - this.startedAt) % this.interval);
            this.pausedAt = -1;
            this.start(tempInterval, true);
        }
        return this;
    },

    restart : function() {
        return this.stop().start();
    },

    /**
     * Adds a callback to the array to be executed at the timer's interval
     * @method addCallback
     */
    addCallback : function(callback, n) {
        if (typeof callback === 'function') {
            this.callbacks.push(callback);
            if (typeof n === 'number') {
                n = Math.floor(n);
                this.multipliers.push(n < 1 ? 1 : n);
            } else {
                this.multipliers.push(1);
            }
            this.tickCounts.push(0);
            this.canRun.push(true);
        }
        return this;
    },

    clearCallbacks : function() {
        this.callbacks.length = 0;
        this.multipliers.length = 0;
        this.canRun.length = 0;
        this.tickCounts.length = 0;
        this.stoppedThreads = 0;
        return this;
    }
};


/**
 * DOM-related methods
 * @class dom
 * @static
 */
CN.dom = CN.dom || {};


/**
 * Temporary storage for DOM elements
 * @property storage
 * @static
 */
CN.dom.storage = {
    activeClass   : 'active',
    inactiveClass : 'inactive',
    innerTag      : 'span'
};


/**
 * Removes an element temporarily from the document tree ('activating' a tab, for example, by removing its link)
 * @method activateElement
 *
 * @param el      {Node}   A standard DOM element
 * @param storage {Object} A temporary storage variable
 * @param klass   {String} An optional class name to apply
 *
 * @return {Object} The storage variable, now with the element added
 */
CN.dom.storage.activateElement = function(el, storage, klass) {
    var oldLink,
        newLink,
        newEl;

            // Uses the default class name unless one is provided
    klass = klass || this.activeClass;

            // If there is a link present in the element
    if (el.getElementsByTagName('a').length > 0) {

                // Stores the link - Note that the cloning of the element is
                // because of an IE bug where the links get frozen on the hover
                // state. Creating a new element altogether fixes this bug. For
                // good browsers, we can just remove the link to storage.
        if (jQuery.browser.msie || jQuery.browser.safari) {
            oldLink = jQuery(el.getElementsByTagName('a')[0]);
            newLink = oldLink.clone(true);
            storage = jQuery(newLink).get()[0];
            oldLink.remove();
        } else {
            storage = el.removeChild(el.getElementsByTagName('a')[0]);
        }

        jQuery(el).addClass(klass);

                // Creates a new span to hold the contents and aid in styling
        newEl = document.createElement(this.innerTag);
        newEl.innerHTML = storage.innerHTML;

                // Appends the span to the element and returns the storage variable reference
        el.appendChild(newEl);
        return storage;
    }
};


/**
 * Reinserts an element temporarily from the document tree
 * @method deactivateElement
 * @static
 *
 * @param el      {Node}   A standard DOM element
 * @param storage {Object} A temporary storage variable
 * @param klass   {String} An optional class name to apply
 */
CN.dom.storage.deactivateElement = function(el, storage, klass) {

            // Uses the default class name unless one is provided
    klass = klass || this.activeClass;

            // If there is a span inside the element
    if (el.getElementsByTagName(this.innerTag).length > 0) {

                // Gets the span element, remove it and the class name, and add back what is in storage
        var children = el.getElementsByTagName(this.innerTag);
        el.removeChild(children[0]);
        el.appendChild(storage);

        jQuery(el).removeClass(klass);

    }
};

/**
 * Queues up function calls. Pass it a string of the function name along with an array of
 * args and it will execute those functions when calling the execute() method.
 * Used for Omniture on forums to overcome problems with ordering of script includes.
 * @todo Add support for multiple queues. Any way to remove the eval from this?
 * @param  {mixed}   mixed  The object being tested
 * @return {boolean}        the result
 */
CN.functionQueue = (function() {
    var q = [];

    return {

        /**
         * Add functions to a queue to execute later.
         * @param   {string} [f] Function to call
         * @param   {array} [a] Array of args to pass to function.
         * @param {string} [qId] Not implemented but would be used to support multiple queues of functions.
         */
        addToQueue : function (f, a, qId) {
            var temp = {fName:f, args:a};
            q.push(temp);
        },

        /**
         * Executes functions in the queue.
         * @param   {string} [qId] Note implemented but would execute functions in a specific queue. Would allow for multiple queues.
         */
        execute : function (qId) {
            var l = q.length,
                i,
                tempF;

            for (i=0; i<l; i++) {
                tempF = eval(q[i].fName);
                tempF.apply(tempF, q[i].args);
            }
        }
    };
})();


/*
    INTERFACE DEFINITIONS
*/
CN.IDoc = new CN.Interface('IDoc', ['getId', 'getTitle', 'getKeywords', 'getDocType', 'hasComments', 'hasRatings']);

/*
    Equalizes MAGNET and CN for backward compatibility/interoperability
*/
var MAGNET = CN;
