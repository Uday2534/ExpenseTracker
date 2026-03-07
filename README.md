# Expense Tracker

A full-stack web application for tracking personal income and expenses, visualizing financial data, and exporting records for analysis.

The application allows users to securely log in, manage transactions, view financial summaries through charts, and download their data as CSV files.

Features
User Authentication

Secure login and registration using JWT authentication

Protected routes for user data

Expense & Income Management

Add, update, and delete transactions

Separate tracking for income and expenses

Financial Dashboard

Real-time summary of:

total balance

total income

total expenses

Recent transactions

Data Visualization

Interactive financial charts built with Recharts

income trends

expense trends

financial comparisons

CSV Export

Users can download their financial records for offline analysis.

Tech Stack
Frontend

React

Axios

Recharts

Tailwind / CSS

Backend

Node.js

Express.js

JWT Authentication

Database

MongoDB

Mongoose

DevOps

Docker (optional containerization)

System Architecture
        +-------------+
        |   Client    |
        |   (React)   |
        +-------------+
               |
               | HTTP Requests (Axios)
               |
               v
        +-------------+
        |  REST API   |
        | (Node/Express)
        +-------------+
               |
               |
               v
        +-------------+
        |  MongoDB    |
        |  Database   |
        +-------------+
Request Flow
User Interaction
       |
       v
React Frontend
       |
       v
Axios HTTP Request
       |
       v
Express Backend API
       |
       v
MongoDB Database
       |
       v
Response returned to frontend

LIVE DEMO
https://expense-tracker-hzx9.vercel.app
