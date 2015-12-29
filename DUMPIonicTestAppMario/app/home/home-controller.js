(function(){
    'use strict'

    angular.module("scheduleApp").controller("HomeController", ['$scope', "$state", HomeController]);

    function HomeController($scope, $state) {
        var vm = this;

        $scope.addNewEvent = function () {
            $state.go('event.newEvent')
        }

        $scope.nesto = function()
        {
            console.log("AAAA");
        }



        var datePickerCallback = function (val) {
            if (!val) {
                console.log('No date selected');
            } else {
                $scope.datepickerObject.inputDate = val;
            }
        };

        $scope.datepickerObject = {
            titleLabel: 'Datum', 
            todayLabel: 'Danas',  
            closeLabel: 'Zatvori',  
            setLabel: 'Izaberi',  
            setButtonType: 'button-energized',  
            todayButtonType: 'button-assertive',  
            closeButtonType: 'button-energized', 
            inputDate: new Date(), 
            mondayFirst: true,  
            //disabledDates: disabledDates, 
            weekDaysList: ["P", "U", "S", "C", "P", "S", "N"], 
            monthList: ["Sijecanj", "Veljaca", "Ozujak", "Travanj", "Svibanj", "Lipanj", "Srpanj", "Kolovoz", "Rujan", "Listopad", "Studeni", "Prosinac"], 
            templateType: 'modal', 
            showTodayButton: 'true', 
            modalHeaderColor: 'bar-positive', 
            modalFooterColor: 'bar-positive', 
            from: new Date(2012, 8, 2), 
            to: new Date(2018, 8, 25),  
            callback: function (val) {  
                datePickerCallback(val);
            },
            dateFormat: 'dd-MM-yyyy',
            closeOnSelect: false, 
        };

        
    }

   
    
})();