import React from "react";

function Header() {
  return (
    <div className="w-full flex flex-col items-center">
      <h1 className="text-5xl text-slate-200 mb-2">Currency checker from USD To BYN, EUR and RUB</h1>
      <p className="text-lg text-slate-200 mb-4">Using currencylayer.api</p>
    </div>
  );
}

export default Header;
