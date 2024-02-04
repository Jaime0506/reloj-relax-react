import { useState } from "react"

export const useSound = (sound: string) => {
    const [audio] = useState(new Audio(sound))

    const onPlay = () => {
        setInterval(() => {
            audio.play()
        }, 1000)
    }

    const onPause = () => {
        audio.pause()
    }

    return {
        onPlay,
        onPause
    }
}