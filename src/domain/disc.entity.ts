// Domain entity for DISC
// Keep it minimal since frontend shapes/validates the data.

export type DiscKey = 'D' | 'I' | 'S' | 'C' | ''

export interface DiscScores {
    D: number
    I: number
    S: number
    C: number
}

export interface Disc {
    title: string
    traits?: {
        name: string
        key: string
        description: string
    }
    coreTrait: {
        key: DiscKey
        title: string
    }
    coreTraitDetails?: {
        description: string
        strengths: string
        overuse: string
        shadow: string
        suggestion: string
    }
    secondaryTrait?: DiscKey
    scores: DiscScores
    lowTraits?: Array<Record<string, unknown>>
    // Allow extra fields to pass-through for flexibility in NoSQL
    [k: string]: unknown
}
