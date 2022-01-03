import React from "react";
import currencies from "./../currencies.json";
import CurrencyWidget from "./CurrencyWidget";

function CurrencyPanel(props) {
  return (
    <div className="CurrencyPanel">
      <h1>Currencies</h1>
      <div className="flex-wrapper">
        <CurrencyWidget
          currency={currencies.eur}
          selectedAmount={props.selectedAmount}
        />
        <CurrencyWidget
          currency={currencies.jpy}
          selectedAmount={props.selectedAmount}
        />
        <CurrencyWidget
          currency={currencies.rub}
          selectedAmount={props.selectedAmount}
        />
        <CurrencyWidget
          currency={currencies.krw}
          selectedAmount={props.selectedAmount}
        />
      </div>
    </div>
  );
}

export default CurrencyPanel;
