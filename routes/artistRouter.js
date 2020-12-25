const express = require("express")
const artistRouter = express.Router()
const { v4: uuidv4 } = require("uuid")

const artists = [
    {name: "sean paul", genre: "pop reggae", _id: uuidv4()},
    {name: "elvis presely", genre: "rock n roll", _id: uuidv4()},
    {name: "miguel", genre: "r&b", _id: uuidv4()},
    {name: "chris stapleton", genre: "country", _id: uuidv4()},
    {name: "justin timberlake", genre: "pop", _id: uuidv4()}
]

artistRouter.route("/")
    .get((req, res) => {
        res.status(200).send(artists)
    })
    .post((req, res) => {
        const newArtist = req.body
        newArtist._id = uuidv4()
        artists.push(newArtist)
        res.send(newArtist)
    })

module.exports = artistRouter