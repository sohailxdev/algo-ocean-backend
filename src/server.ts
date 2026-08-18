import dotenv from "dotenv";
import { app } from "./app.js";
dotenv.config();
const PORT = process.env.PORT || 5000;
console.log(process.env.DATABASE_URL);
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
