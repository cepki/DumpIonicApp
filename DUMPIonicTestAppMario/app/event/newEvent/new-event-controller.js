    (function () {
    'use strict'

    angular.module("scheduleApp").controller("NewEventController", ['$scope', '$state', '$localstorage', NewEventController]);

    function NewEventController($scope, $state, $localstorage) {
        var vm = this;
        this.description = {};
        var now = new Date(Date.now());

        console.log("U KONTROLLERU SAM");

        function getTwoDatesDiffrenceInTime(firstDate, secondDate) {
            var diffrence = Math.abs(secondDate - firstDate);
            var minutesDiffrence = Math.floor((diffrence / 1000) / 60);
            return minutesDiffrence;
        }

        vm.authorizationForm = {
            description: "dssadadsasddsaasda",
            startTime: new Date(now.getFullYear(), now.getMonth(), now.getUTCDate(), now.getHours(), now.getMinutes()),
            endTime: new Date(now.getFullYear(), now.getMonth(), now.getUTCDate(), now.getHours(), now.getMinutes()),
            duration: getTwoDatesDiffrenceInTime(Date.now(), Date.now())
        };


        $scope.$watch(angular.bind(this, function () {
            return this.authorizationForm.startTime;
        }), function (newVal, oldVal) {
            if(newVal > vm.authorizationForm.endTime)
            {
                console.log("Novi je veci od starog");
                vm.authorizationForm.endTime = newVal;
            }
            vm.authorizationForm.duration = getTwoDatesDiffrenceInTime(vm.authorizationForm.endTime, vm.authorizationForm.startTime);
        });

        $scope.$watch(angular.bind(this, function () {
            return this.authorizationForm.endTime; 
        }), function (newVal, oldVal) {
            if (newVal > vm.authorizationForm.endTime) {
                console.log("Novi je veci od starog");
                vm.authorizationForm.endTime = newVal;
            }
        });

        vm.addPreparedObligation = function(obligationId)
        {
            alert("HEHEHE" + obligationId);
        }

        vm.goBack = function()
        {
            $state.go('home.main');
        }


        vm.addNewEvent = function(submitedForm)
        {
            if (submitedForm.$valid)
            {
                var newObligation = {
                    startTime: vm.authorizationForm.startTime,
                    endTime: vm.authorizationForm.endTime,
                    duration: vm.authorizationForm.duration,
                    description: vm.authorizationForm.description
                }
                
                var allObligations = $localstorage.getObject('all-obligations');
                allObligations.allObligations.push(newObligation);
                $localstorage.setObject('all-obligations', {
                    allObligations: allObligations.allObligations
                })
                $state.transitionTo('home.main', [], { reload: true, inherit: true, notify: true});
            } else {
                console.log("Nije poslano");
            }
        }

    };
})();