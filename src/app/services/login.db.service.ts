import {Pool} from 'pg'

const pool = new Pool()

export const query = async (text:any, params:any)=>{
    const start = Date.now()
    const res = await pool.query(text, params)
    const duration = Date.now() - start
    console.log('Executed query', {text, duration, rows: res.rowCount})
    return res
}