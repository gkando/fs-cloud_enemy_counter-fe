import React, { useEffect, useState } from "react";
import axios from "axios";
import NavBar from "./components/NavBar";
import BottomDrawer from "./components/BottomDrawer";
import logo from "./img/codehammer-logo-sm.png";

const Spec = {
  openapi: "3.0.1",
  info: {
    title: "defaultTitle",
    description: "defaultDescription",
    version: "0.1",
  },
  servers: [
    {
      url: "https://2g8gm210z6.execute-api.eu-north-1.amazonaws.com",
    },
  ],
  paths: {
    "/dev/totals": {
      get: {
        description: "Retrieves the total number of player kills.",
        responses: {
          "200": {
            description: "Returns an object containing the totalKills.",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/inline_response_200",
                },
                examples: {
                  "0": {
                    value: '{\n  "totalKills": "4495"\n}',
                  },
                },
              },
            },
          },
        },
        servers: [
          {
            url: "https://2g8gm210z6.execute-api.eu-north-1.amazonaws.com",
          },
        ],
      },
      servers: [
        {
          url: "https://2g8gm210z6.execute-api.eu-north-1.amazonaws.com",
        },
      ],
    },
    "/dev/kills": {
      post: {
        description:
          "Add a new batch of player kills to the total enemy kill counter. API key is required for access.  Body must contain an array of objects, each containing a playerId and number of kills.",
        parameters: [
          {
            name: "x-api-key",
            in: "header",
            required: false,
            style: "simple",
            explode: false,
            schema: {
              type: "string",
            },
            example: "cDuLFo3HLE2DnCkRPfiXO3rAHLOgx4ou8m2fEfvO",
          },
        ],
        requestBody: {
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {},
              },
              examples: {
                "0": {
                  value:
                    '[\n  {\n    "playerId": "nL5pSEK3D8p0q_hLSBvUO",\n    "kills": 184\n  },\n  {\n    "playerId": "l_Ofz7N63LLRK5YcKvS4T",\n    "kills": 94\n  }]',
                },
              },
            },
          },
        },
        responses: {
          "200": {
            description: "OK - Batch succesfully added",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/inline_response_200_1",
                },
                examples: {
                  "0": {
                    value: '{\n  "response": {\n    "success": true\n  }\n}',
                  },
                },
              },
            },
          },
          "403": {
            description: "Forbidden - Authentication credentials not provided",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/inline_response_403",
                },
                examples: {
                  "0": {
                    value: '{"message":"Forbidden"}',
                  },
                },
              },
            },
          },
        },
        servers: [
          {
            url: "https://2g8gm210z6.execute-api.eu-north-1.amazonaws.com",
          },
        ],
      },
      servers: [
        {
          url: "https://2g8gm210z6.execute-api.eu-north-1.amazonaws.com",
        },
      ],
    },
  },
  components: {
    schemas: {
      inline_response_200: {
        type: "object",
        properties: {
          totalKills: {
            type: "string",
          },
        },
      },
      inline_response_200_1: {
        type: "object",
        properties: {
          response: {
            type: "object",
            properties: {
              success: {
                type: "boolean",
              },
            },
          },
        },
      },
      inline_response_403: {
        type: "object",
        properties: {
          message: {
            type: "string",
          },
        },
      },
    },
  },
};
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
      .get<KillCount>("https://2g8gm210z6.execute-api.eu-north-1.amazonaws.com/dev/totals")
      .then((response) => {
        console.log("RESPONSE: ", response.data, new Date().toISOString());
        setKillCount(response.data.totalKills);
      });
  }
  // launch get request on initial page load & after random delay
  useEffect(() => {
    getKills();
    const interval = setInterval(() => {
      getKills();
    }, delay());
    return () => clearInterval(interval);
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
        <h2>About this project</h2>
      </section>
      <section id="tech">
        <h2>Tech stack used</h2>
      </section>
    </div>
  );
}

export default App;
