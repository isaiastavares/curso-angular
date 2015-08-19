/**
 * Created by Isaias on 17/08/2015.
 */
angular.module('helloWorldApp')
    .controller('CadastroProdutoController',[CadastroProdutoController]);

CadastroProdutoController.$inject = ['$scope', '$stateParams', '$rootScope', '$state'];

function CadastroProdutoController($scope, $stateParams, $rootScope, $state) {
    $scope.msg = 'código pessoa = ' + $stateParams.id
    alert($scope.msg);

    /*$rootScope.$on('$stateChangeStart',
        function(event, toState, toParams, fromState, fromParams) {
            alert(event);
        });

    event.preventDefault();*/

    /*$rootScope.$on('$stateChangeSucess',
        function(event, toState, toParams, fromState, fromParams) {
            alert(event);
        });*/

    $rootScope.$on('$stateNotFound',
        function(event, unfoundState, fromState, fromParams) {
            console.log(unfoundState.to);
            console.log(unfoundState.toParams);
            console.log(unfoundState.options);
        });

    $state.go("rota.inexistente");
}