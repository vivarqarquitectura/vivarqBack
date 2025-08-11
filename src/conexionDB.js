import {createPool} from 'mysql2/promise'

export const pool=createPool({
    host:process.env.HOST || 4000,
    user:process.env.USER || root,
    password:process.env.PASSWORD || '',
    port:process.env.PORTDB || 3306,
    database:process.env.NAMEDATABASE || arq_plax
})