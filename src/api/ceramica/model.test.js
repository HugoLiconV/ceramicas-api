import { Ceramica } from '.'

let ceramica

beforeEach(async () => {
  ceramica = await Ceramica.create({ idDato: 'test', datos: 'test', padre: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = ceramica.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(ceramica.id)
    expect(view.idDato).toBe(ceramica.idDato)
    expect(view.datos).toBe(ceramica.datos)
    expect(view.padre).toBe(ceramica.padre)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = ceramica.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(ceramica.id)
    expect(view.idDato).toBe(ceramica.idDato)
    expect(view.datos).toBe(ceramica.datos)
    expect(view.padre).toBe(ceramica.padre)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
