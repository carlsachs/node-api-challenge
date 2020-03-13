const express = require("express");

const router = express.Router();

const Actions = require("../data/helpers/actionModel.js");

//  GET REQUESTS FOR ACTIONS

router.get("/", (req, res) => {
    Actions.get()
    .then(action => {
        res.status(200).json(action)
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({ message: "Actions not here" })
    })
})

router.get("/:id", (req, res) => {
    const id = req.params.id
    Actions.get(id)
    .then(action => {
        res.status(200).json(action)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({ message: "Can't get the actions" })
    })
})

//  POST REQUEST FOR ACTIONS

router.post("/", (req, res) => {
    const action = req.body
    Actions.insert(action)
    .then(id => {
        res.status(201).json(id)
    })
    .catch(err => {
        res.status(500).json({ message: "Unable to post action"})
    })
})

// PUT REQUEST FOR ACTIONS

router.put("/:id", (req, res) => {
    const action = req.body
    const id = req.params.id
    Actions.update(id, action)
    .then (item => {
        res.status(203).json({ message: `Action: ${id} update complete homes` })
    })
})

// DELETE FOR ACTIONS

router.delete("/:id", (req, res) => {
    const id = req.params.id
    Actions.remove(id)
    .then(item => {
        res.status(201).json({ message: "Gone forever, good job" })
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({ message: "That didn't work" })
    })
})

module.exports = router;