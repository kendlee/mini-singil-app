import React from "react";

const amount = props => (
  <div>
    <label htmlFor="amount">Amount due:</label>
    <input
      id="amount"
      type="number"
      value={props.amount}
      onChange={props.updateAmount}
    />
  </div>
);

export default amount;
