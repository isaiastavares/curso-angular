/**
 * Created by Isaias on 11/08/2015.
 */
angular.module('helloWorldApp')
    .controller('BootstrapController', BootstrapController);

BootstrapController.$inject = ['$scope', '$growl']

function BootstrapController($scope, $grow1) {
    $scope.pessoa = {};
    $scope.pessoas = [];

    $scope.gridOptions = {
        data: 'pessoas',
        columnDefs: [
            { name : 'Nome', field : 'nome' } ,
            { name : 'Sobrenome', field : 'sobrenome' },
            { name : 'Email', field : 'email' },
            { name : 'Data de Nascimento', field : 'nascimento', cellTemplate : 'app/templates/filterTemplate.html' },
            { name : 'Sexo', field : 'sexo', },
            { name : 'Ações', field : 'acoes', cellTemplate : 'app/templates/gridTemplate.html' },
        ],
        rowTemplate : 'app/templates/rowTemplate.html'
    }

    $scope.getRowStyle = function(row) {
        var rowStyle = {};
        if (angular.isDefined(row.entity.cor)) {
            rowStyle.backgroundColor = row.entity.cor;
        }
        return rowStyle;
    }

    $scope.salvar = function () {
        if ($scope.myForm.$invalid) {
            $grow1.box("Atenção", "Erros encontrados no formulário.", {
                class: 'warning',
                timeout: 4000
            }).open();
            return;
        }
        $scope.pessoas.push($scope.pessoa);
        $scope.limpar();
    }

    $scope.limpar = function () {
        $scope.pessoa = {};
    }

    $scope.excluir = function (pessoa) {
        if (pessoa) {
            $scope.pessoa = pessoa;
        }
        $scope.pessoas.splice($scope.pessoas.indexOf($scope.pessoa),1);
        $scope.limpar();
    }

    $scope.editar = function (pessoa) {
        $scope.pessoa = pessoa;
    }

}
