import express from "express"
import {getProducts, createProduct, updateProduct, deleteProduct} from "../controller/product.js";



const router = express.Router();

// Get product
router.get("/", getProducts);

// Create product 
router.post("/", createProduct);

// Update product bassed on id
router.put("/:id", updateProduct);

// Delete product bassed on id
router.delete("/:id", deleteProduct)

export default router;