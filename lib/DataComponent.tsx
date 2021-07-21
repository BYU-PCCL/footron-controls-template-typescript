import React, { useEffect, useState } from "react";
import { useMessaging } from "@footron/controls-client";

export default function DataComponent() {
  const [number, setNumber] = useState<number | undefined>();

  const { sendMessage } = useMessaging<number>((message) => {
    setNumber(message);
  });

  useEffect(() => {
    if (!sendMessage) {
      return;
    }

    const messageIntervalId = setInterval(async () => {
      await sendMessage(Date.now());
    }, 50);

    return () => {
      clearInterval(messageIntervalId);
    };
  }, [sendMessage]);

  return (
    <div style={{ fontFamily: "monospace", fontSize: "20pt" }}>
      {number || "Loading data..."}
    </div>
  );
}
