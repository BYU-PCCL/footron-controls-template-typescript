import React, { useState } from "react";
import { useMessaging } from "@footron/controls-client";

export default function DataComponent() {
  const [number, setNumber] = useState<number | undefined>();
  useMessaging<number>((message) => {
    setNumber(message);
  });

  return <div>{number || "Loading data..."}</div>;
}
