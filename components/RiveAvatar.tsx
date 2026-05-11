'use client'

import { useRive, useStateMachineInput } from '@rive-app/react-canvas'
import { useEffect } from 'react'

export default function RiveCharacter() {
    const { rive, RiveComponent } = useRive({
        src: '/avatar.riv',
        stateMachines: 'State Machine 1',  // ← Le nom exact dans Rive
        autoplay: true,
        onLoad: () => {
            console.log('Rive avatar loaded')
        },
        onLoadError: (error) => {
            console.error('Rive avatar error', error)
        },
    })

    // Inputs de ta State Machine
    const waveInput = useStateMachineInput(rive, 'State Machine 1', 'wave')

    // Launch wave when loaded
    useEffect(() => {
        if (waveInput) waveInput.fire()
    }, [waveInput])

    return (
        <RiveComponent
            style={{
                width: 500,
                height: 1000,
            }}
        />
    )
}