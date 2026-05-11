'use client'

import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'

const avatarWidth = 500;
const avatarHeight = 1000;

const RiveComponent = dynamic(
  () =>
    import('@rive-app/react-webgl2').then((mod) => {
      if (mod.RuntimeLoader) {
        mod.RuntimeLoader.setWasmUrl('/rive.wasm')
      }

      return {
        default() {
          const { useRive, useStateMachineInput } = mod
          const [isLoaded, setIsLoaded] = useState(false)

          const { RiveComponent: RiveCanvas, rive } = useRive({
            src: '/avatar.riv',
            stateMachines: 'State Machine 1',
            autoplay: true,
            onLoad: () => setIsLoaded(true),
          })

          const waveInput = useStateMachineInput(rive, 'State Machine 1', 'wave')
          const scrollInput = useStateMachineInput(rive, 'State Machine 1', 'scrollDirection')

          // Wave on loading
          useEffect(() => {
            if (waveInput) waveInput.fire()
          }, [waveInput])

          // Cleanup
          useEffect(() => {
            return () => { rive?.cleanup() }
          }, [rive])

          return (
            <div style={{ width: avatarWidth, height: avatarHeight }}>
              <RiveCanvas />
            </div>
          )
        },
      }
    }),
  {
    ssr: false,
    loading: () => <div style={{ width: avatarWidth, height: avatarHeight }} />,
  }
)

export default function RiveAvatar() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    //eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMounted(true)
  }, [])

  if (!isMounted) return <div style={{ width: avatarWidth, height: avatarHeight }} />

  return <RiveComponent />
}