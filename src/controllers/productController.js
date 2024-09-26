import {getAllProducts, createProduct, getProductById, updateProduct, deleteProduct} from '../services/productService.js';

export const  getProducts = async(req, res) => {
    try{
        const products = await getAllProducts();
        res.json(products)
    }
    catch (error) {
        res.status(500).json({
            error: "Erro ao Buscar produtos",
        });
    }
};

export const createProductController = async (req,res) => {
    try{
        const newProduct = await createProduct(req.body);
        res.status(201).json(newProduct)
    }
    catch(error) {
        res.status(500).json({
            error:"Deu pau né",
        })
    }
}

export const getProduct = async(req,res) => {
    try{
        const product = await getProductById(req.params.id)
        if(product) {
            res.json(product) 
        } else {
            res.status(500).json({error: "Deu erro né"});
        }
    } catch (error) {
        res.status(500).json({ error: "Error ao buscar produto"});
    }
}

export const  updateProductController = async(req, res) => {
    try{
        const product = await updateProduct(req.params.id, req.body);
        res.json(updateProduct);
    }   
        catch (error){
            res.status(500).json({ error: "Deu pica aq em" });
        }
}
export const deleteProductController = async(req, res) => {
    try{
        await deleteProduct(req.params.id);
        res.status(204).send();
    }
    catch(error){
        res.status(500).json({ error:"num deleto né"});
    }
}