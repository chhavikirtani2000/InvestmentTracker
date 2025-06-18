# 💼 Investment Tracker System

A full-stack demo application designed to help users monitor their investments, view live market data, and manage their personal portfolio. The platform is built with a modern frontend-backend stack, offering a smooth and intuitive experience.


## 🚀 Features

### 🔐 Login/Signup  
Allow users to register and access a personalized dashboard. Each user has a unique session and securely stored data.

### 📊 Dashboard  
Displays the latest market data and key portfolio insights tailored to the user's activity.

### 📈 Marketwatch  
Users can add their favorite stocks to a watchlist for quick access and real-time tracking.

### 📁 Portfolio  
Maintains a detailed record of all stocks purchased by the user, including transaction history and current performance.


## 🛠️ Technologies Used

### 🧩 Frontend

- **React.js** – Component-based UI development  
- **Bootstrap** – Responsive styling  
- **Axios** – API communication  
- **HTML5 & JavaScript** – Core web technologies  
- **VS Code** – Code editing and development environment

### 🔧 Backend

- **Spring Boot** – Java-based backend framework  
- **MongoDB** – NoSQL database for storing user and stock data  
- **Lombok** – Simplifies Java boilerplate code  
- **Swagger** – API documentation and testing  
- **GitLab** – Version control and CI/CD integration  
- **Maven** – Build automation  
- **STS (Spring Tool Suite)** – IDE support for Spring-based development


## 📁 Project Structure (Backend Sample)

src/
└── main/
└── java/
└── com/example/investmenttracker/
├── DemoApplication.java # Entry point of the Spring Boot application
├── User.java # Entity/model class for user data
├── UserController.java # REST controller exposing user APIs
├── UserService.java # Business logic layer
└── UserRepository.java # Data access layer (interface to the DB)

## Build the project
./mvnw clean install

## Run the application
./mvnw spring-boot:run
