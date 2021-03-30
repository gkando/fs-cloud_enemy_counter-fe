import React from "react";
import "./about.css";

import diagram from "../img/fs-cloud_enemy_counter-diagram.png";

const About = () => {
  return (
    <>
      <h1 id="cloud-enemy-kill-counter-frontend">Cloud Enemy Kill Counter - Frontend</h1>
      <p>
        Cloud based web service for tracking all accumulated in game player kills transmitted from a
        mock game server.
      </p>
      <p>
        The complementary website where players track the community&#39;s total kill count can be
        found below.
      </p>
      <p>
        <img id="diagram" src={diagram} alt="alt text" title="Title" />
      </p>
      <p>
        <a href="#vision">Vision - Problem &amp; Objectives</a>
      </p>
      <p>
        <a href="#tech">Architecture &amp; Tech Stack</a>
      </p>
      <p>
        <a href="#api">API Standards</a>
      </p>
      <p>
        <a href="https://github.com/users/gkando/projects/1">Github Project Board</a>
      </p>
      <p>
        <a href="https://github.com/gkando/fs-cloud_enemy_counter-be">
          <strong>Backend Repo</strong>
        </a>
      </p>
      <p>
        <a href="https://master.d1p108p2yx9tvh.amplifyapp.com/">
          <strong>Deployed Frontend</strong>
        </a>
      </p>
      <h2 id="-a-name-vision-a-vision-problem-objectives">
        <a id="vision"></a> Vision - Problem &amp; Objectives
      </h2>
      <hr />
      <h3 id="problem-core">Problem Core</h3>
      <hr />
      <p>
        Increase community engagement by implementing a cloud based web service and complementary
        website where players track all accumulated in game kills from every platform. Leaderboards
        encourage competition among players of your game, and create incentives for the players to
        get better at the game. Adopting leaderboards allows players to keep up with each other and
        facilitates building a community. It can also result in players spending more time with the
        game and higher retention.
      </p>
      <hr />
      <h3 id="objectives">Objectives</h3>
      <hr />
      <ul>
        <li>
          <label className="b-contain">
            <span>Source Control - create repos for FE &amp; BE code.</span>
            <input type="checkbox" checked />
            <div className="b-input"></div>
          </label>
          <blockquote>
            <p>github repos listed above.</p>
          </blockquote>
        </li>
        <li>
          <label className="b-contain">
            <span>Create a basic page as a framework to hold enemy slaying counter.</span>
            <input type="checkbox" checked />
            <div className="b-input"></div>
          </label>
          <blockquote>
            <p>See frontend page.</p>
          </blockquote>
        </li>
        <li>
          <label className="b-contain">
            <span>Minimally style page with CSS.</span>
            <input type="checkbox" checked />
            <div className="b-input"></div>
          </label>
          <blockquote>
            <p>See frontend page.</p>
          </blockquote>
        </li>
        <li>
          <label className="b-contain">
            <span>Serve app in the cloud</span>
            <input type="checkbox" checked />
            <div className="b-input"></div>
          </label>
          <blockquote>
            <p>Hosted using AWS Amplify.</p>
          </blockquote>
        </li>
        <li>
          <label className="b-contain">
            <span>
              Configure Amazon CloudFront (or GCP HTTPS load balancer, or Azure CDN etc) to serve
              site using HTTPS.
            </span>
            <input type="checkbox" checked />
            <div className="b-input"></div>
          </label>
          <blockquote>
            <p>Hosted using AWS Amplify.</p>
          </blockquote>
        </li>
        <li>
          <label className="b-contain">
            <span>
              Use TypeScript to create logic to retrieve enemy kill count from web service
            </span>
            <input type="checkbox" checked />
            <div className="b-input"></div>
          </label>
          <blockquote>
            <p>Logic created in React App using Axios to make API calls.</p>
          </blockquote>
        </li>
        <li>
          <label className="b-contain">
            <span>Store kill count in NoSQL database</span>
            <input type="checkbox" checked />
            <div className="b-input"></div>
          </label>
          <blockquote>
            <p>Enemy kill count stored in DynamoDB.</p>
          </blockquote>
        </li>
        <li>
          <label className="b-contain">
            <span>Create an API that accepts HTTP requests and communicates with database</span>
            <input type="checkbox" checked />
            <div className="b-input"></div>
          </label>
          <blockquote>
            <p>API created using AWS API Gateway.</p>
          </blockquote>
        </li>
        <li>
          <label className="b-contain">
            <span>Create serverless function using JS: </span>
            <ul>
              <li>
                A resource that can be called from an external service to add batches of kills from
                completed adventures.
              </li>
              <li>Some way of being called to report the amount of kills for your app</li>
            </ul>
            <input type="checkbox" checked />
            <div className="b-input"></div>
          </label>
          <blockquote>
            <p>Lambda functions created to store and retrieve enemy kill count.</p>
          </blockquote>
        </li>
        <li>
          <label className="b-contain">
            <span>Unit test serverless function and website code</span>
            <input type="checkbox" checked />
            <div className="b-input"></div>
          </label>
          <blockquote>
            <p>Four unit tests implemented using Jest.</p>
          </blockquote>
        </li>
        <li>
          <label className="b-contain">
            <span>
              Infrastructure as Code. <em>Stretch Goal</em>
            </span>
            <input type="checkbox" checked />
            <div className="b-input"></div>
          </label>
          <blockquote>
            <p>
              Implemented Serverless Framework to convert serverless.yml file to CloudFormation
              template, bundle and deploy code.
            </p>
          </blockquote>
        </li>
        <li>
          <label className="b-contain">
            <span>
              CI/CD - Set up GitHub Actions to automatically test and deploy backend.
              <em>Stretch Goal</em>
            </span>
            <input type="checkbox" checked />
            <div className="b-input"></div>
          </label>
          <blockquote>
            <p>
              Created{" "}
              <a href="https://github.com/gkando/fs-cloud_enemy_counter-be/actions">
                <strong>Github Action</strong>
              </a>
              to deploy repo to CloudFront when code is pushed to master branch.
            </p>
          </blockquote>
        </li>
      </ul>
      <hr />
      <h2 id="-a-name-tech-a-architecture-tech-stack">
        <a id="tech"></a> Architecture &amp; Tech Stack
      </h2>
      <hr />
      <h3 id="back-end">Back-End</h3>
      <ul>
        <li>
          <strong>API:</strong> AWS API Gateway
        </li>
        <li>
          <p>
            <strong>Database:</strong> DynamoDB
          </p>
          <ul>
            <li>
              <p>
                <strong>PlayerKillsTable</strong>: Individual records of a players total kills
                submitted by the game server.
              </p>
            </li>
            <li>
              <p>
                <strong>TotalKillsTable</strong>: Aggregate sum of the total kills from the
                PlayerKillsTable.
              </p>
            </li>
          </ul>
        </li>
        <li>
          <p>
            <strong>Business Logic:</strong> Lambda function written in JS.
          </p>
          <ul>
            <li>
              <strong>PostKills</strong>: lambda handler function to process batches of new enemy
              kills.
              <ul>
                <li>
                  EventParser: Parses post request body to validate it conforms to the expected
                  schema.
                </li>
                <li>
                  GameEventService:
                  <ol>
                    <li>
                      Transforms each item in the submitted in the batch array to a PutRequest
                      object to be submitted to DynamoDB.
                    </li>
                    <li>
                      Splits the batch array in to chunks to comply with DynamoDB&#39;s maximum
                      batch size limit.
                    </li>
                  </ol>
                </li>
              </ul>
            </li>
            <li>
              <p>DynamoService: Writes each batch of data to the PlayerKillsTable in DynamoDB.</p>
            </li>
            <li>
              <p>
                <strong>streamProcessor</strong>: Lambda function which listens for new writes to
                the PlayerKillsTable and updates the TotalKillsTable.
              </p>
            </li>
            <li>
              <p>
                <strong>GetKills</strong>: Lambda handler for get endpoint. Retrives total kills
                from TotalKillsTable and returns it to the client.
              </p>
            </li>
          </ul>
        </li>
        <li>
          <p>
            <strong>Testing:</strong> Jest for unit testing.
          </p>
        </li>
      </ul>
      <h3 id="front-end">Front-End</h3>
      <ul>
        <li>
          <strong>UI:</strong> React framework written in TypeScript using Axios for API calls &amp;
          CSS for basic styling.
        </li>
        <li>
          <strong>Hosting:</strong> AWS Amplify Console to provide a git-based workflow for CD.
        </li>
      </ul>
      <hr />
      <h2 id="-a-name-api-a-api-standards">
        <a id="api"></a> API Standards
      </h2>
      <p>Standards for interacting with this web service.</p>
      <h2 id="version-0-1">Version: 0.1</h2>
      <h3 id="-dev-totals">/dev/totals</h3>
      <h4 id="get">GET</h4>
      <h5 id="description-">Description:</h5>
      <p>Retrieves the total number of player kills.</p>
      <h5 id="responses">Responses</h5>
      <table>
        <thead>
          <tr>
            <th>Code</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>200</td>
            <td>Returns an object containing the totalKills.</td>
          </tr>
        </tbody>
      </table>
      <h3 id="-dev-kills">/dev/kills</h3>
      <h4 id="post">POST</h4>
      <h5 id="description-">Description:</h5>
      <p>
        Add a new batch of player kills to the total enemy kill counter. API key is required for
        access. Body must contain an array of objects, each containing a playerId and number of
        kills.
      </p>
      <h5 id="parameters">Parameters</h5>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Located in</th>
            <th>Description</th>
            <th>Required</th>
            <th>Schema</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>x-api-key</td>
            <td>header</td>
            <td></td>
            <td>No</td>
            <td>string</td>
          </tr>
        </tbody>
      </table>
      <h5 id="responses">Responses</h5>
      <table>
        <thead>
          <tr>
            <th>Code</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>200</td>
            <td>OK - Batch succesfully added</td>
          </tr>
          <tr>
            <td>403</td>
            <td>Forbidden - Authentication credentials not provided</td>
          </tr>
        </tbody>
      </table>
      <h5 id="security">Security</h5>
      <table>
        <thead>
          <tr>
            <th>Security Schema</th>
            <th>Scopes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>ApiKeyAuth</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default About;
