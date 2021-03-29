import React, { useState } from "react";
import axios from "axios";
import generateData from "../utils/generateData";

interface PropsInterface {
  getKills: () => void;
}

const GameServer: React.FC<PropsInterface> = (props) => {
  const [data, setData] = useState("");
  const [msg, setMsg] = useState("");

  function postKills() {
    if (data === "") {
      setMsg("Must get player data first!");
    } else {
      const options = {
        headers: { "x-api-key": process.env.API_KEY },
      };

      axios
        .post("https://2g8gm210z6.execute-api.eu-north-1.amazonaws.com/dev/kills", data, options)
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
    setData(gameData);
  };
  return (
    <div className="pccase">
      <div className="screen oldscreeneffect">
        <div className="screentext">
          <p>__________________________________________________________________________________</p>
          <p className="retroLogo">
            ░█████╗░░█████╗░██████╗░███████╗██╗░░██╗░█████╗░███╗░░░███╗███╗░░░███╗███████╗██████╗░
            ██╔══██╗██╔══██╗██╔══██╗██╔════╝██║░░██║██╔══██╗████╗░████║████╗░████║██╔════╝██╔══██╗
            ██║░░╚═╝██║░░██║██║░░██║█████╗░░███████║███████║██╔████╔██║██╔████╔██║█████╗░░██████╔╝
            ██║░░██╗██║░░██║██║░░██║██╔══╝░░██╔══██║██╔══██║██║╚██╔╝██║██║╚██╔╝██║██╔══╝░░██╔══██╗
            ╚█████╔╝╚█████╔╝██████╔╝███████╗██║░░██║██║░░██║██║░╚═╝░██║██║░╚═╝░██║███████╗██║░░██║
            ░╚════╝░░╚════╝░╚═════╝░╚══════╝╚═╝░░╚═╝╚═╝░░╚═╝╚═╝░░░░░╚═╝╚═╝░░░░░╚═╝╚══════╝╚═╝░░╚═╝
          </p>
          <p>Game Server</p>
          <p>__________________________________________________________________________________</p>
          <div className="tasksText">
            <p>Tasks</p>
            <div className="server-btns" onClick={getData}>
              (1) Get Player Kills Data
            </div>
            <div className="server-btns" onClick={postKills}>
              (2) Transmit Player Kills to Cloud Enemy Counter
            </div>
            <div className="server-msg">
              {msg}
              <br></br>
              {data}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameServer;
