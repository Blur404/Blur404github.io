var app = angular.module("phonebook", []);

app.config(function($interpolateProvider) {
    $interpolateProvider.startSymbol('[[').endSymbol(']]');  // Change AngularJS's default interpolation syntax
});

app.controller("appController", function($scope) {
    $scope.rowLimit = 3;
    $scope.currentPage = 0;
    $scope.numPerPage = 9;

    $scope.info = [
        {name: "Mohamed", phone: '05-020-2356', email: 'm.hazem@yahoo.com'},
        {name: 'ahmed', phone: '02-030-4986', email: 'ah.basem@yahoo.com'},
        {name: 'laila', phone: '01-111-2357', email: 'laila@gmail.com'},
        {name: 'salma', phone: '01-268-1548', email: 'salma@gmail.com'}
    ];

    $scope.addContact = function() {
        if ($scope.newName && $scope.newPhone && $scope.newEmail) {
            $scope.info.push({
                'name': $scope.newName, 
                'phone': $scope.newPhone, 
                'email': $scope.newEmail
            });
            $scope.newName = '';
            $scope.newPhone = '';
            $scope.newEmail = '';
        }
    };

    $scope.removeContact = function(index) {
        $scope.info.splice(index, 1);
    };

    $scope.search = function(item) {
        if (!$scope.searchContact) return true;
        let searchLower = $scope.searchContact.toLowerCase();
        return item.name.toLowerCase().includes(searchLower) || item.phone.includes($scope.searchContact);
    };
});
