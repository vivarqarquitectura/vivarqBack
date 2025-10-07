import { Router } from "express";
import {agregarFavoritos,obtenerFavoritos,eliminarFavorito} from '../../controllers/proyecto_favorito/favoritos.controller.js';
const router=Router();

router.post('/obtenerFavoritos', obtenerFavoritos);

router.post('/nuevoFavorito', agregarFavoritos);

router.delete('/eliminarFavorito',eliminarFavorito);


export default router;