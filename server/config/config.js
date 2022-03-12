const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  development: {
    username: "chlcui1324",
    password: process.env.DATABASE_PASSWORD,
    database: "everyfootball",
    host: process.env.DATABASE_HOST,
    dialect: "mysql",
  },
  test: {
    username: "chlcui1324",
    password: process.env.DATABASE_PASSWORD,
    database: "everyfootball",
    host: process.env.DATABASE_HOST,
    dialect: "mysql",
  },
  production: {
    username: "chlcui1324",
    password: process.env.DATABASE_PASSWORD,
    database: "everyfootball",
    host: process.env.DATABASE_HOST,
    dialect: "mysql",
  },
};
