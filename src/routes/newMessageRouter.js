import { Router } from 'express';
import { messages } from '../db/db.js';

const router = Router();

router.get('/', (req, res) => {
  res.render('form');
});

router.post('/', (req, res) => {
  messages.push({
    id: crypto.randomUUID(),
    text: req.body.text,
    user: req.body.user,
    added: new Date(),
  });

  res.redirect('/');
});

export default router;
