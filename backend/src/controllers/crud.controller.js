const getAll = (model) => async (req, res) => {
    try {
        const data = await model.find().lean().exec();

        return res.status(200).json({ data })
    }
    catch (err) {
        return res.status(400).json({ status: "failed", message: err.message });
    }
}

const getOne = (model) => async (req, res) => {
    try {
        const data = await model.findById(req.params.id).lean().exec();

        return res.status(200).json({ data })
    }
    catch (err) {
        return res.status(400).json({ status: "failed", message: err.message });
    }
}

const post = (model) => async (req, res) => {
    try {
        const data = await model.create(req.body);

        return res.status(201).json({ data })
    }
    catch (err) {
        return res.status(400).json({ status: "failed", message: err.message })
    }
}

const updateOne = (model) => async (req, res) => {
    try {
        const data = await model.findByIdAndUpdate(req.params.id, req.body, { new: true });

        return res.status(200).json({ data });
    }
    catch (err) {
        return res.status(400).json({ status: "failed", message: err.message })
    }
}

const deleteOne = (model) => async (req, res) => {
    try {
        const data = await model.findByIdAndDelete(req.params.id);

        return res.status(200).json({ data })
    }
    catch (err) {
        return res.status(400).json({ status: "failed", message: err.message })
    }
}

module.exports = {
    getAll,
    post,
    updateOne,
    deleteOne,
    getOne
}