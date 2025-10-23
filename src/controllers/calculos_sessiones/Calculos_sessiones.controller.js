import {pool} from '../../conexionDB.js';

    export const nuevoCalculo_sessiones=async(req,res)=>{

        //verifico que si viene null o undefine el body, tome como json
        const { id_usuario, nombre, tipo, createdAt} = req.body ?? {};
        
        try {
            const [resultado] = await pool.query('INSERT INTO calc_sessiones(id_usuario, nombre, tipo, createdAt) VALUES (?,?,?,?)', [id_usuario, nombre, tipo, createdAt]);
            res.status(201).json({ message: "session_creada", id: resultado.insertId });
        } catch (error) {
            console.error("Error en el proceso de agregar un calc_session: ", error);
            res.status(500).json({ error: "Error en el servidor" });
        }
    }


    export const consultarSession = async (req, res) => {
    try {
        // valido que venga el request, y que los datos no esten vacios
        const { id_usuario, nombre, tipo } = req.body ?? {};
        if (!id_usuario || !nombre || !tipo) {
        return res.status(400).json({
            ok: false,
            code: 'BAD_REQUEST',
            message: 'Faltan parámetros requeridos: id_usuario, nombre y tipo.'
        });
        }

        const id = Number(id_usuario);
        if (!Number.isInteger(id) || id <= 0) {
        return res.status(400).json({
            ok: false,
            code: 'BAD_REQUEST',
            message: 'id_usuario debe ser un entero positivo.'
        });
        }

        // Normalizaciones suaves para mejorar “match”
        const nombreNorm = String(nombre).trim();
        const tipoNorm   = String(tipo).trim();

        const [rows] = await pool.query(`SELECT * FROM calc_sessiones WHERE id_usuario=? AND nombre=? AND tipo=?`, [id, nombreNorm, tipoNorm]);

        // 3) Respuestas claras
        if (rows.length > 0) {
        return res.status(200).json({
            ok: true,
            code: 'FOUND',
            count: rows.length,
            data: rows
        });
        }

        return res.status(404).json({
        ok: false,
        code: 'SESSION_NOT_FOUND',
        message: 'No se encontraron sesiones con esos criterios.'
        });

    } catch (error) {
        console.error('Error al consultar sesiones:', error);
        return res.status(500).json({
        ok: false,
        code: 'INTERNAL_ERROR',
        message: 'Error en el servidor'
        });
    }
    };