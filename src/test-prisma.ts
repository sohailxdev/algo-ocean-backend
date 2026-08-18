import "dotenv/config";

import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "./generated/prisma/client.js";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL!,
});

const prisma = new PrismaClient({
  adapter,
});

try {
  console.log("Testing User INSERT...");

  const user = await prisma.user.create({
    data: {
      firstName: "Sohail",
      lastName: "Shaikh",
      dob: new Date("2001-05-15"),
      profilePicture: "https://example.com/dog.jpg",
    },
  });

  console.log("✅ USER CREATED");
  console.log(user);
} catch (error) {
  console.error("❌ INSERT FAILED");
  console.error(error);
} finally {
  await prisma.$disconnect();
}
