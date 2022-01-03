import React from "react";

function CurrencyWidget({ currency, selectedAmount }) {
  const convertedAmount = currency.exchangeRate * selectedAmount;
  const convertedAmountFixed = convertedAmount.toFixed(2);
  return (
    <div className="CurrencyWidget">
      <img className="widget-img" src={currency.img} alt="background" />
      <h2>
        {currency.name} - {currency.symbol}
      </h2>
      <p>
        {selectedAmount} {currency.code}
      </p>
      <p>=</p>
      <p>{convertedAmountFixed}$</p>
    </div>
  );
}

export default CurrencyWidget;
