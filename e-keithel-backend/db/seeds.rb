# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

User.delete_all
Product.delete_all
Category.delete_all

User.create!(fullname: 'Mayengbam Ranjit Luwang', email: "aboongm@yahoo.com", password: "@aB123456", role: "admin", mobileNo: "9383216094", address: 'House No 197, Singjamei Mayengbam Leikai, Imphal, Manipur, 795001', avatar: "https://avatars.githubusercontent.com/u/49184579?s=96&v=4")

User.create!(fullname: 'Oybek Kayumov', email: "oybek_k@yahoo.com", password: "@aB123456", role: "admin", mobileNo: "1234567890", address: 'Taskent district, Parkent, Taskent, Uzbekistan', avatar: "https://avatars.githubusercontent.com/u/85465559?v=4")

User.create!(fullname: 'Clementine Bauch', email: "Nathan@yesenia.net", password: "@aB123456", role: "seller", mobileNo: "1463123478", address: 'House No 197, Suite 847, McKenziehaven, Douglas Extension, 795001', avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80")

User.create!(fullname: 'Kurtis Weissnat', email: "Telly.Hoeger@billy.biz", password: "@aB123456", role: "buyer", mobileNo: "8527567890", address: 'ex Trail, Suite 280, Howemouth', avatar: "https://media.istockphoto.com/id/500214897/photo/close-up-portrait-of-man.jpg?s=612x612&w=is&k=20&c=P1Xj5l7XEOt5EHtzx7VLulqFELtLhcN3BwaO3Ke7dOY=")

Product.create!(
    title:"The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback",
    price: 11.62,
    rating: 4,
    image: "https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg",
    categoryId: 6,
    sellerId: 3,
    productId: 1 
)

Product.create!(
    title:"Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl",
    price: 239.0,
    rating: 4,
    image: "https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg",
    categoryId: 8,
    sellerId: 3,
    productId: 2 
 )

Product.create!(
    title:"Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor",
    price: 199.99,
    rating: 3,
    image: "https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg",
    categoryId: 2,
    sellerId: 3,
    productId: 3  
 )

Product.create!(
    title:"Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric",
    price: 98.99,
    rating: 5,
    image: "https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$",
    categoryId: 2,
    sellerId: 3,
    productId: 4
 )

Product.create!(
    title:"New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)",
    price: 598.99,
    rating: 4,
    image: "https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg",
    categoryId: 2,
    sellerId: 3,
    productId: 5 
 )

Product.create!(
    title:"Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440",
    price: 1094.98,
    rating: 4,
    image: "https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg",
    categoryId: 2,
    sellerId: 3,
    productId: 6 
 )
        
Category.create!(
    title: "Electronics",
    image: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_TV_2X._SY304_CB432517900_.jpg",
    code_number: 1
)

Category.create!(
    title: "Computer & Accessories",
    image: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_PC_1x._SY304_CB431800965_.jpg",
    code_number: 2
)

Category.create!(
    title: "Health & Personal Care",
    image: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2022/February/DashboardCards/GW_CONS_AUS_HPC_HPCEssentials_CatCard_Desktop1x._SY304_CB627424361_.jpg",
    code_number: 3
)

Category.create!(
    title: "Fashions",
    image: "https://m.media-amazon.com/images/I/618E1D4hM6L._MCnd_AC_UL320_.jpg",
    code_number: 4
)

Category.create!(
    title: "Software",
    image: "https://m.media-amazon.com/images/I/71lBKSgG0rL._AC_UL320_.jpg",
    code_number: 5
)

Category.create!(
    title: "Toys & Games",
    image: "https://m.media-amazon.com/images/I/71fa5+U25cL._AC_UL320_.jpg",
    code_number:6
)

Category.create!(
    title: "Home & Kitchen",
    image: "https://m.media-amazon.com/images/I/61YyfJSvxHL._AC_UF226,226_FMjpg_.jpg",
    code_number: 7
)

Category.create!(
    title: "Beauty Care",
    image: "https://m.media-amazon.com/images/I/41ZBJlrrbEL._AC_UF226,226_FMjpg_.jpg",
    code_number: 8
)

Category.create!(
    title: "Miscellaneous",
    image: "https://m.media-amazon.com/images/I/51HyTjFJy5L._AC_UF226,226_FMjpg_.jpg",
    code_number: 9
)

Order.create!(
    product_id: 1,
    price: 11.62,
    quantity: 3, 
    buyer_id: 4, 
    seller_id: 3
)

Order.create!(
    product_id: 2,
    price: 11.62,
    quantity: 3, 
    buyer_id: 4, 
    seller_id: 3
)
