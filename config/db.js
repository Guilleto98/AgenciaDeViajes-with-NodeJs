import Sequelize from 'sequelize';
import dotenv from 'dotenv/config';

const db = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    port: '3306',
    dialect: 'mysql',
    define: {
        timestamps: false
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    dialectOptions: {
        connectTimeout: 120000 // Espera 60 segundos antes de arrojar un error de conexión
    },
    operatorAliases: false
});

export default db
