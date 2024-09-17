# POC Homepage

This is a Proof of Concept (POC) for a homepage that fetches pane data from a MongoDB database and serves it through a Node.js and Express-based API.

## Features
- Fetches pane data from a MongoDB collection.
- Express-based API to serve the pane data.
- MongoDB connection using the official MongoDB Node.js driver.
- Environment variables for configuration.

## Prerequisites
- [Node.js](https://nodejs.org/) (version 14.x or higher)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) account (or local MongoDB setup)
- [Git](https://git-scm.com/)

## Getting Started

### 1. Clone the repository
bash
git clone https://github.com/yourusername/ladingpagedesign.git
cd poc-homepage

### 2. Install dependencies
Install the required dependencies using npm:
npm install

### 3. Run the server
Start the server using the following command:
node server.js
The server will start running at http://localhost:3000.

### 4. Run the HTML code
using F5 or run

### Folder Structure
C:.
├───assets                # Static assets like images, styles, etc.
├───node_modules          # Node.js dependencies
├───src
│   ├───controller        # Logic for fetching data from MongoDB
│   │   └───controller.js # Main controller handling pane fetching
│   ├───models            # Models (if any) for MongoDB schemas
│   └───routes            # API routes
├───.env                  # Environment variables (not tracked in git)
├───package.json          # Project metadata and dependencies
├───server.js             # Main server entry point
└───README.md             # This README file
API Endpoints
GET /api/panes
Fetches pane data from the MongoDB collection.

## Request:
GET /api/panes
## Response:
Status: 200 OK
Body: JSON array of pane data sorted by priority.

```json
[
  {
        "ContentId": 1,
        "ContentType": "Article",
        "TitleTile": "Introduction to Data Science",
        "Description": "A brief overview of data science concepts and methodologies.",
        "DetailedDescription": "This article provides an in-depth look into data science, including its applications, tools, and techniques used in the field. It covers fundamental concepts and offers practical insights for beginners and professionals alike.",
        "TileNum": 1,
        "PaneNum": 1,
        "Status": "Active",
        "CreatedAt": new Date("2024-09-17T14:30:00Z"),
        "ExpirationDate": new Date("2025-09-17T00:00:00Z"),
        "Duration": 12,
        "Priority": 1,
        "Imgpath": "/images/data-science.jpg",
        "Clickable": "Yes"
    },
    {
        "ContentId": 2,
        "ContentType": "Tutorial",
        "TitleTile": "Getting Started with Node.js",
        "Description": "Step-by-step guide to setting up and using Node.js.",
        "DetailedDescription": "This tutorial covers the essentials of Node.js, including installation, setup, and writing your first Node.js application. It is aimed at developers new to the platform and provides practical examples to get started quickly.",
        "TileNum": 2,
        "PaneNum": 1,
        "Status": "Active",
        "CreatedAt": new Date("2024-09-16T10:15:00Z"),
        "ExpirationDate": null,
        "Duration": 8,
        "Priority": 2,
        "Imgpath": "/images/nodejs-tutorial.jpg",
        "Clickable": "Yes"
    },
]
```
## Error Handling
If there is an issue connecting to the MongoDB database or fetching panes, the API will return an error with a message.

## Scripts
- node server.js: Starts the server.
- npm install: Installs all dependencies.
### Dependencies
- Express
- MongoDB Node.js Driver
- dotenv for managing environment variables.
