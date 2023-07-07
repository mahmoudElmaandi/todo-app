import mongoose from 'mongoose';

export const connectDB = async (mongoURL) => {
    try {
        const connect = await mongoose.connect(mongoURL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`DB Connected : ${connect.connection.host}`)
    } catch (error) {
        console.error(`DB connection failed`)
        console.error(error);
        process.exit();
    }
};