const express = require('express');

const botsRepo = require('../repos/bots');

const router = express.Router();

router.get('/', (req, res) =>
  botsRepo
    .findByUser(req.user)
    .then(result => res.json(result)));

router.post('/', (req, res) =>
  botsRepo
    .create(req.user, req.body)
    .then(result => res.json(result)));

router.patch('/:id', (req, res) =>
  botsRepo
    .update(req.user, req.params.id, req.body)
    .then(result => res.json(result)));

router.get('/:id', (req, res) =>
  botsRepo
    .findByUserAndId(req.user, req.params.id)
    .then(result => res.json(result)));

router.delete('/:id', (req, res) =>
  botsRepo
    .deleteByUserAndId(req.user, req.params.id)
    .then(result => res.json(result)));

module.exports = router;
