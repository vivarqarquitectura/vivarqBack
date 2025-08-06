import { Router } from "express";
import {getProyecto_render,nuevoProyecto_render} from '../../controllers/proyecto/Proyecto_img_renders.controller.js';
const router=Router();

router.get('/proyectos_render/:id', getProyecto_render);

router.post('/nuevoProyecto_render', nuevoProyecto_render);


export default router;