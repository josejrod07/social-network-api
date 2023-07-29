# Social Media API NoSQL Backend

This is a Node.js application that utilizes Express.js,a MongoDB database, and the Mongoose ODM to run the back end functionality for a social media application.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [License](#license)
- [Links](#links)

## Installation

1. Clone the repository: git clone https://github.com/josejrod07/social-network-api.git
2. Run 'npm install' in the command-line to install the necessary dependencies.
3. Start a new connection on MongoDBCompass.
3. Copy the connection string URI and past into the .env file.
4. Run 'npm run seed' to seed the database with the seeds folder. (Optional)
5. Run 'npm start' to start the server.

## Usage

- Work with the api endpoints specified in the apiRoutes.js file using Insomnia Core to explore the application's CRUD operations for Users and Thoughts.

## Features

- Server and Mongoose models are synced to the MongoDB database upon application start.
- API routes for Users and Thoughts support CRUD operations for creating, reading, updating, and deleting data.
- API routes for Users support adding and removing friends from a user's friend list.
- API routes for Thoughts support creating and deleting reactions to thoughts.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Links

Repository: https://github.com/josejrod07/social-network-api.git

Video Link: https://drive.google.com/file/d/1XbBbT9VyEF9IYGRxhKtwVEK4Qtmz3uRj/view