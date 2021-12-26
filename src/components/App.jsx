import React from "react";
import Header from "./Header";
import Table from "./Table";
import { useState, useEffect } from "react";
import Footer from "./Footer";
//TODO:new api
//TODO:why api called 300 times
function App() {
  const key = "81cb46c0-65a7-11ec-b453-9f263f29ac19";
  const base = "USD";
  const [currency, setCurrency] = useState({
    CNY: 6.3,
    EUR: 0.88,
    RUB: 73,
  });
  useEffect(() => {
    setTimeout(() => {
      const url = `https://freecurrencyapi.net/api/v2/latest?apikey=${key}&base_currency=${base}`;
      fetch(url)
        .then((res) => res.json())
        .then((data) => setCurrency(data.data))
        .catch((err) => console.log(err));
    }, 1);
  }, []);
  return (
    <div className="w-screen h-screen p-6 bgmy grid grid-rows-3">
      <Header />
      <Table
        cny={currency.CNY.toFixed(2)}
        eur={currency.EUR.toFixed(2)}
        rus={currency.RUB.toFixed(2)}
      />
      <Footer />
    </div>
  );
}

export default App;
