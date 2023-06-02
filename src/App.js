import { useState } from "react";
import { Header, Meals, Cart } from "./components";
import CartProvider from "./store/CartProvider";

function App() {
  const [showCart, setShowCart] = useState(false);

  const handleShowCart = () => {
    setShowCart((prev) => !prev);
  };

  return (
    <CartProvider>
      {showCart && <Cart onClose={handleShowCart} />}
      <Header onOpen={handleShowCart} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
