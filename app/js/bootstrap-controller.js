/**
 * Created by Isaias on 11/08/2015.
 */
angular.module('helloWorldApp')
    .controller('BootstrapController', BootstrapController);

BootstrapController.$inject = ['$scope', '$growl']

function BootstrapController($scope, $grow1) {
    $scope.pessoa = {};
    $scope.pessoas = [];

    $scope.salvar = function () {
        if ($scope.myForm.$invalid) {
            var obj = {};
            obj.class = 'danger';
            obj.timeout = 4000;
            $grow1.box("Erro", "Existem erros no formulário", obj).open();
            return;
        }
        $scope.pessoas.push($scope.pessoa);
        $scope.limpar();
    }

    $scope.limpar = function () {
        $scope.pessoa = {};
    }

    $scope.excluir = function () {
        $scope.pessoas.splice($scope.pessoas.indexOf($scope.pessoa),1);
        $scope.limpar();
    }

    $scope.editar = function (pessoa) {
        $scope.pessoa = pessoa;
    }

}
