import { Router } from "express";
import { createCustomerController, deleteCustomerController, getCustome, getCustomer, updateCustomerController } from '../controllers/customerController.js';

const router = Router();

router.get("/customers", getCustome);
router.get("/customers/:id", getCustome);
router.post("/customers", createCustomerController);
router.patch("/customers/:id", updateCustomerController);
router.delete("/customers/:id", deleteCustomerController);

export default router;