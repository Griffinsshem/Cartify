# 🛒 Cartify – Premium E-Commerce App

![React](https://img.shields.io/badge/React-19-blue?logo=react)
![Firebase](https://img.shields.io/badge/Firebase-Auth-orange?logo=firebase)
![License](https://img.shields.io/badge/License-MIT-green)
![Status](https://img.shields.io/badge/Status-Live-success)

🔗 **Live Demo:** https://caritfy.web.app/  

---

## ✨ Overview

Cartify is a **premium Amazon-inspired e-commerce application** built with React.  
It delivers a seamless shopping experience with authentication, cart management, and a modern UI system.

---

## 🔥 Features

- 🔐 Firebase Authentication (Login / Register)
- 🛍️ Product browsing with clean UI cards
- 🛒 Add & remove items from basket
- 💳 Checkout page with subtotal calculation
- 🎨 Premium UI (Lucide icons + modern design system)
- ⚡ Real-time state management (Context API)

---

## 🧱 Tech Stack


- Frontend: React 19, React Router
- State: Context API + Reducer
- Auth: Firebase
- UI: CSS + lucide-react
- Utilities: react-number-format

## 📂 Project Structure

```
cartify/
├── node_modules/
├── public/
├── src/
│ ├── App.css
│ ├── App.js
│ ├── Checkout.css
│ ├── Checkout.jsx
│ ├── CheckoutProduct.css
│ ├── CheckoutProduct.jsx
│ ├── Firebase.js
│ ├── Header.css
│ ├── Header.jsx
│ ├── Home.css
│ ├── Home.jsx
│ ├── index.css
│ ├── index.js
│ ├── Login.css
│ ├── Login.js
│ ├── Product.css
│ ├── Product.jsx
│ ├── reducer.js
│ ├── StateProvider.js
│ ├── Subtotal.css
│ ├── Subtotal.jsx
│
├── .env.local
├── .firebaserc
├── .gitignore
├── firebase.json
├── package-lock.json
├── package.json
├── README.md
```


## ⚙️ Getting Started

- Clone
```git clone https://github.com/Griffinsshem/Cartify```
 ```cd cartify```
- Install
 ```npm install```
- Run
 ```npm start```


## 🔑 Firebase Setup
```
const firebaseConfig = {
  apiKey: "YOUR_KEY",
  authDomain: "YOUR_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
};
```


## 🚀 Deployment

Deployed on Firebase Hosting

npm run build
firebase deploy


## 🧠 What I Learned
- Building scalable React apps
- Global state management (Context API)
- Firebase authentication integration
- Designing production-level UI systems


## 🔮 Future Improvements
- 💳 Stripe payments
- 🔍 Search functionality
- 📦 Orders history
- 🌙 Dark mode
- ⚡ Next.js migration


## 👨‍💻 Author

- Griffins Shem
- Frontend Developer (React / Next.js)


## ⭐ Support

If you like this project:

- ⭐ Star the repo
- 🍴 Fork it


## 📝 License

MIT License