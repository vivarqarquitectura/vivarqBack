import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import Login from './routes/usuario/Login.routes.js';
import Proyecto from './routes/proyecto/Proyecto.routes.js';
import MisProyectos from './routes/MisProyectos/MisProyectos.routes.js';
import Proyecto_render from './routes/proyecto/Proyecto_img_renders.routes.js';
import Compras from './routes/compras/compras.routes.js';
import Mercado_pago from './routes/Mercado_pago/Mercado_pago.routes.js'
import ProyectoFavoritos from './routes/proyecto_favorito/favorito.route.js'
import Calculos_sessiones from './routes/Calculo_sessiones/Calculos_sessiones.route.js';

const app=express();
const PORT=process.env.PORT ?? 4000 ; 

app.use(cors({
    origin:'http://172.16.1.243:5174'
}));
//middleware
app.use(express.urlencoded({ extended: true })); // Procesa datos de formulario de tipo `application/x-www-form-urlencoded`
app.use(express.json()); // Procesa datos de tipo JSON

app.use(Login);
app.use(Proyecto);
app.use(MisProyectos);
app.use(Proyecto_render);
app.use(Compras);
app.use(Mercado_pago);
app.use(ProyectoFavoritos);
app.use(Calculos_sessiones);

app.listen(PORT ,()=> console.log("SERVER RUN " + PORT));