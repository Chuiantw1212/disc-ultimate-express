import express from 'ultimate-express'

import { FirestoreDiscRepo } from './infra/firestore/disc.repo'
import { CreateDiscUseCase } from './application/disc.usecase'
import { createDiscController } from './app/controllers/disc.controller'

export function buildApp() {
  const app = express()
  app.disable('x-powered-by')
  app.use(express.json({ limit: '1mb' }))

  // DI wiring
  const repo = new FirestoreDiscRepo()
  const createDisc = new CreateDiscUseCase(repo)
  const createDiscHandler = createDiscController(createDisc)

  // Endpoint
  app.post('/discs', createDiscHandler)

  return app
}

const PORT = Number(process.env.PORT ?? 3000)
// CommonJS main check; adjust if you compile to ESM
// eslint-disable-next-line @typescript-eslint/no-explicit-any
if ((require as any).main === module) {
  const app = buildApp()
  app.listen(PORT, () => {
    console.log(`API listening on http://localhost:${PORT}`)
  })
}

export default buildApp
