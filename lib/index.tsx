/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useCallback, useState } from "react";
import { useMessaging } from "@footron/controls-client";

let movementL: string = "stop";

const containerStyle = css`
  padding: 16px;
  overflow-x: hidden;

  p {
    margin: 0 0 16px;
  }
`;

const ControlsComponent = (): JSX.Element => {
  const [number, setNumber] = useState<number | undefined>();

  const { sendMessage } = useMessaging<number>((message) => {
    setNumber(message);
  });

  const updateLeft = useCallback(
      async () => {
        await sendMessage(movementL);
      },
      [sendMessage]
  );

  function lUp() {
    movementL = "up";
    updateLeft();
  }

  function lDown() {
    movementL = "down";
    updateLeft();
  }

  function lStop() {
    movementL = "stop";
    updateLeft();
  }



  return (
    <div>
      <button type="button" onMouseDown={lUp} onMouseUp={lStop}>Up</button>
      <button type="button" onMouseDown={lDown} onMouseUp={lStop}>Down</button>
    </div>
  );
};

export default ControlsComponent;
