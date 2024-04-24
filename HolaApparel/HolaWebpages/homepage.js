document.addEventListener("DOMContentLoaded", function () {
  alert("Thank you for visiting Hola Apparel!!");
  
  // Section 4 - Most Loved Products (Carousel movement)

  const elem = document.querySelector('.carousel');
  const flkty = new Flickity(elem, {

    // options
    cellAlign: 'left',
    wrapAround: true,
    freeScroll: true,
    autoPlay: true,
  })
  // Section 5 - Subscription Form Email Validation

  let messageForm = document.getElementById("signup");
  const input = document.getElementById('signup-email');
  messageForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const trimVal = input.value.trim();
    if (trimVal == "") {
      alert("Please enter some text");
    } else {
      alert("Thank you for your subscription!");
    }
  });
});

var homeapp= angular.module("homeapp",[]);

  homeapp.controller('ProductController', function($scope) {
    $scope.products = [
        {
            name: "Checked Stretch Dress",
            type: "Dresses",
            price: 123,
            image: "images/checked-stretch-dress.jpg"
        },
        {
            name: "Blue Silk Dress",
            type: "Dresses",
            price: 119,
            image: "images/blue-silk-dress.jpg"
        },
        {
            name: "Cotton Yellow T-Shirt",
            type: "Shirts",
            price: 39,
            image: "images/cotton-yellow-tshirt.jpg"
        },
        {
            name: "#NotRED™ Hipster Backpack",
            type: "Backpacks",
            price: 69,
            image: "images/blue-hipster-backpack.jpg"
        },
        {
            name: "Pink Spotted Dress",
            type: "Dresses",
            price: 99,
            image: "images/pink-dotted-dress.jpg"
        },
        {
            name: "Short Denim Overall",
            type: "Overalls",
            price: 89,
            image: "images/demin-overall-shorts.jpg"
        },
        {
            name: "Stretch Knit Dress",
            type: "Dresses",
            price: 169,
            image: "images/stretch-knit-dress.jpg"
        },
        {
            name: "Cotton Denim Shirt",
            type: "Shirts",
            price: 13,
            image: "images/cotton-blue-shirt.jpg"
        },
        {
            name: "Matt Glasses",
            type: "Glasses",
            price: 12,
            image:"images/glasses.jpeg"
        },
    ];
    
});