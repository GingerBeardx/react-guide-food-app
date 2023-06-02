import React from "react";
import { Header, Meals } from "./components";

function App() {
  return (
    <React.Fragment>
      <Header />
      <main>
        <Meals />
      </main>
    </React.Fragment>
  );
}

export default App;
