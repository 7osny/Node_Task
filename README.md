# Task 

# Prerequisites:

- The application was built using Node.js, express.js Framework, so you should ensure you have it installed on your machine.

### <a name="Features">Features</a>

- list all products in a given category, a product's price should be the lowest available among its possible providers, return maximum n (defaults to 25) products per request, and enable pagination.
- end point that toggle (set/unset) a product as featured inside its category.

## <a name="toc">Technologies</a>

- [Back-End](#back-end)
  - [Node.js](#NodeJS)
  - [express.js](#express.js)
  - [sequelize ORM](#sequelize)
- [Database](#Database)
  - [MySql](#MySql)

# Usage:

- Clone this repository to your desktop, go to the task directory and install the application dependencies using npm:
  - npm init
  - npm install cookie-parser dotenv express express-validator mysql2 sequelize
- Run the application using npm start and go to : http://localhost:3000 to see the application running:

