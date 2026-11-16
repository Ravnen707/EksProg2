# EksProg2 – Programming Exam Project

> **Repository Notice – November 2026**
>
> This project was originally developed in January 2022 and has been preserved in its original state.
>
> The only change made since its completion was in November 2026, when the tracked `.env` file containing database connection credentials was removed and `.gitignore` was updated.
>
> **No application code has been modified, refactored, or modernized.** This repository reflects my programming knowledge and experience at the time.

A programming exam project developed during the **Computer Science (Datamatiker)** programme at Zealand.

The project focuses on building a small full-stack web application using **Node.js, Express, MongoDB, and Mongoose**, alongside theoretical questions about IT security and data protection.

## Project Overview

The assignment was to develop a prototype website for [Vintage & Rare](https://www.vintageandrare.com/), a marketplace for vintage musical instruments.

The project was intended to demonstrate working with frontend development, backend routing, JSON data, database integration, and browser storage.

The website was designed around three main pages:

- **Homepage** – A landing page for the website.
- **Login** – A basic login interface demonstrating browser session storage.
- **API** – An interface for entering instrument information and interacting with the database.

An additional registration page is also included in the project.

## Features

### Website and Navigation

- HTML pages styled with CSS.
- Navigation between the different sections.
- Express server for routing and serving static files.
- EJS configured as the server-side template engine.

### Database Integration

The application uses **MongoDB** with **Mongoose** for storing instrument information.

The project includes:

- JSON files containing instruments, dealers, and buyers.
- Mongoose schemas representing these data types.
- A form for manually registering instruments in MongoDB.
- An endpoint for retrieving stored instruments as JSON.

The following backend routes are implemented:

| Endpoint | Description |
|---|---|
| `POST /admininstru` | Registers an instrument in MongoDB |
| `GET /itemsDB` | Retrieves instrument records from MongoDB |

The original assignment explored using JSON files as a basis for database records. However, the implemented registration functionality requires manually entering instrument information rather than automatically importing the JSON files.

### Browser Session Storage

The login page demonstrates the use of JavaScript's `sessionStorage` to store and retrieve values within a browser session.

This is a basic educational implementation using hardcoded values, not a complete authentication system.

## Technologies Used

- **JavaScript** – Frontend and backend functionality
- **HTML5** – Website structure
- **CSS3** – Website styling
- **Node.js** – Server-side JavaScript
- **Express.js** – Web server and routing
- **MongoDB** – NoSQL database
- **Mongoose** – MongoDB object data modeling
- **EJS** – Server-side templating
- **JSON** – Structured example data

## Project Structure

```text
EksProg2/
├── Programmering Eksamen.md
├── Teknologi/
│   ├── Question1.txt
│   └── Question2.txt
└── progeks/
    ├── app.js
    ├── bin/
    ├── model/
    ├── public/
    │   ├── Json/
    │   ├── images/
    │   ├── javascripts/
    │   └── stylesheets/
    ├── routes/
    ├── views/
    └── package.json
```

## Running the Project

The application was originally developed using Node.js and a MongoDB connection.

1. Clone the repository.
2. Navigate to the `progeks` directory.
3. Install dependencies using `npm install`.
4. Create a `.env` file inside `progeks` containing your MongoDB connection configuration:

```env
CONNECT_TO_DB=your_mongodb_connection_string
```

5. Start the application:

```bash
npm start
```

6. Open `http://localhost:3000` in your browser.

**Note:** This is an archived educational project. It has not been updated to modern dependency versions, and some functionality is incomplete. Running it may require additional configuration or troubleshooting.

## Technology Exam Questions

Alongside the programming assignment, the exam included two theoretical questions located in the `Teknologi` directory.

- **Question 1 – SQL Injection:** Database security vulnerabilities and methods of protection.
- **Question 2 – GDPR:** Personal data, consent, and data protection requirements.

These documents contain the original written exam responses.

## Project Status

**Archived – Completed as an educational exam project in January 2022.**

This repository has been preserved to document my programming experience and development at the time.

Some functionality is incomplete or implemented as a basic proof of concept, including the login system and parts of the database integration.

The project is not intended for production use and does not represent my current programming practices or standards.

## About

This project was developed as part of my programming examination at Zealand.

It represents my early experience with full-stack JavaScript development, including connecting a web application to a NoSQL database, handling HTTP requests, and working with structured data.
