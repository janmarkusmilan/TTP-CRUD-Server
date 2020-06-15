const { Campus, Student } = require("../database/models");

const seedDatabase = async () => {
  await Promise.all([
    Campus.create({
      name: "Brooklyn College",
      address: "Brooklyn",
      description: "A college in Brooklyn",
    }),
    Campus.create({
      name: "College of Staten Island",
      address: "Staten Island",
      description: "A college on Staten Island",
    }),
    Campus.create({
      name: "John Jay College",
      address: "Manhattan",
      description: "A college in Manhattan",
    }),
    Student.create({
      firstName: "Daniel",
      lastName: "Jacob",
      email: "danieljacob@yahoo.com",
    }),
    Student.create({
      firstName: "Sally",
      lastName: "Hensway",
      email: "sallyhensway0@gmail.com",
    }),
    Student.create({
      firstName: "Richard",
      lastName: "Huts",
      email: "richardhuts@icloud.com",
    }),
  ]);
};

module.exports = seedDatabase;
