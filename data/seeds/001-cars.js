
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {id: 1, 
          Make: "Audi",
          Model: "A3",
          VIN: "3GCUKTEJ0EG318931",
          Mileage: 456787,
          TransmissionType: null,
          TitleStatus: "Bonded"
      },

        {id: 2, 
          Make: "GMC",
          Model: "Acadia",
          VIN: "2G1WC5813W9174065",
          Mileage: 57878944,
          TransmissionType: null,
          TitleStatus: "Salvage"
        },

        {id: 3, 
          Make: "A-Class",
          Model: "Mercedes-Benz",
          VIN: "2FMZA51684BA78028",
          Mileage: 9876543,
          TransmissionType: "7-speed automatic",
          TitleStatus: "Clear"
        }

      ]);
    });
};
