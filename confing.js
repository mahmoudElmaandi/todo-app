import dotenv from 'dotenv'
dotenv.config()

export default {
    apiVer: process.env.API_VER,
    port: process.env.PORT,
    mongoUrl: process.env.MONGO_URL,
    jwtSecret: process.env.JWT_SECRET
}