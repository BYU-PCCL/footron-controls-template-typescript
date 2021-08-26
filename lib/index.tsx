/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useCallback, useState } from "react";
import { useMessaging } from "@footron/controls-client";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core";

// const containerStyle = css`
//   padding: 16px;
//   overflow-x: hidden;
//
//   p {
//     margin: 0 0 16px;
//   }
// `;

const useButtonStyles = makeStyles({
  contained: {
    height: "400px",

  },
});

const buttonStyle = css`
  #name {
    text-align: center;
    font-size: 40px;
  }
  
  body {
    background-color: #525252;
  }

  #start {
    margin: auto;
  }

  .page-width-inner {
    // width: 100%;
    height: 100%;
    border: 1px solid black;
  }

  Button {
    width: 50%;
    border: 1px solid black;
    color: whitesmoke;
    font-weight: bolder;
    // center: center;
    // background-color: var(--color);
    background-color: #6166ff;
  }
  
`;

const blue = css`
  html {
    --color: #6166ff;
  }

  Button {
    background-color: #6166ff;
  }
`;
const green = css`
  html {
    --color: #3de364;
  }

  Button {
    background-color: #3de364;
  }
`;
const red = css`
  html {
    --color: #ff6161;
  }

  Button {
    background-color: #ff6161;
  }
`;
const yellow = css`
  html {
    --color: #fffc61;
  }

  Button {
    background-color: #fffc61;
  }
`;

function getButton1Name(name:string){
  return (name === "left" ? "Up" :
      name === "right" ? "Up" :
          name === "up" ? "Left" :
              name === "down" ? "Left" :
                  "Button1")
}

function getButton2Name(name:string){
  return (name === "left" ? "Down" :
      name === "right" ? "Down" :
          name === "up" ? "Right" :
              name === "down" ? "Right" :
                  "Button2")
}

const ControlsComponent = (): JSX.Element => {
  const [playerName, setPlayerName] = useState<string | undefined>();
  const [button1, setButton1] = useState<string | undefined>();
  // const [button2, setButton2] = useState<string | undefined>();

  const { sendMessage } = useMessaging<{ player: string }>((message) => {
    setPlayerName(message.player);
  });

  const update = useCallback(
    async (movement) => {
      if (!playerName) return;
      await sendMessage({ player: playerName, movement: movement });
    },
    [sendMessage, playerName]
  );
  const buttonClasses = useButtonStyles();

  function up() {
    update(0);
  }

  function down() {
    update(2);
  }

  function stop() {
    update(1);
  }

  function start() {
    update(3);
  }

  function stap() {
    // for testing purposes
    return 1 + 1;
  }

  let color = css`
    html {
    }
  `;

  // if (playerName === "left" || playerName === "right") {
  //   setButton1("Down");
  //   // setButton2("Up");
  // } else if (playerName === "up" || playerName === "down") {
  //   setButton1("Left");
  //   // setButton2("Right");
  // }

  return (
    <div css={buttonStyle}>
      <div id={"name"}>{playerName || "unknown"}</div>
      <Button type="button" id={"start"} onTouchEnd={start}>
        Start
      </Button>

      <div>
        <Button
          type="button"
          variant={"contained"}
          id={"right"}
          size={"large"}
          onTouchStart={up}
          onTouchEnd={stop}
          classes={{
            contained: buttonClasses.contained,
          }}
        >
          {getButton1Name(playerName)}
        </Button>
        <Button
          type="button"
          variant={"contained"}
          id={"left"}
          onTouchStart={down}
          onTouchEnd={stop}
          classes={{
            contained: buttonClasses.contained,
          }}
        >
          {getButton2Name(playerName)}
        </Button>
      </div>
    </div>
  );
};

export default ControlsComponent;


// if (playerName === "left") {
//   color = blue;
// } else if (playerName === "right") {
//   color = green;
// } else if (playerName === "up") {
//   color = red;
// } else if (playerName === "down") {
//   color = yellow;
// }
