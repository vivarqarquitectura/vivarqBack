import {pool} from '../../conexionDB.js';

//Metodo de logeo de un usuario
export const getProyecto=async(req,res)=>{

     try {
         const [resultado]=await pool.query('SELECT * FROM proyecto');  
             res.status(200).json(resultado)


     } catch (error) {
        console.error("Error en obtener proyectos: ", error);
        res.status(500).json({ error: "Error en el servidor" });
    }
}

export const getProyectoId=async(req,res)=>{
    const {id}=req.params;
    try {
        const [resultado]=await pool.query('SELECT * FROM proyecto WHERE id_proyecto=?',[id]);  
            res.status(200).json(resultado)

    }catch (error) {
        console.error("Error en obtener proyectos: ", error);
        res.status(500).json({ error: "Error en el servidor" });
    }      
}
//Metodo para poder 
export const proyecto_imagenes_renders=async(req,res)=>{

}
//Metodo para poder obtener todos los datos del proyecto y su imagenes renders
export const proyecto_imagenes=async(req,res)=>{
    const {id}=req.params;
    try {
        const [resultado]=await pool.query('SELECT * FROM imagenes_renders WHERE id_proyecto=?',[id]);  
            res.status(200).json(resultado)

    }catch (error) {
        console.error("Error en obtener proyectos: ", error);
        res.status(500).json({ error: "Error en el servidor" });
    }      
}
export const nuevoProyecto=async(req,res)=>{
    const {nombre, estilo, img_proyecto, frente, fondo, cocina, habitacion, baño, sala_estar, comedor, garaje, lavadero, vestidor, esencial, avanzado, premium}=req.body;
    
    try {
        const [resultado]=await pool.query("INSERT INTO proyecto(nombre, estilo, img_proyecto, frente, fondo, cocina, habitacion, baño, sala_estar, comedor, garaje, lavadero, vestidor, esencial, avanzado, premium) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",[nombre, estilo, img_proyecto, frente, fondo, cocina, habitacion, baño, sala_estar, comedor, garaje, lavadero, vestidor, esencial, avanzado, premium]);
            res.status(200).json(resultado)


    } catch (error) {
       console.error("Error en obtener proyectos: ", error);
       res.status(500).json({ error: "Error en el servidor" });
   }
}