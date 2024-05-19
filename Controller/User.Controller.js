import asyncHandler  from "express-async-handler";
import { PrismaClient } from "@prisma/client";
import bcrypt from 'bcryptjs'
import generatetoken from  "../utils/generatetoken.js";
// const { PrismaClient } = Prisma;

const prisma_client = new PrismaClient();

// @desc    Register a new user
// @route   POST /api/users
// @access  Public
export const NewUserRegistration = asyncHandler(async (req, res) => {
  const { name, phone_No, email, password } = req.body;

  const userExists = await prisma_client.user.findUnique({
    where: { phone_No },
  });

  if (userExists) {
    res.status(400);
    throw new Error("User exists already");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await prisma_client.user.create({
    data: {
      name,
      phone_No,
      email,
      password: hashedPassword,
    },
  });

  if (user) {
    res.status(201).json({
      id: user.id,
      name: user.name,
      phoneNumber: user.phone_No6,
      email: user.email,
      token: generatetoken(user.id),
    });
  } else {
    res.status(400);
    throw new Error("invalid data");
  }
});

// @desc    Auth user & get token
// @route   POST /api/users/login
// @access  Public
export const authticateUser = asyncHandler(async (req, res) => {
  const { phone_No, password } = req.body;

  const user = await prisma_client.user.findUnique({
    where: { phone_No },
  });

  if (user && (await bcrypt.compare(password, user.password))) {
    res.json({
      id: user.id,
      name: user.name,
      phoneNumber: user.phone_No,
      email: user.email,
      token: generateToken(user.id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid phone number or password");
  }
});


export const getUserProfile = asyncHandler(async (req, res) => {
  const user = await prisma_client.user.findUnique({
    where: { id: req.user.id },
    select: {
      id: true,
      name: true,
      phoneNumber: true,
      email: true,
    },
  });

  if (user) {
    res.json(user);
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});



// Additional functionalities: mark spam, search by name, search by number can be added similarly
export const markAsSpam = asyncHandler(async (req, res) => {
  const { phoneNumber, isSpam } = req.body;

  const contact = await prisma_client.contact.updateMany({
    where: { phoneNumber },
    data: { isSpam: isSpam },
  });

  if (contact) {
    res.status(200).json({ message: `Marked as spam: ${phoneNumber}` });
  } else {
    res.status(404);
    throw new Error("Contact not found");
  }
});

export const searchbyName = asyncHandler(async (req, res) => {
  const { name } = req.params;

  const users = await prisma_client.user.findMany({
    where: { name: { contains: name, mode: "insensitive" } },
  });

  if (users.length > 0) {
    res.json(users);
  } else {
    res.status(404).json({ message: "No users found" });
  }
});

// @desc    Search users by phone number
// @route   GET /api/users/search/phone/:phoneNumber
// @access  Private
export const searchbyPhonenumber = asyncHandler(async (req, res) => {
  const { phoneNumber } = req.params;

  const user = await prisma_client.user.findUnique({
    where: { phoneNumber },
  });

  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: "can't find User with data provided" });
  }
});
