require('dotenv').config();

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'postgres',
    logging: false
  }
);

async function testConnection() {
  try {
    await sequelize.authenticate();

    console.log('Database connected successfully!');
    console.log('Database:', process.env.DB_NAME);
  } catch (error) {
    console.error('Database connection failed:', error.message);
  } finally {
    await sequelize.close();
  }
}

testConnection();