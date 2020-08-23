# NODE + EXPRESS + MONGO

## Preview

You can check out [live preview](https://comming-soon/).

## Quick Start

1.  Go to your project folder from your terminal
2.  Run: `npm install` or `yarn install`
3.  By default app is pointing to an external api. There is a way to point to a local api, just need to install mongo db
    in your local environment and change the .env file `API_URL` to `http://localhost:3060/api`. If you want populate initital data,
    just execute the following command: `node server-api/database/test/manualTest`
4.  After install, run: `npm run start` or `yarn start`
5.  It will open your browser(http://localhost:3060)

- Login with curl:
  `curl -d '{ "username": "martin.pacora@gmail.com", "password": "Pa\$\$w0rd" }' -H "Content-Type: application/json" -X POST http://localhost:3060/api/session/login`

- Login with jquery
  `jQuery.ajax({ url: 'http://localhost:3060/api/session/login', type: 'post', dataType: 'json', contentType: 'application/json', success: function (data) { console.log('json'); }, data: JSON.stringify({username:"martin.pacora@gmail.com", password:"Pa\$\$w0rd"}) })`
