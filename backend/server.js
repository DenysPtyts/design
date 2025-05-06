import express from 'express';
import cors from 'cors';
import jwt from 'jsonwebtoken';
import cookieParser from 'cookie-parser';
import bcrypt from 'bcrypt';
import pkg from 'pg';

const salt = 10;

const app = express();
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));
app.use(cookieParser());

const { Pool } = pkg;

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'Workers',
    password: 'w2f5t7',
    port: 5432, 
});

app.post('/', (req, res) => {
    const post = req.body.post.trim().toLowerCase();
    const password = req.body.password.toString();
    const sql = 'SELECT * FROM workers WHERE post = $1';
    pool.query(sql, [post], (err, data) => {
        if (err) {
            console.error("Помилка запиту до бази даних:", err);
            return res.status(500).json({ Error: 'Помилка логіну на сервері' });
        }
        if (data.rows.length > 0) {
            const user = data.rows[0];
            if (password === data.rows[0].password) {
                return res.json({ Status: "Success", user });
            } else {
                console.log("Паролі не збігаються.");
                return res.status(401).json({ Error: "Пароль не збігається" });
            }
        } else {
            console.log("Користувача з post", post, "не знайдено.");
            return res.status(404).json({ Error: "Користувач не існує" });
        }
    });
});

app.post('/addworker', (req, res) => {
    const post = req.body.post.trim().toLowerCase();
    const password = req.body.password.toString();
    const sql = 'INSERT INTO workers (workerName, workerSurname, post, cardID, password) VALUES ($1, $2, $3, $4, $5)';
    const values = [
        req.body.workerName,
        req.body.workerSurname,
        post,
        req.body.cardID,
        password
    ]
    pool.query(sql, values, (dbErr, dbRes) => {
        if(dbErr) {
            console.error("Помилка вставки даних:", dbErr);
            return res.json({Error: "Inserting data Error in server"});
        }
        return res.json({Status: "Success"});
    })
});

app.listen(5000, () => {
    console.log("Running...");
})