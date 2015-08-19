/**
 * Created by Isaias on 18/08/2015.
 */
angular.module('oobj-directives')
    .directive('oobjInputText', oobjInputText);

function oobjInputText($rootScope) {
    return {
        restric: 'E',
        templateUrl: 'app/directives/text-input/text-input.html',
        scope: {
            ngModel: '=',
            ngDisabled: '=?',
            ngRequired: '=?',
            label: '@',
            colspan: '@'
        },
        link: function($scope, element, attrs) {
            $scope.classInputText = 'col-sm-3';

            if (angular.isDefined($scope.colspan)) {
                $scope.classInputText = 'col-sm-' + $scope.colspan;
            }
        }
    }
}