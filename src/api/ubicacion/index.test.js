import request from 'supertest-as-promised'
import express from '../../services/express'
import routes, { Ubicacion } from '.'

const app = () => express(routes)

let ubicacion

beforeEach(async () => {
  ubicacion = await Ubicacion.create({})
})

test('POST /ubicacions 201', async () => {
  const { status, body } = await request(app())
    .post('/')
    .send({ text: 'test', lat: 'test', long: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.text).toEqual('test')
  expect(body.lat).toEqual('test')
  expect(body.long).toEqual('test')
})

test('GET /ubicacions 200', async () => {
  const { status, body } = await request(app())
    .get('/')
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /ubicacions/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`/${ubicacion.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(ubicacion.id)
})

test('GET /ubicacions/:id 404', async () => {
  const { status } = await request(app())
    .get('/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /ubicacions/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`/${ubicacion.id}`)
    .send({ text: 'test', lat: 'test', long: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(ubicacion.id)
  expect(body.text).toEqual('test')
  expect(body.lat).toEqual('test')
  expect(body.long).toEqual('test')
})

test('PUT /ubicacions/:id 404', async () => {
  const { status } = await request(app())
    .put('/123456789098765432123456')
    .send({ text: 'test', lat: 'test', long: 'test' })
  expect(status).toBe(404)
})

test('DELETE /ubicacions/:id 204', async () => {
  const { status } = await request(app())
    .delete(`/${ubicacion.id}`)
  expect(status).toBe(204)
})

test('DELETE /ubicacions/:id 404', async () => {
  const { status } = await request(app())
    .delete('/123456789098765432123456')
  expect(status).toBe(404)
})
