var Product = require('../models/product');

var mongoose = require('mongoose');

mongoose.connect('localhost:27017/shopping');

var products = [
    new Product({
        imagePath:'https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png',
        title:'video game',
        description:'Its an awesome game',
        price:20
    }),
    new Product({
        imagePath:'https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png',
        title:'video game',
        description:'Its an awesome game',
        price:20
    }),
    new Product({
        imagePath:'https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png',
        title:'video game',
        description:'Its an awesome game',
        price:20
    }),
    new Product({
        imagePath:'https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png',
        title:'video game',
        description:'Its an awesome game',
        price:20
    }),
    new Product({
        imagePath:'https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png',
        title:'video game',
        description:'Its an awesome game',
        price:20
    })
];

var count = 0;
for(var i=0;i<products.length;i++){
    products[i].save(function(err,result){
        count++;
        if(count === product.length){
            exit_fun();
        }
    });
}

function exit_fun(){
  mongoose.disconnect();
}