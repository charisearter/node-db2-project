// Update with your config settings.

module.exports = {

  development: {
    client: "sqlite3",
    connection: {
      filename: "./data/car-dealer.db3" //configure knex to connect to the database
    },
    //need for Sqlite
    useNullAsDefault: true,
    migrations: {
        directory: "./data/migrations"
    },
    seeds: {
      directory: './data/seeds'
    }

  }

 

};
