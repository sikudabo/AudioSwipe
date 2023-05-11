import Paper from '@mui/material/Paper';
export interface Product {
    [key: string]: {
        stats: { name: number, age: number};
    };
}

const products: Product = {
   corn: {
    stats: { name: 1, age: 1 }
   },
   rice: {
    stats: { name: 2, age: 2 },
   },
   grapes: {
    stats: { name: 3, age: 3},
   },
};

Object.keys(products).map((product, index) => {
    console.log('Render the product stats:', product);
});