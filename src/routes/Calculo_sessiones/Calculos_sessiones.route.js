import { Router } from "express";
import {nuevoCalculo_sessiones} from '../../controllers/calculos_sessiones/Calculos_sessiones.controller.js';


const router=Router();

router.post('/agregarCalc_sessiones',nuevoCalculo_sessiones);

export default router;