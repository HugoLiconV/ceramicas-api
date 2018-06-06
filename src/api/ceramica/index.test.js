import request from 'supertest-as-promised'
import express from '../../services/express'
import routes, { Ceramica } from '.'

const app = () => express(routes)

let ceramica

beforeEach(async () => {
  ceramica = await Ceramica.create({})
})

test('POST /ceramicas 201', async () => {
  const { status, body } = await request(app())
    .post('/')
    .send({ idDato: 'test', datos: 'test', padre: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.idDato).toEqual('test')
  expect(body.datos).toEqual('test')
  expect(body.padre).toEqual('test')
})

test('GET /ceramicas 200', async () => {
  const { status, body } = await request(app())
    .get('/')
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /ceramicas/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`/${ceramica.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(ceramica.id)
})

test('GET /ceramicas/:id 404', async () => {
  const { status } = await request(app())
    .get('/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /ceramicas/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`/${ceramica.id}`)
    .send({ idDato: 'test', datos: 'test', padre: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(ceramica.id)
  expect(body.idDato).toEqual('test')
  expect(body.datos).toEqual('test')
  expect(body.padre).toEqual('test')
})

test('PUT /ceramicas/:id 404', async () => {
  const { status } = await request(app())
    .put('/123456789098765432123456')
    .send({ idDato: 'test', datos: 'test', padre: 'test' })
  expect(status).toBe(404)
})

test('DELETE /ceramicas/:id 204', async () => {
  const { status } = await request(app())
    .delete(`/${ceramica.id}`)
  expect(status).toBe(204)
})

test('DELETE /ceramicas/:id 404', async () => {
  const { status } = await request(app())
    .delete('/123456789098765432123456')
  expect(status).toBe(404)
})
