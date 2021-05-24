// Update with your config settings.
// databas config
module.exports = {
    client: 'postgresql',
    connection: {
      database: 'tasks',
      user:'postgres',
      password:'12345678'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
  }
};
