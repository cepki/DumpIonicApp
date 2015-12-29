    (function () {
    'use strict'

    angular.module("scheduleApp").controller("NewEventController", ['$scope', '$state', NewEventController]);

    function NewEventController($scope, $state) {
        var vm = this;
        this.description = {};
        var now = new Date(Date.now());

        function getTwoDatesDiffrenceInTime(firstDate, secondDate) {
            var diffrence = Math.abs(secondDate - firstDate);
            var minutesDiffrence = Math.floor((diffrence / 1000) / 60);
            return minutesDiffrence;
        }

        vm.authorizationForm = {
            description: "dsa",
            startTime: new Date(now.getFullYear(), now.getMonth(), now.getDay(), now.getHours(), now.getMinutes()),
            endTime: new Date(now.getFullYear(), now.getMonth(), now.getDay(), now.getHours(), now.getMinutes()),
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
            console.log(submitedForm);
            if (submitedForm.$valid)
            {
                console.log("Uspjesno");
            } else {
                console.log("Nije poslano");
            }
        }

    };
})();