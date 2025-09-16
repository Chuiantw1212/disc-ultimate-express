// Firestore Admin bootstrap — single place to initialize and export instances
// Keeps framework/driver details out of controllers/use-cases

import admin from 'firebase-admin'

// Initialize exactly once (supports emulator via env)
if (!admin.apps.length) {
  admin.initializeApp()
}

export const db = admin.firestore()
export const serverTimestamp = admin.firestore.FieldValue.serverTimestamp
