import React from "react";
import Header from "./Header";
import Table from "./Table";
import { useState } from "react";
import Footer from "./Footer";
//TODO:Style

function App() {
  const [currency, setCurrency] = useState({
    USDBYN: 2.5,
    USDEUR: 0.88,
    USDRUB: 73,
  });
  const key = "6a855e142b555481b653ef50d8310800";
  const currencies = "EUR,BYN,RUB";
  const url = `http://api.currencylayer.com/live?access_key=${key}&currencies=${currencies}`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => setCurrency(data.quotes));

  return (
    <div className="w-screen h-screen p-6 bgmy grid grid-rows-3">
      <Header />
      <Table
        byn={currency.USDBYN.toFixed(2)}
        eur={currency.USDEUR.toFixed(2)}
        rus={currency.USDRUB.toFixed(2)}
      />
      <Footer />
    </div>
  );
}

export default App;
