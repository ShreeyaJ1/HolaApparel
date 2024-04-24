  const cartImg = document.getElementById('cart-counter');
  const clickNum = document.getElementById('counter');
  let clicks = 0;
  cartImg.style.display = 'none';

  // Event delegation to handle clicks on "Add to Cart" buttons
  document.addEventListener('click', function (event) {
      // Check if the clicked element is an "Add to Cart" button
      if (event.target && event.target.classList.contains('add-to-cart-button')) {
          clicks += 1;
          if (clicks > 0) {
              cartImg.style.display = 'flex';
          };
          clickNum.innerHTML = clicks;
      }
  });

var app = angular.module('HolaApp', []);
console.log("before")
// Define CartController
app.controller('CartController', function($scope) {
    $scope.clicks = 0; 
    console.log("clicks set to 0");
});
 
app.controller('Searchctrl', function($scope) {
    $scope.products = [
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
            name: "Stretch Knit Dress",
            type: "Dresses",
            price: 169,
            image: "images/stretch-knit-dress.jpg",
            href: "#Women"
        },
        {
            name: "Pink Floral Dress",
            type: "Dresses",
            price: 99,
            image: "images/pink-floral.jpg",
            href: "#Women"
        },
        {
            name: "Pink Spotted Dress",
            type: "Dresses",
            price: 99,
            image: "images/pink-dotted-dress.jpg",
            href: "#Women"
        },
        {
            name: "Short Denim Overall",
            type: "Overalls",
            price: 89,
            image: "images/demin-overall-shorts.jpg",
            href: "#Women"
        },
        {
            name: "Cotton Denim Shirt",
            type: "Shirts",
            price: 13,
            image: "images/cotton-blue-shirt.jpg",
            href: "#Men"
        },
        {
            name: "Cotton Yellow T-Shirt",
            type: "Shirts",
            price: 39,
            image: "images/cotton-yellow-tshirt.jpg",
            href: "#Men"
        },
        {
            name: "Blue Striped Shirt",
            type: "Shirts",
            price: 20,
            image: "images/blue-striped.jpg",
            href: "#Men"
        },
        {
            name: "Cotton Rustic Shirt",
            type: "Shirts",
            price: 30,
            image: "images/rustic.jpeg",
            href: "#Men"
        },
        {
            name: "Cotton Grey Rustic T-Shirt",
            type: "Shirts",
            price: 35,
            image: "images/rustic-grey.jpeg",
            href: "#Men"
        },
        {
            name: "Blue Striped Shirt",
            type: "Shirts",
            price: 20,
            image: "images/White.jpeg",
            href: "#Men"
        },
        {
            name: "#NotRED™ Hipster Backpack",
            type: "Backpacks",
            price: 69,
            image: "images/blue-hipster-backpack.jpg",
            href: "#Bags"
        },
        {
            name: "Blue Pouch Bag",
            type: "Bags",
            price: 60,
            image: "images/blue-bag.jpeg",
            href: "#Bags"
        },
        {
            name: "Jute Bag",
            type: "Bags",
            price: 20,
            image: "images/tote.jpeg",
            href: "#Bags"
        },
        {
            name: "Matt",
            type: "Glasses",
            price: 12,
            image: "images/glasses.jpeg",
            href: "#Glasses"
        },
        {
            name: "Blue Quartz",
            type: "Glasses",
            price: 19,
            image: "images/brown-blue.jpeg",
            href: "#Glasses"
        },
        {
            name: "Cateye Orange",
            type: "Glasses",
            price: 25,
            image: "images/cateye.jpeg",
            href: "#Glasses"
        }
    ];
    
});
console.log("okay")
// Define an array to store the clicked items
let clickedItems = [];

// Event delegation to handle clicks on "Add to Cart" buttons
document.addEventListener('click', function (event) {
    // Check if the clicked element is an "Add to Cart" button
    if (event.target && event.target.classList.contains('add-to-cart-button')) {
        // Get the parent cell of the clicked button
        let parentCell = event.target.closest('.cell');
        
        // Retrieve information about the clicked item
        let itemName = parentCell.querySelector('h3').innerText;
        let itemPrice = parentCell.querySelector('.product-price').innerText;
        let itemImage = parentCell.querySelector('img').src;

        // Construct an object representing the clicked item
        let clickedItem = {
            name: itemName,
            price: itemPrice,
            image: itemImage
        };

        // Add the clicked item to the array
        clickedItems.push(clickedItem);
        window.clickedItems=clickedItems;

        // Log the clicked items array to the console
        console.log(clickedItems);
    }
});
// Assuming you have a function to send clicked items to the server
console.log(clickedItems);

