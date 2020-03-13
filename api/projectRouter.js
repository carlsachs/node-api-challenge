const express = require("express");

const router = express.Router();

const Projects = require("../data/helpers/projectModel.js");

//  GET REQUESTS FOR PROJECTS

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

//  POST REQUEST FOR PROJECTS

router.post("/", (req, res) => {
    const project = req.body
    Projects.insert(project)
    .then(id => {
        res.status(201).json(id)
    })
    .catch(err => {
        res.status(500).json({ message: "Unable to post project"})
    })
})

// PUT REQUEST FOR PROJECTS

router.put("/:id", (req, res) => {
    const project = req.body
    const id = req.params.id
    Projects.update(id, project)
    .then (item => {
        res.status(203).json({ message: `Project: ${id} update complete homes` })
    })
})

// DELETE FOR PROJECTS

router.delete("/:id", (req, res) => {
    const id = req.params.id
    Projects.remove(id)
    .then(item => {
        res.status(201).json({ message: "Gone forever, good job" })
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({ message: "That didn't work" })
    })
})

module.exports = router;