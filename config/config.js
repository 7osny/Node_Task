require ('dotenv/config');

module.exports = {
  nodeEnv: process.env.NODE_ENV || 'development',
  port: parseInt(process.env.PORT, 0) || 3000,
  database: {
    host: process.env.MYSQL_HOST || '127.0.0.1',
    port: process.env.MYSQL_PORT || '3306',
    name: process.env.MYSQL_DATABASE || 'commerce',
    username: process.env.MYSQL_USERNAME || 'root',
    password: process.env.MYSQL_PASSWORD || null,
    logging: (process.env.NODE_ENV != 'production'),
    pool: {
      max: parseInt(process.env.MAX_MYSQL_CONNECTIONS ,0)|| 5,
      min:parseInt( process.env.MIN_MYSQL_CONNECTIONS,0) || 0,
    },
  }
}
