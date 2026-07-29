// Mock restaurant data — 24 restaurants
export const restaurants = [
  {
    "id": "r1",
    "name": "Punjabi Tadka",
    "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop",
    "rating": 3.7,
    "deliveryTime": 20,
    "cuisine": [
      "North Indian",
      "Punjabi"
    ],
    "category": "north-indian",
    "priceForTwo": 200,
    "location": "Koramangala, Bangalore",
    "isOpen": true,
    "description": "Punjabi Tadka brings you authentic North Indian & Punjabi favorites made fresh, fast, and delivered hot to your door."
  },
  {
    "id": "r2",
    "name": "Spice Route Biryani",
    "image": "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?w=600&h=400&fit=crop",
    "rating": 3.6,
    "deliveryTime": 25,
    "cuisine": [
      "Biryani",
      "Hyderabadi"
    ],
    "category": "biryani",
    "priceForTwo": 250,
    "location": "Banjara Hills, Hyderabad",
    "isOpen": true,
    "description": "Spice Route Biryani brings you authentic Biryani & Hyderabadi favorites made fresh, fast, and delivered hot to your door."
  },
  {
    "id": "r3",
    "name": "Dosa Junction",
    "image": "https://images.unsplash.com/photo-1630383249896-483b1ac36868?w=600&h=400&fit=crop",
    "rating": 4.5,
    "deliveryTime": 30,
    "cuisine": [
      "South Indian"
    ],
    "category": "south-indian",
    "priceForTwo": 300,
    "location": "T. Nagar, Chennai",
    "isOpen": true,
    "description": "Dosa Junction brings you authentic South Indian favorites made fresh, fast, and delivered hot to your door."
  },
  {
    "id": "r4",
    "name": "Pizza Villa",
    "image": "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&h=400&fit=crop",
    "rating": 4.7,
    "deliveryTime": 35,
    "cuisine": [
      "Pizza",
      "Italian"
    ],
    "category": "pizza",
    "priceForTwo": 350,
    "location": "Bandra, Mumbai",
    "isOpen": true,
    "description": "Pizza Villa brings you authentic Pizza & Italian favorites made fresh, fast, and delivered hot to your door."
  },
  {
    "id": "r5",
    "name": "Burger Barn",
    "image": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&h=400&fit=crop",
    "rating": 4,
    "deliveryTime": 40,
    "cuisine": [
      "Burger",
      "American"
    ],
    "category": "burger",
    "priceForTwo": 400,
    "location": "Indiranagar, Bangalore",
    "isOpen": true,
    "description": "Burger Barn brings you authentic Burger & American favorites made fresh, fast, and delivered hot to your door."
  },
  {
    "id": "r6",
    "name": "Wok This Way",
    "image": "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=600&h=400&fit=crop",
    "rating": 3.8,
    "deliveryTime": 45,
    "cuisine": [
      "Chinese",
      "Asian"
    ],
    "category": "chinese",
    "priceForTwo": 450,
    "location": "Salt Lake, Kolkata",
    "isOpen": true,
    "description": "Wok This Way brings you authentic Chinese & Asian favorites made fresh, fast, and delivered hot to your door."
  },
  {
    "id": "r7",
    "name": "Sweet Ending",
    "image": "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=600&h=400&fit=crop",
    "rating": 4,
    "deliveryTime": 20,
    "cuisine": [
      "Desserts",
      "Bakery"
    ],
    "category": "desserts",
    "priceForTwo": 500,
    "location": "Andheri, Mumbai",
    "isOpen": false,
    "description": "Sweet Ending brings you authentic Desserts & Bakery favorites made fresh, fast, and delivered hot to your door."
  },
  {
    "id": "r8",
    "name": "Frosty Scoops",
    "image": "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=600&h=400&fit=crop",
    "rating": 4.3,
    "deliveryTime": 25,
    "cuisine": [
      "Ice Cream",
      "Desserts"
    ],
    "category": "ice-cream",
    "priceForTwo": 550,
    "location": "Viman Nagar, Pune",
    "isOpen": true,
    "description": "Frosty Scoops brings you authentic Ice Cream & Desserts favorites made fresh, fast, and delivered hot to your door."
  },
  {
    "id": "r9",
    "name": "The Chaat House",
    "image": "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&h=400&fit=crop",
    "rating": 4.6,
    "deliveryTime": 30,
    "cuisine": [
      "Snacks",
      "North Indian"
    ],
    "category": "snacks",
    "priceForTwo": 200,
    "location": "Chandni Chowk, Delhi",
    "isOpen": true,
    "description": "The Chaat House brings you authentic Snacks & North Indian favorites made fresh, fast, and delivered hot to your door."
  },
  {
    "id": "r10",
    "name": "Roll Republic",
    "image": "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=600&h=400&fit=crop",
    "rating": 3.9,
    "deliveryTime": 35,
    "cuisine": [
      "Rolls",
      "Street Food"
    ],
    "category": "rolls",
    "priceForTwo": 250,
    "location": "Park Street, Kolkata",
    "isOpen": true,
    "description": "Roll Republic brings you authentic Rolls & Street Food favorites made fresh, fast, and delivered hot to your door."
  },
  {
    "id": "r11",
    "name": "Sandwich Stop",
    "image": "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=600&h=400&fit=crop",
    "rating": 4.3,
    "deliveryTime": 40,
    "cuisine": [
      "Sandwich",
      "Cafe"
    ],
    "category": "sandwich",
    "priceForTwo": 300,
    "location": "FC Road, Pune",
    "isOpen": true,
    "description": "Sandwich Stop brings you authentic Sandwich & Cafe favorites made fresh, fast, and delivered hot to your door."
  },
  {
    "id": "r12",
    "name": "Chai & Chill Beverages",
    "image": "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=600&h=400&fit=crop",
    "rating": 4,
    "deliveryTime": 45,
    "cuisine": [
      "Beverages",
      "Cafe"
    ],
    "category": "beverages",
    "priceForTwo": 350,
    "location": "MG Road, Bangalore",
    "isOpen": true,
    "description": "Chai & Chill Beverages brings you authentic Beverages & Cafe favorites made fresh, fast, and delivered hot to your door."
  },
  {
    "id": "r13",
    "name": "Biryani Blues",
    "image": "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=600&h=400&fit=crop",
    "rating": 4.6,
    "deliveryTime": 20,
    "cuisine": [
      "Biryani",
      "Mughlai"
    ],
    "category": "biryani",
    "priceForTwo": 400,
    "location": "Jubilee Hills, Hyderabad",
    "isOpen": true,
    "description": "Biryani Blues brings you authentic Biryani & Mughlai favorites made fresh, fast, and delivered hot to your door."
  },
  {
    "id": "r14",
    "name": "Idli Express",
    "image": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=600&h=400&fit=crop",
    "rating": 4.6,
    "deliveryTime": 25,
    "cuisine": [
      "South Indian"
    ],
    "category": "south-indian",
    "priceForTwo": 450,
    "location": "Jayanagar, Bangalore",
    "isOpen": false,
    "description": "Idli Express brings you authentic South Indian favorites made fresh, fast, and delivered hot to your door."
  },
  {
    "id": "r15",
    "name": "Cheesy Crust Pizzeria",
    "image": "https://images.unsplash.com/photo-1571066811602-716837d681de?w=600&h=400&fit=crop",
    "rating": 4.3,
    "deliveryTime": 30,
    "cuisine": [
      "Pizza",
      "Italian"
    ],
    "category": "pizza",
    "priceForTwo": 500,
    "location": "Powai, Mumbai",
    "isOpen": true,
    "description": "Cheesy Crust Pizzeria brings you authentic Pizza & Italian favorites made fresh, fast, and delivered hot to your door."
  },
  {
    "id": "r16",
    "name": "Grill Masters Burger Co.",
    "image": "https://images.unsplash.com/photo-1550547660-d9450f859349?w=600&h=400&fit=crop",
    "rating": 3.8,
    "deliveryTime": 35,
    "cuisine": [
      "Burger",
      "Fast Food"
    ],
    "category": "burger",
    "priceForTwo": 550,
    "location": "Hitech City, Hyderabad",
    "isOpen": true,
    "description": "Grill Masters Burger Co. brings you authentic Burger & Fast Food favorites made fresh, fast, and delivered hot to your door."
  },
  {
    "id": "r17",
    "name": "Dragon Bowl Chinese",
    "image": "https://images.unsplash.com/photo-1526318896980-cf78c088247c?w=600&h=400&fit=crop",
    "rating": 4.6,
    "deliveryTime": 40,
    "cuisine": [
      "Chinese",
      "Thai"
    ],
    "category": "chinese",
    "priceForTwo": 200,
    "location": "Sector 18, Noida",
    "isOpen": true,
    "description": "Dragon Bowl Chinese brings you authentic Chinese & Thai favorites made fresh, fast, and delivered hot to your door."
  },
  {
    "id": "r18",
    "name": "Punjab Da Dhaba",
    "image": "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=600&h=400&fit=crop",
    "rating": 4.2,
    "deliveryTime": 45,
    "cuisine": [
      "North Indian",
      "Tandoor"
    ],
    "category": "north-indian",
    "priceForTwo": 250,
    "location": "Sector 17, Chandigarh",
    "isOpen": true,
    "description": "Punjab Da Dhaba brings you authentic North Indian & Tandoor favorites made fresh, fast, and delivered hot to your door."
  },
  {
    "id": "r19",
    "name": "Gulab & Ghee Sweets",
    "image": "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=600&h=400&fit=crop",
    "rating": 4.1,
    "deliveryTime": 20,
    "cuisine": [
      "Desserts",
      "Mithai"
    ],
    "category": "desserts",
    "priceForTwo": 300,
    "location": "Karol Bagh, Delhi",
    "isOpen": true,
    "description": "Gulab & Ghee Sweets brings you authentic Desserts & Mithai favorites made fresh, fast, and delivered hot to your door."
  },
  {
    "id": "r20",
    "name": "Cold Stone Creamery Lane",
    "image": "https://images.unsplash.com/photo-1560008581-09826d1de69e?w=600&h=400&fit=crop",
    "rating": 3.9,
    "deliveryTime": 25,
    "cuisine": [
      "Ice Cream"
    ],
    "category": "ice-cream",
    "priceForTwo": 350,
    "location": "Baner, Pune",
    "isOpen": true,
    "description": "Cold Stone Creamery Lane brings you authentic Ice Cream favorites made fresh, fast, and delivered hot to your door."
  },
  {
    "id": "r21",
    "name": "Mumbai Vada Pav Co.",
    "image": "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=600&h=400&fit=crop",
    "rating": 4.7,
    "deliveryTime": 30,
    "cuisine": [
      "Snacks",
      "Street Food"
    ],
    "category": "snacks",
    "priceForTwo": 400,
    "location": "Dadar, Mumbai",
    "isOpen": false,
    "description": "Mumbai Vada Pav Co. brings you authentic Snacks & Street Food favorites made fresh, fast, and delivered hot to your door."
  },
  {
    "id": "r22",
    "name": "Kathi Roll Corner",
    "image": "https://images.unsplash.com/photo-1512838243191-e81e8f66f1fd?w=600&h=400&fit=crop",
    "rating": 4.3,
    "deliveryTime": 35,
    "cuisine": [
      "Rolls",
      "Mughlai"
    ],
    "category": "rolls",
    "priceForTwo": 450,
    "location": "New Market, Kolkata",
    "isOpen": true,
    "description": "Kathi Roll Corner brings you authentic Rolls & Mughlai favorites made fresh, fast, and delivered hot to your door."
  },
  {
    "id": "r23",
    "name": "Club Sandwich Co.",
    "image": "https://images.unsplash.com/photo-1553909489-cd47e0907980?w=600&h=400&fit=crop",
    "rating": 4.8,
    "deliveryTime": 40,
    "cuisine": [
      "Sandwich",
      "Continental"
    ],
    "category": "sandwich",
    "priceForTwo": 500,
    "location": "Camp, Pune",
    "isOpen": true,
    "description": "Club Sandwich Co. brings you authentic Sandwich & Continental favorites made fresh, fast, and delivered hot to your door."
  },
  {
    "id": "r24",
    "name": "Juice Junction Beverages",
    "image": "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=600&h=400&fit=crop",
    "rating": 4,
    "deliveryTime": 45,
    "cuisine": [
      "Beverages",
      "Healthy"
    ],
    "category": "beverages",
    "priceForTwo": 550,
    "location": "HSR Layout, Bangalore",
    "isOpen": true,
    "description": "Juice Junction Beverages brings you authentic Beverages & Healthy favorites made fresh, fast, and delivered hot to your door."
  }
]
