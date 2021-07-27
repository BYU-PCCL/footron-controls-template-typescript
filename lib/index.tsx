import { css } from "@emotion/react";
import React, { useEffect, useState } from "react";
import { Button } from "@material-ui/core";
import { useMessaging } from "@footron/controls-client";

const backgroundStyle = css`
  background: #fafafa;
  padding: 36px;
  font-family: sans-serif;

  & > h1 {
    margin: 0 0 16px;
  }
`;

const ControlsComponent = () => {
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
    <div css={backgroundStyle}>
      <h1>Controls TypeScript Template</h1>
      <Button variant="contained" color="primary">
        Material UI support built in!
      </Button>
      <br />
      <br />
      <div style={{ fontFamily: "monospace", fontSize: "20pt" }}>
        {number || "Loading data..."}
      </div>
    </div>
  );
};

// noinspection JSUnusedGlobalSymbols
export default ControlsComponent;
