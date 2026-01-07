"use strict";
let options = {};
if (process.env.NODE_ENV === "production") {
  options.schema = process.env.SCHEMA; // define your schema in options object
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    options.tableName = "Products";
    return queryInterface.bulkInsert(
      options,
      [
        {
          productName: "TDX Arena Incident Response Expert",
          productType: "Certification ID: 1008363",
          price: 0,
          description: "Tackled advanced simulations in the TDX-Arena system",
          uploadDate: new Date(),
          filePath: "/Images/cert.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
          genre: 'Drill',
          userId: 3, // Replace with your admin user's ID
        },
        {
          productName: "DoomsProd Music - E-commerce",
          productType: "Full Stack Website",
          price: 0,
          description: "A full-stack e-commerce website where artists, musicians, producers and more can purchase/lease beats, loop kits and drum kits!",
          uploadDate: new Date(),
          filePath: "/Images/beatpage.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
          genre: 'Jersey',
          userId: 3,
        },
        {
          productName: "Imagination",
          productType: "VST Plugin",
          price: 0,
          description: "A Stereo Imager Plugin that gives users the ability to manipulate the stereo of any given audio!",
          uploadDate: new Date(),
          filePath: "/Images/Imager.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
          genre: 'Drill',
          userId: 3, // Replace with your admin user's ID
        },
      ],
      {}
    );
  },
  down: async (queryInterface, Sequelize) => {
    options.tableName = "Products";
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(
      options,
      {
        // Add conditions for deleting seed data if needed
      },
      {}
    );
  },
};
