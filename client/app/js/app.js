angular
    .module("kwik", ['ui.router', 'oc.lazyLoad',
        'ui.bootstrap', 'ngAnimate', 'ngNotificationsBar', 'ngSanitize'
    ])
    .config(['$ocLazyLoadProvider', 'notificationsConfigProvider', function($ocLazyLoadProvider, notificationsConfigProvider) {
        notificationsConfigProvider.setAutoHide(true);
        $ocLazyLoadProvider.config({
            cssFilesInsertBefore: 'ng_load_plugins_before' // load the above css files before a LINK element with this ID. Dynamic CSS files must be loaded between core and theme css files
        });
    }])
    .constant('IMAGEURL', 'http://localhost:3000');
