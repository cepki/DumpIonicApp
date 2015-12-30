(function(){
    'use strict'

    angular.module("scheduleApp").controller("HomeController", ['$scope', "$state", "$localstorage", "_", HomeController]);

    function HomeController($scope, $state, $localstorage, _) {
        var vm = this;
        var dateSplitterFunction = function (chosedTime) {
            vm.obligationsForSelectedDate = _.filter($localstorage.getObject("all-obligations").allObligations, function (obligation) {
                return new Date(obligation.startTime).getMonth() === chosedTime.getMonth() &&
                    new Date(obligation.startTime).getDay() === chosedTime.getDay() &&
                    new Date(obligation.startTime).getYear() === chosedTime.getYear();
            });
        };
        dateSplitterFunction(new Date(Date.now()));

        $scope.addNewEvent = function () {
            $state.go('event.newEvent')
        }

       


        var datePickerCallback = function (val) {
            if (!val) {
                console.log('No date selected');
            } else {
                $scope.datepickerObject.inputDate = val;
                dateSplitterFunction(val);
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