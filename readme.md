# API Construction kit (optimized for cyclic deployment)

## Overview
This setup is based on JSON-Server. JWT Authentication & Route protection is working out of the box. Several API endpoints has been created for you to create any app of your choice. You are free to add your own endpoints by adding a new key to db.json file. Static files like images may be served from `server-files/images` directory. You can customize route protection from the `serverConfig.js` file. Creating a new entry in db.json file would add a new route for you & you are free to create any fields at runtime. `Id` if not provided will be auto created.

## Installation
```
npm i
```

## Run the server in development (local) environment
```
npm run dev
```

## Access the server
```
http://localhost:9999/
```

## Node version
v16.x

## Resources
`/DFabrica` 100x    (products of the site)

`/users` 10x        (users of the site)


<hr>

To access and modify `DFabrica`, you can use any HTTP method:
`GET` `POST` `PUT` `PATCH` `DELETE` OPTIONS

The `GET` is open but all other HTTP methods requires Authentication.

For the `/users` route, all methods are protected.

<hr>

## Authentication
### Register a new user 
```
POST http://localhost:9999/user/register
Content-Type: application/json

    {
    "username": "Ram.R3R",
    "firstname": "Ramsundar",
    "lastname": "Sivakumar",
    "email": "sendtoramsundar@mail.com",
    "password": "ram.sundar",
    "avatar": "https://avatars.githubusercontent.com/u/121308432"
    }
```    

### Login an existing user with password
```
POST http://localhost:9999/user/login
Content-Type: application/json

    {
      "email": "sendtoramsundar",
      "password": "ram.sundar"
    }
```

###

## More examples
https://github.com/vivmagarwal/mock-api-server-with-JWT-authentication/blob/main/server.rest

## VSCode extension to make API calls from the .rest file
https://marketplace.visualstudio.com/items?itemName=humao.rest-client 

## Change port
Update `PORT=3000` in the `.env` file before `npm start`.
