import { Router } from "express";
import {verificarToken} from '../../middlewares/authMiddleware.js';
import {nuevaCompra} from '../../controllers/compras/Compras.controller.js';


const router=Router();
router.post('/nuevaCompra', verificarToken, nuevaCompra);

export default router;