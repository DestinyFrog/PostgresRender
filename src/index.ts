import pg from 'pg'

( async () => {
    console.log("Start")

    const { Client } = pg
    const client = new Client({
        user: "carve",
        password: "K1cN4tUGvOCU0MdUsCjjaKYk3wtMAgU9",
        database: "liba",
        port: 5432,
        host: "dpg-cp5pdf2cn0vc73bj7g4g-a"
    })
    await client.connect()
    
    const res = await client.query('SELECT NOW()')
    console.log(res.rows[0].message)
    await client.end()

    console.log("End !!")
} ).call(this)