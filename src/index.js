import React from 'react';
import {Provider} from 'react-redux';
import Store from './Service/Store';
import App from './App';
// import { addToCart } from './store/modules/cart/actions'

const Index = () => {
  // Store.dispatch({ type: "@cart/add", product: "Bolo de cenoura"})
  // React.useEffect(() => {
  //   console.log(Store.getState(State => State));
  // Store.dispatch(addToCart("Tapioca"))
  // console.log(addToCart("banana"));
  // console.log(addToCart("banana").product);
  // const product = addToCart("coockie")
  // Store.dispatch(product)
  // Store.dispatch({ type: "@cart/add", product: "brownie"})
  // Store.dispatch({ type: "@cart/remove", product: "coockie"})
  // Store.dispatch({ type: "@cart/remove", product: "Tapioca"})
  // },[])
  return (
    <Provider store={Store}>
      <p>
        HELLLOOO
      </p>
      <App />
    </Provider>
  );
};

export default Index;
