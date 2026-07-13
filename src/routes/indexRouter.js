import { Router } from 'express';

const messages = [
  {
    text: 'Hi there!',
    user: 'Amando',
    added: new Date(),
  },
  {
    text: 'Hello World!',
    user: 'Charles',
    added: new Date(),
  },
];

const router = Router();

router.get('/', (req, res) => {
  res.render('index', { messages });
});

export default router;
