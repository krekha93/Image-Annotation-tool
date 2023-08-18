const { Sequelize } = require("sequelize");
const sequelize = new Sequelize({
  dialect: "postgres", // Replace with your database dialect (e.g., 'mysql', 'sqlite', 'mssql')
  database: "postgres",
  username: "postgres",
  password: "Rekha@123",
  host: "localhost", // e.g., 'localhost'
  port: "5432", // e.g., 5432
});

const testDbConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

testDbConnection();

module.exports = { sq: sequelize, testDbConnection };
