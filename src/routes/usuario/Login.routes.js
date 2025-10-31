import { Router } from "express";
import {postLogin,postRegistro} from '../../controllers/usuario/Login.js';

const router=Router();

router.post('/login', postLogin);
router.post('/registro',postRegistro);

export default router;