import request from 'supertest';
import app from '../../../app';

const candidate = new Promise(resolve => {
  resolve(request(app).post('/candidate').send({
    email: 'email@mail.com',
    name: 'name',
    skype: 'skype',
    phone: 'phone',
    city: 'city',
    uf: 'uf',
  }))
});

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmMjFhZGJmMDQ0ZDYzMGZhNGVkMjQ2YyIsImlhdCI6MTU5NjA1OTg3NCwiZXhwIjoxNTk3MjY5NDc0fQ.89JQq0qL0NdEwTOfwAFjX5flY9zMGERQD-hnNEuaa_I';

describe('Admin controller', () => {

  afterAll(() => {
    Candidate().remove({})
  })

  test('should register new admin user', async () => {
    const response = await request(app).post('/admin/register').send({
      name: 'valid_name',
      email: 'valid_email@mail.com',
      password: 'hash_password'
    });
    expect(response.status).toBe(201);
  })

  test('should return 400 if email already admin register', async () => {
    const response = await request(app).post('/admin/register').send({
      name: 'valid_name',
      email: 'valid_email@mail.com',
      password: 'hash_password'
    });
    expect(response.status).toBe(400);
  })

  test('should candidate list', async () => {
    const response = await request(app).get('/admin/candidate/list').auth(token, { type: 'bearer' });
    expect(response.status).toBe(200)
  })

  test('should return 400 if candidate not found', async () => {
    const response = await request(app).patch('/admin/candidate/5f218b1f282b571220a475a0/update').send({
      name: 'another_name'
    }).auth(token, { type: 'bearer' });
    expect(response.status).toBe(400);
  })

  test('should edit candidate info', async () => {
    const data = await candidate;
    const response = await request(app).patch(`/admin/candidate/${data.body._id}/update`).send({
      name: 'another_name'
    }).auth(token, { type: 'bearer' });
    expect(response.status).toBe(200);
  })

  test('should delete candidate', async () => {
    const data = await candidate;
    const response = await request(app).delete(`/admin/candidate/${data.body._id}/delete`).auth(token, { type: 'bearer' });
    expect(response.status).toBe(200);
  })

  test('should return 400 if on delete has candidate id not found', async () => {
    const response = await request(app).delete('/admin/candidate/5f218b1f282b571220a475a0/delete').auth(token, { type: 'bearer' });
    expect(response.status).toBe(400);
  })
})
