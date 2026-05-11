// components/RiveCharacter.tsx
'use client'

import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'
import {
  useRive,
  useStateMachineInput,
} from '@rive-app/react-webgl2'

const avatarWidth = 500;
const avatarHeight = 1000;

function RiveCanvas() {

  const { RiveComponent, rive } = useRive({
    src: '/avatar.riv',
    stateMachines: 'State Machine 1',
    autoplay: true,
  })

  const waveInput = useStateMachineInput(rive, 'State Machine 1', 'wave')

  useEffect(() => {
    if (waveInput) waveInput.fire()
  }, [waveInput])

  useEffect(() => {
    return () => { rive?.cleanup() }
  }, [rive])

  return (
    <div style={{ width: avatarWidth, height: avatarHeight }}>
      <RiveComponent />
    </div>
  )
}

const RiveComponentDynamic = dynamic(
  async () => {
    const mod = await import('@rive-app/react-webgl2')
    if (mod.RuntimeLoader) {
      mod.RuntimeLoader.setWasmUrl('/rive.wasm')
    }
    return { default: RiveCanvas }
  },
  {
    ssr: false,
    loading: () => <div style={{ width: avatarWidth, height: avatarHeight }} />,
  }
)

export default function RiveCharacter() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMounted(true)
  }, [])

  if (!isMounted) return <div style={{ width: avatarWidth, height: avatarHeight }} />

  return <RiveComponentDynamic />
}