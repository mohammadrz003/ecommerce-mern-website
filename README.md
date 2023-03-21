# **Online shop**
## *Buy Physical Products With Cryptocurrency!*

nowadays, many people prefer to buy products online, instead of going out and wasting their time looking for their needs. so, it's the best option if you have an online store for selling your products because beside selling twenty-four hours a day, seven days a week, you also don't have to pay a lot of money for renting a store.  
the good news is that with cloning this project, you can start selling your physical products in no time!  
This project is built with some of the most popular technologies including [React.js](https://reactjs.org/), [Node.js](https://nodejs.org/en/), and [MongoDB](https://www.mongodb.com/).
with the help of React, we can have a [single page application](https://en.wikipedia.org/wiki/Single-page_application) which users don't have to wait for boring loadings while they're navigating between different pages. it gives users an incredible UX (user experience) while they're using your app.  
since I'm keen on [cryptocurrency](https://en.wikipedia.org/wiki/Cryptocurrency), I decided to add a cryptocurrency payment method with the help of [PLISIO](https://plisio.net/) platform to this project, so people can buy your products with some of the popular cryptocurrencies like Bitcoin, Ethereum, Litecoin and so on...
this project is scalable enough if you want to add more payment options like: PayPal, Credit card, Debit card and...

---
## ✨ Features  
  
- Search and find products by their name
- Make the best decision by reviewing other customer's opinion about a product before buying 
- Filter products by their Price, User ratings, Popularity, Categories
- User friendly admin panel for managers
- Fast and interactive user interface with an optimized code
  
## 🎴 Screenshot  
  
![home page](https://files.moonfo.com/general-images/github/website-preview.jpg "Home page")
  
  
## ⚒️ Built with
  
- [ReactJS](https://reactjs.org/) - A JavaScript library for building user interfaces
- [NodeJS](https://nodejs.org/en/) - Cross-platform JavaScript runtime environment
- [ExpressJS](https://expressjs.com/) - Fast, unopinionated, minimalist web framework for Node.js
- [MongoDB](https://www.mongodb.com/) - Cross-platform document-oriented database program
- [Axios](https://axios-http.com/) - Promise based HTTP client for the browser and node.js
- [Mongoose](https://mongoosejs.com/) - Elegant mongodb object modeling for node.js
- [TailwindCSS](https://tailwindcss.com/) - A utility-first CSS framework
- [Redux toolkit](https://redux-toolkit.js.org/) - A JavaScript library for managing and centralizing application state.
  
## 💽 Installation
  
### # Step 1:
  
install MongoDB for windows with [this](https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-windows/) official guide
### # Step 2:
  
in the project root folder, open termial and run command `npm install` or `yarn install` to install all the neccesary packages for the *Back-end*.  
for the *Front-end*, you need to go into the ***client*** folder with `cd ./client` command and again, run `npm install` or `yarn install` to add all the essential libraries to *node_modules* folder.
  
### # Step 3:
  
at this point, you must create a file called `.env` in the project root folder.  
you need to specify some variables in this file including *NODE_ENV*, *MONGO_URI*, *MONGO_URI* and other stuff.  
you can see all the required variables in a file called `.env.example` in project root folder.
  
### # Step 4:
  
if you want to use a cryptocurrency payment in this application, you need to go to the [PLISIO](https://plisio.net) website and sign up for a new account so that you can get a SECRET KEY for your application.  
then you can go on to the next step and fill the `PLISIO_SECRET_KEY` variable with your secret key that you got from [PLISIO](https://plisio.net) website
### # Step 5:
  
here is an example of what you will need to fill in the variables with:

    NODE_ENV = development
    MONGO_URI = mongodb://127.0.0.1:27017/techshop-ecommerce?authSource=admin
    PORT = 5000
    JWT_SECRET = <random_strong_password>
    PLISIO_SECRET_KEY = <get_secrent_key_from_PLISIO>
    PLISIO_CALLBACK_URL = https://example.com/api/payCallback
    PLISIO_SUCCESS_URL = https://example.com/order/

### # Step 6:
  
at the end, the only thing you need is that you must run `npm run dev` in your project folder to start both the front-end and back-end at the same time
  

## 📧 Support
  
<rezaiimohammad003@gmail.com>  

## 🧾 License
  
[MIT License](LICENSE)