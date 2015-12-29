    (function () {
    'use strict'

    angular.module("scheduleApp").controller("NewEventController", [NewEventController]);

    function NewEventController() {
        var vm = this;

        vm.time = "1:23";

        vm.kurac = function () {
            alert("JKSAKR");
        }


        console.log("U controlleru sam");

        vm.addPreparedObligation = function(obligationId)
        {
            alert("HEHEHE" + obligationId);
        }

        vm.goBack = function()
        {

            //provjerit jel ijedan od inputa taknut, ako nije onda nema popupa, ako je onda daj popup
        }
    };
})();