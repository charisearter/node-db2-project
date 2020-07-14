const knex = require("knex");

const config = require("../knexfile.js");

const db = config.development;

module.exports = knex(db);
