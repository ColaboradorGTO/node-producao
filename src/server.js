import app from './app.js';

// Para desenvolvimento local
if (process.env.NODE_ENV !== 'production') {
  const PORT = process.env.PORT || 6001;
  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta `, PORT);
  });
}

// Para Vercel (Serverless)
export default app;


