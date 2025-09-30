import { Router } from "express";
import {agregarFavoritos,obtenerFavoritos} from '../../controllers/proyecto_favorito/favoritos.controller.js';
const router=Router();

router.post('/obtenerFavoritos', obtenerFavoritos);

router.post('/nuevoFavorito', agregarFavoritos);


export default router;