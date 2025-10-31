import {pool} from '../../conexionDB.js';

export const getMateriales=async (data)=>{
    const respuesta=await pool.query(`SELECT * FROM calc_sessiones WHERE id_usuario=? AND nombre=? AND tipo=?`, [data.id_usuario, data.nombreNorm, data.tipoNorm]);
    return respuesta;
}