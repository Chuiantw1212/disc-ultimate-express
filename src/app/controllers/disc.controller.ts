// Controller (factory-only): returns a RequestHandler bound to a CreateDiscUseCase
import type { Request, Response, NextFunction, RequestHandler } from 'ultimate-express'
import type { CreateDiscUseCase } from '../../application/disc.usecase'

export function createDiscController(useCase: CreateDiscUseCase): RequestHandler {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (!req.is('application/json')) {
        return res.status(415).json({ error: 'Unsupported Media Type: expected application/json' })
      }
      const input = req.body ?? {}
      const result = await useCase.execute(input)
      return res.status(201).json(result) // { id }
    } catch (err) {
      return next(err)
    }
  }
}

export default createDiscController
