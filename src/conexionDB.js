import {createPool} from 'mysql2/promise'
import 'dotenv/config';
export const pool=createPool({
    host:process.env.HOST,
    user:process.env.USER,
    password:process.env.PASSWORD,
    port:process.env.PORTDB,
    database:process.env.NAMEDATABASE
})