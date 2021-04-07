import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import axios from "axios";
import generateData from "../utils/generateData";

interface PropsInterface {
  getKills: () => void;
}
type Message = JSX.Element | string;

const GameServer: React.FC<PropsInterface> = (props) => {
  const [data, setData] = useState("");
  const [msg, setMsg] = useState<Message>();
  const [showInput, setShowInput] = useState(false);
  const [value, setValue] = useState("");

  function postKills() {
    if (data === "") {
      setMsg("Must get player data first!");
    } else {
      const options = {
        headers: { "x-api-key": value },
      };

      axios
        .post("https://vmuxypsric.execute-api.eu-north-1.amazonaws.com/dev/kills", data, options)
        .then((response) => {
          console.log("RESPONSE: ", response.data, new Date().toISOString());
          setTimeout(function () {
            props.getKills();
          }, 3000);
        });
    }
  }

  const getData = () => {
    const gameData = generateData(2, false);
    setMsg("New Player Kills Data:");
    setData(JSON.stringify(JSON.parse(gameData), null, 2));
    // console.log(JSON.stringify(JSON.parse(gameData), null, 2));
  };

  const handleSubmit = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      console.log("do validate");
      postKills();
    }
  };
  const handleShowInput = () => {
    setShowInput(true);
    const input = document.getElementById("apiKey");
    if (input !== null) {
      input.focus()!;
    }
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <div className="pccase">
      <div className="screen oldscreeneffect">
        <div className="screentext">
          <p className="screen-line">
            __________________________________________________________________________________
          </p>
          <p id="retroLogo">
            ░█████╗░░█████╗░██████╗░███████╗██╗░░██╗░█████╗░███╗░░░███╗███╗░░░███╗███████╗██████╗░
            ██╔══██╗██╔══██╗██╔══██╗██╔════╝██║░░██║██╔══██╗████╗░████║████╗░████║██╔════╝██╔══██╗
            ██║░░╚═╝██║░░██║██║░░██║█████╗░░███████║███████║██╔████╔██║██╔████╔██║█████╗░░██████╔╝
            ██║░░██╗██║░░██║██║░░██║██╔══╝░░██╔══██║██╔══██║██║╚██╔╝██║██║╚██╔╝██║██╔══╝░░██╔══██╗
            ╚█████╔╝╚█████╔╝██████╔╝███████╗██║░░██║██║░░██║██║░╚═╝░██║██║░╚═╝░██║███████╗██║░░██║
            ░╚════╝░░╚════╝░╚═════╝░╚══════╝╚═╝░░╚═╝╚═╝░░╚═╝╚═╝░░░░░╚═╝╚═╝░░░░░╚═╝╚══════╝╚═╝░░╚═╝
          </p>
          <p>Game Server</p>
          <p className="screen-line">
            __________________________________________________________________________________
          </p>
          <div className="tasksText">
            <p>Tasks</p>
            <div className="server-btns" onClick={getData}>
              (1) Get Player Kills Data
            </div>
            <div className="server-btns" onClick={handleShowInput}>
              (2) Transmit Player Kills to Cloud Enemy Counter
            </div>
          </div>
          <p className="screen-line msg-line">
            __________________________________________________________________________________
          </p>
          <div className="server-msg">
            {msg}
            <br></br>
            <pre id="json">{data}</pre>
            {showInput ? (
              <div id="prompt">
                {" "}
                <p>api.key:</p>
                <input
                  type="text"
                  id="apiKey"
                  value={value}
                  onChange={handleChange}
                  onKeyDown={handleSubmit}
                  className="terminal-input"
                />
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameServer;
