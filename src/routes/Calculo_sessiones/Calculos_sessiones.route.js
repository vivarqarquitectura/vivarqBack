import { Router } from "express";
import {nuevoCalculo_sessiones,consultarSession} from '../../controllers/calculos_sessiones/Calculos_sessiones.controller.js';


const router=Router();

router.post('/agregarCalc_sessiones',nuevoCalculo_sessiones);

router.post('/consultarSession',consultarSession);

export default router;