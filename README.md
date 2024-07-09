# Galaxy Innovative Solutions : Company's Website And A Recruitment Platform

This project is a full-stack web application built with ReactJS for the frontend with Bootstrap(CSS Framework) , ExpressJS for the backend API,and MySQL for persistent data storage. It provides functionalities for both companies and candidates:

## Features:

Company Landing Page:
A visually appealing landing page to showcase the company's information and attract potential candidates.
Job Portal:
Candidates can browse through job listings and apply for positions that interest them.
HR managers can perform CRUD (Create, Read, Update, Delete) operations on job listings.
A user-friendly interface for candidates to manage their applications and track progress.

### Tech Stack:
#### Frontend: ReactJS
#### Backend: NodeJS & ExpressJS
#### Database: MySQL
#### CSS Framework: Bootstrap
## Getting Started

### Prerequisites:

Node.js and npm installed on your system.
A MySQL database server running.
Clone the Repository:


#### Install Dependencies:
Bash
npm install  or yarn install

#### Configure Database Connection:

##### Create a .env file in backend_express directory.

Add your MySQL database connection details:

##### DB_HOST=localhost
##### DB_USER=your_username
##### DB_PASSWORD=your_password
##### DB_NAME=your_database_name

Run the Application:

### Start the backend server:

Bash
npm start  # or yarn start

This will typically start the server on port 5099 (you can adjust this in the Express configuration if needed).

### Start the React development server:

Bash
npm run start:dev  # or yarn start:dev

This will usually start the React app on a separate port (i.e, port 3000). You can access the application in your browser at http://localhost:3000.
