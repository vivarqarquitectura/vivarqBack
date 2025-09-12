import { Router } from "express";
import {preference,webhook} from '../../controllers/mercado_pago/Mercado_pago.controller.js';

const router=Router();

router.post('/create_preference',preference);
router.post('/webhooks/mercadopago',webhook);

export default router;