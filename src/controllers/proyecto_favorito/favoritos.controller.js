import {pool} from '../../conexionDB.js';


export const obtenerFavoritos=async (req,res)=>{
    const {id_usuario}=req.body;
    try {
         const [resultado]=await pool.query('SELECT proyecto.id_proyecto,proyecto.nombre,proyecto.estilo,proyecto.img_proyecto,proyecto.frente, proyecto.fondo,proyecto.cocina,proyecto.baño,proyecto.habitacion,proyecto.sala_estar FROM proyecto_favorito INNER JOIN proyecto on proyecto_favorito.id_proyecto=proyecto.id_proyecto WHERE id_usuario=?',[id_usuario]);  
             res.status(200).json(resultado)


     } catch (error) {
        console.error("Error en obtener un proyecto favorito: ", error);
        res.status(500).json({ error: "Error en el servidor" });
    }
}

export const agregarFavoritos=async (req,res)=>{
    const {id_proyecto, id_usuario}=req.body;
    try {
         const [resultado]=await pool.query('INSERT INTO proyecto_favorito(id_proyecto, id_usuario) VALUES (?,?)',[id_proyecto, id_usuario]);  
             res.status(200).json(resultado)


     } catch (error) {
        console.error("Error en obtener un proyecto favorito: ", error);
        res.status(500).json({ error: "Error en el servidor" });
    }
}

export const eliminarFavorito= async(req,res)=>{
    const {id_proyecto, id_usuario}=req.body;
    try {
         const [resultado]=await pool.query('DELETE FROM proyecto_favorito WHERE id_usuario=? && id_proyecto=?',[id_usuario,id_proyecto ]);  
             res.status(200).json(resultado)


     } catch (error) {
        console.error("Error al intentar borrar un proyecto favorito: ", error);
        res.status(500).json({ error: "Error en el servidor" });
    }
}