# House of Games API
##
# Table of Contents

- [Description](#description)
- [Key Features](#key-features)
- [API Base URL](#api-base-url)
- [Installation](#installation)
  - [Step 2: Install Dependencies](#step-2-install-dependencies)
  - [Step 3: Configure Environment Variables](#step-3-configure-environment-variables)
  - [Step 4: Start the API](#step-4-start-the-api)
- [Categories](#categories)
- [Endpoints](#endpoints)
  - [General Endpoints](#general-endpoints)
  - [Reviews Endpoints](#reviews-endpoints)
  - [Comments Endpoints](#comments-endpoints)
- [Environment Variables](#environment-variables)
- [Dummy Users](#dummy-users)



## Description

The **House of Games API** is a RESTful web service that serves as a hub for gaming enthusiasts to connect, share, and discuss their favorite games across various categories. Mimicking the features of a Reddit-style social platform, users can log in with dummy accounts, post content, leave comments, and interact with other dummy users within the gaming community.

### Key Features



### API Base URL

The base URL for accessing the API is - link to be added.


## Installation

To set up the House of Games API on your local development environment, follow these steps:

### Prerequisites

Before you begin, ensure you have the following prerequisites installed on your system:

- **Node.js:** You need the latest version of Node.js (v19.3.0) installed. You can download it from [the official Node.js website](https://nodejs.org/).

### Step 1: Fork and Clone the Repository

1. Fork the House of Games API repository by clicking the "Fork" button on [https://github.com/ah28011992/house-of-games-be](https://github.com/ah28011992/house-of-games-be).

2. Clone your forked repository to your local machine using Git:

   ```bash
   git clone https://github.com/your-username/house-of-games-be.git
Replace your-username with your GitHub username.

### Step 2: Install Dependencies

1. Navigate to the project's directory:

  ```bash
 cd house-of-games-be
  
```
Use npm or yarn to install the required dependencies:

```bash
npm install
```
# OR

```bash
yarn install
```
### Step 3: Configure Environment Variables

To run the House of Games API, you'll need to set the following environment variable in  `.env.development` and `.env.test` files:

- **PGDATABASE:** The uri for the development database
- **PGDATABASE:** The uri for the test database

### Step 4: Start the API
You're now ready to start the House of Games API on your local machine:


```bash
 npm start
```

# OR

```bash
 yarn start
```



### Categories

House of Games API accommodates a multitude of gaming categories, including:

- **Strategy**
- **Hidden roles**
- **Dexterity**
- **Push-your-luck**
- **Roll-and-write**
- **Deck-building**
- **Engine-building**


### Endpoints

#### General Endpoints

- `GET /api/categories`: Retrieve a list of all gaming categories.
- `GET /api`: Get general information about the API.

#### Reviews Endpoints

- `GET /api/reviews/:review_id`: Fetch a specific game review by its unique ID.
- `GET /api/reviews`: Retrieve a list of game reviews with optional queries for category, sorting, and ordering.
- `POST /api/reviews`: Create a new game review.
- `PATCH /api/reviews/:review_id`: Update an existing game review.
- `DELETE /api/reviews/:review_id`: Delete a game review.

#### Comments Endpoints

- `GET /api/reviews/:review_id/comments`: Retrieve all comments for a specific game review.
- `POST /api/reviews/:review_id/comments`: Create a new comment for a game review.
- `PATCH /api/comments/:comment_id`: Update an existing comment.
- `DELETE /api/comments/:comment_id`: Delete a comment.




### Dummy Users

For testing purposes, the API provides a set of dummy users complete with pre-generated data. These dummy accounts are available for exploration, allowing you to experience the API's features without the need to create new accounts or authenticate.


