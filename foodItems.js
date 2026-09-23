// Array/JSON data source for all food items (used with .map())

// Starters
import frenchFries from "../assets/images/French Fries.jpg";
import cheeseFries from "../assets/images/cheese fries.jpg";
import garlicBread from "../assets/images/garlic bread.jpg";
import nachos from "../assets/images/Nachos.jpg";
import potatoWedges from "../assets/images/Potato Wedges.jpg";
import shawarma from "../assets/images/shawarma.jpg";
import springRolls from "../assets/images/Spring Rolls.jpg";
import tomatoSoup from "../assets/images/tomato soup.jpg";

// Main Course
import margheritaPizza from "../assets/images/Margherita Pizza.jpg";
import cheesePizza from "../assets/images/Cheese Pizza.jpg";
import vegPizza from "../assets/images/Veg Pizza.jpg";
import paneerPizza from "../assets/images/Paneer Pizza.jpg";
import vegBurger from "../assets/images/Veg Burger.jpg";
import cheeseBurger from "../assets/images/Cheese Burger.jpg";
import chickenBurger from "../assets/images/Chicken Burger.jpg";
import alfredoPasta from "../assets/images/Alfredo Pasta.jpg";
import redSaucePasta from "../assets/images/Red Sauce Pasta.jpg";
import macAndCheese from "../assets/images/Mac & Cheese.jpg";

// Desserts
import brownie from "../assets/images/Brownie.jpg";
import chocolateCake from "../assets/images/Chocolate Cake.jpg";
import iceCream from "../assets/images/Ice Cream.jpg";
import donut from "../assets/images/Donut.jpg";
import cheesecake from "../assets/images/Cheesecake.jpg";
import brownieWithIceCream from "../assets/images/Brownie with Ice Cream.jpg";

// Beverages
import coke from "../assets/images/Coke.jpg";
import sprite from "../assets/images/Sprite.jpg";
import coldCoffee from "../assets/images/Cold Coffee.jpg";
import lemonade from "../assets/images/Lemonade.jpg";
import icedTea from "../assets/images/Iced Tea.jpg";
import milkshake from "../assets/images/Milkshake.jpg";
import freshLimeSoda from "../assets/images/Fresh Lime Soda.jpg";
import orangeJuice from "../assets/images/Orange Juice.jpg"; // placeholder - see note below

export const FOOD_ITEMS = [
  // Starters
  { id: 1, name: "French Fries", category: "Starters", price: 100, img: frenchFries },
  { id: 2, name: "Cheese Fries", category: "Starters", price: 150, img: cheeseFries },
  { id: 3, name: "Garlic Bread", category: "Starters", price: 120, img: garlicBread },
  { id: 4, name: "Nachos", category: "Starters", price: 160, img: nachos },
  { id: 5, name: "Potato Wedges", category: "Starters", price: 120, img: potatoWedges },
  { id: 6, name: "Shawarma", category: "Starters", price: 220, img: shawarma },
  { id: 7, name: "Spring Rolls", category: "Starters", price: 140, img: springRolls },
  { id: 8, name: "Tomato Soup", category: "Starters", price: 110, img: tomatoSoup },

  // Main Course
  { id: 9,  name: "Margherita Pizza", category: "Main Course", price: 220, img: margheritaPizza },
  { id: 10, name: "Cheese Pizza", category: "Main Course", price: 240, img: cheesePizza },
  { id: 11, name: "Veg Pizza", category: "Main Course", price: 260, img: vegPizza },
  { id: 12, name: "Paneer Pizza", category: "Main Course", price: 280, img: paneerPizza },
  { id: 13, name: "Veg Burger", category: "Main Course", price: 120, img: vegBurger },
  { id: 14, name: "Cheese Burger", category: "Main Course", price: 150, img: cheeseBurger },
  { id: 15, name: "Chicken Burger", category: "Main Course", price: 180, img: chickenBurger },
  { id: 16, name: "Alfredo Pasta", category: "Main Course", price: 180, img: alfredoPasta },
  { id: 17, name: "Red Sauce Pasta", category: "Main Course", price: 170, img: redSaucePasta },
  { id: 18, name: "Mac & Cheese", category: "Main Course", price: 190, img: macAndCheese },

  // Desserts
  { id: 19, name: "Brownie", category: "Desserts", price: 110, img: brownie },
  { id: 20, name: "Chocolate Cake", category: "Desserts", price: 160, img: chocolateCake },
  { id: 21, name: "Ice Cream", category: "Desserts", price: 90,  img: iceCream },
  { id: 22, name: "Donut", category: "Desserts", price: 80,  img: donut },
  { id: 23, name: "Cheesecake", category: "Desserts", price: 180, img: cheesecake },
  { id: 24, name: "Brownie with Ice Cream", category: "Desserts", price: 150, img: brownieWithIceCream },

  // Beverages
  { id: 25, name: "Coke", category: "Beverages", price: 60,  img: coke },
  { id: 26, name: "Sprite", category: "Beverages", price: 60,  img: sprite },
  { id: 27, name: "Cold Coffee", category: "Beverages", price: 120, img: coldCoffee },
  { id: 28, name: "Lemonade", category: "Beverages", price: 90,  img: lemonade },
  { id: 29, name: "Iced Tea", category: "Beverages", price: 100, img: icedTea },
  { id: 30, name: "Milkshake", category: "Beverages", price: 130, img: milkshake },
  { id: 31, name: "Fresh Lime Soda", category: "Beverages", price: 80,  img: freshLimeSoda },
  { id: 32, name: "Orange Juice", category: "Beverages", price: 90,  img: orangeJuice },
];

export const POPULAR_IDS = [13, 9, 16, 24]; // Veg Burger, Margherita Pizza, Alfredo Pasta, Brownie with Ice Cream

export const CATEGORIES = ["All", "Starters", "Main Course", "Desserts", "Beverages"];
