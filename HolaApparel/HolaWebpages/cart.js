var app = angular.module('cartapp', []);

console.log("1");
app.controller("CartCtrl", function($scope){
    $scope.selectedItems=[
        {
            name: "Red checked stretch dress",
            type: "Dresses",
            price: 30,
            image: "images/checked-stretch-dress.jpg",
            href: "#Women"
        },
        {
            name: "Blue silk dress",
            type: "Dresses",
            price: 119,
            image: "images/blue-silk-dress.jpg",
            href: "#Women"
        },
        {
            name: "Blue Striped Shirt",
            type: "Shirts",
            price: 20,
            image: "images/White.jpeg",
            href: "#Men"
        }
    ];
    console.log($scope.selectedItems);
    console.log("2");

    $scope.getTotalItem = function () {
        var totalPrice = 0;
        angular.forEach($scope.selectedItems, function (item) {
            totalPrice += item.price;
        });
        return totalPrice;
    };
    $scope.getTax = function () {
        // Assuming 8% tax rate
        var tax = $scope.getTotalItem() * 0.08;
        return tax;
    }
    // Delivery charges
    $scope.deliveryCharges = 50;

    // Function to calculate total price
    $scope.getTotalPrice = function () {
        return $scope.getTotalItem() + $scope.getTax() + $scope.deliveryCharges;
    };
});
