import { PrismaClient } from "@prisma/client";
import { users, spamContacts } from "./Data.js";

const prisma = new PrismaClient();

const deleteAllData = async () => {
  try {
    await prisma.contacts.deleteMany({});
    await prisma.user.deleteMany({});
  } catch (error) {
    console.error("Error deleting data:", error);
  }
};

const createUsers = async () => {
  try {
    for (const user of users) {
      await prisma.user.create({ data: user });
    }
  } catch (error) {
    console.error("Error creating users:", error);
  }
};

const createContacts = async () => {
  try {
    for (const contact of spamContacts) {
      await prisma.contacts.create({ data: contact , user_id:users.id });
    }
  } catch (error) {
    console.error("Error creating contacts:", error);
  }
};

const populateData = async () => {
  try {
    await deleteAllData();
    await createUsers();
    await createContacts();
    console.log(" Data created successfully");
  } catch (error) {
    console.error("Error while creating data:", error);
  } finally {
    await prisma.$disconnect();
  }
};

populateData();

// import { PrismaClient } from "@prisma/client";
// import {users ,spamContacts} from './Data.js'
// const prisma = new PrismaClient();

// const populateData = async () => {
//   try {
//     // Delete all existing data
//     // await prisma.contact.deleteMany({});
//     // await prisma.users.deleteMany({});

//     // Create sample users

//     for (const user of users) {
//       await prisma.user.create({ data: user });
//     }

//     // Create sample contacts

//     for (const contact of spamContacts) {
//       await prisma.contacts.create({ data: contact });
//     }

//     console.log("Sample data populated successfully");
//   } catch (error) {
//     console.error("Error populating data:", error);
//   } finally {
//     await prisma.$disconnect();
//   }
// };

// populateData();
