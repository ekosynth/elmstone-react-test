import React from "react";
import BirdGrid from "./components/BirdGrid";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./App.scss";

function App() {
    return (
        <div className="App">
            <Header />
            <BirdGrid />
            <Footer />
        </div>
    );
}

export default App;
