import {pool} from '../../conexionDB.js';

//Metodo de logeo de un usuario
export const getMisProyecto=async(req,res)=>{
    const{ id_usuario }=req.body;
    try {
        const [resultado]=await pool.query('SELECT * FROM mis_proyectos WHERE id_usuario= ?',[id_usuario]);
        res.status(200).json(resultado)
     } catch (error) {
        console.error("Error en obtener proyectos: ", error);
        res.status(500).json({ error: "Error en el servidor" });
    }
}

export const insertMisProyecto=async(req,res)=>{
    const { id_compra, id_usuario, id_proyecto, tipo_proyecto, precio_unitario} = req.body;
    try {
        const [resultado] = await pool.query('INSERT INTO mis_proyectos(id_compra, id_usuario, id_proyecto, tipo_proyecto, precio_unitario) VALUES (?,?,?,?,?)', [id_compra, id_usuario, id_proyecto, tipo_proyecto, precio_unitario]);
        res.status(201).json({ message: "Proyecto agregado correctamente", id: resultado.insertId });
    } catch (error) {
        console.error("Error al agregar proyecto: ", error);
        res.status(500).json({ error: "Error en el servidor" });
    }
}