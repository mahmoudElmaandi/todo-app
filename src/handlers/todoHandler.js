import todoModel from "../models/todoModel.js";

class todoHandler {

    // Create a new todo
    create = async (req, res) => {
        const { title, description } = req.body;
        if (!title) return res.status(400).json({ error: 'Missing params' });

        const newTodo = new todoModel({
            title, description, userId: res.locals.userId
        });

        try {
            const newDoc = await newTodo.save();
            res.status(201).json(newDoc);
        } catch (error) {
            res.status(500).json({ error: 'Internal server error' });
        }
    };

    // Get a todo
    get = async (req, res) => {
        const { id } = req.params;
        if (!id) return res.status(400).json({ error: 'Missing params' });
        const filter = { _id: id, userId: res.locals.userId };
        try {
            let doc = await todoModel.findOne(filter);
            return res.status(200).json(doc);
        } catch (error) {
            return res.status(404).json({ error: 'Todo not found' });
        }
    };

    // Update a todo
    update = async (req, res) => {
        const { id } = req.params;
        const { title, description, completed } = req.body;
        if (!title || !description || completed == null) return res.status(400).json({ error: 'Missing params' });

        const filter = { _id: id, userId: res.locals.userId };
        const update = { title, description, completed };
        try {
            let doc = await todoModel.findOneAndUpdate(filter, update, { new: true });
            if (!doc) return res.status(404).json({ error: 'Todo not found' });
            return res.status(200).json(doc);
        } catch (error) {
            return res.status(500).json({ error: 'Internal server error' });
        }
    };

    // Delete a todo
    delete = async (req, res) => {
        const { id } = req.params;
        if (!id) return res.status(400).json({ error: 'Missing id' });

        const filter = { _id: id, userId: res.locals.userId };
        try {
            let doc = await todoModel.findOneAndDelete(filter, { new: true });
            if (!doc) return res.status(404).json({ error: 'Todo not found' });
            res.status(200).json(doc);
        } catch (error) {
            res.status(500).json({ error: 'Internal server error' });
        }
    };
}

export default new todoHandler()