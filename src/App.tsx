import React, { useEffect, useState } from "react";
import axios from "axios";
import NavBar from "./components/NavBar";
import BottomDrawer from "./components/BottomDrawer";
import About from "./components/About";
import logo from "./img/codehammer-logo-sm.png";

interface CounterProps {
  count: string;
}

interface KillCount {
  totalKills: string;
}

const Counter = ({ count }: CounterProps) => {
  return <div className="counter">{count}</div>;
};

function App() {
  const [killCount, setKillCount] = useState("0");

  // Manage bottom drawer state
  const [visible, setVisible] = useState(false);
  const toggleDrawer = () => {
    setVisible(!visible);
  };

  // Delay set longer for debugging
  const delay = () => Math.random() * 400000;

  // api call to get-kills endpoint
  function getKills() {
    axios
      .get<KillCount>("https://vmuxypsric.execute-api.eu-north-1.amazonaws.com/dev/totals")
      .then((response) => {
        console.log("RESPONSE: ", response.data, new Date().toISOString());
        setKillCount(response.data.totalKills);
      });
  }
  // launch get request on initial page load & after random delay
  useEffect(() => {
    getKills();
    // const interval = setInterval(() => {
    //   getKills();
    // }, delay());
    // return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <NavBar clickHandler={toggleDrawer} />
      <section id="home">
        <img className="logo" alt="CodeHammer Logo" src={logo} />
        <div className="countContainer">
          <span>Total Count is:</span>
          <Counter count={killCount} />
        </div>
        <BottomDrawer getKills={getKills} visible={visible} clickHandler={toggleDrawer} />
      </section>
      <section id="about">
        <About />
      </section>
    </div>
  );
}

export default App;
