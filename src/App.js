import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import styles from "./App.css";
import logo from "./img/codehammer-logo-sm.png";

const Counter = ({ completed }) => {
  return <div className={styles.counter}>{completed}</div>;
};

const App = ({ title, killCount }) => {
  // Server-Sent Events client code
  // will be implemented when server setup complete
  // const [process, setProcess] = useState({});
  // const [message, setMessage] = useState({});
  // const [listening, setListening] = useState(false);

  // const statusMessage = {
  //   subscribed: "Subscribed",
  //   unsubscribed: "Unsubscribed",
  // };

  // const subscribe = async () => {
  //   const status = listening;
  //   if (!status) {
  //     const events = new EventSource("http://localhost:8000/events");
  //     events.onmessage = (event) => {
  //       const parsedData = JSON.parse(event.data);
  //       console.log(event);
  //       switch (parsedData.type) {
  //         case "init-connection":
  //           setProcess(parsedData.processId);
  //           break;
  //         case "message":
  //           setMessage(parsedData.message);
  //           break;
  //       }
  //     };
  //   } else {
  //     setProcess({});
  //     setMessage({});
  //     await axios.delete(`http://localhost:8000/closes/${process}`);
  //   }
  //   setListening(!listening);
  // };
  return (
    <div className={styles.App}>
      <section id="home">
        <img className={styles.logo} src={logo} />

        <div className={styles.countContainer}>
          <span>Total Count is:</span>
          <Counter completed={killCount} />
        </div>
      </section>
      <section id="about">
        <h2>About this project</h2>
      </section>
      <section id="tech">
        <h2>Tech stack used</h2>
      </section>
    </div>
  );
};

export default App;
