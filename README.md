# fs-cloud_enemy_counter-fe

Front-End repo for Cloud Enemy Counter project.

[Vision - Problem & Objectives](#vision)

[Architecture & Tech Stack](#tech)

[Github Project Board](https://github.com/users/gkando/projects/1)

[Deployed Frontend](https://master.d1p108p2yx9tvh.amplifyapp.com/)

[Deployed Backend](#)

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
yarn run build
```

To create a development build:

```sh
yarn run build-dev
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

### User Types

---

#### Friendly Player

Jörgen is an experienced gamer but new to the CodeHammer community. He wants to enjoy healthy competition and cooperation in a community to gain personal and collective achievements.

#### Not So Friendly Player

Joe, while an avid gamer and member of our games community, pushes the lines of fair play and good sportsmanship. For him, gaming is less about legitimate in game achievements, and more about secretly subverting the games rules to gain an unfair advantage over an opponent 'for the lulz.'

He will seek to manipulate the total kill count to show large increases over a short period of time to bolster his gaming 'cred' and disparage the game's quality and community engagement strategy.

---

## <a name="tech"></a> Architecture & Tech Stack

### Back-End

- **API:** TBD
- **Business Logic:** Lambda function written in TypeScript.
- **Database:** DynamoDB.
- **Testing:** TBD.

### Front-End

- **UI:** React framework using Axios for API calls & CSS for basic styling.
- **Hosting:** AWS Amplify Console to provide a git-based workflow for CD.
- **Testing:** Jest for unit testing.

---

### Data Structure

Data from player game (client side) => Lambda Functon => DB
{

}
