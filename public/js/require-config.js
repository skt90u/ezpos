'use strict';

require.config({

    // baseUrl: the root path to use for all module lookups. 
    baseUrl: '/js',
    // paths: path mappings for module names not found directly under baseUrl. 
    //        The path settings are assumed to be relative to baseUrl, unless 
    //        the paths setting starts with a "/" or has a URL protocol in it 
    //        ("like http:"). 
    //        Using the above sample config, 
    //        "some/module"'s script tag will be src="/another/path/some/v1.0/module.js"
    paths: {
        'angular': 'bower_components/angular/angular',
        'angular-route': 'bower_components/angular-route/angular-route',
        'angularAMD': 'bower_components/angularAMD/angularAMD'
    },
    // bundles: Introduced in RequireJS 2.1.10: allows configuring multiple 
    //          module IDs to be found in another script. Example:

    // shim: Configure the dependencies, exports, and custom initialization for 
    //       older, traditional "browser globals" scripts that do not use define() 
    //       to declare the dependencies and set a module value. 
    //       *** Important optimizer notes for "shim" config
    shim: {
        'angular' : {'exports' : 'angular'},
        'angularAMD': ['angular'], 
        'angular-route': ['angular']
    }, 
    // map: For the given module prefix, instead of loading the module with the 
    //      given ID, substitute a different module ID.
    //      There is also support for a "*" map value which means "for all modules 
    //      loaded, use this map config". If there is a more specific map config, 
    //      that one will take precedence over the star config.
    
    // config: There is a common need to pass configuration info to a module. 
    //         That configuration info is usually known as part of the application, 
    //         and there needs to be a way to pass that down to a module. In RequireJS, 
    //         that is done with the config option for requirejs.config(). Modules can 
    //         then read that info by asking for the special dependency "module" and 
    //         calling module.config(). 
    
    // packages: configures loading modules from CommonJS packages. See the packages 
    //           topic for more information.
    
    // nodeIdCompat: Node treats module ID example.js and example the same. By default 
    //               these are two different IDs in RequireJS. If you end up using 
    //               modules installed from npm, then you may need to set this config 
    //               value to true to avoid resolution issues. Available in 2.1.10 and greater.
    
    // waitSeconds: The number of seconds to wait before giving up on loading a script. 
    //              Setting it to 0 disables the timeout. 
    //              The default is 7 seconds.       

    // context: A name to give to a loading context. This allows require.js to load multiple 
    //          versions of modules in a page, as long as each top-level require call 
    //          specifies a unique context string. To use it correctly, see the Multiversion 
    //          Support section.
    
    // deps: An array of dependencies to load. Useful when require is defined as a config 
    //       object before require.js is loaded, and you want to specify dependencies to 
    //       load as soon as require() is defined. Using deps is just like doing a require([]) call, 
    //       but done as soon as the loader has processed the configuration. It does not block 
    //       any other require() calls from starting their requests for modules, it is just a way 
    //       to specify some modules to load asynchronously as part of a config block.
    
    // callback: A function to execute after deps have been loaded. Useful when require is 
    //           defined as a config object before require.js is loaded, and you want to 
    //           specify a function to require after the configuration's deps array has been loaded.
    //callback:function(){console.log('callback')},
    // enforceDefine: If set to true, an error will be thrown if a script loads that does not 
    //                call define() or have a shim exports string value that can be checked. See Catching 
    //                load failures in IE for more information.
          
    // xhtml: If set to true, document.createElementNS() will be used to create script elements.
    
    // urlArgs: Extra query string arguments appended to URLs that RequireJS uses to fetch resources. 
    //          Most useful to cache bust when the browser or server is not configured correctly. 
    //          Example cache bust setting for urlArgs: "bust=" +  (new Date()).getTime()
    
    // scriptType: Specify the value for the type="" attribute used for script tags inserted into 
    //             the document by RequireJS. Default is "text/javascript". To use Firefox's 
    //             JavaScript 1.8 features, use "text/javascript;version=1.8".
    //scriptType: "text/javascript",
    // skipDataMain: Introduced in RequireJS 2.1.9: If set to true, skips the data-main attribute 
    //               scanning done to start module loading. Useful if RequireJS is embedded in a 
    //               utility library that may interact with other RequireJS library on the page, 
    //               and the embedded version should not do data-main loading.            
});

require([
    'angular',
    'app'
    ], function(angular, app) {
        var $html = angular.element(document.getElementsByTagName('html')[0]);
        angular.element().ready(function() {
            // bootstrap the app manually
            angular.bootstrap(document, ['app']);
        });
    }
);