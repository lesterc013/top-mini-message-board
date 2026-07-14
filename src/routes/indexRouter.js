import { Router } from 'express';

const messages = [
  {
    id: 1,
    text: 'Hi there!',
    user: 'Amando',
    added: new Date(),
  },
  {
    id: 2,
    text: 'Hello World!',
    user: 'Charles',
    added: new Date(),
  },
];

const router = Router();

router.get('/', (req, res) => {
  res.render('index', { messages });
});

router.get('/:messageId', (req, res) => {
  const message = messages.find((m) => m.id === parseInt(req.params.messageId));
  if (!message) {
    console.error('Could not find message. Redirect back to home');
    res.redirect('/');
    return;
  }

  res.render('messagePage', { message });
});

router.get('/new', (req, res) => {
  res.render('form');
});

router.post('/new', (req, res) => {
  messages.push({
    id: crypto.randomUUID(),
    text: req.body.text,
    user: req.body.user,
    added: new Date(),
  });

  res.redirect('/');
});

export default router;
