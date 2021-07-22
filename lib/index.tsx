import { css } from "@emotion/react";
import React, { useEffect } from "react";
import { Button } from "@material-ui/core";
import DataComponent from "./DataComponent";
import {
  ControlsClient,
  ControlsClientProvider,
} from "@footron/controls-client";

const backgroundStyle = css`
  background: #fafafa;
  padding: 36px;
  font-family: sans-serif;

  & > h1 {
    margin: 0 0 16px;
  }
`;

const ControlsComponent = () => {
  const controlsClient = new ControlsClient("ws://localhost:8089/in", "");

  useEffect(() => {
    controlsClient.setApp("dev-app");
  }, []);

  return (
    <div css={backgroundStyle}>
      <h1>Controls TypeScript Template</h1>
      <Button variant="contained" color="primary">
        Material UI support built in!
      </Button>
      <br />
      <br />
      <ControlsClientProvider client={controlsClient}>
        <DataComponent />
      </ControlsClientProvider>
    </div>
  );
};

// noinspection JSUnusedGlobalSymbols
export default ControlsComponent;
