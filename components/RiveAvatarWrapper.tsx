// components/RiveCharacterWrapper.tsx
'use client'

import dynamic from 'next/dynamic'

const RiveCharacter = dynamic(
  () => import('./RiveAvatar'),
  { 
    ssr: false,
    loading: () => <div style={{ width: 500, height: 1000 }} />
  }
)

export default function RiveCharacterWrapper() {
  return <RiveCharacter />
}