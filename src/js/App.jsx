import React from "react";
export { App };
import { Header } from "./layout/Header.jsx";
import { Footer } from "./layout/Footer.jsx";
import { Main } from "./layout/Main.jsx";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}
