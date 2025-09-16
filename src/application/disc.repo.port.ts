// Application port (interface) for DISC persistence
// Use cases depend on this abstraction, not on Firestore directly.

import type { Disc } from '../domain/disc.entity'

export interface DiscRepoPort {
    create(disc: Disc): Promise<{ id: string }>
}
