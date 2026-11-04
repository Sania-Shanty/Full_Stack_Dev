const items = [
  {
    id: 1,
    item_name: "Margherita Pizza",
    category: "Pizza",
    price: 299,
    stock: 25,
    rating: 4.5,
    veg: true,
    spicy: false,
    prepTime: 20,
    year: 2024
  },
  {
    id: 2,
    item_name: "Farmhouse Pizza",
    category: "Pizza",
    price: 399,
    stock: 18,
    rating: 4.7,
    veg: true,
    spicy: false,
    prepTime: 25,
    year: 2024
  },
  {
    id: 3,
    item_name: "Chicken Pepperoni Pizza",
    category: "Pizza",
    price: 449,
    stock: 15,
    rating: 4.6,
    veg: false,
    spicy: true,
    prepTime: 25,
    year: 2023
  },
  {
    id: 4,
    item_name: "Veg Burger",
    category: "Burger",
    price: 199,
    stock: 30,
    rating: 4.2,
    veg: true,
    spicy: false,
    prepTime: 15,
    year: 2024
  },
  {
    id: 5,
    item_name: "Chicken Burger",
    category: "Burger",
    price: 249,
    stock: 22,
    rating: 4.5,
    veg: false,
    spicy: false,
    prepTime: 15,
    year: 2024
  },
  {
    id: 6,
    item_name: "Spicy Chicken Burger",
    category: "Burger",
    price: 279,
    stock: 17,
    rating: 4.4,
    veg: false,
    spicy: true,
    prepTime: 18,
    year: 2023
  },
  {
    id: 7,
    item_name: "Paneer Tikka",
    category: "Starter",
    price: 299,
    stock: 20,
    rating: 4.8,
    veg: true,
    spicy: true,
    prepTime: 20,
    year: 2024
  },
  {
    id: 8,
    item_name: "Chicken Tikka",
    category: "Starter",
    price: 349,
    stock: 16,
    rating: 4.7,
    veg: false,
    spicy: true,
    prepTime: 25,
    year: 2023
  },
  {
    id: 9,
    item_name: "French Fries",
    category: "Sides",
    price: 149,
    stock: 40,
    rating: 4.3,
    veg: true,
    spicy: false,
    prepTime: 10,
    year: 2024
  },
  {
    id: 10,
    item_name: "Peri Peri Fries",
    category: "Sides",
    price: 179,
    stock: 35,
    rating: 4.5,
    veg: true,
    spicy: true,
    prepTime: 12,
    year: 2024
  },
  {
    id: 11,
    item_name: "Veg Biryani",
    category: "Main Course",
    price: 249,
    stock: 25,
    rating: 4.4,
    veg: true,
    spicy: true,
    prepTime: 30,
    year: 2023
  },
  {
    id: 12,
    item_name: "chicken Biryani",
    category: "Main Course",
    price: 329,
    stock: 28,
    rating: 4.9,
    veg: false,
    spicy: true,
    prepTime: 35,
    year: 2024
  },
  {
    id: 13,
    item_name: "Paneer Butter Masala",
    category: "Main Course",
    price: 279,
    stock: 19,
    rating: 4.6,
    veg: true,
    spicy: false,
    prepTime: 25,
    year: 2023
  },
  {
    id: 14,
    item_name: "Butter Chicken",
    category: "Main Course",
    price: 349,
    stock: 21,
    rating: 4.8,
    veg: false,
    spicy: false,
    prepTime: 30,
    year: 2024
  },
  {
    id: 15,
    item_name: "Masala Dosa",
    category: "South Indian",
    price: 129,
    stock: 32,
    rating: 4.6,
    veg: true,
    spicy: true,
    prepTime: 15,
    year: 2022
  },
  {
    id: 16,
    item_name: "Idli Sambar",
    category: "South Indian",
    price: 99,
    stock: 45,
    rating: 4.3,
    veg: true,
    spicy: false,
    prepTime: 10,
    year: 2022
  },
  {
    id: 17,
    item_name: "Chocolate Brownie",
    category: "Dessert",
    price: 159,
    stock: 20,
    rating: 4.7,
    veg: true,
    spicy: false,
    prepTime: 10,
    year: 2024
  },
  {
    id: 18,
    item_name: "Gulab Jamun",
    category: "Dessert",
    price: 119,
    stock: 30,
    rating: 4.5,
    veg: true,
    spicy: false,
    prepTime: 8,
    year: 2023
  },
  {
    id: 19,
    item_name: "Cold Coffee",
    category: "Beverage",
    price: 149,
    stock: 25,
    rating: 4.4,
    veg: true,
    spicy: false,
    prepTime: 7,
    year: 2024
  },
  {
    id: 20,
    item_name: "Mango Lassi",
    category: "Beverage",
    price: 129,
    stock: 30,
    rating: 4.6,
    veg: true,
    spicy: false,
    prepTime: 5,
    year: 2023
  }
];

// Query to get the first item:
console.log("Q1 :", items[0].item_name);
console.log("Q2 :", items.length);
console.log("Q3:",items[2].price);
console.log("Q4 :",items[items.length-1].name);
console.log("Q6:",items.findIndex(i => i.name==='Mango Lassi'))
let index =19;
for (let i=0;i<items.length;i++){
    if (i==index){
        console.log(items[i]);
    }
}
items.map((i=>console.log(` ${i.item_name}- Rs${i.price}`)));
console.log("Q6:",items.find(i => i.name==='Pizza'));
let find=0;
for (let i=0;i<items.length;i++){
    if (items[i].name=='Pizza'){
        find=1;
        console.log(items[i]);
    }
}
if (find==0){
   console.log('its not there');
}
console.log("Q6:",items.filter(i => i.veg==true));
for (let i=0;i<items.length;i++){
    if (items[i].veg==true){
        console.log(items[i]);
    }
}
for (let i=0;i<items.length;i++){
    if (items[i].veg==true){
        continue;
    }
    else {
        console.log(items[i]);
    }
}
console.log("Q6:",items.filter(i => i.price <200));
console.log("Q6:",items.filter(i => i.price <200).map(i => i.item_name));
console.log("Q6:",items.filter((i => i.price >100 && i.price < 200)&& (i=>i.veg==true)).map(i => i.item_name));
console.log("Q6:",items.filter(i => i.item_name.toUpperCase().includes('CHICKEN')));
// QUERY PRICE INC 5% AND APPLY DISCOUNT FOR 10% THEN SHOW VEG ITEMS NOT DONE YET!!!!
 items.map(i => console.log(`${i.item_name} - ${i.veg ?"VEG" : "NON-VEG" }`));
//QUERY CATEGORY SPICY , NON VEG - VEG, AVAILABLE OR NOT
console.log
 