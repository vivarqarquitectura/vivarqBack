import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import Login from './routes/usuario/Login.routes.js';
import Proyecto from './routes/proyecto/Proyecto.routes.js';
import MisProyectos from './routes/MisProyectos/MisProyectos.routes.js';
import Proyecto_render from './routes/proyecto/Proyecto_img_renders.routes.js';
import Compras from './routes/compras/compras.routes.js';
import Mercado_pago from './routes/Mercado_pago/Mercado_pago.routes.js'


const app=express();
const PORT=process.env.PORT ?? 4000 ; 

app.use(cors());
//middleware
app.use(express.urlencoded({ extended: true })); // Procesa datos de formulario de tipo `application/x-www-form-urlencoded`
app.use(express.json()); // Procesa datos de tipo JSON


// Configurar cabeceras y cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept,access-token ,Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

app.use(Login);
app.use(Proyecto);
app.use(MisProyectos);
app.use(Proyecto_render);
app.use(Compras);
app.use(Mercado_pago);

app.listen(PORT ,()=> console.log("SERVER RUN " + PORT));