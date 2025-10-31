import { Router } from "express";
import {postTablaMateriales} from '../../controllers/materiales/TablaMateriales.controller.js';


const router=Router();

router.post("/postMateriales",postTablaMateriales);

export default router;