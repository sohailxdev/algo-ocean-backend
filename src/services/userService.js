import prisma from "../config/prisma.js";
export const createUser = async ({ firstName, lastName, dob, profilePicture, }) => {
    const user = await prisma.user.create({
        data: {
            firstName,
            lastName,
            dob: new Date(dob),
            profilePicture,
        },
    });
    return user;
};
export const getUsers = async () => {
    const users = await prisma.user.findMany({
        orderBy: {
            createdAt: "desc",
        },
    });
    return users;
};
