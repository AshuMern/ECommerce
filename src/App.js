import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Products from "./components/products/Products";
import Navbar from "./components/Navbar/Navbar";
import { commerce } from "./lib/Commerce";
import Cart from "./components/Cart/Cart";

function App() {
  const [product, setProduct] = useState([]);
  const [cart, setCart] = useState({});
  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProduct(data);
  };
  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };
  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);
    setCart(item.cart);
  };
  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);
  console.log(product);

  return (
    <Router>
      <div>
        <Navbar total_item={cart.total_items} />
        <Switch>
          <Route exact path='/'><Products product={product} onAddToCart={handleAddToCart} /></Route>
          <Route exact path='/cart'><Cart cart={cart} /></Route>
          
          
        </Switch>
      </div>
    </Router>
  );
}

export default App;
