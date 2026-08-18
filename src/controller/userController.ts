import { createUser, getUsers } from "../services/userService.ts";

import { getRandomDogImage } from "../services/dogService.ts";

import { calculateAge } from "../utils/age.ts";
import { Request, Response } from "express";

export const createUserController = async (req: Request, res: Response) => {
  try {
    const { firstName, lastName, dob } = req.body;

    if (!firstName || !lastName || !dob) {
      return res.status(400).json({
        success: false,
        message: "First name, last name and DOB are required",
      });
    }

    const birthDate = new Date(dob);

    if (isNaN(birthDate.getTime())) {
      return res.status(400).json({
        success: false,
        message: "Invalid date of birth",
      });
    }

    const profilePicture = await getRandomDogImage();

    const user = await createUser({
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      dob: birthDate,
      profilePicture,
    });

    return res.status(201).json({
      success: true,
      message: "User created successfully",
      data: {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        dob: user.dob,
        profilePicture: user.profilePicture,
      },
    });
  } catch (error) {
    console.error("Create user error helllo:", error);

    return res.status(500).json({
      success: false,
      message: error,
    });
  }
};

export const getUsersController = async (req: Request, res: Response) => {
  try {
    const users = await getUsers();

    const usersWithAge = users.map((user: any) => ({
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,

      dob: user.dob.toISOString().split("T")[0],

      profilePicture: user.profilePicture,

      age: calculateAge(user.dob),
    }));

    return res.status(200).json({
      success: true,
      data: usersWithAge,
    });
  } catch (error) {
    console.error("Get users error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch users",
    });
  }
};
