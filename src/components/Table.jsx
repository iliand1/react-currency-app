import React from "react";

function Table(props) {
  return (
    <div className="flex flex-col  sm:flex-row sm:justify-between px-8 gap-y-4 ">
      <p className="btn w-full sm:w-1/4">
        1 USD is {props.byn} BYN
      </p>
      <p className="btn w-full sm:w-1/4">
        1 USD is {props.eur} EUR
      </p>
      <p className="btn w-full sm:w-1/4">
        1 USD is {props.rus} RUB
      </p>
    </div>
  );
}

export default Table;
