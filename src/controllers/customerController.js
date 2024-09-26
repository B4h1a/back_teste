import {createCustomer, deleteCustomer, getAllCustomers, getCustomerById, updateCustomer} from '../services/customerService.js';

export const  getCustome = async(req, res) => {
    try{
        const customer = await getAllCustomers();
        res.json(customer)
    }
    catch (error) {
        res.status(500).json({
            error: "Erro ao Buscar customer",
        });
    }
}

export const createCustomerController = async (req,res) => {
    try{
        const newCustomer = await createCustomer(req.body);
        res.status(201).json(newCustomer)
    }
    catch(error) {
        res.status(500).json({
            error:"Deu pau né",
        })
    }
}

export const getCustomer = async(req,res) => {
    try{
        const customer = await getCustomerById(req.params.id)
        if(customer) {
            res.json(customer) 
        } else {
            res.status(500).json({error: "Deu erro né"});
        }
    } catch (error) {
        res.status(500).json({ error: "Error ao buscar produto"});
    }
}

export const  updateCustomerController = async(req, res) => {
    try{
        const customer = await updateCustomer(req.params.id, req.body);
        res.json(updateCustomer);
    }   
        catch (error){
            res.status(500).json({ error: "Deu pica aq em" });
        }
}
export const deleteCustomerController = async(req, res) => {
    try{
        await deleteCustomer(req.params.id);
        res.status(204).send();
    }
    catch(error){
        res.status(500).json({ error:"num deleto né"});
    }
}