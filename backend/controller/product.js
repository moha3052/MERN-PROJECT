import Product from '../models/product.js';



export const getProducts = async (req,res) => {
    try {
        const products = await Product.find({}); // Henter alle produkter fra databasen
        res.json(products);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Der skete en fejl" });
    }    
}

export const createProduct = async (req, res) => {
    const product  = req.body; // Bruger sender data i request body

    // Tjek om alle nødvendige felter er med
    if (!product.name || !product.price || !product.image) {
        return res.status(400).json({ success: false, message: "Please fill in all fields" });
    }

    // Opret nyt produkt
    const newProduct = new Product(product);

    try {
        await newProduct.save();
        res.status(201).json({ success: true, message: "Product created successfully", data: newProduct });
    } catch (error) {
        console.error("Error in create product:", error.message);
        res.status(500).json({ success: false, message: "Error creating product" });
    }
}

export const updateProduct = async (req, res) => {
    const {id} = req.params;
    const product = req.body;
    
    try{
        const updatedProduct = await Product.findByIdAndUpdate(id, product, {new: true});
        res.json(updatedProduct);
    } catch(error){
        res.status(500).json({ success: false, message: "Error updating product" + error.message });
    }
}

export const deleteProduct = async (req, res) => {
    const {id} = req.params;

    try{
        await Product.findByIdAndDelete(id);
        res.status(200).json({ success: true, message: "Product deleted successfully" });
    } catch(error){
        res.status(500).json({ success: false, message: "Error deleting product" });
    }

}