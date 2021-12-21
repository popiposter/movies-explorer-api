require('dotenv').config();

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const {
  NODE_ENV,
  PORT,
  JWT_SECRET,
  MONGODB_URI,
} = process.env;

module.exports.config = {
  env: NODE_ENV,
  port: parseInt(PORT, 10) || 3000,
  databaseUrl: NODE_ENV === 'production' ? MONGODB_URI : 'mongodb://localhost:27017/moviesdb',
  jwtSecret: NODE_ENV === 'production' ? JWT_SECRET : 'dev-secret',
  rateLimitWindowMs: 15 * 60 * 1000,
  rateLimitMax: 100,
};
