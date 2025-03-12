# 🚀 CDpipeline
A **CI/CD pipeline** for a full-stack application using **GitHub Actions, Cypress, and Render**. This project automates testing and deployment, ensuring **code quality and a seamless development workflow**.

---

## 📌 Features
✅ **CI/CD Pipeline** using **GitHub Actions**  
✅ **Cypress Tests** run on each **Pull Request** to `develop`  
✅ **Automatic Deployment** to **Render** on merging to `main`  
✅ **MongoDB Atlas** for **database storage**  
✅ **React (Vite) Frontend** & **Express Backend**  

---

## 📂 Project Structure
```
CDpipeline/
├── client/          # React frontend
├── server/          # Express backend
├── cypress/         # Cypress tests
├── .github/         # GitHub Actions workflows
│   ├── cypress-tests.yml   # Runs Cypress tests on PR to develop
│   ├── deploy.yml          # Deploys app on merge to main
├── package.json     # Project dependencies
├── README.md        # Project documentation
```

---

## 🚀 Getting Started
### 1️⃣ Clone the Repository
```sh
git clone https://github.com/jgmaxen/CDpipeline.git
cd CDpipeline
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Set Up Environment Variables
Create a **`.env`** file in the root directory:
```
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mdgzw.mongodb.net/cleanDB?retryWrites=true&w=majority
```
🔹 Replace `<username>` and `<password>` with **your actual credentials**.  
🔹 Ensure **MongoDB Atlas** is properly set up.

### 4️⃣ Start the Application
```sh
npm start
```
🔹 The backend should run on **`http://localhost:3001`**.

---

## 🧪 Running Cypress Tests
Cypress tests automatically run on **GitHub Actions**, but you can **run them locally**:

```sh
npx cypress open
```
🔹 Runs Cypress tests **in interactive mode**.  
🔹 Ensure the backend is running before testing.

---

## ⚡ CI/CD Pipeline
### 🔹 Continuous Integration (CI)
✅ **Runs Cypress tests** on every **Pull Request to `develop`**  
✅ Ensures **new code does not break the app** before merging  

### 🔹 Continuous Deployment (CD)
✅ **Merges to `main` automatically deploy to Render**  
✅ Uses **Render Deploy Hooks** for seamless updates  

---

## 📡 Deployment
### 🔹 Render
1️⃣ **Go to Render** → [Dashboard](https://dashboard.render.com/)  
2️⃣ **Set Environment Variables** (`MONGO_URI`)  
3️⃣ **Disable Auto-Deploy** (only deploy on merges to `main`)  
4️⃣ **Copy Deploy Hook URL** and use it in **GitHub Actions**  

---

## 🛠 Tech Stack
- **Frontend:** React (Vite)
- **Backend:** Node.js, Express.js
- **Database:** MongoDB Atlas
- **CI/CD:** GitHub Actions
- **Testing:** Cypress
- **Deployment:** Render

---

## 🤝 Contributing
1. **Fork** the repo  
2. **Create a feature branch** (`git checkout -b feature-name`)  
3. **Commit your changes** (`git commit -m "Add feature"`)  
4. **Push to GitHub** (`git push origin feature-name`)  
5. **Create a Pull Request to `develop`**  

---

## 📜 License
This project is **MIT Licensed**. Feel free to use and modify it.

---

## 📞 Contact
📌 **GitHub:** [jgmaxen/CDpipeline](https://github.com/jgmaxen/CDpipeline)  
📌 **Email:** _YourEmailHere_  

---

### 🚀 Happy Coding! 🎉

