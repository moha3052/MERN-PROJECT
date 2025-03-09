import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import ProductRoutes from './routes/product.route.js';


dotenv.config();

// Forbind til databasen først
connectDB();

const app = express();

app.use(express.json()); // Tillader JSON-data i req.body


app.use("/api/products", ProductRoutes);

// Start serveren kun, hvis DB-forbindelsen er succesfuld
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`);
});
