import { Router } from "express";
import {Login,Registro} from '../../controllers/usuario/Login.js';

const router=Router();

router.post('/login', Login);
router.post('/registro',Registro);

export default router;