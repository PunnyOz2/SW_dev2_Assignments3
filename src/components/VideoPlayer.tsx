'use client'
import { useWindowListener } from '@/hooks/useWindowListener'
import { useRef, useEffect } from 'react'
export function VideoPlayer({vdoSrc, isPlaying}: {vdoSrc: string, isPlaying: boolean}) {
    
    const vdoRef = useRef<HTMLVideoElement>(null)
    useEffect(() => {
        // alert('width is ' + vdoRef.current?.width)
        if(isPlaying) {
            vdoRef.current?.play()
        }
        else {
            vdoRef.current?.pause()
        }
    },[isPlaying])

    useWindowListener("contextmenu", (e) => {e.preventDefault();})
    return (
        <video ref={vdoRef} className='w-[40%]' src={vdoSrc} muted loop></video>
    )
}