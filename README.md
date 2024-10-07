# Ecom-Sample

A full-stack e-commerce web application developed using Angular for the frontend and Node.js for the backend. This project includes features like product listing, shopping cart, and order management.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [API Documentation](#api-documentation)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)

## Introduction

This project is a sample e-commerce web application that allows users to browse through products, add items to the cart, and proceed with the checkout process. The frontend is developed using Angular, while the backend API is built with Node.js and Express, using MongoDB for data persistence.

## Features

- Product listing and details
- Shopping cart functionality
- Checkout and order management
- User authentication (JWT-based)
- Admin functionality for managing products
- Responsive design using Angular Material

## Technologies Used

**Frontend:**

- Angular 12
- Angular Material
- RxJS
- HTML, CSS, and TypeScript

**Backend:**

- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT for authentication
- bcrypt.js for password encryption

## Prerequisites

To run this project locally, you will need the following installed:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)
- [Angular CLI](https://angular.io/cli)
- [Git](https://git-scm.com/)

## Installation

### 1. Clone the repository:

```bash
git clone https://github.com/shivakolanu/Ecom-sample.git
cd Ecom-sample
```

### 2. Backend Setup (Node.js & Express):

Navigate to the `backend` directory:

```bash
cd backend
```

Install the backend dependencies:

```bash
npm install
```

Create a `.env` file in the `backend` directory and add the following environment variables:

```bash
PORT=3000
MONGO_URI=mongodb://localhost:27017/ecom-sample
JWT_SECRET=your_jwt_secret
```

### 3. Frontend Setup (Angular):

Navigate to the `frontend` directory:

```bash
cd ../frontend
```

Install the frontend dependencies:

```bash
npm install
```

## Running the Application

### 1. Run MongoDB:

Make sure MongoDB is running locally or connect to a remote MongoDB instance.

### 2. Start Backend (Node.js):

Navigate to the `backend` directory and start the server:

```bash
cd backend
npm start
```

The backend API will be running on `http://localhost:3000`.

### 3. Start Frontend (Angular):

Navigate to the `frontend` directory and start the Angular development server:

```bash
cd ../frontend
ng serve
```

The frontend will be accessible at `http://localhost:4200`.

## Project Structure

```
/frontend              # Angular frontend application
  /src
    /app               # Angular components and services
    /assets            # Images, CSS, etc.
  angular.json         # Angular configuration
  package.json         # Frontend dependencies

/backend               # Node.js backend application
  /routes              # API routes
  /models              # Mongoose models
  /controllers         # Express controllers
  server.js            # Backend server setup
.env                   # Environment variables
package.json           # Backend dependencies
```

## API Documentation

| Endpoint             | Method | Description                |
| -------------------- | ------ | -------------------------- |
| `/api/products`       | GET    | Get all products            |
| `/api/products/:id`   | GET    | Get a specific product      |
| `/api/cart`           | POST   | Add items to the cart       |
| `/api/orders`         | POST   | Place an order              |
| `/api/users/register` | POST   | Register a new user         |
| `/api/users/login`    | POST   | User login                  |

For detailed API documentation, refer to [API Documentation](./docs/api.md).

## Troubleshooting

- Ensure that MongoDB is installed and running.
- Verify that the environment variables are properly configured in `.env`.
- Make sure the ports `3000` (backend) and `4200` (frontend) are available.

## Contributing

Contributions are welcome! Feel free to fork this repository, make changes, and submit pull requests.


This README provides a structured overview of your project, ensuring that new contributors or users can easily set it up and understand its core functionality.
