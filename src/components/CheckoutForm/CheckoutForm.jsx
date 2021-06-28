import React, { useState, useEffect } from "react";
import useStyle from "./style";
import {
  Paper,
  Typography,
  Stepper,
  Step,
  StepLabel,
  CircularProgress,
  Divider,
  Button,
} from "@material-ui/core";
import AddressForm from "./AddressForm";
import PaymentForm from "./PaymentForm";
import { commerce } from "../../lib/Commerce";
import { Link } from "react-router-dom";

const steps = ["Shipping Address", "Payment Details"];
function CheckoutForm({ cart, onCaptureCheckout, error, order }) {
  const classes = useStyle();

  const [activeStep, setActiveStep] = useState(0);
  const [shippingData, setShippingData] = useState({});
  const nextStep = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };
  const backStep = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };
  const next = (data) => {
    setShippingData(data);
    nextStep();
  };
  const Form = () =>
    activeStep === 0 ? (
      <AddressForm checkoutToken={checkoutToken} next={next} />
    ) : (
      <PaymentForm
        shippingData={shippingData}
        checkoutToken={checkoutToken}
        onCaptureCheckout={onCaptureCheckout}
        error={error}
        nextStep={nextStep}
        backStep={backStep}
      />
    );
    console.log(cart)
    console.log(order)
  const Confirmation = () => order.customer?(
     
      <div>
        <Typography variant="h5">
          Thank You for Shoppin {order.customer.firstname}
        </Typography>
        <Divider />
        <Typography variant="subtitle2">Order Ref:{order.customer_reference}</Typography>
        <br />
        <Button variant="outlined" component={Link}>
          Back To Home
        </Button>
      </div>
    ) : (
      <div className={classes.spinner}>
        <CircularProgress />
      </div>
    );
  
  const [checkoutToken, setCheckoutToken] = useState(null);
  console.log("cart" + cart);
  useEffect(() => {
    const generateToken = async () => {
      try {
        console.log("test");
        const token = await commerce.checkout.generateToken(cart.id, {
          type: "cart",
        });

        setCheckoutToken(token);
       
      } catch (e) {
        console.log(e);
      }
    };

    generateToken();
  }, [cart]);
  console.log(checkoutToken+'token')

  return (
    <div className={classes.toolbar}>
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography variant="h4" align="center">
            Checkout
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((step) => (
              <Step key={step}>
                <StepLabel>{step}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? (
            <Confirmation />
          ) : (
            checkoutToken && <Form />
          )}
        </Paper>
      </main>
    </div>
  );
}

export default CheckoutForm;
