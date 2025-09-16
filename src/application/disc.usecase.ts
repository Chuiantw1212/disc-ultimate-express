// Use case: create a DISC document
// Very thin by design — frontend handles shaping/validation.

import type { Disc } from '../domain/disc.entity'
import type { DiscRepoPort } from './disc.repo.port'

export class CreateDiscUseCase {
    constructor(private readonly repo: DiscRepoPort) { }

    async execute(input: Disc): Promise<{ id: string }> {
        // In a richer domain, you'd map/validate here or call domain factories
        return this.repo.create(input)
    }
}

export default CreateDiscUseCase
