import {pool} from '../../conexionDB.js';

//Metodo de logeo de un usuario
export const getProyecto_render=async(req,res)=>{
    const {id}=req.params;
    
     try {
         const [resultado]=await pool.query('SELECT * FROM proyecto_imagenes INNER JOIN proyecto on proyecto_imagenes.id_proyecto= proyecto.id_proyecto WHERE proyecto_imagenes.id_proyecto=?',[id]);  
             res.status(200).json(resultado)


     } catch (error) {
        console.error("error al obtener los datos: ", error);
        res.status(500).json({ error: "Error en el servidor" });
    }
}

export const nuevoProyecto_render=async(req,res)=>{
    const {img_plano_con_medida, render_uno, render_dos, render_tres, render_cuatro, id_proyecto}=req.body;
    
    try {
        const [resultado]=await pool.query("INSERT INTO proyecto_imagenes(img_plano_con_medida, render_uno, render_dos, render_tres, render_cuatro, id_proyecto) VALUES (?,?,?,?,?,?)",[img_plano_con_medida, render_uno, render_dos, render_tres, render_cuatro, id_proyecto]);
            res.status(200).json(resultado)


    } catch (error) {
       console.error("Error en obtener proyectos: ", error);
       res.status(500).json({ error: "Error en el servidor" });
   }
}

