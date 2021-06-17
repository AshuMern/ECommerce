import React from "react";
import { Container, Grid, Typography, Button } from "@material-ui/core";
import useStyles from "./Style";
import CartItem from "./CartItem/CartItem";

function Cart({ cart }) {
  const classes = useStyles();
  console.log(cart?.line_items?.length);
  console.log('cart'+cart);
  const isEmpty = !cart?.line_items?.length;
  const EmptyCart = () => (
    <Typography variant="subtitle1" gutterBottom>
      You have no items in your shopping cart.Please add some!
    </Typography>
  );
  const FilledCart = () => (
    <>
      <Grid container spacing="3">
        {cart.line_items?.map((item) => (
          <Grid item xs={12} sm={4} key={cart.id}>
            <div><CartItem item={item} /> </div>
          </Grid>
        ))}
      </Grid>
      <div className={classes.cardDetails}>
        <Typography variant="h4">
          Subtotal:{cart.subtotal.formatted_with_symbol}
        </Typography>
        <div>
          <Button
            className={classes.emptyButton}
            size="large"
            type="button"
            variant="contained"
            color="secondary"
          >
            Empty Basket
          </Button>
          <Button
            className={classes.checkoutButton}
            size="large"
            type="button"
            variant="contained"
            color="primary"
          >
            CheckOut Button
          </Button>
        </div>
      </div>
    </>
  );

  return (
    <Container>
      <div className={classes.toolbar} />
      <Typography className={classes.title} variant="h3" gutterBottom gutterBottom>
        Your Shopping cart
      </Typography>
      {isEmpty ? <EmptyCart /> : <FilledCart />}
    </Container>
  );
}

export default Cart;
