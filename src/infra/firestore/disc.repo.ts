// Firestore implementation of DiscRepoPort

import type { Disc } from '../../domain/disc.entity.ts'
import type { DiscRepoPort } from '../../application/disc.repo.port.ts'
import { db, serverTimestamp } from './admin.ts'

export class FirestoreDiscRepo implements DiscRepoPort {
    async create(disc: Disc): Promise<{ id: string }> {
        const now = serverTimestamp()
        const doc = { ...disc, createdAt: now, updatedAt: now }
        const ref = await db.collection('discs').add(doc)
        return { id: ref.id }
    }
}

export default FirestoreDiscRepo
