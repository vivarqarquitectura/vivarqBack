
    export const postTablaMateriales=async(req,res)=>{
        //verifico que si viene null o undefine el body, tome como json
        const { id_calculo, material, cantidad, unidad, comercial, unidad_comercial} = req.body;
            if(!id_calculo || !material || !cantidad || !unidad || !comercial || !unidad_comercial){
                console.log(req.body);
                return res.status(400).json({
                    ok: false,
                    code: 'BAD_REQUEST',
                    message: 'Faltan parámetros requeridos'
                });
            }else{
                try {
                    const [resultado] = await pool.query('INSERT INTO materiales(id_calculo, material, cantidad, unidad, comercial, unidad_comercial) VALUES (?,?,?,?,?,?)', [id_calculo, nombre, cantidad_base, unidad_base, cantidad_comercial, unidad_decimal]);
                    res.status(201).json({ message: "materiales cargados", id: resultado.insertId });
                } catch (error) {
                    console.error("Error en el proceso de carga de la tabla ", error);
                    res.status(500).json({ error: "Error en el servidor" });
                }
            }
    }
