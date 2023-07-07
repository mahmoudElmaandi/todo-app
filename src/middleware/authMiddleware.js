import jsonwebtoken from "jsonwebtoken";
import { verifyJWT } from "../misc/auth.js";

export const authMiddleware = async (req, res, next) => {
    const jwt = req.headers.authorization?.split(' ')[1];
    if (!jwt) return res.status(401).send({ error: "no token" });

    let payload;
    try {
        payload = verifyJWT(jwt)
        console.log("jwt payload", payload);
    } catch (error) {
        if (error instanceof jsonwebtoken.TokenExpiredError) {
            return res.status(401).send({ error: "expired token" });
        }
        return res.status(401).send({ error: "bad token" });
    }

    res.locals.userId = payload.userId;
    return next()
};