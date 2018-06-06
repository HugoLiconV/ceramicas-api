import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Ceramica, { schema } from './model'

const router = new Router()
const { idDato, datos, padre } = schema.tree

/**
 * @api {post} /ceramicas Create ceramica
 * @apiName CreateCeramica
 * @apiGroup Ceramica
 * @apiParam idDato Ceramica's idDato.
 * @apiParam datos Ceramica's datos.
 * @apiParam padre Ceramica's padre.
 * @apiSuccess {Object} ceramica Ceramica's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Ceramica not found.
 */
router.post('/',
  body({ idDato, datos, padre }),
  create)

/**
 * @api {get} /ceramicas Retrieve ceramicas
 * @apiName RetrieveCeramicas
 * @apiGroup Ceramica
 * @apiUse listParams
 * @apiSuccess {Object[]} ceramicas List of ceramicas.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /ceramicas/:id Retrieve ceramica
 * @apiName RetrieveCeramica
 * @apiGroup Ceramica
 * @apiSuccess {Object} ceramica Ceramica's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Ceramica not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /ceramicas/:id Update ceramica
 * @apiName UpdateCeramica
 * @apiGroup Ceramica
 * @apiParam idDato Ceramica's idDato.
 * @apiParam datos Ceramica's datos.
 * @apiParam padre Ceramica's padre.
 * @apiSuccess {Object} ceramica Ceramica's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Ceramica not found.
 */
router.put('/:id',
  body({ idDato, datos, padre }),
  update)

/**
 * @api {delete} /ceramicas/:id Delete ceramica
 * @apiName DeleteCeramica
 * @apiGroup Ceramica
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Ceramica not found.
 */
router.delete('/:id',
  destroy)

export default router
