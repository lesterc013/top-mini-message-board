import { Router } from 'express';
import { messages } from '../db/db.js';

const router = Router();

router.get('/', (req, res) => {
  res.render('index', { messages });
});

router.get('/:messageId', (req, res) => {
  const messageId = req.params.messageId;
  const message = messages.find((m) => m.id === messageId);
  if (!message) {
    console.error(
      `Could not find message messageId: ${messageId}. Redirect back to home`,
    );
    res.redirect('/');
    return;
  }

  res.render('messagePage', { message });
});

export default router;
