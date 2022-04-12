const { connect } = require('mongoose');
const config = require('config');

const dbURI = config.get('mongoURI');

const connectDB = async () => {
  try {
    await connect(dbURI, { useNewUrlParser: true });
    console.log('Connected to databse');
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

module.exports = connectDB;
