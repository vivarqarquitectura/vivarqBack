import { Router } from "express";
import {getProyecto,nuevoProyecto,getProyectoId} from '../../controllers/proyecto/Proyecto.controller.js';

const router=Router();

router.get('/proyectos', getProyecto);

router.get('/proyectos/:id', getProyectoId);

router.post('/nuevoProyecto', nuevoProyecto);

export default router;