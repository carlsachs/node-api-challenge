const express = require("express");

const router = express.Router();

const Projects = require("../data/helpers/projectModel.js");

router.get("/", (req, res) => {
    Projects.get()
    .then(project => {
        res.status(200).json(project)
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({ message: "Projects unavailable homes" })
    })
})

router.get("/:id", (req, res) => {
    const id = req.params.id
    Projects.get(id)
    .then(project => {
        res.status(200).json(project)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({ message: "Can't get the projects homes" })
    })
})