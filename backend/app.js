const express = require("express");
const cors = require("cors");

const connectDB = require("./db");
const Task = require("./models/Task");

const app = express();

app.use(cors());
app.use(express.json());

connectDB();



app.get("/", (req, res) => {
    res.send("TaskFlow Backend Running");
});



app.get("/tasks", async (req, res) => {

    try {

        const tasks = await Task.find().sort({ createdAt: -1 });

        res.json(tasks);

    } catch (error) {

        res.status(500).json({ error: "Server error" });

    }

});



app.post("/tasks", async (req, res) => {

    try {

        const task = new Task({
            title: req.body.title
        });

        await task.save();

        res.json(task);

    } catch (error) {

        res.status(500).json({ error: "Failed to create task" });

    }

});



app.delete("/tasks/:id", async (req, res) => {

    try {

        await Task.findByIdAndDelete(req.params.id);

        res.json({ message: "Task deleted" });

    } catch (error) {

        res.status(500).json({ error: "Delete failed" });

    }

});


app.listen(5000, () => {

    console.log("Server running on port 5000");

});