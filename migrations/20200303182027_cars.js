
exports.up = async function(knex) {
  
    await knex.schema.createTable("cars", (table) => {
        table.increments("id")

        table.text("vin").notNull().unique()
        table.text("make").notNull()
        table.text("model").notNull()
        table.float("mileage").notNull()
        table.text("transmission")
        table.text("title status")
    })

};

exports.down = async function(knex) {
  
    await knex.schema.dropTableIfExists("cars")

};

/*## Specifications

The client for this API is a car dealer who has provided the following specs:

- The critical information for each car is the VIN, make, model, and mileage.
- They also track transmission type and status of the title (clean, salvage, etc.), but this information is not always immediately known.
*/