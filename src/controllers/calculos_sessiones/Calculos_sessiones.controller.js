import {pool} from '../../conexionDB.js';

export const nuevoCalculo_sessiones=async(req,res)=>{
    const { id_usuario, nombre, tipo, createdAt} = req.body;
    
    try {
        const [resultado] = await pool.query('INSERT INTO calc_sessiones(id_usuario, nombre, tipo, createdAt) VALUES (?,?,?,?)', [id_usuario, nombre, tipo, createdAt]);
        res.status(201).json({ message: "session_creada", id: resultado.insertId });
    } catch (error) {
        console.error("Error en el proceso de agregar un calc_session: ", error);
        res.status(500).json({ error: "Error en el servidor" });
    }
}