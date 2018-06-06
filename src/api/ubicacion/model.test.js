import { Ubicacion } from '.'

let ubicacion

beforeEach(async () => {
  ubicacion = await Ubicacion.create({ text: 'test', lat: 'test', long: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = ubicacion.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(ubicacion.id)
    expect(view.text).toBe(ubicacion.text)
    expect(view.lat).toBe(ubicacion.lat)
    expect(view.long).toBe(ubicacion.long)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = ubicacion.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(ubicacion.id)
    expect(view.text).toBe(ubicacion.text)
    expect(view.lat).toBe(ubicacion.lat)
    expect(view.long).toBe(ubicacion.long)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
