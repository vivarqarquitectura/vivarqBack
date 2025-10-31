import {pool} from '../../conexionDB.js'

export const Login=async (usuario)=>{
    const respuesta= await pool.query(`SELECT id_usuario, nombre, apellido, correo, clave FROM usuario WHERE usuario = ?`,[usuario]);
    return respuesta;
}

export const Registro=async(nombre, apellido, correo, usuario, hashClave)=>{
    const respuesta=await pool.query(`INSERT INTO usuario(nombre, apellido, correo, usuario, clave) VALUES (?, ?, ?, ?, ?)`,[nombre, apellido, correo, usuario, hashClave]);
    return respuesta;
}