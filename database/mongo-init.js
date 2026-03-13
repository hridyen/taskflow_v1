db = db.getSiblingDB("taskdb");

db.tasks.insertMany([
    { title: "Learn Docker" },
    { title: "Build Jenkins Pipeline" },
    { title: "Become DevOps Engineer" }
]);