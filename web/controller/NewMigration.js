import TradeItemDTO from './../dto/tradeItem';

export default class NewMigration {

    constructor($scope, $routeParams, MigrationService) {
        $scope.up = '';
        $scope.title = [];
        $scope.down == '';
        $scope.generate = function(){

            MigrationService.uploadMigration($scope.up,$scope.down,$scope.title).then(res=>{
                console.log(res);
            })
        }


    }


    //$scope.types = BarcodeTypes;

    //$scope.selection = BarcodeTypes[12];


}
