import React from "react";

const summary = props => {
  let summary = <div>Please add persons first</div>;
  if (props.personCount > 0) {
    summary = (
      <React.Fragment>
        <div>Split: {(props.amount / props.personCount).toFixed(2)}</div>
        <div>
          Paid: {props.paidCount} Unpaid: {props.personCount - props.paidCount}{" "}
          Total: {props.personCount}
        </div>
      </React.Fragment>
    );
  }

  return (
    <div className="summary">
      <h2>Summary:</h2>
      {summary}
    </div>
  );
};

export default summary;
