import pg from 'pg'

( async () => {
    const { Client } = pg
    const client = new Client({
        user: "carve",
        password: "K1cN4tUGvOCU0MdUsCjjaKYk3wtMAgU9",
        database: "Liba",
        port: 5432,
        host: "dpg-cp5pdf2cn0vc73bj7g4g-a"
    })
    await client.connect()
    
    const res = await client.query('SELECT $1::text as message', ['Hello world!'])
    console.log(res.rows[0].message)
    await client.end()
} ).call(this)