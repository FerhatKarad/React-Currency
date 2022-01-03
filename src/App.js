import { useState } from "react";
import CurrencyPanel from "./components/CurrencyPanel";

function App() {
  const [amount, setAmount] = useState(1);

  const updateAmount = (updateAmount) => {
    if (updateAmount === "reset") setAmount(1);
    else setAmount(amount + updateAmount);
  };

  return (
    <div className="App">
      <h2>Amount: {amount}</h2>
      <button onClick={() => updateAmount("reset")}>Reset</button>
      <button onClick={() => updateAmount(1)}>+1</button>
      <button onClick={() => updateAmount(10)}>+10</button>
      <button onClick={() => updateAmount(100)}>+100</button>

      <CurrencyPanel selectedAmount={Number(amount)} />
    </div>
  );
}

export default App;
