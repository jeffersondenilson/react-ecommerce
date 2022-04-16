import React from "react";

import "./Pill.css";

interface PillProps {
  value: number | undefined;
}

function Pill({ value }: PillProps) {
  return <div className="pill">{value || 0}</div>;
}

export default Pill;
