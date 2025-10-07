import request from 'supertest';
import app from '../app';

describe('GET /', () => {
  it('should return welcome message', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe('Welcome to ApplyTrail API 🚀');
  });
});
