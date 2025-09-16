// Firestore Admin bootstrap — single place to initialize and export instances
// Keeps framework/driver details out of controllers/use-cases

const admin = require('firebase-admin')

// Initialize exactly once (supports emulator via env)
if (!admin.apps.length) {
  admin.initializeApp()
}

const db = admin.firestore()
const serverTimestamp = admin.firestore.FieldValue.serverTimestamp

module.exports = {
  db,
  serverTimestamp,
}
