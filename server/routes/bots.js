const express = require('express');

const botsRepo = require('../repos/bots');

const router = express.Router();

router.get('/', async (req, res) => {
  const { user: { id } } = req;
  const result = await botsRepo.findByUser(id);
  res.json(result);
});

router.post('/', async (req, res) => {
  const result = await botsRepo.create(req.user.id, req.body);
  res.json(result);
});

router.patch('/:id', async (req, res) => {
  const result = await botsRepo.update(req.user.id, req.params.id, req.body);
  res.json(result);
});

router.get('/:id', async (req, res) => {
  const result = await botsRepo.findByUserAndId(req.user.id, req.params.id);

  if (!result) {
    res.status(404).send({ errors: { message: 'Bot not found' } });
    return;
  }

  res.json(result);
});

router.delete('/:id', async (req, res) => {
  const { n, ok } = await botsRepo.deleteByUserAndId(req.user.id, req.params.id);

  if (n !== 1) {
    res.status(404).send({ errors: { message: 'Bot not found' } });
    return;
  }

  const success = ok === 1;

  res.json({
    success,
  });
});

module.exports = router;
