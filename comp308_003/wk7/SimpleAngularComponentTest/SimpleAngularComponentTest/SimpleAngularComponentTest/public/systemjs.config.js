(function (global) {
    // packages tells the System loader how to load
    // when no filename and/ or no extension
    var packages = {
        app: {
            main: './bootstrap.js',
            defaultExtension: 'js'
        },
        //necessary for the newest systemjs module
        rxjs: {
            defaultExtension: 'js'
        },
    };
    // map tells the System loader where to look for things
    // our app is within the app folder
    var map = {
        app: 'app',
        '@angular': 'lib/@angular',
        'rxjs': 'lib/rxjs'
    };
    var ngPackageNames = [
        'common',
        'compiler',
        'core',
        'forms',
        'http',
        'router',
        'platform-browser',
        'platform-browser-dynamic',
    ];
    ngPackageNames.forEach(function (pkgName) {
        packages['@angular/' + pkgName] = {
            main: '/bundles/' + pkgName + '.umd.js',
            defaultExtension: 'js'
        };
    });
    System.config({
        defaultJSExtensions: true,
        transpiler: null,
        packages: packages,
        map: map
    });
})(this);