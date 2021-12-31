import Header from "./Header";
import Table from "./Table";
import Footer from "./Footer";

function AppTemplate({ currency }) {
  return (
    <div className="w-screen h-screen p-6 my-bg grid grid-rows-3">
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
export default AppTemplate;
