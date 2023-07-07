import { signJWT } from "../misc/auth.js";

class userHandler {
    // Getting token based on only username for testing purpose since
    // task is considering that user already exist in database [ with proper model and password hashing ]
    getToken = (req, res) => {
        const { username } = req.body;
        if (!username) res.status(400).json({ error: 'Missing params' });
        const jwt = signJWT({ userId: username })
        return res.send({ jwt });
    };
}

export default new userHandler();