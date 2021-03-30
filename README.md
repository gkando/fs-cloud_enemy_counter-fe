# Cloud Enemy Kill Counter - Frontend

Cloud based web service for tracking all accumulated in game player kills transmitted from a mock game server.

The complementary website where players track the community's total kill count can be found below.

![alt text](fs-cloud_enemy_counter-diagram.png "Title")

[Vision - Problem & Objectives](#vision)

[Architecture & Tech Stack](#tech)

[API Standards](#api)

[Github Project Board](https://github.com/users/gkando/projects/1)

[**Backend Repo**](https://github.com/gkando/fs-cloud_enemy_counter-be)

[**Deployed Frontend**](https://master.d1p108p2yx9tvh.amplifyapp.com/)

## Building, Running & Testing

<details>
<summary>Click to expand!</summary>

First install dependencies:

```sh
yarn install
```

To run in hot module reloading mode:

```sh
yarn start
```

To create a production build:

```sh
yarn build
```

## Running

Open the file `dist/index.html` in your browser

## Testing

To run unit tests:

```sh
yarn test
```

</details>

## <a name="vision"></a> Vision - Problem & Objectives

### Problem Core

---

Increase community engagement by implementing a cloud based web service and complementary website where players track all accumulated in game kills from every platform. Leaderboards encourage competition among players of your game, and create incentives for the players to get better at the game. Adopting leaderboards allows players to keep up with each other and facilitates building a community. It can also result in players spending more time with the game and higher retention.

---

### Objectives

---

0. Source Control - create repos for FE & BE code.
1. Create a basic page as a framework to hold enemy slaying counter.
2. Minimally style page with CSS.
3. Serve app in the cloud.
4. Configure Amazon CloudFront (or GCP HTTPS load balancer, or Azure CDN etc) to serve site using HTTPS.
5. Use JS to create logic to retrive enemy kill count from web service.
6. Store kill count in NoSQL database.
7. Create an API that accepts HTTP requests and communicates with database.
8. Create serverless function using TypeScript:
   - A resource that can be called from an external service to add batches of kills from completed adventures.
   - Some way of being called to report the amount of kills for your app.
9. Unit test serverless function and website code.
10. Infrastructure as Code. _Stretch Goal_
11. CI/CD - Set up GitHub Actions to automatically test and deploy backend._Stretch Goal_

---

## <a name="tech"></a> Architecture & Tech Stack

### Back-End

- **API:** AWS API Gateway
- **Business Logic:** Lambda function written in JS.
- **Database:** DynamoDB.
- **Testing:** Jest for unit testing.

### Front-End

- **UI:** React framework written in TypeScript using Axios for API calls & CSS for basic styling.
- **Hosting:** AWS Amplify Console to provide a git-based workflow for CD.

---

## <a name="api"></a> API Standards

Standards for interacting with this web service.

## Version: 0.1

### /dev/totals

#### GET

##### Description:

Retrieves the total number of player kills.

##### Responses

| Code | Description                                  |
| ---- | -------------------------------------------- |
| 200  | Returns an object containing the totalKills. |

### /dev/kills

#### POST

##### Description:

Add a new batch of player kills to the total enemy kill counter. API key is required for access. Body must contain an array of objects, each containing a playerId and number of kills.

##### Parameters

| Name      | Located in | Description | Required | Schema |
| --------- | ---------- | ----------- | -------- | ------ |
| x-api-key | header     |             | No       | string |

##### Responses

| Code | Description                                         |
| ---- | --------------------------------------------------- |
| 200  | OK - Batch succesfully added                        |
| 403  | Forbidden - Authentication credentials not provided |

##### Security

| Security Schema | Scopes |
| --------------- | ------ |
| ApiKeyAuth      |        |
