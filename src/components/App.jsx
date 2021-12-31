import React from "react";
import { useState, useEffect } from "react";
import AppTemplate from "./Template";
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

  return <AppTemplate currency={currency} />;
}

export default App;
