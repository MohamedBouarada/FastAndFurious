# Fast And Furious

<h1> <img src = "https://github.com/Harpia-Vieillot/Harpia-Vieillot/blob/main/resources/analytics.webp" width="7%"> About </h1>

A web plateform for Fast And Furious event which is a national contest open for robotics devotees and organised by AutoClub


<h1> <img src = "https://github.com/Harpia-Vieillot/Harpia-Vieillot/blob/main/resources/analytics.webp" width="7%"> Features </h1>

- Introduce the `Fast And Furious` event and `AutoClub`  
- Represents its committee
- Getting informations about the competitions (title , description , images)
- Registering in a competition
- Receiving an email after a successful registration
- Dashboard admin  

<h1> <img src = "https://github.com/Harpia-Vieillot/Harpia-Vieillot/blob/main/resources/analytics.webp" width="7%"> Frontend </h1>

- The front-end project in 'frontend' branch   ->  https://github.com/MohamedBouarada/FastAndFurious/tree/frontend

<h1> <img src = "https://github.com/Harpia-Vieillot/Harpia-Vieillot/blob/main/resources/analytics.webp" width="7%"> Backend </h1>

- The front-end project in 'backend' branch   ->  https://github.com/MohamedBouarada/FastAndFurious/tree/backend

<h1> <img src = "https://github.com/Harpia-Vieillot/Harpia-Vieillot/blob/main/resources/analytics.webp" width="7%"> Dashboard Admin </h1>

- The Bashboard Admin in 'dashboardAdmin' branch   ->  https://github.com/MohamedBouarada/FastAndFurious/tree/dashboard_admin

<h1> <img src = "https://github.com/Harpia-Vieillot/Harpia-Vieillot/blob/main/resources/analytics.webp" width="7%"> Technologies used </h1>

- For the front-end : Reactjs + bootstrap
- For the back-end : ExpressJs + mongoDb

<h1> <img src = "https://github.com/Harpia-Vieillot/Harpia-Vieillot/blob/main/resources/analytics.webp" width="7%"> Setup </h1>

Clone each branch locally 

Install dependencies :

```bash
$ npm install
```
Create and Configure `.env` file to connect to a database and to use the email service:
        - databaseUri (the path to the MongoDB Cluster)
        - JWT_SECRET (the secret key to create JWT)
        - MAIL_USER (the email address for this event : email address with which we send registration emails)
        - MAIL_PASSWORD (the password for this email)

Running the app:
```bash
# we run first the backend
$ npm run dev

# run the frontend (client side)
$ npm start

# run dashboard admin 
$ npm start
```
