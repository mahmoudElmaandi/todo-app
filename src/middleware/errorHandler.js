export const errorHandler = (error, req, res, next) => {
    console.error(`errorHandler : ${error}`)
    console.error(`errorHandler : ${error.message}`)
    console.error(error)
    return res.status(400).send("An error happened")
}