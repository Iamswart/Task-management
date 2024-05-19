# Brillo Sport Backend

## Overview

The Task Management API serves as the backend for managing tasks, user authentication, and profile management. It's built with Node.js and Express and utilizes PostgreSQL for data storage via Sequelize. This API is designed to handle tasks efficiently with features such as task creation, updating, and deletion, alongside robust user management functionalities.

## Features

- RESTful API endpoints for user management (registration, login, Task management)
- JWT-based authentication system
- Swagger documentation available for API endpoints
- Real time data streaming


## Technologies Used

- Node.js
- Nest.js
- Postgresql + Sequellize
- JSON Web Tokens (JWT) for authentication
- Other dependencies as listed in `package.json`

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js 
- Postgresql 
- npm

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Iamswart/Task-management.git
   cd Task-management

   ```

2. **Install dependencies:**

   ```bash
   npm install

   ```

3. **Set up environment variables**

   Create a .env file in the root directory of the project and add the following variables:

   ```bash
    DB_HOST - The hostname or IP address of your PostgreSQL database server.
    JWT_SECRET - Secret key used to sign JWT tokens for authentication.
    DB_PORT - The port number on which the PostgreSQL database server is running.
    DB_USERNAME - Username for database access authentication.
    DB_PASSWORD - Password for the database user, used for database access authentication.
    DB_DATABASE - Name of the PostgreSQL database to connect to.
    DB_DIALECT - Specifies the type of database being used (e.g., postgres, mysql) in this case, it is configured for PostgreSQL.

  Replace the placeholders with your actual data.

4. **Running the Application**

   ```bash
   npm run start:dev

   The API will be available at http://localhost:3000 .  Swagger documentation can be accessed at http://localhost:3000/docs/swagger.
   ```
