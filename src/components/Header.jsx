import React from "react";

function Header() {
  return (
    <div className="w-full flex flex-col items-center">
      <h1 className="text-3xl text-center sm:text-5xl text-slate-200 mb-5">
        Currency checker from USD To CNY, EUR and RUB
      </h1>
      <p className="text-lg sm:text-lg text-slate-200 mb-4">
        Using currencylayer.api
      </p>
    </div>
  );
}

export default Header;
