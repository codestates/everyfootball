const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  development: {
    username: "root",
    password: process.env.DATABASE_PASSWORD,
    database: "everyfootball",
    host: process.env.DATABASE_HOST,
    dialect: "mysql",
  },
  test: {
    username: "root",
    password: process.env.DATABASE_PASSWORD,
    database: "everyfootball",
    host: process.env.DATABASE_HOST,
    dialect: "mysql",
  },
  production: {
    username: "root",
    password: process.env.DATABASE_PASSWORD,
    database: "everyfootball",
    host: process.env.DATABASE_HOST,
    dialect: "mysql",
  },
};
