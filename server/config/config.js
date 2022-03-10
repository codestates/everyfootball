const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  development: {
    username: "euilimchoi",
    password: process.env.DATABASE_PASSWORD,
    database: "everyfootball",
    host: process.env.DATABASE_HOST,
    dialect: "mysql",
  },
  test: {
    username: "euilimchoi",
    password: process.env.DATABASE_PASSWORD,
    database: "everyfootball",
    host: process.env.DATABASE_HOST,
    dialect: "mysql",
  },
  production: {
    username: "euilimchoi",
    password: process.env.DATABASE_PASSWORD,
    database: "everyfootball",
    host: process.env.DATABASE_HOST,
    dialect: "mysql",
  },
};
