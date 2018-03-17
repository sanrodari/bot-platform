const express = require('express');

const botsRepo = require('../repos/bots');

const router = express.Router();

router.get('/', (req, res) => {
  const { user: { id } } = req;
  botsRepo
    .findByUser(id)
    .then(result => res.json(result))
});

router.post('/', (req, res) =>
  botsRepo
    .create(req.user.id, req.body)
    .then(result => res.json(result)));

router.patch('/:id', (req, res) =>
  botsRepo
    .update(req.user.id, req.params.id, req.body)
    .then(result => res.json(result)));

router.get('/:id', (req, res) =>
  botsRepo
    .findByUserAndId(req.user.id, req.params.id)
    .then(result => res.json(result)));

router.delete('/:id', (req, res) =>
  botsRepo
    .deleteByUserAndId(req.user.id, req.params.id)
    .then(result => res.json(result)));

module.exports = router;
