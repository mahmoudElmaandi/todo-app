export const loggerMiddleware = (req, res, next) => {
    console.log(`loggerMiddleware : ${req.method} : ${req.url} `)
    console.log(`loggerMiddleware : body ${JSON.stringify(req.body)}`)
    next();
};