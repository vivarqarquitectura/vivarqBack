import {pool} from '../../conexionDB.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

//Metodo de logeo de un usuario
export const Login = async (req, res) => {
    const { usuario, clave } = req.body;

    try {
        const [resultado] = await pool.query(
            `SELECT id_usuario, nombre, apellido, correo, clave FROM usuario WHERE usuario = ?`,
            [usuario]
        );

        if (resultado.length === 0) {
            return res.status(200).json([]);
        }

        const usuarioDB = resultado[0];

        // Verificar la contraseña hasheada
        const validPassword = await bcrypt.compare(clave, usuarioDB.clave);
        if (!validPassword) {
            return res.status(200).json([]);
        }

        // Generar el token JWT
        const token = jwt.sign(
            { id: usuarioDB.id_usuario, nombre: usuarioDB.nombre, correo: usuarioDB.correo },
            process.env.JWT_SECRET,
            { expiresIn: process.env.JWT_EXPIRES_IN }
        );

        res.json({
            token,
            user: {
                id_usuario: usuarioDB.id_usuario,
                nombre: usuarioDB.nombre,
                apellido: usuarioDB.apellido,
                correo: usuarioDB.correo
            }
        });

    } catch (error) {
        console.error("Error en Login: ", error);
        res.status(500).json({ error: "Error en el servidor" });
    }
};


//Metodo de logeo de un usuario
export const Registro = async (req, res) => {
    const { nombre, apellido, correo, usuario, clave } = req.body;

    try {
        // Hashear la contraseña antes de guardarla
        const hashClave = await bcrypt.hash(clave, 10);

        const [resultado] = await pool.query(
            `INSERT INTO usuario(nombre, apellido, correo, usuario, clave) VALUES (?, ?, ?, ?, ?);`,
            [nombre, apellido, correo, usuario, hashClave]
        );
        res.status(200).json({ message: "Usuario registrado con éxito", userId: resultado.insertId });

    } catch (error) {
        console.error("Error en Registro: ", error);
        res.status(500).json({ error: "Error en el servidor" });
    }
};