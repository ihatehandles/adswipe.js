requirejs.config({
    baseUrl: '',
    //never includes a ".js" extension since
    //the paths config could be for a directory.
    paths: {
        adswipe: 'scripts/adswipe.js'+'?bust='+(+new Date()),     // prevent cacheing
        jquery: 'bower_components/jquery/dist/jquery.min',
        uaparser: 'bower_components/ua-parser-js/dist/ua-parser.min'
    }
});

// Start the main app logic.
requirejs(['jquery', 'adswipe', 'uaparser'],
function   ($,        adswipe,   UAParser) {

    // enter custom parameters
    adswipe.debug(true);
    adswipe.endpoint('http://api.adswipe.dev.192.168.1.117.xip.io');

    $('.as-init').on('click', function(){
        /* get adswipejs version */
        //adswipe.apiVersion();

        /* get api version */
        // adswipe.apiVersion().then(function(data) {
        //     console.log(data);
        // }, function(error){
        //     console.log(error);
        // });

        /* show ad */
        //adswipe.show(); // enter campaign ID, ie 'CXLdEmaygJZWeVKw5cMW'
    });

    //var parser = new UAParser();
    //console.log(parser.getResult());
});
