const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  development: {
    username: "everyfootball",
    password: process.env.DATABASE_PASSWORD,
    database: "everyfootball",
    host: process.env.DATABASE_HOST,
    dialect: "mysql",
  },
  test: {
    username: "everyfootball",
    password: process.env.DATABASE_PASSWORD,
    database: "everyfootball",
    host: process.env.DATABASE_HOST,
    dialect: "mysql",
  },
  production: {
    username: "everyfootball",
    password: process.env.DATABASE_PASSWORD,
    database: "everyfootball",
    host: process.env.DATABASE_HOST,
    dialect: "mysql",
  },
};
