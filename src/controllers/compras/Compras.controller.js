import {pool} from '../../conexionDB.js';

export const nuevaCompra=async(req,res)=>{
    const { id_usuario, cantidad_proyectos, monto_total, fecha} = req.body;
    try {
        const [resultado] = await pool.query('INSERT INTO compras(id_usuario, cantidad_proyectos, monto_total, fecha) VALUES (?,?,?,?)', [id_usuario, cantidad_proyectos, monto_total, fecha]);
        res.status(201).json({ message: "Compra Realizada", id: resultado.insertId });
    } catch (error) {
        console.error("Error en el proceso de compra: ", error);
        res.status(500).json({ error: "Error en el servidor" });
    }
}