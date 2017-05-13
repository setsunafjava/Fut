(function () {
    'use strict';

    angular
        .module('app.sample')
        .controller('ComposeDialogController', ComposeDialogController);

    /** @ngInject */
    function ComposeDialogController($mdDialog, $mdEditDialog, title, selectedObject, mode,$scope) {
        var vm = this;

        vm.prescription = {};
        vm.view_mode = mode;
        vm.title = title;
        vm.diseases = [];

        // If replying
        if (selectedObject != null && angular.isDefined(selectedObject)) {
            vm.prescription = selectedObject;
        } else { vm.prescription = {}; console.log(vm.prescription); }
        $scope.title  = "2017-04-26T16:31:38.805Z";

        // Methods
        vm.closeDialog = closeDialog;

        //////////

        function closeDialog() {
            $mdDialog.hide();
        }
        vm.add = function () {
            $mdDialog.hide(vm.prescription);
        }

        vm.addNew = function () {
            console.log(vm.prescription);
            if (!angular.isDefined(vm.prescription.curatives)) {
                vm.prescription.curatives = [];
            }
            vm.prescription.curatives.push({
                name: "",
                component: "",
                amount: "",
                time_active: []
            });
        }
        vm.editComment = function (event, dessert, column,type) {
            console.log(column);
            if (!vm.view_mode){
                event.stopPropagation(); // in case autoselect is enabled

                var editDialog = {
                    modelValue: dessert[column],
                    placeholder: 'Sửa' +column,
                    save: function (input) {
                        // if (input.$modelValue === 'Donald Trump') {
                        //     input.$invalid = true;
                        //     return $q.reject();
                        // }
                        // if (input.$modelValue === 'Bernie Sanders') {
                        //     return dessert.comment = 'FEEL THE BERN!'
                        // }
                        dessert[column] = input.$modelValue;
                    },
                    targetEvent: event,
                    title: 'Sửa' +column,
                    type : type
                };

                var promise;

                // if ($scope.options.largeEditDialog) {
                //     promise = $mdEditDialog.large(editDialog);
                // } else {
                promise = $mdEditDialog.large(editDialog);
                // }

                promise.then(function (ctrl) {
                    var input = ctrl.getInput();

                    input.$viewChangeListeners.push(function () {
                        input.$setValidity('test', input.$modelValue !== 'test');
                    });
                });
            }
        };
         vm.editComment2 = function (event, dessert, column,type) {
            console.log(column);
            if (!vm.view_mode){
                event.stopPropagation(); // in case autoselect is enabled

                var editDialog = {
                    modelValue: dessert[column],
                    placeholder: 'Sửa' +column,
                    save: function (input) {
                        // if (input.$modelValue === 'Donald Trump') {
                        //     input.$invalid = true;
                        //     return $q.reject();
                        // }
                        // if (input.$modelValue === 'Bernie Sanders') {
                        //     return dessert.comment = 'FEEL THE BERN!'
                        // }
                        dessert[column] = input.$modelValue;
                    },
                    targetEvent: event,
                    title: 'Sửa' +column,
                    type : type
                };

                var promise;

                // if ($scope.options.largeEditDialog) {
                //     promise = $mdEditDialog.large(editDialog);
                // } else {
                promise = $mdEditDialog.large(editDialog);
                // }

                promise.then(function (ctrl) {
                    var input = ctrl.getInput();

                    input.$viewChangeListeners.push(function () {
                        input.$setValidity('test', input.$modelValue !== 'test');
                    });
                });
            }
        };
    }
})();
