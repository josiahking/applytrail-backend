import app from './app';
import 'reflect-metadata';

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`✅ ApplyTrail backend running on http://localhost:${PORT}`);
});
