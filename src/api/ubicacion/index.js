import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Ubicacion, { schema } from './model'

const router = new Router()
const { nombre, lat, long } = schema.tree

/**
 * @api {post} /ubicacions Create ubicacion
 * @apiName CreateUbicacion
 * @apiGroup Ubicacion
 * @apiParam text Ubicacion's text.
 * @apiParam lat Ubicacion's lat.
 * @apiParam long Ubicacion's long.
 * @apiSuccess {Object} ubicacion Ubicacion's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Ubicacion not found.
 */
router.post('/',
  body({ nombre, lat, long }),
  create)

/**
 * @api {get} /ubicacions Retrieve ubicacions
 * @apiName RetrieveUbicacions
 * @apiGroup Ubicacion
 * @apiUse listParams
 * @apiSuccess {Object[]} ubicacions List of ubicacions.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /ubicacions/:id Retrieve ubicacion
 * @apiName RetrieveUbicacion
 * @apiGroup Ubicacion
 * @apiSuccess {Object} ubicacion Ubicacion's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Ubicacion not found.
 */
router.get('/:nombre',
  show)

/**
 * @api {put} /ubicacions/:id Update ubicacion
 * @apiName UpdateUbicacion
 * @apiGroup Ubicacion
 * @apiParam text Ubicacion's text.
 * @apiParam lat Ubicacion's lat.
 * @apiParam long Ubicacion's long.
 * @apiSuccess {Object} ubicacion Ubicacion's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Ubicacion not found.
 */
router.put('/:id',
  body({ nombre, lat, long }),
  update)

/**
 * @api {delete} /ubicacions/:id Delete ubicacion
 * @apiName DeleteUbicacion
 * @apiGroup Ubicacion
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Ubicacion not found.
 */
router.delete('/:id',
  destroy)

export default router
