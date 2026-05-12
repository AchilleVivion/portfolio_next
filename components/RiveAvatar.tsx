// components/RiveCharacter.tsx
'use client'

import dynamic from 'next/dynamic'
import { useCallback, useEffect, useState } from 'react'
import {
  useRive,
  useStateMachineInput,
} from '@rive-app/react-webgl2'

const avatarWidth = 500;
const avatarHeight = 1000;

type RiveAvatarProps = { readonly ariaLabel?: string };

function RiveCanvas({ ariaLabel = "Play avatar greeting animation" }: RiveAvatarProps) {
  const { RiveComponent, rive } = useRive({
    src: '/avatar.riv',
    stateMachines: 'State Machine 1',
    autoplay: true,
  })

  const waveInput = useStateMachineInput(rive, 'State Machine 1', 'wave')

  const fireWave = useCallback(() => {
    waveInput?.fire()
  }, [waveInput])

  useEffect(() => {
    fireWave()
  }, [fireWave])

  useEffect(() => {
    return () => { rive?.cleanup() }
  }, [rive])

  return (
    <button
      type="button"
      style={{ width: avatarWidth, height: avatarHeight, touchAction: "manipulation" }}
      className="cursor-pointer border-0 bg-transparent p-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
      aria-label={ariaLabel}
      onMouseEnter={fireWave}
      onClick={fireWave}
    >
      <RiveComponent />
    </button>
  )
}

const RiveComponentDynamic = dynamic<RiveAvatarProps>(
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

export default function RiveCharacter({ ariaLabel }: RiveAvatarProps) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMounted(true)
  }, [])

  if (!isMounted) return <div style={{ width: avatarWidth, height: avatarHeight }} />

  return <RiveComponentDynamic ariaLabel={ariaLabel} />
}