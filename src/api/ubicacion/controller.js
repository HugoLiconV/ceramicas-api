import _ from 'lodash'
import { success, notFound } from '../../services/response/'
import { Ubicacion } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  Ubicacion.create(body)
    .then((ubicacion) => ubicacion.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  Ubicacion.find(query, select, cursor)
    .then((ubicacions) => ubicacions.map((ubicacion) => ubicacion.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Ubicacion.findOne({nombre: params.nombre})
    .then(notFound(res))
    .then((ubicacion) => ubicacion ? ubicacion.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  Ubicacion.findById(params.id)
    .then(notFound(res))
    .then((ubicacion) => ubicacion ? _.merge(ubicacion, body).save() : null)
    .then((ubicacion) => ubicacion ? ubicacion.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Ubicacion.findById(params.id)
    .then(notFound(res))
    .then((ubicacion) => ubicacion ? ubicacion.remove() : null)
    .then(success(res, 204))
    .catch(next)
