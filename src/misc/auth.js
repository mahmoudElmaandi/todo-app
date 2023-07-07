import confing from "../../confing.js";
import jwt from "jsonwebtoken";

export const signJWT = (payload) => {
    return jwt.sign(payload, confing.jwtSecret, {
        expiresIn: '20d'
    })
}

export const verifyJWT = (jwtToken) => {
    return jwt.verify(jwtToken, confing.jwtSecret)
}