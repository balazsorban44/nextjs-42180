'use client'

import { use } from 'react'

export default function Fact() {
  const { fact } = use(fetch('https://catfact.ninja/fact').then(r => r.json()))
  return fact
}
