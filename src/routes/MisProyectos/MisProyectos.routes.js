import { Router } from "express";
import {getMisProyecto,insertMisProyecto} from '../../controllers/MisProyectos/MisProyectos.controller.js';
import {verificarToken} from '../../middlewares/authMiddleware.js';

const router=Router();

router.post('/misProyectos', verificarToken ,getMisProyecto);
router.post('/insertMisProyecto',verificarToken,insertMisProyecto);

export default router;