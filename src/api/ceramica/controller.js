import _ from 'lodash'
import {success, notFound} from '../../services/response/'
import {Ceramica} from '.'

export const create = ({bodymen: {body}}, res, next) =>
  Ceramica.create(body)
    .then((ceramica) => ceramica.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({querymen: {query, select, cursor}}, res, next) => {
  // console.log(query)
  // console.log(select)
  // console.log(cursor.limit)
  cursor.limit = 100
  Ceramica.find(query, select, cursor)
    .then((ceramicas) => ceramicas.map((ceramica) => ceramica.view()))
    .then(success(res))
    .catch(next)
}
export const show = ({params}, res, next) =>
  Ceramica.findById(params.id)
    .then(notFound(res))
    .then((ceramica) => ceramica ? ceramica.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({bodymen: {body}, params}, res, next) =>
  Ceramica.findById(params.id)
    .then(notFound(res))
    .then((ceramica) => ceramica ? _.merge(ceramica, body).save() : null)
    .then((ceramica) => ceramica ? ceramica.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({params}, res, next) =>
  Ceramica.findById(params.id)
    .then(notFound(res))
    .then((ceramica) => ceramica ? ceramica.remove() : null)
    .then(success(res, 204))
    .catch(next)
