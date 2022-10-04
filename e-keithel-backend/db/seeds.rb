# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

User.delete_all
Product.delete_all

User.create!(email: "aboongm@yahoo.com", password: "@aB123456", role: "admin")
User.create!(email: "test@test.com", password: "@aB123456")

Product.create!(
    title:"The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback",
    price: 11.62,
    rating: 4,
    image: "https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg" )

Product.create!(
    title:"Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl",
    price: 239.0,
    rating: 4,
    image: "https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg" )

Product.create!(
    title:"Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor",
    price: 199.99,
    rating: 3,
    image: "https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg" )

Product.create!(
    title:"Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric",
    price: 98.99,
    rating: 5,
    image: "https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$" )

Product.create!(
    title:"New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)",
    price: 598.99,
    rating: 4,
    image: "https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg" )

Product.create!(
    title:"Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440",
    price: 1094.98,
    rating: 4,
    image: "https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg" )

