import request from 'supertest';
import app from '../../../app';

describe('Candidate controller', () => {
  test('should register user if field values is correct', async () => {
    const response = await request(app).post('/candidate').send({
      email: 'any_email@mail.com',
      name: 'any_name',
      skype: 'any_skype',
      phone: 'any_phone',
      city: 'any_city',
      uf: 'any_uf',
    });
    expect(response.status).toBe(201)
  })

  test('should return 400 if email already send form', async () => {
    const response = await request(app).post('/candidate').send({
      email: 'any_email@mail.com',
      name: 'any_name',
      skype: 'any_skype',
      phone: 'any_phone',
      city: 'any_city',
      uf: 'any_uf',
    });
    expect(response.status).toBe(400)
  })
});
