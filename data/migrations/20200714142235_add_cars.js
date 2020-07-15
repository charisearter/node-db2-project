//function that describes changes we want to make
exports.up = function(knex) {
    return knex.schema.createTable('cars', tbl => {
      //primary key that auto increments
      tbl.increments('id');

      //add a string column for MAKE required
      tbl.string('Make', 128).notNullable();
      //add a string column for MODEL required
      tbl.string('Model', 128).notNullable();
      //add a string column for VIN required and unique
      tbl.string('VIN', 17).unique().notNullable();
      //add a interger column for MILEAGE required
      tbl.integer('Mileage').notNullable();
      //add a string column for Transmission Type not required
      tbl.string('TransmissionType', 128);
      //add a string column for Title Status not required
      tbl.string('TitleStatus', 128);
    })
};

//function that descrines how to undo changes
exports.down = function(knex) {
  return knex.schema.dropTableIfExists("cars");
  
};
