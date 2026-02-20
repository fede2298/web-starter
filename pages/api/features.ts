import type { NextApiRequest, NextApiResponse } from 'next'

const FEATURES = [
  { id: 'f1', title: 'Responsive', description: 'Design ottimizzato per tutti i dispositivi.' },
  { id: 'f2', title: 'Velocità', description: 'Caricamento rapido e ottimizzazioni per prestazioni.' },
  { id: 'f3', title: 'API semplice', description: 'Endpoint JSON per contenuti dinamici.' },
]

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(FEATURES)
}
