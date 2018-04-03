import {module} from 'angular';
import MyController from './controller/MyController.js';
import NewMigration from './controller/NewMigration.js';
import myControllerHtml from './view/main.html';
import newMigration from './view/newMigration.html';
import * as ngRoute from 'angular-route'
import * as bootstrap from 'angular-ui-bootstrap';

import MigrationService from './services/MigrationService.js';


const app = module('barcode-test',[ngRoute,bootstrap]);

app.config(['$locationProvider', function($locationProvider) {
    $locationProvider.hashPrefix('!');
  }]);

app.controller('MyController', MyController);

app.controller('NewMigration', NewMigration);

app.service('MigrationService',MigrationService);

app.config(function ($routeProvider) {
        $routeProvider.when('/', {
            template:myControllerHtml,
            controller: 'MyController'
        }).when('/action', {
            template:myControllerHtml,
            controller: 'MyController'
        })
        .when('/getVersions', {
            template:myControllerHtml,
            controller: 'MyController'
        }).
        when('/chooseServer', {
            template:myControllerHtml,
            controller: 'MyController'
        }).
        when('/addMigration', {
            template:newMigration,
            controller: 'NewMigration'
        })
        .otherwise({
            redirectTo: '/'
        });
});





export default app;