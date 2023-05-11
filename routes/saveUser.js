"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var products = {
    corn: {
        stats: { name: 1, age: 1 }
    },
    rice: {
        stats: { name: 2, age: 2 },
    },
    grapes: {
        stats: { name: 3, age: 3 },
    },
};
Object.keys(products).map(function (product, index) {
    console.log('Render the product stats:', products[product].stats);
});
