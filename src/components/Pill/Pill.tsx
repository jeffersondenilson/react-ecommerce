import React from "react";

import "./Pill.css";

interface PillProps {
  value: number | undefined;
}

function Pill({ value }: PillProps) {
  return (
    <>
      {value && value < 100 && <div className="pill">{value}</div>}
      {value && value > 99 && (
        <div className="pill" style={{ fontSize: "0.6rem" }}>
          99+
        </div>
      )}
    </>
  );
}

export default Pill;
