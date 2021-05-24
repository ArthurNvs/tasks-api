
exports.up = function(knex) {
    return knex.schema.createTable('tasks', table => {
        table.increments('id').primary()
        table.string('desc').notNull()
        table.dateTime('estimate').notNull()
        table.dateTime('done').notNull()
        table.integer('userId').references('id')
            .inTable('users').notNull
    })
};

exports.down = function(knex) {
  return knex.schema.dropTable('tasks')
};
