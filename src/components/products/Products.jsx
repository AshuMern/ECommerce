import { Grid } from "@material-ui/core";
import React from "react";
import Product from "./Product";
import useStyles from './style';

// const products = [
//   {
//     id: 1,
//     name: "TV",
//     description: "MI 4A Pro Full HD display",
//     price: "14999RS",
//     image:
//       "https://images-na.ssl-images-amazon.com/images/I/71qOOWyfc7L._SX425_.jpg",
//   },
//   {
//     id: 2,
//     name: "Mi Note 9 Pro",
//     description: "Qualcom Snapdragon 855",
//     price: "18000RS",
//     image:
//       "https://images.indianexpress.com/2020/03/3.jpg",
//   },
// ];
function Products({product,onAddToCart}) {
    const classes=useStyles();
  return (
    <main className={classes.content}>
        <div className={classes.toolbar} />
      <Grid container justify="center" spacing={4}>
        {product.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} onAddToCart={onAddToCart} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
}

export default Products;
