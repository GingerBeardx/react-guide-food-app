import React, { useState } from "react";
import { Header, Meals, Cart } from "./components";

function App() {
  const [showCart, setShowCart] = useState(false);

  const handleShowCart = () => {
    setShowCart((prev) => !prev);
  };

  return (
    <React.Fragment>
      {showCart && <Cart onClose={handleShowCart} />}
      <Header onOpen={handleShowCart} />
      <main>
        <Meals />
      </main>
    </React.Fragment>
  );
}

export default App;
